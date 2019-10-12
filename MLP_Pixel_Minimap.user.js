// ==UserScript==
// @name         MLP Pixel Minimap
// @namespace    http://tampermonkey.net/
// @version      1.2.9
// @description  My Little Pony Pixel (MLP Pixel) Minimap
// @author       Endless Night (and ConsoleBey)
// @include      *://pixelzone.io/*
// @include      *://pixel.vkforms.ru/*
// @include      *://pixel2019.vkforms.ru/*
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
			'pixel2019.vkforms.ru' : 'https://endlessnightnlr.github.io/master/MLPP/pb/who.js',
			'pixelzone.io' : 'https://Autumn-Blaze.github.io/Son.js'
//			'pixelzone.io' : 'https://Autumn-Blaze.github.io/MLPP_Minimap.user.js'
		},
		e = document.createElement(`script`);
	if(e.src = a[window.location.host])document.body.appendChild(e);
	else console.warn('SOURCE CODE FOR INJECTION NOT FOUND');
})();
