<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class data extends Model
{
    protected $table = 'datas';
    protected $fillable = [
        'id_sec', 'type','url'
    ];

    public function section()
    {
        return $this->belongsTo('App\section');
    }


}
