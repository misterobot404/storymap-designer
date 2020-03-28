const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CompressionPlugin = require('compression-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.webpackConfig({
    resolve: {
        // We need to define the @ in order to tell the compiler what does the @ uses for.
        extensions: ['.js','.vue'],
        alias: {
            '@':__dirname + '/resources/js'
        }
    },
    plugins: [
        //new BundleAnalyzerPlugin({analyzerHost: "192.168.10.10"}),
        new VuetifyLoaderPlugin(),
        new CompressionPlugin({
            algorithm: 'gzip',
            minRatio: 0.8,
            filename: '[path].gz[query]',
            //deleteOriginalAssets: true
        })
    ]
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Using dynamic imports for older browsers
mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

// File to compile
mix.js('resources/js/main.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
