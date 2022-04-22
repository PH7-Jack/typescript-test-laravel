const mix = require('laravel-mix')
const path = require('path')

mix.js('resources/js/app.js', 'public/js')
    .ts('resources/ts/index.ts', 'public/ts')
    .alias({
        '@': path.join(__dirname, 'resources/ts'),
        '@js': path.join(__dirname, 'resources/js'),
    })
    .postCss('resources/css/app.css', 'public/css', [])
