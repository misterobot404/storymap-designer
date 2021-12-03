const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

// used Compression Webpack Plugin
// const CompressionPlugin = require('compression-webpack-plugin');

// used Bundle Analyzer
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

        // new BundleAnalyzerPlugin({analyzerHost: "192.168.10.10"}),
    ]
});

mix.js('resources/js/main.js', 'public/js').vue().disableNotifications();
