<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Member;


class Position extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst($value),
        );
    }
    
    public function members()
    {
    	return $this->belongsToMany(Member::class, 'position_member', 'position_id', 'member_id');
    }
}
