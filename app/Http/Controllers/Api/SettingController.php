<?php

namespace App\Http\Controllers\Api;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = Setting::first();
        $demoData=[];
		return response()->json([
		'allData' => $allData,
        'demoData' => $demoData
		]); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = Setting::first();
        $data->site_name = $request->site_name;
        $data->site_email = $request->site_email;
        $data->site_sms_api = $request->site_sms_api;
        $data->site_phone = $request->site_phone;
        if($request->site_logo_first != null)
        {
            $data->site_logo_first = time().'v1'. $_FILES["site_logo_first"]["name"];
        }
        if($request->site_logo_second != null)
        {
            $data->site_logo_second = time().'v2'. $_FILES["site_logo_second"]["name"];
        }
        if($request->site_favicon != null)
        {
            $data->site_favicon = time().'v3'. $_FILES["site_favicon"]["name"];
        }
        $data->meta_keyword = $request->meta_keyword;
        $data->meta_description = $request->meta_description;

        $data->site_address = $request->site_address;
        $data->site_description = $request->site_description;
        $data->site_map = $request->site_map;
        $data->site_faq = $request->site_faq;

        $data->site_url = $request->site_url;
        $data->site_privacyandpolicy = $request->site_privacyandpolicy;
        if($request->site_aboutus_banner != null)
        {
            $data->site_aboutus_banner = time().'v4'. $_FILES["site_aboutus_banner"]["name"];
        }
        if($request->site_faq_banner != null)
        {
            $data->site_faq_banner = time().'v5'. $_FILES["site_faq_banner"]["name"];
        }
        if($request->site_privacyandpolicy_banner != null)
        {
            $data->site_privacyandpolicy_banner = time().'v6'. $_FILES["site_privacyandpolicy_banner"]["name"];
        }
        $data->site_app_android_link = $request->site_app_android_link;
        $data->site_app_ios_link = $request->site_app_ios_link;
        $data->site_app_window_link = $request->site_app_window_link;

        $data->site_fb_link = $request->site_fb_link;
        $data->site_twitter_link = $request->site_twitter_link;
        $data->site_linkdin_link = $request->site_linkdin_link;
        $data->site_youtube_link = $request->site_youtube_link;

        $data->bkash_number = $request->bkash_number;
        if($request->bkash_image != null)
        {
            $data->bkash_image = time().'v6'. $_FILES["bkash_image"]["name"];
        }
        $save = $data->update();

        if($request->site_logo_first != null)
        {
            $source= $_FILES['site_logo_first']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_logo_first;
            $saveimage = move_uploaded_file($source,$destination);  
        }
        if($request->site_logo_second != null)
        {
            $source= $_FILES['site_logo_second']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_logo_second;
            $saveimage = move_uploaded_file($source,$destination);  
        }
        if($request->site_favicon != null)
        {
            $source= $_FILES['site_favicon']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_favicon;
            $saveimage = move_uploaded_file($source,$destination);  
        } 

        if($request->site_aboutus_banner != null)
        {
            $source= $_FILES['site_aboutus_banner']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_aboutus_banner;
            $saveimage = move_uploaded_file($source,$destination);  
        } 
        if($request->site_faq_banner != null)
        {
            $source= $_FILES['site_faq_banner']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_faq_banner;
            $saveimage = move_uploaded_file($source,$destination);  
        } 
        if($request->site_privacyandpolicy_banner != null)
        {
            $source= $_FILES['site_privacyandpolicy_banner']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->site_privacyandpolicy_banner;
            $saveimage = move_uploaded_file($source,$destination);  
        } 

        if($request->bkash_image != null)
        {
            $source= $_FILES['bkash_image']['tmp_name'];
            @mkdir("settingfolder");
            $destination="settingfolder/".$data->bkash_image;
            $saveimage = move_uploaded_file($source,$destination);  
        } 
        
        $data = Setting::first();

        if($save)
        {
            $message="Setting updated successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'data' => $data
                ]);  
        }
        else
        {
            $message="Unable to update setting,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'data' => $data
                ]); 
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        //
    }
    public function developer()
    {
        return response()->json([
		'Developer Name' => 'Baizid MD Ashadzzaman',
        'Developer Email' => 'baizid.md.ashadzzaman@gmail.com',
        'Developer Phone' => '8801862420119',
        'Developer Website' => 'https://baizidmdashadzzaman-next.vercel.app/',
        'Developer About' => 'Hello , My name is Asad Zaman.I have been very passionate about computers and programming since my university life. I dream to be an expert software engineer so that I can build professional and useful software that has business value. I am looking for a junior software engineer position in a reputed software company that can help me to achieve my goal.',
		]); 
    }
}
