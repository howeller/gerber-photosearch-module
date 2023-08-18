const cl = txt => console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;');

const id = txt => document.getElementById(txt);

function debounce(func, delay = 250) {
	let timerId;
	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

export { cl, id, debounce };