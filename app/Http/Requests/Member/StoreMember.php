<?php

namespace App\Http\Requests\Member;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreMember extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [

            'name' => 'required|string|min:5',
            'email' => 'required|unique:members',
            'cel1' => 'required|min:14',
            'cel2' => 'nullable|min:14',
            'cpf' => 'required|unique:members',
            'image' => 'nullable|image|mimes:jpeg,jpg,png,gif'
        ];
    }
}
