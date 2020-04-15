<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Map extends Model
{
    protected $fillable = [
        'user_id','name', 'description', 'tile', 'events'
    ];
}
