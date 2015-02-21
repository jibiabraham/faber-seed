var path = require('path');
var ResolverPlugin = require("webpack/lib/ResolverPlugin");

var config = {
	context: __dirname,
	entry: ['webpack/hot/dev-server', './app/app.js'],
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css-loader"},
			{test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded"},
			{test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file"},
			{test: /\.html$/, loader: "ngtemplate?relativeTo=" + path.join(__dirname, 'app/') + "!raw"}
		]
	},
	// Let webpack know where the module folders are for bower and node_modules
	resolve: {
		modulesDirectories: ['node_modules', 'lib/bower_components'],
		alias: {
			'npm': __dirname + '/node_modules',
			'vendor': __dirname + '/app/vendor/',
			'bower' : __dirname + '/lib/bower_components'
		}
	},
	plugins: [
		// This is to help webpack know that it has to load the js file in bower.json#main
		new ResolverPlugin(
			new ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
		)
	]
};

module.exports = config;
