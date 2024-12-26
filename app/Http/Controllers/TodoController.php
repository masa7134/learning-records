<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;  // 追加

class TodoController extends Controller
{
        // タスクを一覧で表示
        public function index()
        {
            $todos = Todo::all();
            return view('todo_list', [
                "todos" => $todos
            ]);
        }

        // タスク作成画面を表示
        public function showCreate()
        {
            return view('todo_create');
        }

        // タスクを登録
        public function create(Request $request)
        {
            // バリデーションを追加
            $validatedData = $request->validate([
                'title' => 'required|string|max:50',
                'detail' => 'nullable|string|max:100',
            ]);

            $todo = new Todo();
            $todo->id = $request->id;
            $todo->title = $validatedData['title'];
            $todo->status = $request->status;
            $todo->detail = $validatedData['detail'];
            $todo->save();

            return redirect('/')->with('success', 'タスクが追加されました');
        }

        // タスク編集画面を表示
        public function showEdit($id)
        {
            $todo = Todo::find($id);
            return view('todo_edit', ["todo" => $todo]);
        }

        // タスクを更新
        public function edit(Request $request)
        {
            // バリデーションを追加
            $validatedData = $request->validate([
                'title' => 'required|string|max:50',
                'detail' => 'nullable|string|max:100',
            ]);

            Todo::find($request->id)->update([
                'id' => $request->id,
                'title' => $validatedData['title'],
                'status' => $request->status,
                'detail' => $validatedData['detail'],
            ]);
            return redirect('/')->with('success', 'タスクが更新されました');
        }

        // タスク削除画面を表示
        public function showDelete($id)
        {
            $todo = Todo::find($id);
            return view('todo_delete', [
                "todo" => $todo
            ]);
        }

        // タスクを削除
        public function destroy(Request $request)
        {
            $id = $request->id;
            Todo::find($id)->delete();
            return redirect('/');
        }
}
