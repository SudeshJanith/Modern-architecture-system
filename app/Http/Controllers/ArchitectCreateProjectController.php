<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\createProjectArchitect;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class ArchitectCreateProjectController extends Controller
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
    public function store(Request $request)
    {
        createProjectArchitect::create([
            'id' => request('id'),
            'name' => request('name'),
            'plan_type' => request('plan_type'),
            'sqfeet' => request('sqfeet'),
            'Architectural_Style' => request('Architectural_Style'),
            'no_Bed_Room_Attach' => request('no_Bed_Room_Attach'),
            'no_Bed_Room_Non_Attach' => request('no_Bed_Room_Non_Attach'),
            'no_Bath_Room_Attach' => request('no_Bath_Room_Attach'),
            'no_Bath_Room_Non_Attach' => request('no_Bath_Room_Non_Attach'),
            'no_Kitchen' => request('no_Kitchen'),
            'no_Garage' => request('no_Garage'),
            'no_Covered_Porch' => request('no_Covered_Porch'),
            'no_LivingRoom' => request('no_LivingRoom'),
            'no_GreatRoom' => request('no_GreatRoom'),
            'no_Veranda' => request('no_Veranda'),
            'no_MudRoom' => request('no_MudRoom'),
            'no_Laundry' => request('no_Laundry'),
            'no_floors' => request('no_floors'),
            'no_rooms' => request('no_rooms'),
            'no_doors' => request('no_doors'),
            'no_windows' => request('no_windows'),
            'wall_material' => request('wall_material'),
            'celing_material' => request('celing_material'),
            'floor_material' => request('floor_material'),
            'roof_material' => request('roof_material'),
            'img' => request('img')
        ]);

        // $newArchitectProjectCreate = new createProjectArchitect();
        // $newArchitectProjectCreate->architect_id = $request->architect_id;
        // $newArchitectProjectCreate->user_id = $request->user_id;
        
        // $newArchitectProjectCreate->plan_name = $request->plan_name;
        // $newArchitectProjectCreate->plan_type = $request->plan_type;
        // $newArchitectProjectCreate->Architectural_Style = $request->Architectural_Style;
        // $newArchitectProjectCreate->no_Bed_Room_Attach = $request->no_Bed_Room_Attach;
        // $newArchitectProjectCreate->no_Bed_Room_Non_Attach = $request->no_Bed_Room_Non_Attach;
        // $newArchitectProjectCreate->no_Bath_Room_Attach = $request->no_Bath_Room_Attach;
        // $newArchitectProjectCreate->no_Bath_Room_Non_Attach = $request->no_Bath_Room_Non_Attach;
        // $newArchitectProjectCreate->no_Kitchen = $request->no_Kitchen;
        // $newArchitectProjectCreate->no_Garage = $request->no_Garage;
        // $newArchitectProjectCreate->no_Covered_Porch = $request->no_Covered_Porch;
        // $newArchitectProjectCreate->no_LivingRoom = $request->no_LivingRoom;
        // $newArchitectProjectCreate->no_GreatRoom = $request->no_GreatRoom;
        // $newArchitectProjectCreate->no_Veranda = $request->no_Veranda;
        // $newArchitectProjectCreate->no_MudRoom = $request->no_MudRoom;
        // $newArchitectProjectCreate->no_Laundry = $request->no_Laundry;


        // $newArchitectProjectCreate->no_floors = $request->no_floors;
        // $newArchitectProjectCreate->no_rooms = $request->no_rooms;
        // $newArchitectProjectCreate->no_doors = $request->no_doors;
        // $newArchitectProjectCreate->no_windows = $request->no_windows;
        // $newArchitectProjectCreate->wall_material = $request->wall_material;
        // $newArchitectProjectCreate->celing_material = $request->celing_material;
        // $newArchitectProjectCreate->floor_material = $request->floor_material;
        // $newArchitectProjectCreate->roof_material = $request->roof_material;
        // $newArchitectProjectCreate->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    // public function destroy($id)
    // {
    //     $value = createProjectArchitect::find($id);
    //     $value->delete();
    // }

    public function search_model()
    {
        $val = createProjectArchitect::all();
        return $val;

        // $architectproject = DB::table('create_project_architects')->where('name', 'kaweesha')->get(); 
        // return response()->json($architectproject);
         

        

    }

    public function showallArchitects()
    {
        // $val = user::all();
        // return $val;

        $architects = DB::table('users')->where('type', 'architect')->get(); 
        return $architects;
         

        

    }

    // function to view a particular archi's belogs project
    public function belogs_project($id){
        $reviews = DB::table('create_project_architects')->where('id', $id)->get();
        return $reviews;
    }

    // function to view a particular archi's profile 
    public function showArchitect($id){
        $Architect = User::find($id);
        return $Architect;
    }

    public function projectsdata($id)
    // public function projectsdata()
    {
        // $data = createProjectArchitect::all(); 
        // return $data;

        $reviews = DB::table('create_project_architects')->where('id', $id)->get();
        return $reviews;
    }

    public function customize_to_render_project_details($id)
    {        

        $val = DB::table('create_project_architects')->where('projid', $id)->get();
        return $val;
    }

    public function show_project_details($id)
    {
        // $val = User::find($type);
        $projectdetails = DB::table('create_project_architects')->where('projid', $id)->get();
        return $projectdetails;

        // $architect = DB::table('users')->where('type', 'architect')->get();
        // return $architect;

        // $relevent_project = DB::table('create_project_architects')->where('id', $name)->get();
        // return $relevent_project;
    }

    



}
