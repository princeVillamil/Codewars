/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

*/
function sayHello( name, city, state ) {
    return name.length == 3 ? `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!` : name.length === 4 ? `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!` : `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
}