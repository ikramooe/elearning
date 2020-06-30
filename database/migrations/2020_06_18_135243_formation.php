<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Formation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->bigIncrements('id_formation');
            $table->unsignedbigInteger('id_pl')->nullable(); // id pole 
            $table->unsignedbigInteger('id_formateur');
            //$table->foreign('id_pl')->references('id_pole')->on('poles')->nullable();

            $table->foreign('id_formateur')->references('id')->on('users');
            
            $table->string("type");
            $table->text("publicvise");  
            $table->string('thumbnail', 1000)->nullable();
            $table->string('nomF', 1000);
            $table->text('descriptionF');
            $table->text('objectifsped');
            $table->string('reference', 1000)->nullable();
            
            $table->string('lieuF', 1000)->nullable();
            $table->string('dates',1000);
            $table->string('duree', 10000)->nullable();

            $table->bigInteger('prix')->nullable()->default(350);
            $table->string('prerequis', 100)->nullable()->default('Neant');

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
        //
    }
}
