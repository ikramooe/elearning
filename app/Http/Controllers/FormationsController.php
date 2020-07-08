<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Vimeo\Laravel\Facades\Vimeo;
use App\formation;
use App\section;
use App\data;
use Inertia\Inertia;
use DB;
use Auth;
use App\user;
use Redirect;
use App\module;
class FormationsController extends Controller
{
    public function index(){
        $formations = formation::all();
        $demandes = DB::table('formation_client')->where('accessible','0')
        ->join('formations','formations.id_formation','refform')
        ->join('users','users.id','formation_client.refcl')
        ->get(['id_formc','nom','prenom','email','nomF','contrat','tel','role','nomENT','prix','nbr_stagiaires','paiement']);
        
        $users = User::all();
        return Inertia::render('Dashboard',[
            "users"=>$users,
            "demandes"=>$demandes,
            "formations" => $formations
        ]);
    }

    public function module(Request $request){
        module::insertGetId(['id_form'=>$request->id,'nom_module'=>$request->module,'Mduree_est'=>"40"]);
        $modules = module::where('id_form',$request->id)->get();
        $formation = formation::where('id_formation',$request->id)->firstOrFail();
        $modules = module::with(['sections','sections.datas'])->where('modules.id_form',$request->id)->get();
        return Inertia::render('AdminCourse',[
            "formation"=>$formation,
            "modules"=>$modules,
            
    ]);
        
    }
    public function section(Request $request){
        
        $module = DB::table('modules')->where('id_form',$request->id)->where('nom_module',$request->module)->get(['id_module'])->toArray();
        section::insert(['id_mod'=>$module[0]->id_module,'nom_sec'=>$request->section,'Sduree_est'=>"40"]);
        $formation = formation::where('id_formation',$request->id)->firstOrFail();
        $modules = module::with(['sections','sections.datas'])->where('modules.id_form',$request->id)->get();
        return Inertia::render('AdminCourse',[
            "formation"=>$formation,
            "modules"=>$modules,
            
    ]);
        
        
        
    }

    public function contenu(Request $request){
        $req=json_decode($request['form']);
        //dd($req);
        //$section = DB::table('sections')->where('id_section',$req->section)->get(['id_section']);
        //dd($section);
        if($req->type=="pdf"){
            $fileName = time().'.'.$request['file']->getClientOriginalExtension();
            $request['file']->move(public_path('data'), $fileName);
            //update the image
            DB::table('datas')->insertGetId(['id_sec'=>$req->section,'type'=>$req->type,'url'=>$fileName]);
        }
        if($req->type=="video"){
            $path = $request['file']->getRealPath();
            $uri =  Vimeo::upload($path,["name"=>"test video","description"=>"this is a test video"]);
            $uri = str_replace("/videos/", "", $uri);
            //dd($uri);
            DB::table('datas')->insertGetId(['id_sec'=>$req->section,'type'=>$req->type,'url'=>$uri]);
        }
        
        //$formation = formation::where('id_formation',$req->id)->firstOrFail();
        //$modules = module::with(['sections','sections.datas'])->where('modules.id_form',$req->id)->get();
        //return Inertia::render('AdminCourse',[
        //    "formation"=>$formation,
        //    "modules"=>$modules,
            
            
    //]);
        //return redirect()->back();
        
        
    }

    public function edit_index($nom,$id){
        $sections = array();
        $formation = formation::where('id_formation',$id)->firstOrFail();
        $modules = module::with(['sections','sections.datas'])->where('modules.id_form',$id)->get();
        
        return Inertia::render('AdminCourse',[
            "formation"=>$formation,
            "modules"=>$modules
    ]);
    }
    public function access($id,$nom){
        return Inertia::render('CoursePlayer');

    }

    public function approve(Request $request){
    
        DB::table('formation_client')->where('id_formc',$request[0])->update(['accessible'=>1]);
        return redirect()->back();
    }
    
    public function create(Request $request) {
        $req = json_decode($request['form']);
        
        $formation = formation::insertGetId([
            'id_formateur'=>$req->idformateur,
            'type'=>$req->type,
            'publicvise'=> $req->publicvise,
            'nomF'=> $req->nomF,
            'objectifsped'=> $req->objped,
            'reference'=> $req->reference,
            'descriptionF'=> $req->description,
            'lieuF'=>$req->lieu,
            'dates'=>$req->dates,
            'duree'=>$req->duree,
            'prix'=>$req->prix,
            'prerequis'=>$req->prerequis
        ]);
        
        if($request['file']!=null){
            $fileName = $formation.'.'.$request['file']->getClientOriginalExtension();
            $request['file']->move(public_path('formations'), $fileName);
                  
            formation::where('id_formation',$formation)->update(["thumbnail"=>$fileName]);
        
        }
         
        return Inertia::render('AdminCourse',[
                "formation"=>$formation
        ]);
           
            
        

    }    
}
