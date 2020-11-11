module.exports = {
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: __dirname + '/client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './client/dist'
  }
};