<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Inertia\Inertia;

Route::get('/pay', 'UsersController@getSetupIntent');
Route::post('/xx', 'StripePaymentController@stripepayment')->name('user.payment');


Route::get('/xx', function () {
    return Inertia::render('PaymentForm',[
        'foo'=>'bar',
    ]);
})->name('user.pay');

Route::get('/intent', 'UserController@getSetupIntent');
 
Route::get('/course/details', function () {
    return Inertia::render('Course',[
        'foo'=>'bar',
    ]);
})->name('coursedetails');

Route::get('/checkout','PanierController@checkout')->name('user.checkout'); 

Route::get('/panier', 'PanierController@index')->name('panier');


Route::get('stripe', 'StripePaymentController@stripe')->name('stripe.get');
Route::post('stripe', 'StripePaymentController@stripePost')->name('stripe.post');

Route::get('/home', 'HomeController@index')->name('user.home')->middleware('auth');
Route::get('/forma', 'UsersController@formations');
Route::post('/panier', 'PanierController@addtobasket')->name('paniertest');
Route::post('/remove', 'PanierController@remove')->name('panier.remove');
Route::get('/ss', 'PanierController@icon');
Route::get('/cours/{type}/{id}/overview', 'HomeController@coursedetails')->name('course.details');



Route::get('/', function () {
    return Inertia::render('About',[
        'foo'=>'bar',
    ]);

})->name('about');

Route::get('/over', function () {
    return Inertia::render('Overview',[
        'foo'=>'bar',
    ]);
}); 

Route::get('/profile', function () {
    return Inertia::render('Profile',[
        'foo'=>'bar',
    ]);
})->name('user.profile');

Route::post('/profile', 'UsersController@update')->name('user.edit');


Route::get('/shopping', function () {
    return Inertia::render('ShoppingCart',[
        'foo'=>'bar',
    ]);
}); 

Route::get('/dash', function () {
    return Inertia::render('Dashboard',[
        'foo'=>'bar',
    ]);
});

Route::get('/pay', function () {
    return Inertia::render('stripepay',[
        'foo'=>'bar',
    ]);
});

/*
Route::post('/login',[
    'as'=>'login.attempt',
    'uses'=>'Auth\LoginController@login',
])->middleware('guest');
*/



       
Route::get('/login','Auth\LoginController@ShowLoginForm')->name('user.login');
Route::get('/register','Auth\RegisterController@ShowRegistrationForm')->name('user.register');
Route::post('/register','Auth\RegisterController@create')->name('user.create');
Route::post('/logout','Auth\LoginController@logout')->name('logout');




//Route::get('/home', 'HomeController@index')->name('home');
//Auth::routes();
Route::post('/login','Auth\LoginController@login')->name('login.a');
//Auth::routes();



//Auth::routes();


