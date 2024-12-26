@extends('layouts.default')

@section('title', '画像アップロード')
@section('content')
    <form action="{{route('photos.store')}}" method="post" enctype="multipart/form-data">
        @if (session()->has('success'))
            <p>{{session()->get('success') }}</p>
        @endif
        @csrf
        <label>画像： <input type="file" name="image"></label>
        <button type="submit">アップロード</button>
    </form>
@endsection
