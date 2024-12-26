<h1>ToDo List</h1>
<div>
    <h2>タスクの修正</h2>
    <form method="POST" action="/edit">
        @csrf
        <input type="hidden" name="id" value="{{$todo->id}}">
        <div>
            タイトル：<input type="text" name="title" value="{{$todo->title}}">
            @error('title')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>
        <div>
            ステータス：  <select id="status" name="status" value="{{$todo->status}}">
                <option value="Not Started" {{ $todo->status == 'Not Started' ? 'selected' : '' }}>未開始</option>
                <option value="In Progress" {{ $todo->status == 'In Progress' ? 'selected' : '' }}>進行中</option>
                <option value="Completed" {{ $todo->status == 'Completed' ? 'selected' : '' }}>完了</option>
                        </select><br>
        </div>
        <div>
            詳細：<br><textarea type="text" name="detail" value="">{{$todo->detail}}</textarea><br>
            @error('detail')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>
        <input type="submit" name="edit" value="修正">
    </form>
    <a href="/">戻る</a>
</div>
