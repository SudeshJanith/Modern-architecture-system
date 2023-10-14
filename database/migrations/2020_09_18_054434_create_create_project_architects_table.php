<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCreateProjectArchitectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('create_project_architects', function (Blueprint $table) {
            
            $table->bigIncrements('projid');
            // $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id');
            // $table->string('id');
            $table->integer('user_id');
            $table->string('name');
            $table->string('plan_type');
            $table->string('sqfeet');
            $table->string('Architectural_Style');            
            $table->string('no_Bed_Room_Attach');
            $table->string('no_Bed_Room_Non_Attach');
            $table->string('no_Bath_Room_Attach');
            $table->string('no_Bath_Room_Non_Attach');
            $table->string('no_Kitchen');
            $table->string('no_Garage');
            $table->string('no_Covered_Porch');
            $table->string('no_LivingRoom');
            $table->string('no_GreatRoom');
            $table->string('no_Veranda');
            $table->string('no_MudRoom');
            $table->string('no_Laundry');            
            $table->string('no_floors');
            $table->string('no_rooms');
            $table->string('no_doors');
            $table->string('no_windows');
            $table->string('wall_material');
            $table->string('celing_material');
            $table->string('floor_material');
            $table->string('roof_material');
            $table->string('img')->nullable();
            $table->string('img_1')->nullable();
            $table->string('img_2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('create_project_architects');
    }
}
