<?php

namespace App\Http\Middleware;
use Inertia\Inertia;
use Closure;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     *
     */

    public function handle($request, Closure $next)
    {
        if ( ! $this->auth->user() ) {
            return redirect('login');
            //abort(404, '', ['Location' => 'http://www.google.com']);
        }

        return $next($request);
    }
    








/*
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return Inertia::render('Login',[
                'foo'=>'bar',
            ]);
        }
    }
*/
}
