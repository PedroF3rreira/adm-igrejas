<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Position;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
    	'name',
	    'cel1', 
	    'cel2', 
	    'email', 
	    'cpf', 
	    'image', 
	    'user_id'
 	];

 	public function user()
 	{
 		return $this->belongsTo(User::class);
 	}

 	// relacionamento muitos para muitos
 	public function positions()
 	{
 		return $this->belongsToMany(Position::class, 'position_member', 'member_id', 'position_id');
 	}

 	public function name(): Attribute
 	{
 		return Attribute::make(
            get: fn ($value) => ucwords($value),
        );
 	}
}
