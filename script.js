// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var strOne = "I am a ";
var strTwo = "Kalvian. "
var result = strOne + strTwo;
console.log(result);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var sentence = 'If you fail, never give up because FAIL means \"First Attempt In Learning\"';
console.log(sentence); 


// Challenge 3: Store a string in a variable and display the length of the string.
var string = "kalvium";
var length = string.length;
console.log(length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
var upperCase = result.toUpperCase();
console.log(upperCase);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var lvPrgm = "I love programming";
var lVPrgm2 = lvPrgm.replace("programming","JavaScript programming");
console.log(lVPrgm2);


// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var repeated = result.repeat(3);
console.log(repeated);

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var array = result.split(" ");
console.log(array);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var stringThree = "Time and Tide wait for none";
var index = stringThree.indexOf("Ti");
console.log(index);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var stringFour = "When life gives you lemons make lemonade";
var includes = stringFour.includes("lemon");
console.log(includes);


// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var stringFive = "You must be the change you wish to see in the world."
var sliced = stringFive.slice(16,22);
console.log(sliced);
var subtract = stringFive.substring(46,51);
console.log(subtract);