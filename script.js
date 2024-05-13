
/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  

/*
Exercise 2: isAdult()
Write a function named isAdult. 
It should take an age (number) and return 'Adult' 
if the age is 18 or over and 'Minor' otherwise.
Example: isAdult(21) should return 'Adult'.
Complete the exercise in the space below:
*/

const isAdult = function (age){
 if (age >=18) {
    return 'adult'
 } else {
    return 'minor'
 }
}

console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. 
It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/


function isCharAVowel(char){
 if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char ==='u'){
    return true;
 } else {
    return false
 }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("e"));
console.log('Exercise 3 Result:', isCharAVowel("i"));
console.log('Exercise 3 Result:', isCharAVowel("o"));
console.log('Exercise 3 Result:', isCharAVowel("u"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

let name = 'janedoe';
let domain = 'example.com';

console.log('Exercise 4 Result:', generateEmail(name, domain));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


function greetUser(name, timeOfDay) {
    if (timeOfDay === 'morning') {
        return 'Good morning,' + name + '!';
    } else if (timeOfDay === 'afternoon'){
        return 'Good afternoon,' + name + '!';
    } else if (timeOfDay === 'evening') {
        return 'Good evening,' + name + '!';
    } else {
        return 'Hello,' +name ;
    }
}

console.log('Exercise 5 Result:', greetUser("Bob", "morning"));
console.log('Exercise 5 Result:', greetUser("Bob", "afternoon"));
console.log('Exercise 5 Result:', greetUser("Bob", "evening"));


/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString (reverse) {
    let reverseString = "";
    for (let x = reverse.length - 1; x>=0; x--){ 
        reverseString = reverseString + reverse[x];
    } 
    return reverseString;
}

console.log('Exercise 6 Result:', reverseString("rockstar"));

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome (check) {
let mirror = ""
    for(let y = check.length -1; y>=0; y--){
        mirror = mirror + check [y];
}
return mirror === check;
}

console.log('Exercise 7 Result:', checkPalindrome("radar"));















 














