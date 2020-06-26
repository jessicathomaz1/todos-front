const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				// termina com js
				test: /\.js$/,
				//exclui a pasta node_modules
				exclude: /node_modules/,
				//converte utilizando babel
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
};