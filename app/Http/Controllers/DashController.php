<?php

namespace App\Http\Controllers;

use App\createProjectArchitect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;

class DashController extends Controller
{
    public function showallArchitects($id) {
        $architects = DB::table('users')->where('id', $id)->get();
        // return $architects;
        return response()->json($architects);    
    }


    public function showArchitect($id) {
        // $architect = DB::table('users')->where('id', $id)->get();
        $architect = User::find($id);
        return $architect;    
    }

    public function showArchitectproject($id) {
        // public function showArchitectproject() {
        $architect = DB::table('create_project_architects')->where('id', $id)->get();
        return $architect;    

        // $val = createProjectArchitect::all();
        // return $val;
    }

    public function fech_architect_details($id){
        $architects_details = DB::table('users')->where('id', $id)->get(); 
        return $architects_details;
    }




    
}
