// Create an IIFE that wraps our code and accepts one argument, the Window object in this case. 
;(function(global) {

	// We are adding a property to the global Window object that we passed in as
	// an argument. This allows the user to use an underscore as an argument 
	// replacement if they want to skip over a parameter.
	global._ = undefined;

	// This arrow function serves the purpose of parsing and coercing the arguments
	// and creating an instance of our class with the revised
	// arguments in a new array. This keeps the user from having to type 'new' each time.

	let Fluky = (...args) => {

		//This array will hold the value of our mapped return value below.
		var mappedArr = [];

		// Map over the arguments and attempt to coerce
		// each one into a number. Set each element item that is not a number 
		// greater than 0 to undefined so the default values will apply.
		//  Push the new values to the mappedArr we defined above.

		var mapArgs = args.map((item)=>{ 
			item = Number(item);
			if (typeof item !== 'number' || item === 0 || isNaN(item)){
				item = undefined;
			}
			mappedArr.push(item);
		});

		// Make sure that the 'lowest' argument is not greater than
		// the 'highest' argument. If so, throw an error.
		if (mappedArr[0] >= mappedArr[1]) {
			throw new Error("The lowest number must be less than the highest number.");
		}

		// Make sure that the 'fixed' argument is not more than 20 characters.
		// If so, change to 20 and notify in the console.
		// This is because .toFixed() will throw an error
		// if you pass in a number greater than 20.
		if (mappedArr[2] > 20) {
			mappedArr[2] = 20;
			console.warn("There is a limit of 20 decimal places and may vary by browser.");
		}

		// Finally, instantiate the class, passing in the 
		// new array as arguments.
		return new FlukyInit(...mappedArr);
	}

	class FlukyInit {

		// Set the default values using ES2015 syntax.
		constructor(lowest = 1, highest = 100, fixed = 0) {

			//Bind the arguments
			this.lowest = lowest;
			this.highest = highest;
			this.fixed = fixed;
		}

		new() {

			// This is the math to get the random number based on argument values.
			// Let's say the user wanted a random whole number between 40 & 60
			// Math.random() returns a value between 0 and 1
			// 60 - 40 = 20
			// 20 * Math.random() = Some value between 0 and 20. 
			// That number plus 40 will result in a final value between 40 and 60

			let diff = this.highest - this.lowest;
			let num  = Math.random() * diff + this.lowest; 

			// Save the final value to a fixed number, passing in the user's 'fixed'
			// argument or default value if they did not provide one. 
			this.value = num.toFixed(this.fixed);

			// Finally, return the value of this.value.
			return this.value;
		}	
	
	}

	// We are setting two global variables that we can use to access our
	// constructor. Fluky() & f$()
	global.Fluky = global.f$ = Fluky;

// Pass in the Window object as an argument to our IIFE so that we have 
// access to the global object to create the global properties above. 
}(window));

