console.log("Heloo console");

//to define function in JS
/*types of scopes in JS :
1. Global scope
2. Funnction scope
3. Block scope */

function example(){
    if(true){
        let bv = "block scope";
        console.log(bv);
    }
}
example();

//to check datatype of any variable
let x = 10;
console.log(typeof x);

//loops in JS

for(let i=1; i<=10 ; i++)
    {
        console.log(x, 'x', i ,'=', x*i);

    }

var i =0;
do{
    console.log("HELLO", i);
    i++;
}
while(i<3);


/*datatype in JS :
primitive:String,number,boolean,null,undefined,bigint,symbol
reference:Object,Array,Function


conditional statements  : If(condition){} ,else{} ,else if{} */

let age = 19;

if(age >= 18){
    console.log("You are an adult.");
    
}
else if(age >=16){
    console.log("You are a teenager.");
    
}

else{
    console.log("Advait yogesh harsulkar");
}

let value = [1,2];
switch(typeof value){
    case "number":
        console.log("number")
        break;
    case "string":
        console.log("string")
        break;
    case "boolean":
        console.log("boolean")
        break;
    default:
        console.log("Other type");
        break;
    
}


//ternary operator

// condition ? "what_if_true" : "what_if_false";

let age1 = 20;

let msg = (age1 >= 18) ? "YOU ARE ADULT" : "YOU ARE MINOR";

console.log(msg);

//for loop

for(let i = 0; i <=5; i++){
    console.log("Atharva");
    console.log(10);
}


let names = ["Atharva", "Advait" ,"HARSULKAR"];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(names[i]);//directly printed
    console.log(element);//indirectly printed    
}