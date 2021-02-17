<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Map;

// CRUD
class MapController extends Controller
{
    public function index()
    {
        // Get all maps of the current user.
        $maps = Map::where('user_id', auth()->id())->get();
        // Remove unused keys
        foreach ($maps as $value) {
            unset($value->events);
            unset($value->tile);
        }

        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }

    public function store()
    {
        $map = new Map;
        $map->user_id = auth()->id();
        $map->name = request('name');
        $map->subject = request('subject');
        $map->description = request('description');
        $map->save();

        $maps = Map::where('user_id', auth()->id())->get();

        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }

    public function show($id)
    {
        $map = Map::find($id);

        if (!$map) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "id" => "Map not found",
                ]
            ], 404);
        }
        if ($map->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        unset($map->user_id);
        unset($map->created_at);
        unset($map->updated_at);
        return response()->json([
            "status" => "success",
            "data" => ["map" => $map]
        ], 200);
    }

    public function update($id)
    {
        $map = Map::find($id);

        if (!$map) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "id" => "Map not found",
                ]
            ], 404);
        }
        if ($map->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        $map->name = request('name');
        $map->subject = request('subject');
        $map->description = request('description');
        $map->config = request('config');
        $map->tile = request('tile');
        $map->events = request('events');
        $map->save();

        unset($map->user_id);
        unset($map->created_at);
        unset($map->updated_at);
        return response()->json([
            "status" => "success",
            "data" => [
                "map" => $map
            ]
        ], 200);
    }

    public function destroy($id)
    {
        $pieces = explode(",", $id);
        if (count($pieces) > 1) {
            Map::whereIn('id', $pieces)->delete();
        } else {
            $map = Map::find($id);

            if (!$map) {
                return response()->json([
                    "status" => "fail",
                    "data" => [
                        "id" => "Map not found",
                    ]
                ], 404);
            }
            if ($map->user_id !== auth()->id()) {
                return response()->json([
                    "status" => "fail",
                    "data" => ["id" => "Access denied"]
                ], 403);
            }

            Map::destroy($id);
        }

        $maps = Map::where('user_id', auth()->id())->get();
        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }

    // Other
    public function duplicate()
    {
        $baseMap = Map::find(request('id'));

        if (!$baseMap) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "id" => "Map not found",
                ]
            ], 404);
        }
        if ($baseMap->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        $map = new Map;
        $map->user_id = auth()->id();
        $map->name = $baseMap->name . " - Copy";
        $map->subject = $baseMap->subject;
        $map->description = $baseMap->description;
        $map->tile = $baseMap->tile;
        $map->events = $baseMap->events;
        $map->save();

        $maps = Map::where('user_id', auth()->id())->get();

        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }
}
