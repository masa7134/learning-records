<h1>ToDo List</h1>
<div>
    <h2>タスクを追加</h2>
    <form method="POST" action="/create">
        @csrf
        <div>
            タイトル：<input type="text" name="title">
            @error('title')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>
        <div>
            ステータス：
            <select id="status" name="status" required>
                <option value="Not Started">未開始</option>
                <option value="In Progress">進行中</option>
                <option value="Completed">完了</option>
            </select><br>
        </div>
        <div>
            詳細：<br><textarea type="text" name="detail"></textarea><br>
            @error('detail')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>
        <input type="submit" name="create" value="追加">
    </form>
    <a href="/">戻る</a>
</div>
