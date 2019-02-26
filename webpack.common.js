module.exports = {
  entry: ['./src/entry.jsx'],
  output: {
    path: __dirname,
    filename: 'build/main.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
