const path = require('path');

module.exports = {
	mode:'production',
	entry: './src/js/main.js',
	output:{
		path:path.resolve(__dirname, "build/html/Gerber_Responsive_Homepage_Banner"),
		filename: "bundle.js"
	}
}