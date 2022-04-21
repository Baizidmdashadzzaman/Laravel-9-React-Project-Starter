<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Session;
use Illuminate\Support\Facades\Auth;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function changepassword(Request $request)
    {
        
        if($request->new_password != $request->confirm_password){
            $status = 0;
            $message = "Confirm password not matched,please try again.";
            return response()->json([
                'status' => $status,
                'message' => $message
                ]);
        }
        $user = User::find($request->id);
		
        if (Hash::check($request->old_password, $user->password)) {
            $user->password = bcrypt($request->new_password);
			
			$user->update();
			$status = 1;
            $message = "Successfully changed your password.";
            return response()->json([
                'status' => $status,
                'message' => $message
                ]);
        } else {
            $status = 0;
            $message = "Your old password is wrong,please try again.";
            return response()->json([
                'status' => $status,
                'message' => $message
                ]);
        }
	}
    public function index()
    {
        $allData = User::latest()->get();
		return response()->json([
		'allData' => $allData
		]); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addpermission(Request $request)
    {
        $singledata = User::find($request->user_id);

        if($request->permission_id == 1)
        {
            if($singledata->permission_admin == 1)
            {
               $singledata->permission_admin = 0;
            }
            else
            {
               $singledata->permission_admin = 1;
            }
        }
        if($request->permission_id == 2)
        {
            if($singledata->permission_listner == 1)
            {
               $singledata->permission_listner = 0;
            }
            else
            {
               $singledata->permission_listner = 1;
            }
        }
        if($request->permission_id == 3)
        {
            if($singledata->permission_category == 1)
            {
               $singledata->permission_category = 0;
            }
            else
            {
               $singledata->permission_category = 1;
            }
        }
        if($request->permission_id == 4)
        {
            if($singledata->permission_artist == 1)
            {
               $singledata->permission_artist = 0;
            }
            else
            {
               $singledata->permission_artist = 1;
            }
        }
        if($request->permission_id == 5)
        {
            if($singledata->permission_album == 1)
            {
               $singledata->permission_album = 0;
            }
            else
            {
               $singledata->permission_album = 1;
            }
        }
        if($request->permission_id == 6)
        {
            if($singledata->permission_songs == 1)
            {
               $singledata->permission_songs = 0;
            }
            else
            {
               $singledata->permission_songs = 1;
            }
        }
        if($request->permission_id == 7)
        {
            if($singledata->permission_songscategory == 1)
            {
               $singledata->permission_songscategory = 0;
            }
            else
            {
               $singledata->permission_songscategory = 1;
            }
        }
        if($request->permission_id == 8)
        {
            if($singledata->permission_songsartist == 1)
            {
               $singledata->permission_songsartist = 0;
            }
            else
            {
               $singledata->permission_songsartist = 1;
            }
        }
        if($request->permission_id == 9)
        {
            if($singledata->permission_setting == 1)
            {
               $singledata->permission_setting = 0;
            }
            else
            {
               $singledata->permission_setting = 1;
            }
        }
        if($request->permission_id == 10)
        {
            if($singledata->permission_slider == 1)
            {
               $singledata->permission_slider = 0;
            }
            else
            {
               $singledata->permission_slider = 1;
            }
        }
        if($request->permission_id == 11)
        {
            if($singledata->permission_contactus == 1)
            {
               $singledata->permission_contactus = 0;
            }
            else
            {
               $singledata->permission_contactus = 1;
            }
        }
        if($request->permission_id == 12)
        {
            if($singledata->permission_subscribers == 1)
            {
               $singledata->permission_subscribers = 0;
            }
            else
            {
               $singledata->permission_subscribers = 1;
            }
        }
        

        $singledata->update();
        $singledata = User::find($request->user_id);

        return response()->json([
            'singledata' => $singledata
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $check=User::where('email',$request->email)->first();
        if($check != null)
        {
            $message="Unable to create system user,email already exist.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }
        $data = new User();
        $data->name = $request->name;
        $data->email = $request->email;
        $data->password = bcrypt($request->password);
        $data->phone = $request->phone;
        $data->description = $request->description;
        $data->primeuser = 0;
        $data->status = $request->status;
        $data->permission = $request->permission;
        $save = $data->save();  
        if($save)
        {
            $message="System user created successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to create system user,please try again.";
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $singledata = User::find($id);
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $singledata = User::find($id);
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = User::find($request->id);
        $data->name = $request->name;
        $data->email = $request->email;
        if($request->password  != null)
        {
            $data->password = bcrypt($request->password);
        }
        $data->phone = $request->phone;
        $data->description = $request->description;
        //$data->primeuser = 0;
        $data->status = $request->status;
        $data->permission = $request->permission;
        $save = $data->update();

        if($save)
        {
            $message="System user updated successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to update system user,please try again.";
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = User::find($id);
        $delete = $data->delete();
        
        if($delete)
        {   
            $allData = User::latest()->get();
            $message="Product deleted sccuessfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'allData' => $allData
                ]); 
        }
        else
        {
            $message="Unable to delete product,please try again.";
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
            $allData=User::latest()->get();
		}
		else
		{
            $allData=User::where('email', 'LIKE', "%{$query}%")->latest()->get();		
		}
		return response()->json([
            'allData' => $allData,
        ]); 	
	}
}
