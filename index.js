//undestanding destructuring
//1)SWAP THE VALUES OF TWO VARIABLE
// let a = 2;
// let b = 1;

// [a,b] = [b,a];
// console.log(a)
// console.log(b)

//2)SWAP TWO ELEMENTS IN AN ARRAY
// const colors =["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//3) ASSIGN ARRAY ELEMENTS TO VARIABLE
// const colors = ["red", "green", "blue", "black", "white"];

// const[firstColor,secondColor,thirdColor,...extraColor] = colors;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColor)

//4) EXTRACTS VALUES FROM OBJECTS
const person1 = {
    firstName:"spongeboob",
    lastName:"sqaurePant",
    age:30,
    job: "fry cook",
}
const person2 = {
    firstName:"patrick",
    lastName:"star",
    age:30,

}

const{firstName,lastName,age,job="unemployed"} = person2;

console.log(person2)
console.log(job)
//getters and setters
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" &&  newFirstName.length > 0){
//             this._firstName = newFirstName
//         }else{
//             console.error("first name must be a string")
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName =newLastName
//         }else{
//             console.error("last name must be a string ")
//         }

//   }
//   set age(newAge){
//     if(typeof newAge === "number" && newAge >= 0){
//         this._age = newAge
//     }
// }

// get firstName(){
//    return this._firstName;
// }

// get lastName(){
//     return this._lastName;
// }


// get age(){
//     return this._age
// }

// get fullName(){
//     return this._firstName + " " + this._lastName
// }


// }


// const person = new Person("salvy","emekus",30)

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.fullName)












//getters and setters 2

// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }else{
//             console.error("width must be a positive number")
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight
//         }else{
//             console.error("height must be a positive number")
//         }
//     }

//     get width(){
//         return this.width
//     }

//     get height(){
//         return this.height
//     }
// }


// const rectangle = new Rectangle(1000, "garri")

// console.log(rectangle)

// const student = ["salvy", "vicky", "emeka","obinna"];

// const studentUpper = student.map(upperCase);
// const studentLower = student.map(lowerCase);
// function upperCase(element){
//     return element.toUpperCase();
    
// }


// function lowerCase(element){
//     return element.toLowerCase();
// }

// console.log(studentUpper);
// console.log(studentLower);







// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// console.log(squares);
// console.log();