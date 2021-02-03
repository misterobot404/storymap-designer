const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// used compression-webpack-plugin
// const CompressionPlugin = require('compression-webpack-plugin');

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + '/resources/js'
        }
    },
    plugins: [
        new VuetifyLoaderPlugin(),
        // new CompressionPlugin({
        //     algorithm: 'gzip',
        //     compressionOptions: { level: 9 },
        //     filename: '[path].gz[query]',
        //     threshold: 1400,
        //     minRatio: 1
        // })
    ]
});

mix.js('resources/js/main.js', 'public/js').options({
    postCss: [
        require('autoprefixer'),
    ],
});
