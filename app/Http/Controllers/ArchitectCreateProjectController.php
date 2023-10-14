<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\createProjectArchitect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

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
        $fileNameToStore = null;
        $fileNameToStore1 = null;
        $fileNameToStore2 = null;

        if ($request->hasFile('img')) {
            // 01. Get filename with extension
            $fileNameWithExtension = $request->file('img')->getClientOriginalName();

            // 02. Get Just File Name
            $fileName = pathinfo($fileNameWithExtension, PATHINFO_FILENAME);

            // 03. Get Extension
            $extension = $request->file('img')->getClientOriginalExtension();

            // 04. File name to Store
            if (str_contains($fileName, '/')) {

                $charcrs = array('/', ':');

                $fileNameModified = str_replace($charcrs, '-', $fileName);
                $fileNameToStore = time() . '-project-main-' . $fileNameModified .'.'.$extension;

            }else {

                $fileNameToStore = time() . '-project-main-' . $fileName .'.'.$extension;

            }

            // 05. Upload Image
            $path = $request->file('img')->storeAs('public/projects', $fileNameToStore);

            // 06. Merge Main image name to request
        }


        if ($request->hasFile('img_1')) {

            // 01. Get filename with extension
            $fileNameWithExtension1 = $request->file('img_1')->getClientOriginalName();

            // 02. Get Just File Name
            $fileName1 = pathinfo($fileNameWithExtension1, PATHINFO_FILENAME);

            // 03. Get Extension
            $extension1 = $request->file('img_1')->getClientOriginalExtension();

            // 04. File name to Store
            if (str_contains($fileName1, '/')) {

                $charcrs = array('/', ':');

                $fileNameModified1 = str_replace($charcrs, '-', $fileName1);
                $fileNameToStore1 = time() . '-project-main-' . $fileNameModified1 .'.'.$extension1;

            }else {

                $fileNameToStore1 = time() . '-project-main-' . $fileName1 .'.'.$extension1;

            }

            // 05. Upload Image
            $path1 = $request->file('img_1')->storeAs('public/projects', $fileNameToStore1);

            // 06. Merge Main image name to request
        }

        if ($request->hasFile('img_2')) {

            // 01. Get filename with extension
            $fileNameWithExtension2 = $request->file('img_2')->getClientOriginalName();

            // 02. Get Just File Name
            $fileName2 = pathinfo($fileNameWithExtension2, PATHINFO_FILENAME);

            // 03. Get Extension
            $extension2 = $request->file('img_2')->getClientOriginalExtension();

            // 04. File name to Store
            if (str_contains($fileName, '/')) {

                $charcrs = array('/', ':');

                $fileNameModified2 = str_replace($charcrs, '-', $fileName2);
                $fileNameToStore2 = time() . '-project-main-' . $fileNameModified2 .'.'.$extension2;

            }else {

                $fileNameToStore2 = time() . '-project-main-' . $fileName2 .'.'.$extension2;

            }

            // 05. Upload Image
            $path = $request->file('img_2')->storeAs('public/projects', $fileNameToStore2);

            // 06. Merge Main image name to request
            // $request->merge(['img_2' => $fileNameToStore2]);
        }

        $newProject = createProjectArchitect::create([
            'id' => rand(0001, 9999),
            'user_id' => request('user_id'),
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
            'img' => $fileNameToStore ?? null,
            'img_1' => $fileNameToStore1 ?? null,
            'img_2' => $fileNameToStore2 ?? null,
        ]);

        Log::debug("Created New Project Object");
        return response()->json([
            'status' => 'success',
            'message' => 'Project Details added successfully!',
        ])->setStatusCode(200);

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

        $reviews = DB::table('create_project_architects')->where('projid', $id)->get();
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
