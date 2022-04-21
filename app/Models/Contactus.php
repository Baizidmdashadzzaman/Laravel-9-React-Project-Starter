<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contactus extends Model
{
    use HasFactory;

    protected $fillable = [
        'contactus_name',
        'contactus_email',
        'contactus_phone',
        'contactus_subject',
        'contactus_message',
        'notified'
    ];

}
