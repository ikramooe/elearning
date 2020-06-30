<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationPres extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_press', function (Blueprint $table) {
            $table->bigIncrements('id_pres');
            $table->unsignedbigInteger('formation_parent');
            $table->foreign('formation_parent')->references('id_formation')->on('formations');
            $table->string('lieuF', 1000);
            $table->string('dates',1000);
            $table->string('duree', 10000);
            $table->bigInteger('prix')->nullable()->default(350);
            

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
        Schema::dropIfExists('formation_pres');
    }
}
