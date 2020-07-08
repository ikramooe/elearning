<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class section extends Model
{
    
    protected $primaryKey = 'id_section';
    protected $fillable = [
        'id_mod', 'nom_sec'
    ];

    public function module()
    {
        return $this->belongsTo(module::class);
    }

    public function datas()
    {
        return $this->hasMany("App\data",'id_sec');
    }
}
