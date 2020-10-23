<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required|unique:users|min:4',
            'email' => 'required|unique:users|email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                "status" => "fail",
                "data" => [
                    "name" => $errors->get('name'),
                    "email" => $errors->get('email'),
                    "password" => $errors->get('password')
                ]
            ], 422);
        }

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

        if (!$user) {
            return response()->json([
                "status" => "error",
                "message" => "User not created"
            ], 500);
        }

        return response()->json(["status" => "success", "data" => null], 201);
    }

    public function login()
    {
        // Получаем пользователя
        $user = User::where('email', (request('email')))->first();

        // Проверяем существование пользователя и совпадение пароля
        if (!$user || !Hash::check(request('password'), $user->password)) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "email" => "Wrong email or password",
                    "password" => "Wrong email or password"
                ]
            ], 401);
        }

        // Внутренний API запрос для получения токенов
        $client = DB::table('oauth_clients')->where('password_client', true)->first();

        // Убедимся, что Password Client существует в БД (т.е. Laravel Passport установлен правильно)
        if (!$client) {
            return response()->json([
                "status" => "error",
                "message" => "OAuth client error"
            ], 500);
        }

        // Формирум данные для создания токенов для текущего пользователя
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => request('email'),
            'password' => request('password'),
        ];

        // Запрос на создание токенов
        $request = Request::create('/oauth/token', 'POST', $data);
        $response = app()->handle($request);

        // Проверяем был ли внутренний запрос успешным
        if ($response->getStatusCode() != 200) {
            return response()->json([
                "status" => "fail",
                "data" => [
                    "email" => "Wrong email or password",
                    "password" => "Wrong email or password"
                ]
            ], 401);
        }

        // Вытаскиваем данные из ответа
        $data = json_decode($response->getContent());

        // Формируем окончательный ответ в нужном формате
        return response()->json([
            'status' => "success",
            'data' => [
                'token' => $data->access_token,
                'user' => $user
            ]
        ], 200);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

        $accessToken->revoke();

        return response()->json(["status" => "success", "data" => null], 200);
    }
}
