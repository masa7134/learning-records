<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\TodoController;

Route::get('/auth/google', [GoogleLoginController::class, 'redirectToGoogle'])
    ->name('login.google');

Route::get('/auth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])
    ->name('login.google.callback');

Route::get('/', function () {
    return view('welcome');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/todo_list', function () {
    return view('todo_list');
})->middleware(['auth', 'verified'])->name('todo_list');


Route::get('/', [TodoController::class, 'index']);
Route::get('/create-page', [TodoController::class, 'showCreate']);
Route::post('/create', [TodoController::class, 'create']);
Route::get('/edit-page/{id}', [TodoController::class, 'showEdit']);
Route::post('/edit', [TodoController::class, 'edit']);
Route::get('/delete-page/{id}', [TodoController::class, 'showDelete']);
Route::post('/delete/{id}', [TodoController::class, 'destroy']);

require __DIR__.'/auth.php';
