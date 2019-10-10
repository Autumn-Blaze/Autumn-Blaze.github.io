// ==UserScript==
// @name         MLP Pixel Minimap
// @namespace    http://tampermonkey.net/
// @version      1.2.8
// @description  My Little Pony Pixel (MLP Pixel) Minimap for PixelZone.io
// @author       ConsoleBey and Endless Night
// @include      *://pixelzone.io/*
// @include      *://pixel.vkforms.ru/*
// @include      *://vk.com/pixelbattle*
// @homepage     https://Autumn-Blaze.github.io
// @updateURL    https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// @downloadURL  https://Autumn-Blaze.github.io/MLP_Pixel_Minimap.user.js
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
// Improved by the Endless Night.
//
console.log("Run mlpp_minimap.exe");
(()=>{
	let a = {
			'pixel.vkforms.ru' : 'https://newlunarrepublicen.000webhostapp.com/files/MLPP_PB_Minimap.js',
			'pixelzone.io' : 'https://Autumn-Blaze.github.io/Son.js'
//			'pixelzone.io' : 'https://Autumn-Blaze.github.io/MLPP_Minimap.user.js'
		},
		e = document.createElement(`script`);
	if(e.src = a[window.location.host])document.body.appendChild(e);
	else console.warn('SOURCE CODE FOR INJECTION NOT FOUND');
})();
