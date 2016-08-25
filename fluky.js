;(function(global) {
	global._ = undefined;
	let Fluky = (...args) => {
		var mappedArr = [];
		var mapArgs = args.map((item)=>{ 
			item = Number(item);
			if (typeof item !== 'number' || item === 0 || isNaN(item)){
				item = undefined;
			}
			mappedArr.push(item);
		});

		if (mappedArr[0] >= mappedArr[1]) {
			throw new Error("The lowest number must be less than the highest number.");
		}

		if (mappedArr[2] > 20) {
			mappedArr[2] = 20;
			console.warn("There is a limit of 20 decimal places and may vary by browser.");
		}
		return new FlukyInit(...mappedArr);
	}

	class FlukyInit {
		constructor(lowest = 1, highest = 100, fixed = 0) {
			this.lowest = lowest;
			this.highest = highest;
			this.fixed = fixed;
		}
		new() {
			let diff = this.highest - this.lowest;
			let num  = Math.random() * diff + this.lowest; 
			this.value = num.toFixed(this.fixed);
			return this.value;
		}		
	}
	
	global.Fluky = global.f$ = Fluky;

}(window));
