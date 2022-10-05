<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('cel1');
            $table->string('cel2')->nullable();
            $table->string('email')->unique();
            $table->string('cpf')->unique();
            $table->string('image')->nullable();
            $table->foreignIdFor(User::class)
                ->references('id')
                ->on('users')
            ->onDelete('cascade');
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
        Schema::table('members', function(Blueprint $table) {
            $table->dropForeignIdFor(User::class);
        });
        Schema::dropIfExists('members');
    }
};
