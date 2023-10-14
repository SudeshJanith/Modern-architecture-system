<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class createProjectArchitect extends Model
{
    protected $fillable = [
        'id',
        'name',
        'plan_type',
        'sqfeet',
        'Architectural_Style',
        'no_Bed_Room_Attach',
        'no_Bed_Room_Non_Attach',
        'no_Bath_Room_Attach',
        'no_Bath_Room_Non_Attach',
        'no_Kitchen',
        'no_Garage',
        'no_Covered_Porch',
        'no_LivingRoom',
        'no_GreatRoom',
        'no_Veranda',
        'no_MudRoom',
        'no_Laundry',
        'no_floors',
        'no_rooms',
        'no_doors',
        'no_windows',
        'wall_material',
        'celing_material',
        'floor_material',
        'roof_material',
        'img'
        


    ];
}
