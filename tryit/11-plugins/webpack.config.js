const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
    entry: './entry.js',
    plugins: [
     new HtmlWebpackPlugin({
       title: 'Weback Loaders'
     })
   ],
    output: { filename: '[chunkhash].bundle.js' }
}
