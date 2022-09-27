<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Member;


class Office extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function members()
    {
    	return $this->belongsToMany(Member::class, 'office_member', 'office_id', 'member_id');
    }
}
