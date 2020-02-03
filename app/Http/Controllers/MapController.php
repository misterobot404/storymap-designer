<?php

namespace App\Http\Controllers;
use Cookie;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Auth;
use App\Map;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return view
     */
    public function index()
    {
        return view('maps.index', ['maps' => Map::getMaps()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        Map::createMap($request->name, $request->description);
        return response(['maps' => Map::getMaps(), 'mapCount' => Map::getMapCount()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        Map::destroy($id);
        return response(['maps' => Map::getMaps(), 'mapCount' => Map::getMapCount()]);
    }
    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
    }
}
