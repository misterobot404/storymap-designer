<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Mail;

class UserController extends Controller
{
    public function feedback()
    {
        $data = array('name' => request('name'), 'email' => request('email'), 'subject' => request('subject'), 'data' => request('message'));

        Mail::send('mail', $data, function ($message) {
            $message->to('mapdesigner2020@gmail.com')->subject('Обратная связь');
            $message->from('mapdesigner2020@gmail.com', request('email'), request('name'));
        });

        return response()->json(["status" => Mail::failures()]);
    }

    public function getCurrent()
    {
        return response()->json(["status" => "success", "data" => ["user" => auth()->user()]], 200);
    }

    public function nameAvailable($name)
    {
        $user = User::where('name', $name)->first();

        if (!$user)
            return response()->json(["status" => "success", "data" => null], 200);
        else return response()->json(["status" => "fail", "data" => ["name" => "Name not available"]], 422);
    }

    public function emailAvailable($email)
    {
        $user = User::where('email', $email)->first();

        if (!$user)
            return response()->json(["status" => "success", "data" => null], 200);
        else return response()->json(["status" => "fail", "data" => ["email" => "Email not available"]], 422);
    }

    // Subjects
    public function getSubjects()
    {
        $user = User::find(auth()->id());

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }

    public function setSubjects()
    {
        $user = User::find(auth()->id());
        $user->subjects = request('subjects');
        $user->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }
}
