<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Member\StoreMember;
use App\Http\Requests\Member\UpdateMember;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\MemberCollection;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $members = new MemberCollection(Member::latest()->paginate(10));
        
        $positions = Position::all();
        
        // exibe tela inicial de membros com membros cadastrados
        return Inertia::render('Members/Index',[
            'members' => $members,
            'positions' => $positions,
            'status' => session('status'),
            'error' => session('error')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMember $request)
    {
        // verifica se o usuário é administrador
        if(!Gate::allows('is-admin')){
            return redirect()->route('members.index')->with('status', 'Você tem de ser administrador para executar essa ação');
        }
            
        // validando entrada pelo formRequest StoreMember
        $validated = $request->validated();

        // inicia uma instancia de Member
        $member = new Member();

        // atribuindo valores as propiedadas do objeto
        $member->name = $request->name;
        $member->email = $request->email;
        $member->cel1 = $request->cel1;
        $member->cel2 = $request->cel2;
        $member->cpf = $request->cpf;
       
        // verifica se existe arquivo na posição image de file
        if($request->file('image')){
            // faz upload do arquivo
            $member->image = $request->file('image')->store('members', 'public');
        }

        // atribuindo fk para relacionamento com usuario logado
        $member->user_id = $request->user()->id;

        // se a ação de persistir os dados no banco retornar true redireciona para index
        if($member->save()){
           
           if($request->position){
            DB::table('position_member')->insert([
                'position_id' => $request->position,
                'member_id' => $member->id
            ]);
           }
            
            return redirect()
                ->route('members.index')
            ->with(['status' => 'Membro cadastrado com exito!']);
        }

        return redirect()->route('members.index')->with('status', 'não foi possivel fazer o cadastro');
    
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
    public function update(UpdateMember $request, Member $member)
    {
         // verifica se o usuário é administrador
        if(!Gate::allows('is-admin')){
            return redirect()->route('members.index')->with('status', 'Você tem de ser administrador para executar essa ação');
        }
            
        // validando entrada pelo formRequest UpdateMember
        $request->validated();

        // atribuindo valores as propiedadas do objeto
        $member->name = $request->name;

        // verifica se o email da entrada já pertence ao membro
        if($member->email === $request->email){
            $member->email = $request->email;
        }
        else{
            // se o email for diferente faz uma nova verificação antes de atribuir a propiedade
            $request->validate(['email' => 'required|unique:members']);
            $member->email = $request->email;
        }

        $member->cel1 = $request->cel1;
        $member->cel2 = $request->cel2;

         // verifica se o cpf da entrada já pertence ao membro
        if($member->cpf === $request->cpf){
            $member->cpf = $request->cpf;
        }
        else{
            // se o cpf for diferente faz uma nova verificação antes de atribuir a propiedade
            $request->validate(['cpf' => 'required|unique:members']);
            $member->cpf = $request->cpf;
        }
        
        // persistindo dados no banco de dados
        if($member->save()){

            return redirect()
                ->route('members.index')
            ->with(['status' => 'Membro atualizado com exito!']);
        }

        // redirecionamento caso ocarra um erro
        return redirect()
        ->route('members.index')
        ->withErros('error', 'não foi possivel fazer o cadastro');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy(Member $member)
    {
        $member->delete();

        return redirect(route('members.index'));
    }
}
