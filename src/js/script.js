(function iife() {
  const bannerContainer = document.getElementById('js-banner-container');

  const preFinalText = document.getElementById('js-prefinal-text');
  const finalText = document.getElementById('js-final-text');
  const textDecoration = document.getElementById('js-underline-decoration');

  const bannerMoves = document.getElementById('js-banner-position');

  const firstText = document.getElementById('js-first-text');
	const secondText = document.getElementById('js-second-text');

	const firstPaper = document.getElementById('js-first-paper');

	const secondPaper = document.getElementById('js-second-paper');

	function PaperPlanerTemplate(width, x, y, position, zIndex, rotate, src, paperClass) {
		this.width = width;
		this.x = x;
		this.y = y;
		this.position = position;
		this.zIndex = zIndex;
		this.rotate = rotate;
		this.src = src;
		this.paperClass = paperClass;

		const img = document.createElement('img');
		img.style.width = `${this.width}px`;
		img.style.top = `${this.x}%`;
		img.style.left = `${this.y}%`;
		img.style.position = this.position;
		img.style.zIndex = this.zIndex;
		img.style.transform = this.rotate;
		img.setAttribute('src', this.src);
		img.setAttribute('class', this.paperClass);
		bannerContainer.appendChild(img);
	}

	let newPaper1 = new PaperPlanerTemplate('55', '110', '-90', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper2 = new PaperPlanerTemplate('55', '90', '-110', 'absolute', '1000', 'rotate(30deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper3 = new PaperPlanerTemplate('55', '60', '-80', 'absolute', '1000', 'rotate(40deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper4 = new PaperPlanerTemplate('55', '80', '-50', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper5 = new PaperPlanerTemplate('55', '100', '-20', 'absolute', '1000', 'rotate(40deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper6 = new PaperPlanerTemplate('55', '140', '-10', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper7 = new PaperPlanerTemplate('55', '110', '20', 'absolute', '1000', 'rotate(10deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper8 = new PaperPlanerTemplate('55', '150', '-80', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
	let newPaper9 = new PaperPlanerTemplate('55', '130', '-50', 'absolute', '1000', 'rotate(30deg)', 'assets/paperplane.png', 'default-paper');

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
		const pappersDom = document.querySelectorAll('.default-paper');
		pappersDom.forEach((element) => {
			const paperElement = element;
			paperElement.style.top = '';
			paperElement.style.left = '';
			paperElement.setAttribute('class', 'paperplane-corner-showing');
		});
	});

	const clearText = (() => {
		finalText.setAttribute('class', 'banner-text-final');
		textDecoration.setAttribute('class', 'underline-decoration');
	});

	const clearAnimation = (() => {
		const pappersClearDom = document.querySelectorAll('.paperplane-corner-showing');
		pappersClearDom.forEach((element) => {
			element.parentNode.removeChild(element);
		});
		firstPaper.setAttribute('class', 'paperplane-hidden');
		secondPaper.setAttribute('class', 'paperplane-corner-hidden');
		bannerMoves.setAttribute('class', 'banner-cleared-position');
		newPaper1 = new PaperPlanerTemplate('55', '110', '-90', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
		newPaper2 = new PaperPlanerTemplate('55', '90', '-110', 'absolute', '1000', 'rotate(30deg)', 'assets/paperplane.png', 'default-paper');
		newPaper3 = new PaperPlanerTemplate('55', '60', '-80', 'absolute', '1000', 'rotate(40deg)', 'assets/paperplane.png', 'default-paper');
		newPaper4 = new PaperPlanerTemplate('55', '80', '-50', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
		newPaper5 = new PaperPlanerTemplate('55', '100', '-20', 'absolute', '1000', 'rotate(40deg)', 'assets/paperplane.png', 'default-paper');
		newPaper6 = new PaperPlanerTemplate('55', '140', '-10', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
		newPaper7 = new PaperPlanerTemplate('55', '110', '20', 'absolute', '1000', 'rotate(10deg)', 'assets/paperplane.png', 'default-paper');
		newPaper8 = new PaperPlanerTemplate('55', '150', '-80', 'absolute', '1000', 'rotate(20deg)', 'assets/paperplane.png', 'default-paper');
		newPaper9 = new PaperPlanerTemplate('55', '130', '-50', 'absolute', '1000', 'rotate(30deg)', 'assets/paperplane.png', 'default-paper');
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
