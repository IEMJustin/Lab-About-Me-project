'use strict'

let person = prompt('What is your name?')
console.log(person);
alert('Welcome ' + person)

function start() {
    let one
    let two
    let three
    let four
    let five
    let six
    let seven
    let count = 1
    let countTwo = 1
    let score = 0
   

one = prompt('Is my name Joseph?');
one = one.toLowerCase()
// console.log(one)
if ((one === 'yes') || (one === 'y')) {
    alert('Correct');
    score = (score + 1)
}
else {
    alert('incorrect')
}
   
two = prompt('Is one of my dogs named Wallace?');
two = two.toLowerCase()
// console.log(two)
if ((two === 'no') || (two === 'n')) {
    alert('Correct');
    score = (score + 1)
}
else {
    alert('incorrect')
}
   
three = prompt('Do I like to walk?');
three= three.toLowerCase()
// console.log(three)
if ((three === 'yes') || (three === 'y')) {
    alert('Correct');
    score = (score + 1)
}
else {
    alert('incorrect')
}
four = prompt('Is my brother a software developer?');
four = four.toLowerCase()
// console.log(four)
if ((four === 'yes') || (four === 'y')) {
    alert('Correct');
    score = (score + 1)
}
else {
    alert('incorrect')
}
five = prompt('Did I work in retail?');
five = five.toLowerCase()
// console.log(five)
if ((five === 'no') || (five === 'n')) {
    alert('Correct');
    score = (score + 1)
}
else {
    alert('incorrect')
}

// console.log(six)
while (count <= 4) {
    count++
    six = prompt('What is my age?');
    if (six == 18) {
        alert('Correct')
        count = 5
        score = (score + 1)
    }
   else if (six > 18) {
        alert('Too High')
    }
    else if (six < 18) {
        alert('Too Low')
    }
    else {

        alert('incorrect')
    }
}
let iceCream = ["mint","vanilla","sherbert"];
console.log(iceCream)
    while (countTwo <= 6) {
    countTwo++
    seven = prompt('Guess one of my favorite ice cream flavors.')
    seven = seven.toLowerCase()
    console.log(seven) 
    if (iceCream.indexOf(seven)!== -1){
        alert('Correct')
        countTwo = 7
        score = (score + 1)
    }
    else {
        alert('incorrect')
    }
    }
    alert('You scored ' + score + '/7')

    alert('Thanks for playing ' + person)
}

