let word = 'word';
word = 45;
console.log(word)

let arr: number[] = [45, 43];

let arr2: [number, number, number] = [1, 2, 3];
arr2[3] = 4;
arr2.push(4);
console.log(arr2)


function add(x:number, y:number):number{
    return x+y;
}



add(1, 2);

function higherOrderFunc(func:Function):void{
    func();
}   

// any betyder vilken datatyp som helst, ? betyder parametern är valfri
function test(x:any, y?:number):void{
    console.log(x, y);
}

test('gf')
test(4, 56)
test();


type Person = {
    name: string,
    age: number,
    sayHello:Function,
    isHungry?:boolean
}

const person1:Person = {
    name: 'Lovisa',
    age: 27,
    sayHello(){
        console.log('hello!')
    }
}

console.log(person1.name, person1.isSleepy)

person1.sayHello();

type Group = Person[];

const group:Group = [person1, person1, 324]


type Coin = 'krona'|'klave';
let mynt:Coin = 'krona';



type Combined = '56'|56|boolean;
const comb:Combined = true;

type Mult = (x:number, y:number) => number;

type ObjWMult = {
    meth: Mult,
    age: 56
}

const obj:ObjWMult = {
    meth(x, y){
        return x*y;
    },
    age: 56
}


// DOM and type casting
const h1El = document.querySelector('h1') as HTMLHeadingElement;
h1El.innerText = 'Ny Rubrik';

const form = document.querySelector("#formEl") as HTMLFormElement;
console.log(form)
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    form.reset();
})

// Promises och Interfaces
type Message = {
    body: string,
    subject: string,
    title: string,
    user: string
}

async function getMessages():Promise<Message[]>{
    const url = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/comments.json'

    const res = await fetch(url);
    const messages = await res.json();
    return messages as Message[];
}

function logMessages(messages:Message[]):void{
    messages.forEach( m => console.log(m) );
}

getMessages().then( logMessages )