<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\createProjectArchitect;
use App\User;
use App\customer_customize_plan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class customer_customize_planController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function customer_customize_plan_details()
    {
        customer_customize_plan::create([

            'projid' => request('projid'),
            'id' => request('id'),
            'cus_name' => request('cus_name'),
            'cus_email' => request('cus_email'),
            'Cus_mobile_number' => request('Cus_mobile_number'),
            'cus_address' => request('cus_address'),
            'cus_howmanybedrooms' => request('cus_howmanybedrooms'),
            'cus_howmanybathrooms' => request('cus_howmanybathrooms'),
            'cus_howmanygarages' => request('cus_howmanygarages'),
            'cus_customize_details' => request('cus_customize_details'),
            'cus_dislike' => request('cus_dislike'),
            'cus_accomdated' => request('cus_accomdated'),


        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get_project_details($id)
    {
        $reviews = DB::table('customer_customize_plans')->where('id', $id)->get();
        return $reviews;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
