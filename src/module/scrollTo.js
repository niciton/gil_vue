export default function(target, offset = 110, speed = 400) {
	if (typeof target === 'string') {
		target = document.querySelector(target);
	}

	target = target || document.querySelector('h1')

	offset = !offset ? 110 : offset;

	if (target) {
		scrollPageTo(target, speed);
	}

	function scrollPageTo(to, duration = 500) {
		const easeInOutQuad = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t + b;
			t--;
			return (-c / 2) * (t * (t - 2) - 1) + b;
		};

		return new Promise((resolve, reject) => {
			const element = document.scrollingElement;

			if (typeof to === 'string') {
				to = document.querySelector(to) || reject();
			}

			if (typeof to !== 'number') {
				to = to.getBoundingClientRect().top + element.scrollTop;
			}

			let start = element.scrollTop,
				change = to - start - offset,
				currentTime = 0,
				increment = 20;

			const animateScroll = function () {
				currentTime += increment;
				let val = easeInOutQuad(currentTime, start, change, duration);
				element.scrollTop = val;
				if (currentTime < duration) {
					setTimeout(animateScroll, increment);
				} else {
					resolve();
				}
			};
			animateScroll();
		});
	}
}