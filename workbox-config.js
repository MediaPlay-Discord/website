module.exports = {
	globDirectory: 'mediaplay-discord.github.io/',
	globPatterns: [
		'**/*.{html,png,jpg,webp,ico,svg,css,json,md,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'mediaplay-discord.github.io/service-worker.js'
};