# fluky
### A random number generator for JavaScript.
The **fluky** constructor can be accessed one of two ways.

You use the constructor to create a custom **fluky** object that you can use to create random numbers.

```
var myRandomNumber = Fluky();
```

```
var myRandomNumber = f$();
```

The **fluky** constructor accepts three optional arguments.

```
Fluky(lowest, highest, fixed);
```

**lowest-** The lowest number that you want the random number to be. The default value is 0.

**highest-** The highest number that you want the random number to be. The default value is 100.

**fixed-** How many decimal places you want to the random number to have. The default value is 0.

If you provide a value other than a number or if you do not provide a value at all, then the default value will be applied to that parameter. You can provide just the arguments you want or no arguments at all. To skip a parameter, just use an underscore `_` in the place of the argument you want to skip.

If you wanted to only provide the ***highest*** and ***fixed*** arguments, then it would look something like this:

```
var myFluky = Fluky(_, 50, 2);
```

This would apply the default value of 0 to the ***lowest*** parameter and keep only the arguments you provided. In this example, you would receive random numbers with two decimal places between 0 and 50 each time you invoked the `new( )` method. (see below)

Once you create your **fluky** object, you can create as many new instances of your object as you want using the `new( )` method.

```
var myFluky = Fluky(1, 50, 0);
var newRandomNumber = myFluky.new();
var anotherRandomNumber = myFluky.new();
```
If you are just planning on using your **fluky** object once, then you can create it and invoke the `new()` method at the same time.

```
var myFluky = Fluky(1, 50, 0).new();
```

By doing it this way, you are actually saving the return value of the `new( )` method, which is the value of the ***value*** property and not the actual object. Therefore, you would no longer have the ability to generate new numbers with this object.

Under the hood, a new ***value*** property is added to your **fluky** object the first time you call the `new( )` method on that object. Then, that property is simply updated with a new random number each time you invoke the `new( )` method.

You can access the value of this property at any time by simply accessing the ***value*** property on the object. This value is overwritten each time you call the `new( )` method.

```
anotherRandomNumber.value;
```

Would you like to know how many attempts it took get your random number? You can find out with the ***attempts*** property. This is also logged to the console by default when you call the `new( )` method.

```
anotherRandomNumber.attempts;
```
##Enjoy!
