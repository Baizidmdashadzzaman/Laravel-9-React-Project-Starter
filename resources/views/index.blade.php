@php
$setting=App\Models\Setting::first();    
@endphp

@if(\Request::is('admin/*'))
@include('admin')
@else
@include('guest')
@endif


