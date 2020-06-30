<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Inertia\Inertia;
use App\Panier;
use Auth;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $enligne = DB::table('formations')->where('type',1)->get();
        $press = DB::table('formations')->where('type',0)->get();
        $panier = Panier::where('user',Auth::user()->id)
        ->join('formations','id_formation','paniers.cours')->select(array('paniers.prix','id_formation','nomF'))->get();
        //return dd($enligne);
        return Inertia::render('Home', [
                    'enligne' => $enligne,
                    'panier'=>$panier,
                    'press'=>$press
                ]);
        

    }

    public function coursedetails($type,$id){
        $details = DB::table('formations')->where('id_formation',$id)->get();
        return Inertia::render('Course', [
            'details' => $details
        ]);


    }
}
