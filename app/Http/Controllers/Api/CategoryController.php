<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Session;
use Illuminate\Support\Facades\Auth;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = Category::latest()->get();
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
        $check=Category::where('category_name',$request->category_name)->first();
        if($check != null)
        {
            $message="Unable to create category,category name already exist.";
            $status = 0;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]); 
        }

        $data = new Category();
        $data->category_name = $request->category_name;
        $data->category_slug = Str::slug($request->category_name, '-');
        $data->category_code = random_int(10000000000, 99999999999);
        $data->category_logo = time().'v1'. $_FILES["category_logo"]["name"];
        $data->category_bannner = time().'v2'. $_FILES["category_bannner"]["name"];
        $data->category_description = $request->category_description;
        $data->status = $request->status;
        $save = $data->save();

          $source= $_FILES['category_logo']['tmp_name'];
          @mkdir("categoryimages");
          $destination="categoryimages/".$data->category_logo;
          $saveimage = move_uploaded_file($source,$destination);  

          $source= $_FILES['category_bannner']['tmp_name'];
          @mkdir("categoryimages");
          $destination="categoryimages/".$data->category_bannner;
          $saveimage = move_uploaded_file($source,$destination);  

        if($save)
        {
            $message="Category created successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to create category,please try again.";
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $singledata = Category::find($id);
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $singledata = Category::find($id);
        return response()->json([
            'singledata' => $singledata
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Category::find($request->id);
        $data->category_name = $request->category_name;
        $data->category_slug = Str::slug($request->category_name, '-');
        //$data->category_code = random_int(10000000000, 99999999999);
        if($request->category_logo != null)
        {
            $data->category_logo = time().'v1'. $_FILES["category_logo"]["name"];
        }
        if($request->category_bannner != null)
        {
            $data->category_bannner = time().'v2'. $_FILES["category_bannner"]["name"];
        }
        $data->category_description = $request->category_description;
        $data->status = $request->status;
        $save = $data->update();

        if($request->category_logo != null)
        {
            $source= $_FILES['category_logo']['tmp_name'];
            @mkdir("categoryimages");
            $destination="categoryimages/".$data->category_logo;
            $saveimage = move_uploaded_file($source,$destination);  
        }
        if($request->category_bannner != null)
        {
            $source= $_FILES['category_bannner']['tmp_name'];
            @mkdir("categoryimages");
            $destination="categoryimages/".$data->category_bannner;
            $saveimage = move_uploaded_file($source,$destination); 
        }

        if($save)
        {
            $message="Category updated successfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status
                ]);  
        }
        else
        {
            $message="Unable to update category,please try again.";
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $data = Category::find($id);
        $delete = $data->delete();
        
        if($delete)
        {   
            $allData = Category::latest()->get();
            $message="Category deleted sccuessfully.";
            $status = 1;
            return response()->json([
                'message' => $message,
                'status' => $status,
                'allData' => $allData
                ]); 
        }
        else
        {
            $message="Unable to delete category,please try again.";
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
            $allData=Category::latest()->get();
		}
		else
		{
            $allData=Category::where('category_name', 'LIKE', "%{$query}%")->latest()->get();		
		}
		return response()->json([
            'allData' => $allData,
        ]); 	
	}

}
