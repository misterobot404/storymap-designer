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
/*
    public function store()
    {
        $tile = new Tile;
        $tile->user_id = auth()->id();
        $tile->name = request('name');

        if (request()->hasFile('icon')) {
            $path = request()->file('icon')->store('tiles', 'public');
            $tile->icon = '/storage/' . $path;
        }

        $tile->save();

        return response()->json([
            "status" => "success",
            "data" => ["tiles" => Tile::where('user_id', auth()->id())->get()]
        ], 200);
    }

    public function update($id)
    {
        $tile = Tile::find($id);

        if (request('name')) $tile->name = request('name');
        if (request()->hasFile('icon')) {
            // Remove old icon
            if (File::exists(public_path($tile->icon))) {
                $icon_basename = basename($tile->icon);
                if ($icon_basename != 'biology.png' || $icon_basename != 'computer_science.png' || $icon_basename != 'custom.png' || $icon_basename != 'geography.png' || $icon_basename != 'history.png')
                    File::delete(public_path($tile->icon));
            }
            // Save new icon
            $path = request()->file('icon')->store('tiles', 'public');
            $tile->icon = '/storage/' . $path;
        }
        $tile->save();

        return response()->json([
            "status" => "success",
            "data" => ["tiles" => Tile::where('user_id', auth()->id())->get()]
        ], 200);
    }

    public function destroy($id)
    {
        // Get all tiles for current user.
        Tile::destroy($id);

        return response()->json([
            "status" => "success",
            "data" => ["tiles" => Tile::where('user_id', auth()->id())->get()]
        ], 200);
    }*/
}
