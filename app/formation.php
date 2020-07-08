<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class formation extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'publicvise','type','descriptionF','objectifsped','reference','nomF', 'lieuF', 'dates','id_formateur','duree','prerequis','prix','id_pl','','nomENT'
    ];

}
