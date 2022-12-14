<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\PositionController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('/membros', MemberController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->names('members')
    ->parameters(['membros' => 'member'])
->middleware(['auth']);

Route::resource('/cargos', PositionController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->names('positions')
    ->parameters(['cargos' => 'positions'])
->middleware(['auth']);


require __DIR__.'/auth.php';
