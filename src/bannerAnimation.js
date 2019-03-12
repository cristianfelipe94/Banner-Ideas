(function bannerIife() {
	const bannerContainer = document.getElementById('js-banner-container');
	const firstPaper = document.getElementById('js-first-paper');
	const secondPaper = document.getElementById('js-second-paper');
	
	const thirdPaper = document.getElementById('js-third-paper');
	const fourthPaper = document.getElementById('js-fourth-paper');
	const fifthPaper = document.getElementById('js-fifth-paper');
	const sixthPaper = document.getElementById('js-sixth-paper');
	const seventhPaper = document.getElementById('js-seventh-paper');
	
	const preFinalText = document.getElementById('js-prefinal-text');
	const finalText = document.getElementById('js-final-text');
	const textDecoration = document.getElementById('js-underline-decoration');
	
	const bannerMoves = document.getElementById('js-banner-position');
	
	const firstText = document.getElementById('js-first-text');
	const secondText = document.getElementById('js-second-text');
	
	// Value will increase depending on the amount of images that needs to be loaded.
	let loadedAssets = 0;
	
	// Array of Src attributes.
	const arrayImages = new Array('assets/paperplane.png');
	
	// As soon as DOM is loaded, will run function.
	this.addEventListener('DOMContentLoaded', preloadImages);
	
	function preloadImages() {
		for (let i = 0; i < arrayImages.length; i++) {
			const _tempImage = new Image();
			_tempImage.addEventListener('load', trackProgress);
			_tempImage.src = arrayImages[i];
		}
	}
	
	function trackProgress(){
		loadedAssets++;
		if(loadedAssets == arrayImages.length) init();
	}
	
	function init(){
		const css = document.createElement( 'link' );
		css.setAttribute( 'rel', 'stylesheet' );
		css.setAttribute( 'type', 'text/css' );
		css.setAttribute( 'href', "style/style.css" );
		document.getElementsByTagName('head')[0].appendChild(css);
		initAnimations();
	}

	function initAnimations(){
		let firstPlane;
		let secondPlane;
		let thirdPlane;
		let fourthPlane;
		let fifthPlane;
		let sixthPlane;
		let seventhPlane;
		const delayInit = (() => {
			firstPlane = new TimelineMax();
			const styleDelay = (() => {
				firstText.setAttribute('class', 'banner-text-positionR');
				bannerMoves.setAttribute('class', 'banner-half-position');
				const paperDelay = (() => {
					secondText.setAttribute('class', 'banner-text-positionL');
					bannerMoves.setAttribute('class', 'banner-full-position');
					firstPlane.to(firstPaper, 4.5, {ease: Power1.easeInOut,x: 500, onComplete:secondAnim});
				});
				setTimeout(paperDelay, 2000);
			});
			setTimeout(styleDelay, 2000);
		})
		setTimeout(delayInit, 2000);
	}
	
	function secondAnim () {
		secondPlane = new TimelineMax();
		const styleDelay = (() => {
			firstText.setAttribute('class', 'banner-text-gone-right');
			secondText.setAttribute('class', 'banner-text-gone-left');
			bannerMoves.setAttribute('class', 'banner-scaled-position');
			const animDelay = (() => {
				preFinalText.setAttribute('class', 'banner-text-prefinal-shown');
				textDecoration.setAttribute('class', 'underline-decoration-shown');
				secondPlane.to(secondPaper, 4.5, {ease: Power1.easeInOut,x: 550,y: -450, onComplete:thirdAnim});
			});
			setTimeout(animDelay, 2000);
		});
		setTimeout(styleDelay, 2000);
	};
	
	function thirdAnim () {
		thirdPlane = new TimelineMax();
		fourthPlane = new TimelineMax();
		fifthPlane = new TimelineMax();
		sixthPlane = new TimelineMax();
		seventhPlane = new TimelineMax();
		const animDelay = (() => {
			preFinalText.setAttribute('class', 'banner-text-prefinal');
			finalText.setAttribute('class', 'banner-text-final-shown');
			thirdPlane.to(thirdPaper, 4.5, {ease: Power1.easeInOut,x: 200,y: -400});
			fourthPlane.to(fourthPaper, 4.5, {ease: Power1.easeInOut,x: 300,y: -400});
			fifthPlane.to(fifthPaper, 3.5, {ease: Power1.easeInOut,x: 400,y: -400});
			sixthPlane.to(sixthPaper, 4.5, {ease: Power1.easeInOut,x: 500,y: -400});
			seventhPlane.to(seventhPaper, 3.5, {ease: Power1.easeInOut,x: 600,y: -400});
			const clearAnim = (() => {
				finalText.setAttribute('class', 'banner-text-final');
				textDecoration.setAttribute('class', 'underline-decoration');
				bannerMoves.setAttribute('class', 'banner-cleared-position');
			});
			setTimeout(clearAnim, 4000);
		});
		setTimeout(animDelay, 2000);
	};
}());
