<?php

namespace App\Http\Controllers;
use App\User;
use DB;
use Redirect;
use Auth;
use Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File; 
class UsersController extends Controller
{
    
    public function getSetupIntent(){    
        return Auth::user()->createSetupIntent();
        }
    


    public function formations(){
            $formations = DB::table('formation_client')->where('refcl',Auth::user()->id)
            ->join('formations','formations.id_formation','formation_client.refform')->get();
            //dd($formations);

            return response()->json([
                'formations' => $formations,
            ]);
    
            
        }
    
    
    public function update(Request $request){    

        //dd($request->all());
        
        $req = json_decode($request['form']);
        $user=User::where('id',Auth::user()->id)
        ->update([
            "nom"=>$req->nom,
            "prenom"=>$req->prenom,
            "email"=>$req->email,
            "nomENT"=>$req->nomENT,
            "datenaiss"=>$req->datenaiss
        ]);
        
          
        if($request['file']!=null){
            //delete previous avatar
            if(Auth::user()->image != null){
            $image_path = public_path().'/upload/'.Auth::user()->image; 
            unlink($image_path); 
            }
            $fileName = Auth::user()->id.'.'.$request['file']->getClientOriginalExtension();
            $request['file']->move(public_path('upload'), $fileName);
                  
            $user=User::where('id',Auth::user()->id)->update(["image"=>$fileName]);
            //return redirect()->route('about');
        
            }
           
            return Redirect::route('user.profile')->with('success','hahaha');
        

        //     
        
    
        }

}
