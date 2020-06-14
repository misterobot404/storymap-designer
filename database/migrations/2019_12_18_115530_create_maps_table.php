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

            $table->string('name');
            $table->string('subject')->nullable();
            $table->text('description');

            $table->jsonb('config')->default('{"selectedEventId":1,"eventListWidth":"227"}');
            $table->jsonb('tile')->default('{"url":"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png","attribution":"&copy; <a href=\"https://knastu.ru/\">knastu</a>","minZoom":3,"maxZoom":4,"bounds":{"_southWest":{"lat":47,"lng":-180},"_northEast":{"lat":85,"lng":45}}}');
            $table->json('events')->default('[{"id":1,"markerPosition":{"lat":54,"lng":73},"title":"Стартовое событие","description":"","mediaUrl":""}]');
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
