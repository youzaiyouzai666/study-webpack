var path = require("path");
module.exports = {
	target: 'node',
	entry: {
		a: path.join(__dirname, "js","a.js"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "MyLibrary.[name].js",
	}
};
