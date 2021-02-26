<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Subject extends Model
{
    use HasFactory;

    public $timestamps = false;

    public static function boot()
    {
        parent::boot();
        static::deleting(function ($subject) {
            // When deleting a category, deleting the category icon
            if (File::exists(public_path($subject->icon))) {
                $icon_basename = basename($subject->icon);
                // Do not remove the icon if the category is default
                if ($icon_basename != 'biology.png' || $icon_basename != 'computer_science.png' || $icon_basename != 'custom.png' || $icon_basename != 'geography.png' || $icon_basename != 'history.png')
                    File::delete(public_path($subject->icon));
            }
        });
    }
}
