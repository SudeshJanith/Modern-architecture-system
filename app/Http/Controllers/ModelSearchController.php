<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ModelSearchController extends Controller
{
    public function showReactSearch() 
    {
        return view('demos.reactsearch');
    }

    /**
     * To fetch the results from database
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getReactSearch(Request $request)
    {
        $search =  $request->search;

        $posts = '';

        if (trim($request->search)) {
            $posts = Post::where('title','LIKE',"%{$search}%")
                         ->orderBy('created_at','DESC')->limit(5)->get();

            $posts = $posts->map(function ($post, $key) {
                            return [
                                        'title' => $post['title'],
                                        'url'  => url('blog/'.$post['slug']),
                                        'image' => Helper::catch_first_image($post['body']),
                                   ];
                        });          
        }

        return $posts;
    }
}
