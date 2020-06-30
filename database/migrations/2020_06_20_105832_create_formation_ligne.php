<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationLigne extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_lignes', function (Blueprint $table) {
            $table->bigIncrements('id_ligne');
            $table->unsignedbigInteger('parent_formation');
            $table->foreign('parent_formation')->references('id_formation')->on('formations');            
            $table->string('duree',1000);
            $table->bigInteger('prix');

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
        Schema::dropIfExists('formation_ligne');
    }
}
