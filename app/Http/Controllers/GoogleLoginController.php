<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Models\Todo;  // 追加
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\Log;

class GoogleLoginController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $socialiteUser = Socialite::driver('google')->user();
            $email = $socialiteUser->email;
            $todos = Todo::all();

            $user = User::firstOrCreate(['email' => $email], [
                'name' => $socialiteUser->name,
            ]);

            Auth::login($user);

            return view('todo_list', [
                "todos" => $todos
            ]);
            
        } catch (Exception $e) {
            Log::error($e);
            throw $e;
        }
    }
}

