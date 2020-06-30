<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Http\Request;
use DB;
use Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(Request $request)
    {
        try {
            DB::transaction(function ()use ($request) {
                
                User::create([
                    'role'=>$request->type,
                    'email'=>$request->email,
                    'password'=>bcrypt($request->password),
                    'nom'=> $request->nom,
                    'tel'=> $request->phone,
                    'prenom'=> $request->prenom,
                    'datenaiss'=> $request->date,
                    'nomENT'=>$request->entrep
                ]);
                
               
            });
        }catch(Exception $e){DB::rollback(); redirect()->route('user.register')->with('errorMessage','user was not added');}
        return redirect()->route('user.login')->with('successMessage','user was successfully added');   
    }

    public function ShowRegistrationForm(){
        return Inertia::render('Register');

    }
}