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
		let kid1 = {x: -345, y: 156, scale: .35, startRotation: 360, speed: 1 },
				kid2 = {x: -185, y: 115, scale: .7, startRotation: 360, speed: 0.5 },
				kid3 = {x: 330, y: 100, scale: .4, startRotation: -360, speed: 0.5 },
				kid4 = {x: 555, y: 126, scale: .8, startRotation: -360, speed: 1 };

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl
			.fromTo('#wave_dt', { x:'-50%', y:'100%'},{y:0})
			// .fromTo('#wave_dt', { x:0, y:'100%'},{ y:0})
			.fromTo('#logo', { scale:0, x:getCenterX('#logo'), y:'50px'}, { scale:1.1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=1')
			.to('#logo', { scale: 1, x: '20%', duration: 2}, 'frame2')
			.to('#wave_dt', { x:0, y:'55%', duration: 1}, 'frame2')
			// .fromTo('#book', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'}, '-=.5')
			// .fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add(popInTl('#book'), '-=.5')
			.add('end')
			.add(rollInTl('#kid1', kid1), 'end')
			.add(rollInTl('#kid2', kid2), 'end')
			.add(rollInTl('#kid3', kid3), 'end')
			.add(rollInTl('#kid4', kid4), 'end')
			.add(spinInTl('#enter'))
			.add(popInTl('#txt'))
			.seek('frame2')
			// tl.pause(.6);
	}

	function animateTablet() {
		cl('animateTablet!');
		let kid3 = {x: -375, y: 77, scale: .6, startRotation: 360, speed: 1 },
				kid2 = {x: -180, y: 95, scale: 1, startRotation: 360, speed: 0.5 },
				kid4 = {x: 307, y: 10, scale: 1, startRotation: -360, speed: 0.5 },
				kid1 = {x: 483, y: 10, scale: .6, startRotation: -360, speed: 1 };

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});
	
		tl
			.fromTo('#wave_tab', { y:'100%'},{y:0, duration:.5})
			// .fromTo('#wave_tab', { x:'-50%', y:'100%'},{y:0})
			.fromTo('#logo', { scale:0, x:0, y:'50%' }, { scale:1.4, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=1')
			.to('#logo', { scale: 1, y:0, duration: 1}, 'frame2')
			.to('#wave_tab', {  x:'-50%', y:'52%', duration: 1}, 'frame2')
			.add(popInTl('#book'), '-=.5')
			.add('end')
			.add(rollInTl('#kid1', kid1), 'end')
			.add(rollInTl('#kid2', kid2), 'end')
			.add(rollInTl('#kid3', kid3), 'end')
			.add(rollInTl('#kid4', kid4), 'end')
			.add(spinInTl('#enter'))
			.add(popInTl('#txt'))
			// .fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			// .seek('end')
			// tl.pause(.6);
	}

	function animateMobile() {
		cl('animateMobile!');
		let kid2 = {x: -200, y: 200, scale: .65, startRotation: 360, speed: 0.5 },
				kid1 = {x: 380, y: -6, scale: .5, startRotation: -360, speed: 0.5 },
				kid4 = {x: 275, y: 330, scale: .85, startRotation: -360, speed: 0.5 };

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl
			.fromTo('#wave_m', { y:'100%'},{y:0})
			.fromTo('#logo', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			.add('frame2','+=.1')
			.to('#wave_m', {  x:'-50%', y:'45%', duration: 1}, 'frame2')
			// .fromTo('#book', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)'}, '-=.5')
			.add(popInTl('#book'))
			.add('end')
			.add(rollInTl('#kid1', kid1), 'end')
			.add(rollInTl('#kid2', kid2), 'end')
			.add(rollInTl('#kid4', kid4), 'end')
			.fromTo('#enter', { scale:0, y:0, rotation:180 }, { rotation:-5, scale:1, transformOrigin:'50% 50%', ease:'back.out(1.3)', duration:0.8})
			.fromTo('#logo-wrapper', {y:0}, { y:'-10%', duration: 1})
			.add(popInTl('#txt'))
			// .fromTo('#txt', {scale:0},{ scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'})
			// .seek('end')
			// tl.pause(.6);
	}
	function rollInTl(elId, kid){
		return gsap.timeline()
			.fromTo(elId, { x:0, y:'25%', rotation:kid.startRotation, scale:.2}, 
				{ duration:kid.speed, display:'block', x:kid.x ,y:kid.y, rotation:0, scale:kid.scale, transformOrigin:'50% 50%', ease:'power3.inout'});
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