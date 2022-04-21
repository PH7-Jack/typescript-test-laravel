const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .ts('resources/ts/index.ts', 'public/ts')
    .postCss('resources/css/app.css', 'public/css', [])
