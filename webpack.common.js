module.exports = {
  entry: ['./src/entry.jsx'],
  output: {
    path: __dirname,
    filename: 'build/main.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }, {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
