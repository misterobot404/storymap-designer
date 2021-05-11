<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tile;

class TileController extends Controller
{
    public function index()
    {
        // Get all tiles for current user.
        return response()->json([
            "status" => "success",
            "data" => ["tiles" => Tile::where('user_id', auth()->id())->get()]
        ]);
    }

    public function store()
    {
        // Store tile using tile url

        $tile = new Tile;
        $tile->user_id = auth()->id();
        $tile->name = request('name');

        if (request()->hasFile('image')) {
            $path = request()->file('image')->store('tiles', 'public');
            $tile->url = '/storage/' . $path;

            list($width, $height) = getimagesize(public_path($tile->url));
            $tile->bounds = [[0, 0],[$height, $width]];
        } else $tile->url = request('url');

        $tile->save();

        return response()->json([
            "status" => "success",
            "data" => [
                "tiles" => Tile::where('user_id', auth()->id())->get()
            ]
        ]);
    }

    public function destroy($id)
    {

        if (Tile::find($id)->user_id !== auth()->id()) {
            return response()->json([
                "status" => "success",
                "data" => ["id" => "Access denied"]
            ], 403);
        }
        // Get all tiles for current user.
        Tile::destroy($id);

        return response()->json([
            "status" => "success",
            "data" => ["tiles" => Tile::where('user_id', auth()->id())->get()]
        ]);
    }
}
