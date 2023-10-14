<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        
        'review_id', 
        'name',
        'review_message', 
        'review_rate'

        
        


    ];
}
