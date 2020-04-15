<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Map;


class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        // Get all maps of the current user.
        $maps = Map::where('user_id', auth()->id())->get();

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
     * @param int $id
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
     * @param int $id
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
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id)
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

        $maps = Map::where('user_id', auth()->id())->get();

        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }
}
