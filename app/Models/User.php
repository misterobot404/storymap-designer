<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Subject;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $timestamps = false;

    protected $fillable = [
        'name', 'email', 'password'
    ];

    protected $hidden = [
        'id', 'password', 'remember_token'
    ];

    public static function boot()
    {
        parent::boot();
        static::created(function ($user) {
            // Default tile for new user
            Tile::insert([
                [
                    'user_id' => $user->id,
                    'name' => 'Стандартная карта',
                    'url' => 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    'bounds' => '{"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}}',
                    'attribution' => '© <a href=\"https://knastu.ru/\">knastu</a>'
                ]
            ]);
            // Default subject for new user
            Subject::insert([
                [
                    'user_id' => $user->id,
                    'name' => 'Информатика',
                    'icon' => '/storage/subjects/computer_science.png?9397065116a627fbb50901691f0b7e31'
                ],
                [
                    'user_id' => $user->id,
                    'name' => 'Биология',
                    'icon' => '/storage/subjects/biology.png?318cbcb9cd69e6f6fef03353d7ae02f4'
                ],
                [
                    'user_id' => $user->id,
                    'name' => 'География',
                    'icon' => '/storage/subjects/geography.png?6899e48a416a554447f33afe882064fd'
                ],
                [
                    'user_id' => $user->id,
                    'name' => 'История',
                    'icon' => '/storage/subjects/history.png?b5e03ca93eb7b3b187efa6a1d0800509'
                ],
                [
                    'user_id' => $user->id,
                    'name' => 'Другое',
                    'icon' => '/storage/subjects/custom.png?88ea15807cdcf79d8f2c3714b4771dde'
                ]
            ]);
        });
    }
}
