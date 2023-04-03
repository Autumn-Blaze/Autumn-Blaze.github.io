// ==UserScript==
// @name         MLP Pixel Minimap
// @namespace    http://tampermonkey.net/
// @version      1.3.10
// @description  MLP Pixel Minimap
// @author       Endless Night (and ConsoleBey)
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @connect		 githubusercontent.com
// @connect		 github.io
// @connect		 github.com
// @connect      localhost
// @connect		 glitch.me
// @connect		 pixelzone.io
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @match      *://pixelzone.io/*
// @match      *://*.pixelplanet.fun*
// @match      *://*.fuckyouarkeros.fun*
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

// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
// Improved by the Endless Night.

[
	['https://prod-app*', 'https://endlessnightnlr.github.io/MLPP/pb/code.js'],
	// ['https://hot-potato.reddit.com/embed*', 'https://endlessnightnlr.github.io/MLPP/rplace/code2.js'],
	['.*:\/\/pixelzone\.io.*', 'https://Autumn-Blaze.github.io/Son.js'],
	['.*:\/\/.*pixelplanet\.fun.*', 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js'],
	['.*:\/\/.*fuckyouarkeros\.fun.*', 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js'],
	// 'pixel2019.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	// 'pixel2020.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	// 'pixel.w84.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
	['.*:\/\/ourworldofpixels\.com.*', 'https://endlessnightnlr.github.io/MLPP/OWOP/code.js'],
	['.*:\/\/pixelplace\.io.*', 'https://endlessnightnlr.github.io/MLPP/PixelPlace/code.js'],
	['.*:\/\/pxls\.space.*', 'https://endlessnightnlr.github.io/MLPP/PxlsSpace/code.js'],
	// 'goodsanta.club' : 'https://endlessnightnlr.github.io/MLPP/MiniPixel/code.js',
	// 'pixelwar-mts.ru': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/MTS%202021/code.js'
].forEach(([reg, src]) => {
	if (new RegExp(reg).test(location.href)) {
		console.log(`trigger "${reg}"\nload code from "${src}"`);
		fetch(src)
		.then(res => {
			if (res.readyState !== res.DONE) {
				return;
			}

			if (res.status !== 200) {
				alert(`cant load script\ncode: ${res.status}\nreason: ${res.statusText}`);
				return;
			}

			return res.text()
		})
		.then(code => {
			new Function("const [self, GM, unsafeWindow] = arguments;\n" + code)(self, GM, unsafeWindow);
		});
	}
});
