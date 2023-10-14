<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\WorkDone;

class WorkDoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $worksDone = WorkDone::paginate(5);
        return $worksDone;
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
        $WorkDone = new WorkDone();
        $WorkDone->works_subject = $request->work_subject;
        $WorkDone->works_duration = $request->work_duration;
        $WorkDone->works_cost = $request->work_cost;
        $WorkDone->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $work = WorkDone::find($id);
        return $work;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $work = WorkDone::find($id);
        return $work;
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

        $work = WorkDone::find($id);
        $work->works_subject = $request->works_subject;
        $work->works_duration = $request->works_duration;
        $work->works_cost = $request->works_cost;
        $work->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $WorkDone = WorkDone::find($id);
        $WorkDone->delete();
    }
}
