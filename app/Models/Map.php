<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Map extends Model
{
    protected $fillable = [
        'user_id', 'subject_id', 'tile_id', 'name', 'description', 'events'
    ];

    protected $attributes = [
        'config' => '{"selectedEventId":1,"eventListWidth":"227","showPolyline":true,"maxZoom": 10, "minZoom":3, "polylineWeight":1}',
        'events' => '[{"id":1,"marker":{"position":{"lat":67,"lng":-41.1},"url":"https://image.flaticon.com/icons/svg/148/148828.svg","size":[32,38]},"title":"Стартовое событие","description":"","mediaUrl":[]}]'
    ];

    // Customize default return value for $created_at
    public function getCreatedAtAttribute($value)
    {
        $date = Carbon::parse($value);
        return $date->setTimezone('Asia/Vladivostok')->format('Y-m-d H:i');
    }

    // Customize default return value for $update_at
    public function getUpdatedAtAttribute($value)
    {
        $date = Carbon::parse($value);
        return $date->setTimezone('Asia/Vladivostok')->format('Y-m-d H:i');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function ($map) {
            // При удалении карты удалять все загруженные медиа ресурсы
            foreach (json_decode($map->events) as $event) {
                foreach ($event->mediaUrl as $mediaUrl) {
                    if (File::exists(public_path($mediaUrl)))
                        File::delete(public_path($mediaUrl));
                }
            }
        });
    }
}
