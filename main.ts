// 1. Install [Node.js](hƩps://nodejs.org/en/), [TypeScript](hƩps://www.typescriptlang.org/download) and
// [VS Code](hƩps://code.visualstudio.com/) on your computer.

//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your
//message should be simple, such as, “Hello Eric,
//would you like to learn some Python today?”
let message:string = ("Hello Eric");
console.log(`"${message},would you like to learn some Python today?"`);

//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//uppercase, and titlecase.
let personName: string = "nadia aliakbar";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (c) => c.toUpperCase()));

//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its
//author. Your output should look something like the
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousQuote = "Albert Einstine once said";
console.log(
  `${famousQuote}, "A person who never made a mistake never tried anything new."`
);

//5. Famous Quote 2: Repeat Exercise 4, but this Ɵme store the famous person’s name in a variable called
//famous_person. Then compose your message and store it in a new variable called message. Print your
//message.
let famousperson = "Mahatma Gandi,";
let Message = "Believe the change you wish to see in the world.";
console.log(famousperson, Message);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the
// name is displayed. Then print the name aŌer striping the white spaces
let PersonName = "\t\n Nadia \t\n";
console.log(PersonName);

// 7. Number Eight: Write addiƟon, subtracƟon, mulƟplicaƟon, and division operaƟons that each result in
// the number 8. Be sure to enclose your operaƟons in print statements to see the results.
let add = 4 + 4;
let sub = 10 - 2;
let mul = 4 * 2;
let div = 16 / 2;
console.log(add, sub, mul, div);

// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
//Your output should simply be four lines with the number 8 appearing once on each line.
for (let i = 0; i < 4; i++) {
  console.log("_______________________________");
  console.log(5 + 3);
  console.log("_______________________________");
}

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message
// that reveals your favorite number. Print that message.
let favoriteNumber = 4;
console.log(`My favorite number is ${favoriteNumber}.`);

// 10. Adding Comments: Choose two of the programs you’ve wriƩen, and add at least one comment to
// each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top
// of each program file. Then write one sentence
// describing what the program does
function addNumbers(a: number, b: number): number {
  return a + b;
}
let result = addNumbers(10, 20);
console.log("The sum is", result);

//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name
//by accessing each element in the list, one at a Ɵme.
let names: string[] = ["Aliya", "Maryam", "Nazmeen", "Shumaila"];
names.forEach((name) => {
  console.log(name);
});

// 12. GreeƟngs: Start with the array you used in Exercise 11, but instead of just prinƟnt each person’s
// name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name
let perNames: string[] = ["Aylia", "Maryam", "Nazmeen", "Shumaila"];
names.forEach((name) => {
  console.log(`\n\nHellow ${name}, hope you are doing great!\n\n`);
});

// 13. Your Own Array: Think of your favorite mode of transportaƟon, such as a motorcycle or a car, and
// make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransports: string[] = ["Tesla", "BMW ", "Audi e-tron", "Mercedes"];
favoriteTransports.forEach((transport) => {
  console.log(`\n\nI would like to own a ${transport}.\n\n`);
});                             

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
// that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviƟng them to dinner.
let guestList: string[] = ["Maryam", "Nazmeen", "Huda"];
guestList.forEach((guest) => {
  console.log(`\n\nDear,${guest} I would like to invite you to dinner.\n\n`);
});

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitaƟons. You’ll have to think of
// someone else to invite.
let GuestList: string[] = ["Maryam", "Nazmeen", "Huda"];
console.log(`\ninitial inivatation\n`);
guestList.forEach((guest) => {
  console.log(`Dear,${guest} I would like to invite you to dinner.`);
});
let GuestWhoCantMakeIt = "Huda";
console.log(
  `\nUnfortunately, ${GuestWhoCantMakeIt} can't make it to the dinner.\n`
);
console.log(`\nnew invitation:\n`);
guestList.pop();
guestList.push("Najma");
guestList.forEach((guest) => {
  console.log(`Dear,${guest} I would like to invite you to dinner.`);
});

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array.
// Use append() to add one new guest to the end of your list
let Guestlist: string[] = ["Maryam", "Nazmeen", "Najma"];
Guestlist.unshift("Tania"); // ["Tania", "Maryam","Nazmeen","Najma"]
Guestlist.splice(2, 0, "Laiba");
Guestlist.push("Fouzia");
Guestlist.forEach((guest) => {
  console.log(`Dear,${guest} I would like to invite you to dinner.`);
});

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in Ɵme for the
// dinner, and you have space for only two guests.
// Remove guests until only two remain
// Print a message to each of the two people still on the list
// Remove the last two names from the list
// Print the empty list to confirm it's empty
let guests: string[] = ["Tania", "Maryam", "Laiba", "Nazmeen", "Najma", "Fouziz"];
console.log(`\nunfortunity we can not arrange big table so only two people are allow.\n`)
while (guests.length > 2) {
    let removed_guest = guests.pop();
    console.log(`Dear ${removed_guest}, I'm sorry but I can't invite you to dinner.`);
    }
