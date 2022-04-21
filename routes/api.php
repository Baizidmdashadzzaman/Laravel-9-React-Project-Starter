<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ContactusController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//public route
Route::post('/login', [AuthController::class,'authenticate']);
Route::post('/register', [AuthController::class,'register']);
Route::get('/setting', [SettingController::class, 'index'])->name('setting.list');
Route::get('/developer', [SettingController::class, 'developer'])->name('setting.developer');

//public route


Route::group(['middleware' => 'auth:web'], function() {   
  //auth route
    Route::get('/auth/user', function (Request $request) {
      return ['data' => $request->user()];
    });
    Route::delete('/logout', [AuthController::class,'logout']);
  //auth route
  
  //setting route
    Route::post('/setting-update', [SettingController::class, 'store'])->name('setting.update');
  //setting route

  //dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
  //dashboard route



  //systemusers route
    Route::get('/systemuser-list', [UsersController::class, 'index'])->name('systemuser.list');
    Route::get('/systemuser-create', [UsersController::class, 'create'])->name('systemuser.create');
    Route::post('/systemuser-store', [UsersController::class, 'store'])->name('systemuser.store');
    Route::get('/systemuser-edit/{id}', [UsersController::class, 'edit'])->name('systemuser.edit');
    Route::get('/systemuser-show/{id}', [UsersController::class, 'show'])->name('systemuser.show');
    Route::post('/systemuser-update', [UsersController::class, 'update'])->name('systemuser.update');
    Route::get('/systemuser-delete/{id}', [UsersController::class, 'destroy'])->name('systemuser.delete');
    Route::post('/systemuser-search', [UsersController::class, 'search'])->name('systemuser.search');
    Route::post('/systemuser-addpermission', [UsersController::class, 'addpermission'])->name('systemuser.addpermission');
    Route::post('/systemuser-changepassword', [UsersController::class, 'changepassword'])->name('systemuser.changepassword');  
  //systemusers route

  //category route
    Route::get('/category-list', [CategoryController::class, 'index'])->name('category.list');
    Route::get('/category-create', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/category-store', [CategoryController::class, 'store'])->name('category.store');
    Route::get('/category-edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
    Route::get('/category-show/{id}', [CategoryController::class, 'show'])->name('category.show');
    Route::post('/category-update', [CategoryController::class, 'update'])->name('category.update');
    Route::get('/category-delete/{id}', [CategoryController::class, 'destroy'])->name('category.delete');
    Route::post('/category-search', [CategoryController::class, 'search'])->name('category.search'); 
  //category route

  //contactus route
    Route::get('/contactus-list', [ContactusController::class, 'index'])->name('contactus.list');
    Route::get('/contactus-create', [ContactusController::class, 'create'])->name('contactus.create');
    Route::post('/contactus-store', [ContactusController::class, 'store'])->name('contactus.store');
    Route::get('/contactus-edit/{id}', [ContactusController::class, 'edit'])->name('contactus.edit');
    Route::get('/contactus-show/{id}', [ContactusController::class, 'show'])->name('contactus.show');
    Route::post('/contactus-update', [ContactusController::class, 'update'])->name('contactus.update');
    Route::get('/contactus-delete/{id}', [ContactusController::class, 'destroy'])->name('contactus.delete');
    Route::post('/contactus-search', [ContactusController::class, 'search'])->name('contactus.search'); 
  //contactus route


});



