<?php

namespace App;
use App\section;
use Illuminate\Database\Eloquent\Model;

class module extends Model
{
    protected $primaryKey = 'id_module';
    protected $fillable = [
        'id_form', 'nom_module'
    ];

    public function sections()
    {
        return $this->hasMany(section::class,'id_mod');
    }

    
}
