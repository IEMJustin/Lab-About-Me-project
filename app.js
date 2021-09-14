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

    one = prompt('Is my name Joseph?');
    one = one.toLowerCase()
    console.log(one)
    if ((one === 'yes') || (one === 'y')) {
        alert('Correct');
    
    }
    else {
        alert('incorrect')
    }
       
    two = prompt('Is one of my dogs named Wallace?');
    two = two.toLowerCase()
    console.log(two)
    if ((two === 'no') || (two === 'n')) {
        alert('Correct');
    
    }
    else {
        alert('incorrect')
    }
       
    three = prompt('Do I like to walk?');
    three= three.toLowerCase()
    console.log(three)
    if ((three === 'yes') || (three === 'y')) {
        alert('Correct');
    
    }
    else {
        alert('incorrect')
    }
    four = prompt('Is my brother a software developer?');
    four = four.toLowerCase()
    console.log(four)
    if ((four === 'yes') || (four === 'y')) {
        alert('Correct');
    
    }
    else {
        alert('incorrect')
    }
    five = prompt('Did I work in retail?');
    five = five.toLowerCase()
    console.log(five)
    if ((five === 'no') || (five === 'n')) {
        alert('Correct');
    
    }
    else {
        alert('incorrect')
    }
}
