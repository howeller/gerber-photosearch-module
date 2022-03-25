import gsap from 'gsap';
import { cl, id } from './utils';

(function(window, document){

	let tl, txt, windowWidth;

	function init(e){
		cl('init');
		windowWidth = window.innerWidth;
		gsap.set('.hero',{visibility:'visible'});
		startAnimation(windowWidth);
	}

	function startAnimation() {
		cl(windowWidth);

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
		let _waveSp = 6.5;

		tl
			.add('start')
			.fromTo('#wave_dt', { /*x:'-50%', */y:'100%', skewX:.01},{y:0},'start')
			.fromTo('#logo-wrapper', { scale:0, x:getCenterX('#logo-wrapper'), y:'50px', skewX:.1}, { scale:1.1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'},'start')
			.add(popInTl('#burst-logo','bottom right'))
			.to('#wave_dt', {  x:getWaveX('#wave_dt'), duration: _waveSp, ease:'power2.inOut'})
			.to('#logo-wrapper', { scale: 1, x: '20%', duration: _waveSp, ease:'power3.inOut'}, '-='+_waveSp)
			.add('frame2','-=1.5')
			.add(popInTl('#book'), 'frame2')
			.add('end', 'frame2+=0.75')
			.add(kidRollInTl('#kid1', 1.5, 360), 'end')
			.add(kidRollInTl('#kid3', 1, 360), 'end')
			.add(kidRollInTl('#kid2', 1, -360), 'end')
			.add(kidRollInTl('#kid4', 1.5, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end+=.3')
			.add(enterBubInTl({x:0, rotation:-5}),'-=1')
			.add(popInTl('#hearts', 'bottom left'), '-=1')
			.add(txtInTl(), '-=0.5')
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#arrow-enter', '0% 100%'), '+=.5')
			.add(popInOutTl('#hearts','bottom left'), '+=3')
			.add(popInOutTl('#heart'), '+=.5')
			// .seek('end')
			// tl.pause(.6);
	}

	function animateTablet() {
		cl('animateTablet!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});
		let _waveSp = 6.5;
	
		tl
			.add('start')
			.fromTo('#wave_tab', { y:'100%', skewX:.01},{y:0, duration:.5},'start')
			// .fromTo('#wave_tab', { x:'-50%', y:'100%'},{y:0})
			.fromTo('#logo-wrapper', { scale:0, x:0, y:'50%', skewX:.1 }, { scale:1.4, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'},'start')
			.add(popInTl('#burst-logo','bottom right'))
			.add('frame2','+=1')
			.to('#wave_tab', {  x:getWaveX('#wave_tab'), duration: _waveSp, ease:'power2.inOut'}, 'frame2')
			.to('#logo-wrapper', { scale: 1, y:0, duration: _waveSp/2, ease:'power3.inOut'}, 'frame2')
			.add(popInTl('#book'), '-='+(_waveSp/3))
			.add('end','-=1')
			.add(popInTl('#hearts'), 'end')
			.add(kidRollInTl('#kid1', 1.3, -360), 'end')
			.add(kidRollInTl('#kid2', 0.8, 360), 'end')
			.add(kidRollInTl('#kid3', 1.3, 360), 'end')
			.add(kidRollInTl('#kid4', 1.3, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end')
			.add(enterBubInTl(),'-=0.6')
			.add(txtInTl(),'-=0.4')
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#arrow-enter', '0% 100%'), '+=.5')
			.add(popInOutTl('#hearts'), '+=3')
			.add(popInOutTl('#heart'), '+=1')
			.add(popInOutTl('#stars'), '+=1')
			// .seek('end')
			// tl.pause(.6);
	}

	function animateMobile() {
		cl('animateMobile!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});
		let _waveSp = 6.5;

		tl.add('start')
			.fromTo('#wave_m', { y:'100%', skewX:.01},{y:0},'start')
			.fromTo('#logo-wrapper', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.2)'}, 'start')
			.add(popInTl('#burst-logo','bottom right'))
			.add(popInTl('#hearts'), '-=.3')
			.add(popInTl('#heart'), '-=.3')
			.add('frame2','-=1')
			.to('#wave_m', {  x:getWaveX('#wave_m'), duration: _waveSp, ease:'power3.inOut'}, 'frame2')
			.add(popInTl('#book'),'frame2+='+(_waveSp/2))
			.add('end', 'frame2+='+(_waveSp-1.75))
			.add(kidRollInTl('#kid1', 1.1, -360), 'end')
			.add(kidRollInTl('#kid2', 1.1, 360), 'end')
			.add(kidRollInTl('#kid4', 1.1, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end+=0.5')
			.add(enterBubInTl(), '-=1')
			.add(txtInTl(), '-=0.5')
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#arrow-enter', '0% 100%'), '+=.5')
			.add(popInOutTl('#hearts'), '+=2')
			.add(popInOutTl('#heart'), '+=1')
			.add(popInOutTl('#stars'), '+=1')
			// .seek('end')
			// tl.pause(.6);
	}

	function getWaveX(_id){
		let _props = gsap.getProperty(_id),
			_distanceX = windowWidth - _props('width');
		// cl('getWaveX '+_id);	
		// cl('getWaveX '+_distanceX);
		return _distanceX;
	}

	function popInOutTl(_id, _origin='50% 50%', _repeat=-1) {
		let _delay = _repeat >= 0 ? 0 : 10; // Do not add delay if repeat # is passed in.
		return gsap.timeline({defaults:{duration:0.5}, repeat:_repeat, repeatDelay:_delay})
			.to(_id, { scale: 0, transformOrigin:_origin, ease:'back.in(1.2)', yoyo:true, repeat:1})
	}

	function popInTl(_id, _origin='50% 50%') {
		return gsap.timeline()
			.fromTo(_id, { scale:0, y:0 }, { duration:0.5, scale:1, transformOrigin:_origin, ease:'back.out(1.2)'});
	}
	function txtInTl(){

		return gsap.timeline()
			.fromTo('#txt', { scale:0, y:0 }, { duration:1, scale:1, transformOrigin:'0% 50%', ease:'back.out(1.2)'})
			.fromTo('#txt span', { alpha:0 }, {alpha:1, duration: 0.2, ease:'none', stagger:0.1 },'-=1')
	}

	function enterBubInTl( _prop={x:0, rotation:-5}){
		return gsap.timeline({ defaults:{ ease:'back.out(1.2)', transformOrigin:'50% 50%' }})
			.set('#enter',{ x:_prop.x, rotation:_prop.rotation, transformOrigin:'50% 50%',})
			.fromTo('#enter-back', { scale:0, y:0 }, { scale:1, duration:0.5})
			.fromTo('#enter-txt', { scale:0, y:0 }, { scale:1, duration:0.4}, '-=.3' )
			.fromTo('#arrow-enter', { scale:0, y:'50%', x:'-50%' }, { scale:1, duration:0.4, transformOrigin:'0% 100%'}, '-=.3' )
			.fromTo('#burst-enter .cls-3', { scale:0, y:0, x:0 }, { x:0, scale:1, duration:0.2, stagger:.1, ease:'back.out(1.5)', transformOrigin:'0% center'}, '-=0.5')
			// .add(popInTl('#burst-enter', '0% 50%'),'-=0.5')
	}
	function kidRollInTl(_id, _speed, _startRotation ) {
		let props = getKidTweenProps(_id);

		return gsap.timeline({defaults:{duration:_speed, ease:'power3.out'}})
			.fromTo(_id, { x:props.x, y:props.y, rotation:_startRotation, scale:0.5}, { display:'block', x:0, y:0, rotation:0, scale:1, transformOrigin:'50% 50%'});
	}
	function getKidTweenProps(_id) {
		let _bubProp = gsap.getProperty('#bubble-wrapper'),
			_kidProp = gsap.getProperty(_id),
			_bw = _bubProp('width'),
			_bh = _bubProp('height'),
			_centerX = _bubProp('left') + (_bw/2),
			_kidX = _kidProp('left','px'),
			_kidW = _kidProp('width','px'),
			_kidH = _kidProp('height','px'),
			_kidY = _kidProp('top','px'),
			_distanceX = (_kidX-(_kidW/2)) *-1,
			_distanceY = (_kidY-(_bh/2)) *-1;
		// console.group(_id);
		// cl(`'bubLEFT ${_bubProp('left')}`);
		// cl('_centerX '+_centerX);
		// cl(' _kidX '+ _kidX);
		// cl(' _distanceX '+ _distanceX);
		// cl(' _kidY '+ _kidY);
		// cl(' _distanceY '+ _distanceY);
		// console.groupEnd();
		return { x:_distanceX, y:_distanceY };
	}

	function getCenterX(_id){
		return Math.round(windowWidth / 2 - (gsap.getProperty(_id, 'width') / 2));
		// cl('	getCenterX '+x);
		// return x;
	}

	window.addEventListener('load', init);
	window.addEventListener('resize', onResize, true);
	
})(window, document)