const { VueLoaderPlugin } = require('vue-loader');
const fs = require('fs');
const fs_promises = fs.promises;
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const __MODE__ = process.env.NODE_ENV || 'development';
// const __TARGET__ = process.env.BROWSERSLIST_ENV || 'modern';

// const isOld = __TARGET__ === 'old';
const isDev = __MODE__ === 'development';
const isWatch = __MODE__ === 'watch';

const getFilename = (ext) =>
  `${ext}/${isDev ? '[name]' : '[name].[contenthash]'}.${ext}`;

const getFolderFiles = (folder, extension, isFolder = false) =>
  fs
    .readdirSync(path.resolve(__dirname, folder))
    // removing junk files
    .filter((item) => item.split('.')[1] === extension)
    .map((item) => ({
      file: item,
      name: item.split('.')[0],
      ext: item.split('.')[1],
    }));

const htmlFiles = () => {
  const pages = [];
  const HTMLWebpackPlugin = require('html-webpack-plugin');

  getFolderFiles('./src', 'html').forEach((item) => {
    pages.push(
      new HTMLWebpackPlugin({
        template: `./${item.file}`,
        filename: item.file === 'Homepage.html' ? 'index.html' : item.file,
        chunks: [item.name],
      })
    );
  });

  return pages;
};

function plugins() {
  const plugs = [
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin({
    //   // title: 'webpack Boilerplate',
    //   template: path.resolve(__dirname, './src/index.html'), // шаблон
    //   filename: './index.html', // название выходного файла
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //         name: "vendor",
    //         chunks: ["vendor"]
    //     }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, './src/fonts/'),
    //       to: path.resolve(__dirname, '../fonts/'),
    //     },
    //   ],
    // }),
  ];

  plugs.push(...htmlFiles());

  const WebpackAssetsManifest = require('webpack-assets-manifest');
  const my_homies = 'nibbas';

  plugs.push(
    new WebpackAssetsManifest({
      entrypoints: true,
      publicPath: true,
      output: `./front--manifest.json`,
      entrypointsKey: my_homies,
      transform(assets, manifest) {
        return assets[my_homies];
      },
    })
  );

  return plugs;
}

const entryPoints = () => {
  let res = {
    index: ['./main.js', './App.vue'],
  };

  const temp = {};

  // getFolderFiles('./src/css/page', 'scss').forEach(
  //   (item) => (res[item.name] = [`./css/${item.file}`])
  // );

  getFolderFiles('./src/pages', 'vue').forEach(
    (item) => (res[item.name] = [`./pages/${item.file}`])
  );

  // getFolderFiles('./src/pages', 'vue').forEach(
  //   (item) => (temp[item.name] = [`./pages/${item.file}`])
  // );

  return res;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // mode: 'development',
  mode: __MODE__,
  entry: entryPoints(),
  output: {
    // assetModuleFilename: 'assets/[ext]',
    filename: getFilename('js'),
    chunkFilename: getFilename('js'),
    path: path.resolve(__dirname, '../frontend_dist'),

    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.svg'],
    alias: {
      'vue': '@vue/compat',
      '@icons': path.resolve(__dirname, '../icons'),
      '@img': path.resolve(__dirname, '../img'),
      '@fonts': path.resolve(__dirname, '../fonts'),
      '@': path.resolve(__dirname, './src/'),
    },
  },
  devServer: {
    // historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '../frontend_dist'),
    },
    compress: true,
    // contentBase: path.resolve(__dirname, './dist'),
    port: 3709,
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // maxInitialRequests: 1,
      // minSize: 100,
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(scss|css)$/i,
        oneOf: [
          // это соответствует `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
              'sass-loader',
            ],
          },
          // это соответствует простому `<style>` или `<style scoped>`
          {
            use: ['vue-style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
  plugins: plugins(),
};

// {
//   test: /\.js$/,
//   exclude: /node_modules/,
//   use: 'babel-loader',
// },
// это будет применяться к файлам `.js`
// А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
// {
//   test: /\.js$/,
//   loader: 'babel-loader',
// },
// это будет применяться к файлам `.css`
// А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
// {
//   test: /\.css$/,
//   use: ['vue-style-loader', 'css-loader'],
// },
// {
//   test: /\.(scss|css)$/i,
//   oneOf: [
//     // это соответствует `<style module>`
//     {
//       resourceQuery: /module/,
//       use: [
//         'vue-style-loader',
//         {
//           loader: 'css-loader',
//           options: {
//             modules: true,
//             localIdentName: '[local]_[hash:base64:5]',
//           },
//         },
//         'style-loader',
//         'css-loader',
//         'postcss-loader',
//         'sass-loader',
//       ],
//     },
//     // это соответствует простому `<style>` или `<style scoped>`
//     {
//       use: [
//         'vue-style-loader',
//         'style-loader',
//         'css-loader',
//         'postcss-loader',
//         'sass-loader',
//       ],
//     },
//   ],
// },
