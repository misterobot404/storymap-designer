<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Map extends Model
{
    protected $fillable = [
        'user_id','name', 'description', 'tile', 'events'
    ];
    protected $attributes = [
        'config' => '{"selectedEventId":1,"eventListWidth":"227","showPolyline":true}',
        'tile' => '{"url":"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png","attribution":"&copy; <a href=\"https://knastu.ru/\">knastu</a>","minZoom":1,"maxZoom":3,"bounds":{"_southWest":{"lat":47,"lng":-180},"_northEast":{"lat":85,"lng":45}}}',
        'events' => '[{"id":1,"marker":{"position":{"lat":67,"lng":-41.1},"url":"https://image.flaticon.com/icons/svg/148/148828.svg","size":[32,38]},"title":"Стартовое событие","description":"","mediaUrl":[]}]',
    ];
}
