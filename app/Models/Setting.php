<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'site_name',
        'site_email',
        'site_sms_api',
        'site_phone',
        'site_logo_first',
        'site_logo_second',
        'site_favicon',
        'meta_keyword',
        'meta_description',
        'site_address',
        'site_description',
        'site_map',
        'site_faq',
        
        'site_url',
        'site_privacyandpolicy',
        'site_aboutus_banner',
        'site_faq_banner',
        'site_privacyandpolicy_banner',
        'site_app_android_link',
        'site_app_ios_link',
        'site_app_window_link',

        'site_fb_link',
        'site_twitter_link',
        'site_linkdin_link',
        'site_youtube_link',

        'site_name_bn',
        'site_address_bn',
        'site_description_bn',
        'site_faq_bn',
        'site_privacyandpolicy_bn',

        'bkash_number',
        'bkash_image',

    ];

}