console.log(`\nInvited guest\n`)
guests.forEach(guest => {
    console.log(`Dear ${guests}, you are still invited to dinner.`);
});
guests.length = 0; // or guests.splice(0, guests.length);
console.log("\nThe final guest list is:", guests);

//18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabeƟcal order.
// • Print your array in its original order.
// • Print your array in alphabeƟcal order without modifying the actual list.
// • Show than still in  your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabeƟcal order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabeƟcal order. Print the list to show that its order has changed
let places:string[] = ["Cape Town","Delhi","England","Bankok","Amdabad"]
console.log("orignal order"  ,places);
console.log("alphabetical order" ,[...places].sort());
console.log("orignal order"  ,places);
console.log("reverse alphabatical order"  ,[...places].sort().reverse());
console.log("still in orignal", [...places.sort().reverse() ]);
console.log("back to orignal order" ,places.sort());
console.log("back to orignal order"  ,places.sort().reverse());
console.log("sort in alphabatical order" ,[...places].sort());
console.log("sort in reverse alphabatical  order"  ,[...places].sort().reverse())

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a messageindicating the number
// of people you are inviting to dinner
let dinnerguest: string[] = ["Tania", "Najma", "Laiba", "Huda"];
let numberofguest: number = dinnerguest.length;
console.log(`I am inviting ${numberofguest} people for dinner.`);

// 20. Think of something you could store in a array. For example, you could make a list of mountains,
// rivers, countries, ciƟes, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let countries: string[] = ["Turkey", "Bangladesh", "China", "Japan"];
console.log(`\nList of countries:\n`);
countries.forEach((country) => {
  console.log(country);
});

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects
// containing these items.
interface Book {
  title: string;
  author: string;
  pages: number;
  price: number;
}
let book1: Book = {
  title: "To kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
  price: 600,
};
let book2: Book = {
  title: "Essencial Typescript",
  author: "Adam Freeman",
  pages: 4000,
  price: 700,
};
console.log(book1);
console.log(book2);

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
// make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
let numbers: (string | number)[] = ["orange", "banana", 3, 4, 5];
console.log(numbers[10]);
console.log(numbers[4]);

// 23. CondiƟonal Tests: Write a series of condiƟonal tests. Print a statement
// describing each test and your predicƟon for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//5 tests evaluate to True 
console.log(`\nTest evaluate to True\n`);
let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
let number1 = 20;
console.log("Is number2 == '20'? I predict True.");
console.log(number1 !== 23);
let number2 = 10;
console.log("Is number2 <'10'? I predict True.");
console.log(number2 < 12);
let number3 = 50;
console.log("Is number3 > '50'? I predict True.");
console.log(number3 > 10);
let country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == "Pakistan");
//5 tests evaluate to False
console.log(`\nTest evaluate to false\n`);
let bike = "yamaha";
console.log("Is bike == 'subaru'? I predict False.");
console.log(bike == "subaru");
let num1 = 20;
console.log("Is num2 == '20'? I predict False.");
console.log(num1 == 23);
let num2 = 10;
console.log("Is num2 >'10'? I predict False.");
console.log(num2 > 12);
let num3 = 50;
console.log("Is num3 < '50'? I predict False.");
console.log(num3 < 10);
let city = "Karachi";
console.log("Is city !== 'Karachi'? I predict False.");
console.log(city !== "Karachi");

