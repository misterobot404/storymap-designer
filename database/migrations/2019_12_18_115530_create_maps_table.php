<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->string('name')->unique();
            $table->text('description');

            $table->jsonb ('tile')->default('{
                "url":"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
                "center": {"lat":-85,"lng":-170},
                "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>",
                "minZoom": 3,
                "maxZoom": 4,
                "bounds": {
                    "_southWest": {"lat": 47, "lng": -180},
                    "_northEast": {"lat": 85, "lng": 45}
                }
            }');
            $table->json ('events')->nullable();
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
        Schema::dropIfExists('maps');
    }
}
