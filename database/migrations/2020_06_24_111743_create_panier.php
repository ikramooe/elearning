<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePanier extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paniers', function (Blueprint $table) {
            //$table->Increments('id_panier');
            $table->unsignedbigInteger('user');
            $table->unsignedbigInteger('cours');
            $table->foreign('user')->references('id')->on('users');
            $table->foreign('cours')->references('id_formation')->on('formations');
            $table->primary(['user','cours']);
            $table->bigInteger('prix');
            $table->bigInteger('nbr_stagiaires')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('panier');
    }
}
