module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,js,css,jpg,html,svg}'
	],
	swDest: 'dist/sw.js',
/* 	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	], */
	swSrc:'src/sw-template.js',
};