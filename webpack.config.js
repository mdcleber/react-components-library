const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'YourLibraryName', // The name of your library
    libraryTarget: 'umd', // Universal module definition
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: { // Mark react and react-dom as external dependencies
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
};
