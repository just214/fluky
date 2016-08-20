;(function(global) {

	// We are adding a property to the global object that we passed in as
	// an argument. This is the exact same thing as setting a global variable.
	//This allows the user to use an underscore as an argument replacement
	//if they want to skip over a parameter.
	global._ = undefined;

	//this arrow function serves the purpose of parsing and coercing the arguments
	//and creating an instance of our class with the revised
	//arguments in a new array. This keeps the user from having to type 'new'

	let Fluky = (...args) => {

		//These arrays will hold the new values through each step
		//of the parsing and coercing.
		var newArr = [];
		var finalArr = [];

		// Map over the arguments and attempt to coerce
		// each one into a number. Push the new values to a new array.
		var mappedArgs = args.map((item)=>{ 
			item = Number(item);
			newArr.push(item);
		});

		// Map over the new array and set any value that
		// is not a number to 'undefined' so that the default
		// values will apply. Push the new values to a new array. 
		var testArgs = newArr.map((item)=>{ 
			if (typeof item !== 'number' || item === 0 || isNaN(item)){
				item = undefined;
			}
				finalArr.push(item);
		});

		// Make sure that the 'start' argument is not greater than
		// the 'end' argument. If so, throw an error.
		if (finalArr[0] >= finalArr[1]) {
			throw new Error("The starting number must be less than the ending number.");
		}

		// Make sure that the 'decimal' argument is not more than 20 characters.
		// If so, change to 20 and send message to the console. 
		// This is because .toFixed() will throw an error
		// if you pass in a number greater than 20.
		if (finalArr[2] > 20) {
			finalArr[2] = 20;
			console.warn("Your decimal parameter has been changed to the maximum number of 20.");
		}

		// Finally, instantiate the class, passing in the 
		// new array as arguments.
		return new FlukyInit(...finalArr);
	}

	class FlukyInit {

		// Set the default values using ES2015 syntax.
		constructor(start = 1, end = 100, decimals = 0) {

			//Bind the arguments and set a new 'value' property to 
			//hold the new number each time we call the new() method.
			this.start = start;
			this.end = end;
			this.decimals = decimals;
			this.value = '';
		}
		new() {

			// Generate a random number not to exceed the 
			// value of the 'end' parameter.
			var randomNumber = Math.random() * this.end;

			// Run the number through the checker() method.
			this.checker(randomNumber);

			// Finally, return the final value. 
			return this.value;
		}
		checker(num) {

			// Check to make sure that the randomly generated number
			// is greater than the 'start' value provided by the user
			// If not, keep running the new() method until it is. 
			if (num < this.start) {
				this.new();
			} else {

				// Once the  generated number is greater than the 'start'
				// value, use the toFixed() method to set the number of
				// decimals, passing in the user's 'decimal' argument provided.
				// Then save the final number to the 'value' property
				// and return to the new() method for the final return. 
				let result = Number(num.toFixed(this.decimals));
				this.value = result;
			}
		}		
	}

	// We are setting two global variables that we can use to access our
	// constructor. Fluky() & f$()
	global.Fluky = global.f$ = Fluky;

}(window));

