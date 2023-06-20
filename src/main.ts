//Type Assertions: no impact on runtime  / type casting : runtime support

type One = string
type two = string | number
type three = 'Hello'

//converting to more or less specific
let a: One = 'hello'
let b = a as two //less specific
let c = a as three //more specific

let d = <One> 'World'
let e = <string | number> 'World'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if(c === 'add') return a + b;
    return '' + a + b
} 

let myVal: string = addOrConcat(2,3,'concat') as string


let nextVal: number = addOrConcat(2,3,'concat') as number

(10 as unknown) as string

//The DOM
//!not null assertion
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('img') as HTMLImageElement;

img.src
myImg.src