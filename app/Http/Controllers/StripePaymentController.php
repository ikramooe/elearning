<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use App\Panier;
use Auth;
use DB;
use Laravel\Cashier\Billable;

class StripePaymentController extends Controller
{
    
    public function stripepayment(Request $request){
        try {
            $total = Panier::where('user',Auth::user()->id)->sum('paniers.prix');
            $formations = Panier::where('user',Auth::user()->id)->get();
            $charge = Stripe::charges()->create([
                'amount' => $total,
                'currency' => 'EUR',
                'source' => $request->token,
                'description' => 'TEST DATA',
                'receipt_email' => $request->email,
                'metadata' => [
                    'data1' => 'metadata 1',
                    'data2' => 'metadata 2',
                    'data3' => 'metadata 3',
                ],
            ]);
    
            // save this info to your database
            foreach($formations as $formation){
                DB::table('formation_client')->insert(['refcl'=>$formation->user,'refform'=>$formation->cours,'nbr_stagiaires'=>$formation->nbr_stagiaires]);
            }
            Panier::where('user',Auth::user()->id)->delete();
            // SUCCESSFUL
            return redirect()->route('user.profile')->with('successMessage','user was successfully added');
        } catch (CardErrorException $e) {
            // save info to database for failed
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    
    }
    public function stripe()
    {
        return Inertia::render('stripe');
    }

    public function stripePost(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe\Charge::create ([
                "amount" => 100 * 100,
                "currency" => "eur",
                "source" => $request->stripeToken,
                "description" => "Test payment ." 
        ]);
  
        Session::flash('success', 'Payment successful!');
          
        return back();
    }
  
}
