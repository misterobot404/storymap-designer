<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Map;


class MapController extends Controller
{
    // CRUD
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
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

    /**
     * Store a newly created resource in storage.
     *
     * @return JsonResponse
     */
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

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
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

        return response()->json([
            "status" => "success",
            "data" => ["map" => $map]
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $id
     * @return JsonResponse
     */
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

        $inputMap = json_decode(request('map'), true);
        $map->name = $inputMap['name'];
        $map->description = $inputMap['description'];
        $map->tile = $inputMap['tile'];
        $map->events = $inputMap['events'];
        $map->save();

        return response()->json([
            "status" => "success",
            "data" => [
                "map" => Map::find($id)
            ]
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $pieces = explode(",", $id);
        if (count($pieces)>1)
        {
            Map::whereIn('id', $pieces)->delete();
        }
        else
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

            Map::destroy($id);
        }

        $maps = Map::where('user_id', auth()->id())->get();
        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }

    // Other
    /**
     * Store a newly created resource based on the existing.
     *
     * @return JsonResponse
     */
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
        $map->name = $baseMap->name." - Copy";
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
