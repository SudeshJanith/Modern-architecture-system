<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class customer_customize_plan extends Model
{
    protected $fillable = [
            'projid',
            'id',
            'cus_name',
            'cus_email',
            'Cus_mobile_number',
            'cus_address',
            'cus_howmanybedrooms',
            'cus_howmanybathrooms',
            'cus_howmanygarages',
            'cus_customize_details',
            'cus_dislike',
            'cus_accomdated'
    ];
}
