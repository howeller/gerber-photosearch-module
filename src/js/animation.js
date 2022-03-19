(function(window, document){

	let tl, windowWidth;

	const cl = txt => console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;');
	const id = txt => document.getElementById(txt);

	// console.group('Gerber Hero');
	function init(e){
		cl('init');
		windowWidth = window.innerWidth;
		gsap.set('.hero',{visibility:'visible'});
		startAnimation(windowWidth);
	}

	function startAnimation() {
		console.table(windowWidth);

		if (windowWidth > 1024) {
			animateDesktop();
		}
		else if (windowWidth > 780) {
			animateTablet();
		} 
		else {
			animateMobile();
		}
	}

	function onResize(event) {
		windowWidth = event.target.innerWidth;
		tl.seek(0);
		tl.kill();
		cl('onResize: '+windowWidth);
		startAnimation();
	}

	function animateDesktop() {
		cl('animateDesktop!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl
			.fromTo('#wave_dt', { x:0, y:'100%'},{y:0})
			.fromTo('#logo', { scale:0, x:getCenterX('#logo'), y:'50px'}, { scale:1.1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=1')
			.to('#logo', { scale: 1, x: '20%', duration: 2}, 'frame2')
			.to('#wave_dt', { x:'-50%', y:'60%', duration: 2}, 'frame2')
			.fromTo('#book', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'}, '-=.5')
			.fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			// .seek('frame2')
			// tl.pause(.6);
	}

	function animateTablet() {
		cl('animateTablet!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});
	
		tl
			.fromTo('#wave_tab', { y:'100%'},{y:0, duration:.5})
			// .fromTo('#wave_tab', { x:'-50%', y:'100%'},{y:0})
			.fromTo('#logo', { scale:0, x:0, y:'50%' }, { scale:1.4, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=1')
			.to('#logo', { scale: 1, y:0, duration: 1/*, marginTop:'1.5rem'*/}, 'frame2')
			.to('#wave_tab', {  x:'-50%', y:'45%', duration: 1}, 'frame2')
			// .to('#wave_tab', { x:0, y:'50%', duration: 1}, 'frame2')
			// .fromTo('#book', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'}, '-=.5')
			.add(popInTl('#book'))
			.add(spinInTl('#enter'))
			.add(popInTl('#txt'))
			// .fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.seek('frame2')
			// tl.pause(.6);
	}

	function animateMobile() {
		cl('animateMobile!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl
			.fromTo('#wave_m', { y:'100%'},{y:0})
			.fromTo('#logo', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=.1')
			.to('#wave_m', {  x:'-50%', y:'45%', duration: 1}, 'frame2')
			// .fromTo('#book', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'}, '-=.5')
			.add(popInTl('#book'))
			// .add(spinInTl('#enter'))
			.fromTo('#enter', { scale:0, y:0, rotation:180 }, { rotation:-5, scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)', duration:0.8}, '-=.5')
			.fromTo('#logo-wrapper', {y:0}, { y:'-10%', duration: 1})
			.add(popInTl('#txt'))
			// .fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.seek('frame2')
			// tl.pause(.6);
	}

	function popInTl(elId, speed=0.5){
		return gsap.timeline()
			.fromTo(elId, { scale:0, y:0 }, { duration:speed, scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'});
	}
	function spinInTl(elId, speed=0.8){
		return gsap.timeline()
			.fromTo(elId, { scale:0, rotation:180 }, { duration:speed, rotation:0, scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'});
	}

	function getCenterX(elId){
		return Math.round(windowWidth / 2 - (gsap.getProperty(elId, 'width') / 2));
		// cl('	getCenterX '+x);
		// return x;
	}

	// console.groupEnd();
	window.addEventListener('load', init);
	window.addEventListener('resize', onResize, true);
	
})(window, document)