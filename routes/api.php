<?php

Route::post('store', 'ArchitectCreateProjectController@store');
Route::get('/search_model', 'ArchitectCreateProjectController@search_model');
Route::get('/arc_profile/{id}', 'ArchitectCreateProjectController@belogs_project');
Route::get('/show_all_projects', 'ArchitectCreateProjectController@search_model');
// Route::get('/architecture_search_model2/{name}', 'ArchitectCreateProjectController@recommend_search_model');


Route::get('/show_all_architects', 'ArchitectCreateProjectController@showallArchitects');

Route::get('/viewProjectdata/{id}', 'ArchitectCreateProjectController@projectsdata');

Route::get('/architects_details/{id}', 'DashController@fech_architect_details');

Route::get('/Showarchitect/{id}', 'DashController@showArchitect');
Route::get('/Showarchitectproject/{id}', 'DashController@showArchitectproject');
// Route::get('/project_details', 'ArchitectCreateProjectController@show_project_details');
Route::get('/project_details/{id}', 'ArchitectCreateProjectController@show_project_details');
Route::get('/Project_details_render_to_customize_paln/{id}', 'ArchitectCreateProjectController@customize_to_render_project_details');
Route::get('/customizeDetailSend/{id}', 'customer_customize_planController@get_project_details');







// Route::get('/dash_architects/{id}', ['as' => 'architects.allArchitects', 'create_project_architects' => 'DashController@allArchitects']);



Route::post('/store_review', 'Api\ReviewController@store_review');
Route::get('/review', 'Api\ReviewController@show_review');



Route::post('/customer_change_plan_details', 'customer_customize_planController@customer_customize_plan_details');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
 
    Route::post('login', 'AuthController@login');
    Route::patch('update', 'AuthController@update');
   

    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');


});


// Route::get('/fuck', '')
