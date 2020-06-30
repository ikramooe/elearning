<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Panier;
use DB;
use Inertia\Inertia;
use Redirect;
use Response;
use Auth;
use Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use App\Http\Controllers\HomeController;

use Laravel\Cashier\Billable;

use \Illuminate\Database\QueryException;
class PanierController extends Controller
{
    
    public function index(){
        $formations = Panier::where('user',Auth::user()->id)
        ->join('formations','id_formation','paniers.cours')->select(array('paniers.prix','id_formation','nomF'))->get();
        $total = Panier::where('user',Auth::user()->id)->sum('paniers.prix');
        return Inertia::render('ShoppingCart',[
            'formations'=>$formations,
            'total'=>$total
        ]);
    }

    public function addtobasket(Request $request){
        try{
            Panier::create($request->all());
        }catch(QueryException $e) {}

        $formations = Panier::where('user',Auth::user()->id)
        ->join('formations','id_formation','paniers.cours')->select(array('paniers.prix','id_formation','nomF'))->get();
        
        return back()->with('success','formation added');
    }

    public function checkout(){
        $total = Panier::where('user',Auth::user()->id)->sum('paniers.prix');
        return Inertia::render('Checkout',[
            "total"=>$total
        ]);
    }

    public function remove(Request $request){
        //dd($request[0]);
        Panier::where('user',Auth::user()->id)->where('cours',$request[0])->delete();
        
        //return Inertia::render('ShoppingCart',[
        //    "formations"=>$formations
        //]);
        return Redirect::route('panier');
        


    }

    public function icon(){
        $formations = Panier::where('user',Auth::user()->id)
        ->join('formations','id_formation','paniers.cours')->select(array('paniers.prix','id_formation','nomF'))->get();

        $total = Panier::where('user',Auth::user()->id)->sum('paniers.prix');
    
        return response()->json([
            'formations' => $formations,
            'total'=>$total

        ]);
        
    }

    public function payement(Request $request){
        try {
            $charge = Stripe::charges()->create([
                'amount' => 20,
                'currency' => 'CAD',
                'source' => $request->token,
                'description' => 'Description goes here',
                'receipt_email' => $request->email,
                'metadata' => [
                    'data1' => 'metadata 1',
                    'data2' => 'metadata 2',
                    'data3' => 'metadata 3',
                ],
            ]);
    
            // save this info to your database
    
            // SUCCESSFUL
            return redirect()->route('user.profile')->with('success','user was successfully added');
        } catch (CardErrorException $e) {
            // save info to database for failed
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    
    }

          
    
}
