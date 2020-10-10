// ==UserScript==
// @name         MLP Pixel Minimap
// @namespace    http://tampermonkey.net/
// @version      1.3.2
// @description  MLP Pixel Minimap
// @author       Endless Night (and ConsoleBey)
// @include      *://pixelzone.io/*
// @include      *://pixelplanet.fun/*
// @include      *://fuckyouarkeros.fun/*
// @include      *://vk.com/*
// @include      *://pixel2019.vkforms.ru/*
// @include      *://pixel2020.vkforms.ru/*
// @include      *://pixel.w84.vkforms.ru/*
// @include      *://ourworldofpixels.com/*
// @include      *://pixelplace.io/*
// @include      *://pxls.space/*
// @include      *://goodsanta.club/*
// @include      https://prod-app*
// @homepage     https://Autumn-Blaze.github.io
// @updateURL    https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// @downloadURL  https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
// Improved by the Endless Night.
//
{
	if(location.href.startsWith('https://prod-app')){
		let e = document.createElement('script');
		e.src = 'https://endlessnightnlr.github.io/MLPP/pb/code.js';
		document.body.appendChild(e);
		return;
	};

	let e = document.createElement('script');
	(e.src = {
		'pixelzone.io' : 'https://Autumn-Blaze.github.io/Son.js',
		'pixelplanet.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
		'fuckyouarkeros.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
		'pixel2019.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'pixel2020.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'pixel.w84.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'ourworldofpixels.com' : 'https://endlessnightnlr.github.io/MLPP/OWOP/code.js',
		'pixelplace.io' : 'https://endlessnightnlr.github.io/MLPP/PixelPlace/code.js',
		'pxls.space' : 'https://endlessnightnlr.github.io/MLPP/PxlsSpace/code.js',
		'goodsanta.club' : 'https://endlessnightnlr.github.io/MLPP/MiniPixel/code.js'
	}[window.location.host]) ? document.body.appendChild(e) : console.warn('SOURCE CODE FOR INJECTION NOT FOUND');
};
