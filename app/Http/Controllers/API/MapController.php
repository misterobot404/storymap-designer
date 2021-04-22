<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Map;
use App\Models\Tile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class MapController extends Controller
{
    public function index()
    {
        // Get all maps of the current user.
        $maps = Map::where('user_id', auth()->id())->get();

        // Remove unused keys
        foreach ($maps as $value) {
            unset($value->events);
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
        $map->subject_id = request('subject_id');
        // При создании установить
        if (request('tile_id')) $map->tile_id = request('tile_id');
        $map->description = request('description');
        // save map from example map
        if (request('config')) $map->config = request('config');
        if (request('events')) $map->events = request('events');

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

        // Атлас не найден
        if (!$map) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "id" => "Map not found",
                ]
            ], 404);
        }

        // (Пользователь авторизирован И является владельцем атласа) ИЛИ атлас публичный
        if ((Auth::guard('api')->check() && $map->user_id === Auth::guard('api')->id()) || $map->public === 1) {
            return response()->json([
                "status" => "success",
                "data" => [
                    "map" => $map,
                    "tile" => Tile::find($map->tile_id)
                ]
            ]);
        } else if ($map->public === 0) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 410);
        } else return response()->json([
            "status" => "fail",
            "data" => ["id" => "Access denied"]
        ], 403);
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
        $map->subject_id = request('subject_id');
        $map->tile_id = request('tile_id');
        $map->description = request('description');
        $map->config = request('config');

        // Находим события, которые были удалены
        $removed_events = array();
        foreach (json_decode($map->events) as $event_old) {
            $el_find = false;
            foreach (json_decode(request('events')) as $event_new) {
                if ($event_old->id === $event_new->id) {
                    $el_find = true;
                }
            }
            if (!$el_find) array_push($removed_events, $event_old);
        }
        // Если какое-то событие было удалено, удалить его медиа контент
        foreach ($removed_events as $removed_event) {
            foreach ($removed_event->mediaUrl as $mediaUrl) {
                if (File::exists(public_path($mediaUrl)))
                    File::delete(public_path($mediaUrl));
            }
        }
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
        ]);
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


    public function addMedia($map_id, $event_id)
    {
        $map = Map::find($map_id);

        if ($map->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        // save media file
        $path = '/storage/' . request()->file('media_file')->store('event_media', 'public');

        // add media_url to event
        $events = json_decode($map->events);

        foreach ($events as &$event) {
            if ($event->id == $event_id) {
                array_push($event->mediaUrl, $path);
                break;
            }
        }

        $map->events = json_encode($events);
        $map->save();

        return response()->json([
            "status" => "success",
            "data" => [
                "addedMediaUrl" => $path
            ]
        ]);
    }

    public function deleteMedia($map_id, $event_id)
    {
        $map = Map::find($map_id);

        if ($map->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        // Удаление файла
        if (File::exists(public_path(request('mediaUrl')))) {
            File::delete(public_path(request('mediaUrl')));

            // add media_url to event
            $events = json_decode($map->events);

            foreach ($events as &$event) {
                if ($event->id == $event_id) {
                    // Получение индекса элемента массива со значением искомой строки
                    $index = array_search(request('mediaUrl'), $event->mediaUrl);
                    // Удаление
                    $event->mediaUrl = array_slice($event->mediaUrl, $index);
                    break;
                }
            }

            $map->events = json_encode($events);
            $map->save();
        }

        return response()->json([
            "status" => "success",
            "data" => []
        ]);
    }


    public function setPrivacy($id)
    {
        $map = Map::find($id);

        if ($map->user_id !== auth()->id()) {
            return response()->json([
                "status" => "fail",
                "data" => ["id" => "Access denied"]
            ], 403);
        }

        $map->public = request('public');
        $map->save();

        return response()->json([
            "status" => "success",
            "data" => [
                "map" => $map
            ]
        ], 200);
    }

    public function copy()
    {
        $baseMap = Map::find(request('id'));

        $map = new Map;
        $map->user_id = auth()->id();
        $map->name = $baseMap->name . " - Copy";
        $map->subject_id = $baseMap->subject_id;
        $map->description = $baseMap->description;
        $map->tile_id = $baseMap->tile_id;
        $map->events = $baseMap->events;
        $map->save();

        $maps = Map::where('user_id', auth()->id())->get();

        return response()->json([
            "status" => "success",
            "data" => ["maps" => $maps]
        ], 200);
    }

    public function setSubject()
    {
        // Single assignment
        if (request('map_id')) Map::where('id', request('map_id'))->update(['subject_id' => request('subject_id')]);
        // Multiple assignment
        else Map::whereIn('id', request('map_ids'))->update(['subject_id' => request('subject_id')]);

        return response()->json([
            "status" => "success",
            "data" => ["maps" => Map::where('user_id', auth()->id())->get()]
        ], 200);
    }
}
