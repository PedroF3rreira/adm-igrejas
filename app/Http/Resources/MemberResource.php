<?php

namespace App\Http\Resources;

use App\Http\Resources\PositionResource;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "cel1" => $this->cel1,
            "cel2" => $this->cel2,
            "email" => $this->email,
            "cpf" => $this->cpf,
            "image" => $this->image,
            "user_id" => $this->user_id,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            'positions' => PositionResource::collection($this->positions),
        ];
    }
}
