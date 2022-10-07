<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Member\StoreMember;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Members/Index',[
            'members' => Member::orderBy('created_at', 'DESC')->get(),
            'status' => session('status')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Members/Created');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMember $request)
    {
        $validated = $request->validated();

        $member = new Member();
        $member->name = $request->name;
        $member->email = $request->email;
        $member->cel1 = $request->cel1;
        $member->cel2 = $request->cel2;
        $member->cpf = $request->cpf;

        if($request->file('image')){
            $member->image = $request->file('image')->store('teste', 'public');
        }

        $member->user_id = $request->user()->id;

        if($member->save()){
            return redirect()
                ->route('members.index')
            ->with(['status' => 'Membro cadastrado com exito!']);
        }

        return redirect()->route('members.index')->withErros('error', 'não foi possivel fazer o cadastro');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function edit(Member $member)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Member $member)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy(Member $member)
    {
        //
    }
}
