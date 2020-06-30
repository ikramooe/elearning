<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    protected $fillable = [
        'user', 'cours', 'prix'
    ];

}
