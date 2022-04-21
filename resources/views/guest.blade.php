
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name','Laravel')  }}</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="{{asset('resource/plugins/fontawesome-free/css/all.min.css')}}">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{asset('resource/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
    <link rel="stylesheet" href="{{asset('resource/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('resource/plugins/jqvmap/jqvmap.min.css')}}">
    <link rel="stylesheet" href="{{asset('resource/dist/css/adminlte.min.css')}}">
    <link rel="stylesheet" href="{{asset('resource/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
    <link rel="stylesheet" href="{{asset('resource/plugins/daterangepicker/daterangepicker.css')}}">
    <link rel="stylesheet" href="{{asset('resource/plugins/summernote/summernote-bs4.min.css')}}">
    
    <meta name="author" content="baizid.md.ashadzzaman@gmail.com">
	<link rel="apple-touch-icon" sizes="180x180" href="{{asset('settingfolder/'.$setting->site_favicon)}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('settingfolder/'.$setting->site_favicon)}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('settingfolder/'.$setting->site_favicon)}}">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <style>
    body {
        font-family: 'Montserrat';
    }
    .scrollasad 
    { 
        min-height: 365px; 
    }
    .scrCustom
    {
        overflow-y: scroll
    }
    .callout.callout-primary {
        border-left-color: #007bff !important;
    }
    </style>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Scripts -->
    
</head>
<body class="sidebar-mini layout-fixed control-sidebar-slide-open layout-navbar-fixed" >
    <div id="app"></div>
    <!--
    <script>
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
    </script>
    -->
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{asset('resource/plugins/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('resource/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <script  src="{{asset('resource/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('resource/plugins/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('resource/plugins/sparklines/sparkline.js')}}"></script>
    <script src="{{asset('resource/plugins/jqvmap/jquery.vmap.min.js')}}"></script>
    <script src="{{asset('resource/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
    <script src="{{asset('resource/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
    <script src="{{asset('resource/plugins/moment/moment.min.js')}}"></script>
    <script src="{{asset('resource/plugins/daterangepicker/daterangepicker.js')}}"></script>
    <script src="{{asset('resource/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
    <script src="{{asset('resource/plugins/summernote/summernote-bs4.min.js')}}"></script>
    <script src="{{asset('resource/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
    <script src="{{asset('resource/dist/js/adminlte.js')}}"></script>
    <script src="{{asset('resource/dist/js/demo.js')}}"></script>
    <script src="{{asset('resource/dist/js/pages/dashboard.js')}}"></script>
    
</body>
</html>