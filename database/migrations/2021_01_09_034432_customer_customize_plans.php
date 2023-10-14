<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CustomerCustomizePlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_customize_plans', function (Blueprint $table) {

            $table->bigIncrements('customize_plan_id');
            $table->string('projid');
            $table->string('id');
            $table->string('cus_name');
            $table->string('cus_email');
            $table->string('Cus_mobile_number');
            $table->string('cus_address');
            $table->string('cus_howmanybedrooms');
            $table->string('cus_howmanybathrooms');
            $table->string('cus_howmanygarages');
            $table->string('cus_customize_details');
            $table->string('cus_dislike');
            $table->string('cus_accomdated');
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
        //
    }
}
