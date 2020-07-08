<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationClient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_client', function (Blueprint $table) {
            $table->bigIncrements('id_formc');
            $table->unsignedbigInteger('refcl');
            $table->unsignedbigInteger('refform');

            $table->foreign('refcl')->references('id')->on('users');
            $table->foreign('refform')->references('id_formation')->on('formations');
            $table->bigInteger('nbr_stagiaires')->nullable()->default(0);
            
            $table->string('contrat')->nullable()->default(0);
            $table->string('paiement')->nullable()->default("carte de credit");
            $table->string('accessible')->default(0);
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
        Schema::dropIfExists('formation_client');
    }
}
