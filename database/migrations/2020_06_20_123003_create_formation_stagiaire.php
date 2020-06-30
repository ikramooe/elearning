<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationStagiaire extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_stagiaire', function (Blueprint $table) {
            $table->bigIncrements('id_f_s');
            $table->unsignedbigInteger('id_stage');
            $table->unsignedbigInteger('id_forstag');
            $table->foreign('id_stage')->references('id_stagiaire')->on('stagiaires');
            $table->foreign('id_forstag')->references('id_formation')->on('formations');
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
        Schema::dropIfExists('formation_stagiaire');
    }
}
