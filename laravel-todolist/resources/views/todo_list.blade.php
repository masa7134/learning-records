<h1>ToDo List</h1>
<form action="{{ route('logout') }}" method="POST" style="display: inline; float: right;">
    @csrf
    <button type="submit">ログアウト</button>
</form>
<div>
    <h2>タスクの一覧</h2>
    <a href="/create-page">タスクを追加</a>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ステータス</th>
            <th>編集</th>
            <th colspan="2">削除</th>
        </tr>
        @foreach($todos as $todo)
        <tr>
            <td>{{$todo->id}}</td>
            <td>{{$todo->title}}</td>
            <td>{{$todo->status}}</td>
            <td><a href="/edit-page/{{$todo->id}}">編集</a></td>
            <td><a href="/delete-page/{{$todo->id}}">削除</a></td>
        </tr>
        @endforeach
    </table>
</div>
