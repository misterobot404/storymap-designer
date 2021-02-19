<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $timestamps = false;

    protected $fillable = [
        'name', 'email', 'password'
    ];

    protected $attributes = [
        'subjects' => '[{"name":"Информатика","icon":"/storage/subjects/computer_science.png?9397065116a627fbb50901691f0b7e31"},{"name":"Биология","icon":"/storage/subjects/biology.png?318cbcb9cd69e6f6fef03353d7ae02f4"},{"name":"География","icon":"/storage/subjects/geography.png?6899e48a416a554447f33afe882064fd"},{"name":"История","icon":"/storage/subjects/history.png?b5e03ca93eb7b3b187efa6a1d0800509"},{"name":"Другое","icon":"/storage/subjects/custom.png?88ea15807cdcf79d8f2c3714b4771dde"}]',
    ];

    protected $casts = [
        'subjects' => 'array',
    ];

    protected $hidden = [
        'id', 'password', 'subjects', 'remember_token'
    ];
}
