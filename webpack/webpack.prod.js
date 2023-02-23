const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = function(env) {
	const isObfuscate = env.obfuscate ? true : false;

	const config = {
		mode: 'production'
	};
	
	if (isObfuscate) {
		config.plugins = [
			new WebpackObfuscator({
				disableConsoleOutput: true,
				selfDefending: true,
				debugProtection: true,
				debugProtectionInterval: 4000,
				stringArrayIndexesType: [
					'hexadecimal-number'
				]
			})
		]
	}

	return merge(common, config);
};