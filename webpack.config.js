const path = require('path'); 

module.exports = {
  mode: 'production', 
  entry: './src/js/app.js', 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  }, 
  module: {
    rules: [{
      test: /\.js$/i, 
      include: path.resolve(__dirname, 'src'), 
      use: {
        loader: 'babel-loader', 
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }, 
    { 
      test: /\.css$/i, 
      include: path.resolve(__dirname, 'node_modules'), 
      use: ['style-loader', 'css-loader'], 
    },
    { 
      test: /\.css$/i, 
      include: path.resolve(__dirname, 'src'), 
      use: ['style-loader', 'css-loader', 'postcss-loader'], 
    }]
  }, 
  devServer: {
    static: 'dist',
  },
};
