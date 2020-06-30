<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChoixs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('choixs', function (Blueprint $table) {
            $table->bigIncrements('id_choix');
            $table->unsignedbigInteger('id_ques');
            $table->foreign('id_ques')->references('id_question')->on('questions');
            $table->string('text_reponse', 100);
            $table->integer('correct')->default(0);
            // 0  faux 
            // 1 vrai 
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
        Schema::dropIfExists('choixs');
    }
}
