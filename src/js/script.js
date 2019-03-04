(function iife() {
  const startAction = document.getElementById('js-start-animation');
  const bannerContainer = document.getElementById('js-banner-container');

  const preFinalText = document.getElementById('js-prefinal-text');
  const finalText = document.getElementById('js-final-text');
  const textDecoration = document.getElementById('js-underline-decoration');

  const bannerMoves = document.getElementById('js-banner-position');

  const firstText = document.getElementById('js-first-text');
	const secondText = document.getElementById('js-second-text');
	
	const firstPaper = document.getElementById('js-first-paper');

	const secondPaper = document.getElementById('js-second-paper');
	

  const firstAnimation = (() => {
		firstPaper.setAttribute('class', 'paperplane-showing');
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
		secondPaper.setAttribute('class', 'paperplane-corner-showing');
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
		firstPaper.setAttribute('class', 'paperplane-hidden');
		secondPaper.setAttribute('class', 'paperplane-corner-hidden');
		bannerMoves.setAttribute('class', 'banner-cleared-position');
	});

  bannerContainer.addEventListener('click', () => {
		setTimeout(firstAnimation, 3000);
		setTimeout(secondAnimation, 6000);
		setTimeout(scaledAnimation, 9000);
		setTimeout(preFinalTextAnimation, 12000);
		setTimeout(finalTextAnimation, 15000);
		setTimeout(clearText, 18000);
		setTimeout(clearAnimation, 19000);
	});
}());
