<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poles', function (Blueprint $table) {
            $table->bigIncrements('id_pole');
            $table->text('modalites')->nullable()->default('text');
            $table->text('delai')->nullable()->default('text');
            $table->text('stage')->nullable()->default('text');
            $table->text('handicap')->nullable()->default('text');
            
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
        Schema::dropIfExists('poles');
    }
}
