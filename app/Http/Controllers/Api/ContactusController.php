<?php

namespace App\Http\Controllers\Api;

use App\Models\Contactus;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Session;
use Illuminate\Support\Facades\Auth;

class ContactusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = Contactus::latest()->get();
		return response()->json([
		'allData' => $allData
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
        
        $data = new Contactus();
        $data->contactus_name = $request->contactus_name;
        $data->contactus_email = $request->contactus_email;
        $data->contactus_phone = $request->contactus_phone;
        $data->contactus_subject = $request->contactus_subject;
        $data->contactus_message = $request->contactus_message;
        $data->notified = $request->notified;
        $save = $data->save();

        if($save)
        {
            $message="Contact us message send successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to send contact us message,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contactus  $contactus
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $singledata = Contactus::find($id);
        $singledata->notified = 1;
        $save = $singledata->update();
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contactus  $contactus
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $singledata = Contactus::find($id);
        $singledata->notified = 1;
        $save = $singledata->update();
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contactus  $contactus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Contactus::find($request->id);
        $data->contactus_name = $request->contactus_name;
        $data->contactus_email = $request->contactus_email;
        $data->contactus_phone = $request->contactus_phone;
        $data->contactus_subject = $request->contactus_subject;
        $data->contactus_message = $request->contactus_message;
        $data->notified = $request->notified;
        $save = $data->update();

        if($save)
        {
            $message="Contact us message updated successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to update contact us message,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contactus  $contactus
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Contactus::find($id);
        $delete = $data->delete();
        
        if($delete)
        {   
            $allData = Contactus::latest()->get();
            $message="Contact us message deleted sccuessfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'allData' => $allData
                ]); 
        }
        else
        {
            $message="Unable to delete contact us message,please try again.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
        
    }

	public function search(Request $request)
	{
        $query = $request->get('search');
		if($request->get('search') == null)
		{
            $allData=Contactus::latest()->get();
		}
		else
		{
            $allData=Contactus::where('contactus_name', 'LIKE', "%{$query}%")->latest()->get();		
		}
		return response()->json([
            'allData' => $allData,
        ]); 	
	}
}
