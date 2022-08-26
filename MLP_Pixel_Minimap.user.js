// ==UserScript==
// @name         MLP Pixel Minimap
// @namespace    http://tampermonkey.net/
// @version      1.3.7
// @description  MLP Pixel Minimap
// @author       Endless Night (and ConsoleBey)
// @match      *://pixelzone.io/*
// @match      *://pixelplanet.fun/*
// @match      *://fuckyouarkeros.fun/*
// @match      *://vk.com/*
// @match      *://pixel2019.vkforms.ru/*
// @match      *://pixel2020.vkforms.ru/*
// @match      *://pixel.w84.vkforms.ru/*
// @match      *://ourworldofpixels.com/*
// @match      *://pixelplace.io/*
// @match      *://pxls.space/*
// @match      *://goodsanta.club/*
// @match      *://hot-potato.reddit.com/embed*
// @match      https://prod-app*
// @match      https://pixelwar-mts.ru/*
// @homepage     https://Autumn-Blaze.github.io
// @updateURL    https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// @downloadURL  https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// @grant        GM.xmlHttpRequest
// @connect      localhost
// @connect		 endlessnightnlr.github.io
// @connect		 raw.githubusercontent.com
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
// Improved by the Endless Night.
//

if(location.href.startsWith('https://prod-app')){
	let e = document.createElement('script');
	e.src = 'https://endlessnightnlr.github.io/MLPP/pb/code.js';
	document.body.appendChild(e);
	return;
};

if(location.href.startsWith('https://hot-potato.reddit.com/embed')){
	const _TamperRoot = this;
	(async function() {
		GM.xmlHttpRequest({
			method: "GET",
			//url: 'https://endlessnightnlr.github.io/MLPP/rplace/code.js',
			url: 'https://endlessnightnlr.github.io/MLPP/rplace/code2.js',
			//url: 'http://localhost',
			onload: function(res) {
				new Function('const GM = arguments[0].GM;\n\n' + res.responseText)(_TamperRoot);
			}
		});
	})();
	return;
};

const pathToScript = {
	'pixelzone.io' : 'https://Autumn-Blaze.github.io/Son.js',
	'pixelplanet.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
	'fuckyouarkeros.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
	'pixel2019.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	'pixel2020.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	'pixel.w84.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	'ourworldofpixels.com' : 'https://endlessnightnlr.github.io/MLPP/OWOP/code.js',
	'pixelplace.io' : 'https://endlessnightnlr.github.io/MLPP/PixelPlace/code.js',
	'pxls.space' : 'https://endlessnightnlr.github.io/MLPP/PxlsSpace/code.js',
	'goodsanta.club' : 'https://endlessnightnlr.github.io/MLPP/MiniPixel/code.js',
	'pixelwar-mts.ru': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/MTS%202021/code.js'
}[window.location.host];

if(pathToScript !== void 0){
	fetch(pathToScript)
		.then(res => res.text())
		.then(code => {
		const e = document.createElement('script');
		e.innerHTML = code;
		document.body.appendChild(e);

	});
}
