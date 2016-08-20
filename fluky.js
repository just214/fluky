;(function(global) {

	global._ = undefined;

	let Fluky = (...args) => {

		var newArr = [];
		var finalArr = [];
		var mappedArgs = args.map((item)=>{ 
			item = Number(item);
			newArr.push(item);
		});
		var testArgs = newArr.map((item)=>{ 
			if (typeof item !== 'number' || item === 0 || isNaN(item)){
				item = undefined;
			}
				finalArr.push(item);
		});
		if (finalArr[0] >= finalArr[1]) {
			throw new Error("The starting number must be less than the ending number.");
		}
		if (finalArr[2] > 20) {
			finalArr[2] = 20;
			console.warn("Your decimal parameter has been changed to the maximum number of 20.");
		}
		return new FlukyInit(...finalArr);
	}

	class FlukyInit {
		constructor(start = 1, end = 100, decimals = 0) {
			this.start = start;
			this.end = end;
			this.decimals = decimals;
			this.value = '';
			this.attempts = 0;
		}
		new() {
			var randomNumber = Math.random() * this.end;
			this.attempts += 1;
			this.checker(randomNumber);
			return this.value;

		}
		checker(num) { 
			if (num < this.start) {
				this.new();
			} else {
				let result = Number(num.toFixed(this.decimals));
				this.value = result;
				console.log(`Attempts: ${this.attempts}`);
			}
		}		
	}
	global.Fluky = global.f$ = Fluky;

}(window));

