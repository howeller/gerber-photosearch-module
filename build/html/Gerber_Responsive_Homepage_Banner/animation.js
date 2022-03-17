(function(window, document){

	let tl;

	const cl = (txt) => console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;');
	const id = txt => document.getElementById(txt);

	// function cl(txt){console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;'); }
	// function id(id){return document.getElementById(id); }
	console.group('Gerber Hero');
	function init(e){
		cl('INIT');
		startAnimation(window.	innerWidth);
	}

	function startAnimation(windowWidth) {
		console.table(windowWidth);

		if (windowWidth > 720) {
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

		tl
			.fromTo('#wave', { y:'100%'},{y:'0%', duration: 2})
			// .add('frame2','+=1')
			.fromTo('#logo', { scale:0}, { scale:1, transformOrigin:'center center', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=1')
			.to('#logo', { scale: .75, duration: 0.3, marginTop:'-1em'}, 'frame2')
			.to('#wave', { x:'50%', y:'300px', duration: 2}, 'frame2')
			.fromTo('.txt-wrapper p', {alpha:0, x:'-30px'},{ alpha:1, x:'0px'})
			// .seek('frame2')

	}

	function animateMobile() {
		cl('animateMobile!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl.fromTo(['.txt-container p'], {alpha:0, y:'-20px'},{alpha:1, y:'0px'/*, stagger: .75*/})

	}
	console.groupEnd();
	window.addEventListener('load', init);
	window.addEventListener('resize', onResize, true);
	
})(window, document)