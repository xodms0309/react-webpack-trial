const  path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin'); 
const  srcDir = path.resolve(__dirname, './src');
const  publicDir = path.resolve(__dirname, './public');
const port=process.env.PORT || 3000;

module.exports = {
    mode: 'devyarnelopment',
	entry: {
		app: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader'
        }
			},
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
		]
	},
    output: {
        path: path.join(__dirname, "dist"),
        filename:'bundle.js',
    },
	resolve: {
		extensions: ['.js', '.jsx']
	},
    devServer:{
        host: 'localhost',
        port: port,
        open:true,
    },
    plugins: [
		new  HtmlWebpackPlugin({
			template:  publicDir + '/index.html',
			filename:  './index.html'
		}),
	]
}