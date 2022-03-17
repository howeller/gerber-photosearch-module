(function(window, document){

	let tl;

	const cl = (txt) => console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;');
	const id = txt => document.getElementById(txt);

	// function cl(txt){console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;'); }
	// function id(id){return document.getElementById(id); }
	console.group('Gerber Hero');
	function init(e){
		cl('INIT');
		startAnimation(e);
	}

	function startAnimation(windowWidth) {
		console.table(windowWidth);

		if (windowWidth > 1200) {
			animateDesktop();
		} else {
			animateMobile();
		}
	}

	function onResize(event) {
		cl('onResize: '+event.target.innerWidth);
		tl.kill();
		startAnimation(event.target.innerWidth);
	}

	function animateDesktop() {
		cl('animateDesktop!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:1, ease:'power3.out' }});

		tl.fromTo(['.subhead','h1'], {alpha:0, x:'-30px'},{alpha:1, x:'0px', stagger: .75})

	}

	function animateMobile() {
		cl('animateMobile!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl.fromTo(['.subhead','h1'], {alpha:0, y:'-20px'},{alpha:1, y:'0px', stagger: .75})

	}
	console.groupEnd();
	window.addEventListener('load', init);
	window.addEventListener('resize', onResize, true);
	
})(window, document)