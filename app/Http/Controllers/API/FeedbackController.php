<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function __invoke() {
        $data = array('name' => request('name'), 'email' => request('email'), 'subject' => request('subject'), 'data' => request('message'));
        Mail::send('mail', $data, function ($message) {
            $message->to('mapdesigner2020@gmail.com')->subject('Обратная связь');
            $message->from('mapdesigner2020@gmail.com', request('email'), request('name'));
        });
        return response()->json(["status" => Mail::failures()]);
    }
}
