<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Config;
use Auth;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
    }
    

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {        
        
        \Schema::defaultStringLength(191);
        Inertia::share([
            // Synchronously
            'Message'=> function(){
                return[
                'success' => Session::get('success'),
                'error' => Session::get('error'),
                ];
            },
            'app' => [
                'name' => Config::get('app.name')
            ],

            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'nom' => Auth::user()->nom,
                        'prenom' => Auth::user()->prenom,
                        'email' => Auth::user()->email,
                        'type' => Auth::user()->role,
                        'phone' => Auth::user()->tel,
                        'datenaiss' => Auth::user()->datenaiss,
                        'nomENT' => Auth::user()->nomENT,
                        'image' => Auth::user()->image,
                    ] : null
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },

            // Lazily
             ]);
        
        
        
    }

}    
    

    