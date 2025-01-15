<h1>ToDo List</h1>
<div>
    <h2>タスクを削除</h2>
    <form method="POST" action="/delete/{{$todo->id}}">
        @csrf
        <div>
            タイトル：{{$todo->title}}
        </div>
        <div>
            ステータス：{{$todo->status}}
        </div>
        <div>
            詳細：{{$todo->detail}}
        </div>
        <input type="submit" name="delete" value="削除">
    </form>
    <a href="/">戻る</a>
</div>
