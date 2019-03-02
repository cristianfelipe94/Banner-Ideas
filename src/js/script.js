(function iife() {
  const startAction = document.getElementById('js-start-animation');
  const bannerContainer = document.getElementById('js-banner-container');

  const preFinalText = document.getElementById('js-prefinal-text');
  const finalText = document.getElementById('js-final-text');
  const textDecoration = document.getElementById('js-underline-decoration');

  const bannerMoves = document.getElementById('js-banner-position');

  const firstText = document.getElementById('js-first-text');
  const secondText = document.getElementById('js-second-text');

  const firstAnimation = (() => {
    firstText.setAttribute('class', 'banner-text-positionR');
    bannerMoves.setAttribute('class', 'banner-half-position');
  });

	const secondAnimation = (() => {
		secondText.setAttribute('class', 'banner-text-positionL');
		bannerMoves.setAttribute('class', 'banner-full-position');
	});

	const scaledAnimation = (() => {
		bannerMoves.setAttribute('class', 'banner-scaled-position');
		firstText.setAttribute('class', 'banner-text-gone-right');
		secondText.setAttribute('class', 'banner-text-gone-left');
	});

	const preFinalTextAnimation = (() => {
		preFinalText.setAttribute('class', 'banner-text-prefinal-shown');
		textDecoration.setAttribute('class', 'underline-decoration-shown');
	});

	const finalTextAnimation = (() => {
		preFinalText.setAttribute('class', 'banner-text-prefinal');
		finalText.setAttribute('class', 'banner-text-final-shown');
	});

	const clearText = (() => {
		finalText.setAttribute('class', 'banner-text-final');
		textDecoration.setAttribute('class', 'underline-decoration');
	});

	const clearAnimation = (() => {
		bannerMoves.setAttribute('class', 'banner-cleared-position');
	});

	const fullAnimation = function () {
		setTimeout(firstAnimation, 3000);
		setTimeout(secondAnimation, 6000);
		setTimeout(scaledAnimation, 9000);
		setTimeout(preFinalTextAnimation, 12000);
		setTimeout(finalTextAnimation, 15000);
		setTimeout(clearText, 18000);
		setTimeout(clearAnimation, 19000);
	};
	setInterval(fullAnimation, 19000);
}());
