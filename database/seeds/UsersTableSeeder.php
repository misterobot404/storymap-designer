<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'login' => 'misterobot',
            'email' => 'misterobot404@gmail.com',
            'password' => bcrypt('secret')
        ]);
    }
}
