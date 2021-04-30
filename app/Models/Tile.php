<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Tile extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'bounds' => 'array'
    ];

    public static function boot()
    {
        parent::boot();
        static::deleting(function ($tile) {
            if (File::exists(public_path($tile->url))) {
                File::delete(public_path($tile->url));
            }
        });
    }
}
