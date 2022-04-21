<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'category_slug',
        'category_code',
        'category_logo',
        'category_bannner',
        'category_description',
        'status',

        'category_name_bn',
        'category_description_bn',
    ];

}
