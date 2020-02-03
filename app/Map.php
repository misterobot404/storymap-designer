<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Map extends Model
{
    /**
     * Get all maps of the current user.
     *
     * @return string (JSON serialized)
     */
    public static function getMaps()
    {
        // get() return Collection
        $maps = Map::where('user_id', Auth::id())->get();
        return $maps->toJson();
    }

    /**
     * Get map count of the current user.
     *
     * @return integer
     */
    public static function getMapCount()
    {
        return Map::where('user_id', Auth::id())->count();
    }

    /**
     * Create map.
     *
     * @param string $name
     * @param string $description
     * @return bool
     */
    public static function createMap(string $name,string $description)
    {
        $map = new Map;
        $map->user_id = Auth::id();
        $map->name = $name;
        $map->description = $description;
        return $map->save();
    }
}
