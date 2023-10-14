<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // orderBy('updated_at', 'desc')->get()
        $reviews = Review::orderBy('updated_at', 'desc')->paginate(5);
        return $reviews;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show_review()
    {
        $data = Review::all();
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store_review(Request $request)
    {
        Review::create([

            'review_id' => request('review_id'),
            'name' => request('name'),
            'review_message' => request('review_message'),
            'review_rate' => request('review_rate')
            ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $review = Review::find($id);
        return $review;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $review = Review::find($id);
        return $review;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $review = Review::find($id);
        $review->review_subject = $request->review_subject;
        $review->review_message = $request->review_message;
        $review->review_rate = $request->review_rate;
        $review->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::find($id);
        $review->delete();
    }

    // Service Provider Belonged Reviews
    public function servieProviderBelongedReviews($id) {
        $reviews = DB::table('reviews')->where('review_on_id', $id)->get();
        return $reviews;
    }
}
