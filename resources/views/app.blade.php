<!DOCTYPE html>
<html>
  <head>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script src="https://js.stripe.com/v3/"></script>
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
    <script src="{{ asset('/js/app.js') }}" defer></script>
  </head>
  <body>
    @routes
    @inertia
    
  </body>
</html>