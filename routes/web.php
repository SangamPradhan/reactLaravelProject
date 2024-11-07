<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

// Route::get('/', function () {
//     return Inertia::render ('Home', ['name' => 'Sangam']);
// });

Route::get('/about', function () {
    return inertia('About/About');
});
