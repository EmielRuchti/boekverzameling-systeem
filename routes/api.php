<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::post('/books', [BookController::class, 'store'])->name('books.store');
Route::get('/books/{book}', [BookController::class, 'show'])->name('books.show');
Route::put('/books/{book}', [BookController::class, 'update'])->name('books.update');
Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('books.destroy');

Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');
Route::post('/authors', [AuthorController::class, 'store'])->name('authors.store');
Route::get('/authors/{author}', [AuthorController::class, 'show'])->name('authors.show');
Route::put('/authors/{author}', [AuthorController::class, 'update'])->name('authors.update');
Route::delete('/authors/{author}', [AuthorController::class, 'destroy'])->name('authors.destroy');

Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
Route::put('/reviews/{review}', [ReviewController::class, 'update'])->name('reviews.update');
Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');

Route::post('/login', [LoginController::class, 'authenticate'])->name('login.authenticate')->middleware('web');
Route::get('/logout', [LoginController::class, 'logout'])->name('login.logout')->middleware('web');
Route::get('/me', [LoginController::class, 'me'])->name('me')->middleware(['web','auth:sanctum']);