// 24. More CondiƟonal Tests: You don’t have to limit the number of tests you create to 10. If you want to
// try more comparisons, write more tests. Have at least one True and one False result for each of the
// following:
// • Tests for equality and inequality with strings
// • Tests using the lower case funcƟon
// and less than or equal to
let string1 = "hellow";
console.log(string1 == "hellow"); //true
console.log(string1 !== "hellow"); //false
let string2 = "world";
console.log(string2 == "world"); //true
console.log(string2 !== "world"); //false
console.log(string1 == string2); //false
console.log(string1 !== string2); //true
let string = "Hellow";
console.log(string.toLowerCase() == "Hellow"); //Falsse
console.log(string.toLowerCase() == "hellow"); //True
let Num1 = 30;
console.log(`\n\tFor True\n`);
console.log(Num1 == 30);
console.log(Num1 !== 40);
console.log(Num1 > 10);
console.log(Num1 < 40);
console.log(Num1 >= 30);
console.log(Num1 <= 30);
console.log(`\n\tFor False\n`);
console.log(Num1 == 40);
console.log(Num1 !== 30);
console.log(Num1 > 40);
console.log(Num1 < 10);
console.log(Num1 >= 50);
console.log(Num1 <= 20);
// • Tests using "and" and "or" operators
let number = 50;
console.log(number == 50 && number < 50);
console.log(number > 50 || number == 50);
console.log(number !== 50 && number > 50);
console.log(number >= 50 || number <= 50);
// • Test whether an item is in a array
let fruits: string[] = ["banana", "orange", "kiwi"];
console.log(fruits.includes("banana"));
console.log(fruits.includes("orange"));
// • Test whether an item is not in a array
console.log(fruits.includes("grapes"));
console.log(fruits.includes("apple"));

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
let alien_color: string = "green";
if (alien_color == "green") {
  console.log("the player just earn 5 points");
} else {
  console.log("the player just earn 10 points");
}
let alien_Color: string = "red";
if (alien_Color == "green") {
  console.log("the player just earn 5 points");
}

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • Write one version of this program that runs the if block and another that runs the else block.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooƟng the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let Alien_color: string = "green";
if (Alien_color == "green") {
  console.log("the player just earn 5 points");
} else {
  console.log("the player just earn 10 points");
}
let Alien_Color: string = "red";
if (Alien_Color == "green") {
  console.log("the player just earn 5 points");
} else {
  console.log("the player just earn 10 points");
}

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the
// variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
let age = 65;
if (age < 2) {
  console.log("The person is a babay.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}
let alienColor1: string = "green";
if (alienColor1 == "green") {
  console.log("the player just earn 5 points");
} else {
  console.log("the player just earn 10 points");
}
let alienColor2: string = "yellow";
if (alienColor2 == "green") {
  console.log("the player just earn 5 points");
} else {
  console.log("the player just earn 10 points");
}
let alienColor3: string = "red";
if (alienColor3 == "green") {
  console.log("the player just earn 10 points");
} else {
  console.log("the player just earn 15 points");
}

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
// statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
// in your array, the if block should print a statement,
// such as You really like bananas!
let favoriteFruits: string[] = ["mango", "kiwi", "drain"];
if (favoriteFruits.includes("mango")) {
  console.log("I really like mango.");
}
if (favoriteFruits.includes("kiwi")) {
  console.log("I really like kiwi.");
}
if (favoriteFruits.includes("drain")) {
  console.log("I really like drain.");
}
if (favoriteFruits.includes("banana")) {
  console.log("I really like banana.");
}
if (favoriteFruits.includes("orange")) {
  console.log("I really like orange.");
}

// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
// wriƟng code that will print a greeƟng to each user
// aŌer they log in to a website. Loop through the array, and print a greeƟng to each user:
// • If the username is 'admin', print a special greeƟng, such as Hello admin, would you like to see a status
// report?
// • Otherwise, print a generic greeƟng, such as Hello Eric, thank you for logging in again
let users: string[] = ["Adim", "Eric", "John", "Alice", "David"];
for (let user of users) {
  if (user == "Adim") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, thank you for logging in again`);
  }
}

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.let users:string[] = ["Adim","Eric","John","Alice","David"]
let users1: string[] = [];
if (users1.length == 0) {
  console.log("We need to find some users!");
} else {
  console.log(`Hello ${users1}!`);
}
let Users1: string[] = ["Adim", "Eric", "John", "Alice", "David"];
for (let users1 of Users1) {
  if (Users1.length == 0) {
    console.log("We need to find some users!");
  } else {
    console.log(`Hello ${users1}!`);
  }
}

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
// everyone has a unique username.
// • Make sure your comparison is case insensiƟve. If 'John' has been used, 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a
// message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is availabl
let currentUsers: string[] = ["saba", "nora", "admin", "nadia", "shazma"];
let newUsers: string[] = ["john", "eric", "admin", "mk", "jd"];
newUsers.forEach((newUsers) => {
  if (
    currentUsers.some(
      (currentUsers) => currentUsers.toLowerCase() == newUsers.toLowerCase()
    )
  ) {
    console.log(`${newUsers} will need to enter a new username.`);
  } else {
    console.log(`${newUsers} is available.`);
  }
});   
    
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
// numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output
// should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let number of Numbers) {
  let ending: string;
  if (number == 1) {
    ending = "st";
  } else if (number == 2) {
    ending = "nd";
  } else if (number == 3) {
    ending = "rd";
  } else {
    ending = "th";
  }
  console.log(`${number}${ending}`);
}

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of prinƟng just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let favPizzas: string[] = [
  "cheese pizza",
  "BBQ chicken pizza",
  "Pepperoni pizza",
];
for (let i = 0; i < favPizzas.length; i++) {
  console.log(`I like to eat ${favPizzas[i]}`);
}
console.log(
  `\nI love pizza.\n\nPizza comes in a variety of flavors and toopings.`
);

// 35. Animals: Think of at least three different animals that have a common characterisƟc.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program staƟng what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// Create a list of animals that have a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];
// Use a for loop to print the name of each animal
for (let animal of animals) {
  console.log(animal);
}
// Modify the program to print a statement about each animal
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
// Add a line stating what these animals have in common
console.log("Any of these animals would make a great pet!");

// 36. T-Shirt: Write a funcƟon called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The funcƟon should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// Call the function with example arguments
function make_shirt(size: string, message: string): void {
  console.log(
    `The shirt size is ${size} and the message printed on it is: '${message}'`
  );
}
make_shirt("M", "Hello, World!");
make_shirt("L", "TypeScript is awesome!");

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function Make_shirt(size: string = "L", message: string = "I love Typescript") {
  console.log(
    `The shirt size is ${size} and the message printed on it is: '${message}'`
  );
}
Make_shirt();
Make_shirt("M");
Make_shirt("S", "Typescript is awesome");

// 38. Cities: Write a funcƟon called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different ciƟes, at least one of which is not in the
// default countr
function describe_city(city: string, country?: string) {
  return `${country}, is in ${city}.`;
}
console.log(describe_city("Karachi", "Pakistan"));
console.log(describe_city("New Yourk", "USA"));
console.log(describe_city("Paris"));

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formaƩed like this:"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city: string, country: string) {
  return `${country} ${city}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New Yourk", "USA"));
console.log(city_country("Paris", "France"));

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The funcƟon should take in an arƟst name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the funcƟon to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(ArtistName: string, AlbumTitle: string) {
  return { ArtistName, AlbumTitle };
}
console.log(make_album("Ali", "Rang-e-Mohabat"));
console.log(make_album("Madad", "Roshan Andhera"));
console.log(make_album("Ayaz", "Mausam-e-dil"));
function make_Album(
  ArtistName: string,
  AlbumTitle: string,
  numberoftracks?: number
) {
  return { ArtistName, AlbumTitle, numberoftracks };
}
console.log(make_Album("Ali", "Rang-e-Mohabat", 30));
console.log(make_Album("Madad", "Roshan Andhera", 20));
console.log(make_Album("Ayaz", "Mausam-e-dil"));

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function make_great(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
let magicians: string[] = ["Merlin", "Gandalf", "Houdini"];
make_great(magicians);

// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let Magicians: string[] = ["Merlin", "Gandalf", "Houdini"];
function Make_great(Magicians: string[]) {
  Magicians.forEach((magician) => {
    console.log(magician);
  });
}
Make_great(magicians);
function make_Great(Magicians: string[]) {
  for (let i = 0; i < Magicians.length; i++) {
    Magicians[i] = Magicians[i] + "The Great";
  }
  return Magicians;
}
make_Great(Magicians);
console.log(Magicians);

// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magicians1: string[] = ["Merlin", "Gandalf", "Houdini"];
function show_great(magicians1: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
function makegreat(magicians1: string[]) {
  let greatMagicians: string[] = [];
  magicians1.forEach((magician) => {
    greatMagicians.push(`${magician} the great`);
  });
  return greatMagicians;
}
let greatMagicians = makegreat(magicians1.slice());
console.log("orignal magicians");
show_great(magicians1);
console.log("Great magicians");
show_great(greatMagicians);

// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The funcƟon should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(...items: string[]) {
  console.log("Sandwich with the following items:");
  items.forEach((item) => {
    console.log(`${item}`);
  });
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly
function create_Car(manufacturer: string, model: string, ...options: string[]) {
  let car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };
  options.forEach((option) => {
    let [key, value] = option.split(":"); // arguments divided inito two parts
    car[key.trim()] = value.trim(); //left and right remove white space
  });
  return car;
}
let my_car = create_Car("Toyota", "Camry", "color: blue", "sunroof: true");
console.log(my_car);
