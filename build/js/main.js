"use strict";
//Type Assertions: no impact on runtime  / type casting : runtime support
//converting to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
let nextVal = addOrConcat(2, 3, 'concat');
10;
//The DOM
//!not null assertion
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('img');
img.src;
myImg.src;
