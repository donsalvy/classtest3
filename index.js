
// OBJECTS


const mytext =document.getElementById("mytext"); 





const Person = {
    firstName : "victor",
    lastName : "Asia",
    age : 54,
   isEmployed : false,
}

console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age)
console.log(Person.isEmployed)













//REDUCE(): IT REDUCE THE ELEMENTS OF AN ARRAY TO A SINGLE VALUE
// IT COMES WITH (ACCUMULATOR, ELEMENT).

//FIND THE MAXIMUM VALUE OF AN Array

// const grades = [75,50,90,80,65,95]

// const maximum = grades.reduce(getMax)
// const minimum = grades.reduce(getMin)
// console.log(maximum)
// console.log(minimum)

// function getMax(accumulator,element){
//     return Math.max(accumulator,element)
// }

// //FIND THE MINIMUM GRADE

// function getMin(accumulator,element){
//     return Math.min(accumulator,element)
// }



// const prices =[5,30,10,25,15,20]


// const total = prices.reduce(sum)
// console.log(`$${total}`)



// function sum(accumulator,element){
//     return accumulator + element
// }


















//2) CREATE AN ARRAY OF NUM AND USE THE FILTER METHID TO RITE A FUNCTION
//THAT FILTERS ADULT, AND CHILDREN.


// const ages =[15,13,16,17,18,19,20,60]


// const adults = ages.filter(isAdult)
// const children = ages.filter(isChildren)
// console.log(adults)
// console.log(children)

// // LETS WRITE A FUNCTION FOR ADULT

// function isAdult(element){
//     return element >= 18
// }


// function isChildren(element){
//     return element < 18
// }









//A FUNCTION TO FILTER BETWEEN AN EVEN NUM AND ODD NUM

// let numbers = [1,2,3,4,5,6,7,8,9,10];


// let oddNum = numbers.filter(isOdd)
// console.log(oddNum)

// function isOdd(element){
//     return element % 2 !== 0;
// }




//GET EVEN NUMBER USING FILTER METHOD IN JS

// let evenNum = numbers.filter(isEven) ;

// console.log(evenNum)


// function isEven(element){
//     return element % 2 === 0
// }









// const person = {

//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }


// const Address = {

//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new person("okafor salvation", 30, "6,jekoid street", "lagos", "Nigeria");

// console.log(person1)



// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if(date2 > date1){
//    console.log("HAPPY NEW YEAR EVERYONE") 
// };


// console.log(date)


//  numbers = [1,2,10,3,4,6,5,7,9,8];

// numbers.sort((a,b) => a-b); 
// console.log(numbers);






// const person = {
//     firstName:"spongeboob",
//     lastName:"sqaurePant",
//     age:30,
//     isStudent:true,
//     hobbies:["karate","gamming","football"],
//     address:{
//         street:"2,oakland",
//         city:"lagos",
//         country:"naija",

//     }

// }

// for(const property in person.address){
//     console.log(person.address[property])
// }















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
// const person1 = {
//     firstName:"spongeboob",
//     lastName:"sqaurePant",
//     age:30,
//     job: "fry cook",
// }
// const person2 = {
//     firstName:"patrick",
//     lastName:"star",
//     age:30,

// }

// const{firstName,lastName,age,job="unemployed"} = person2;

// console.log(person2)
// console.log(job)

//5) DESTRUCURE IN FUNCTION PARAMETER

// function displayPerson({firstName,lastName,age,job="unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }


// const person1 = {
//     firstName:"spongeboob",
//     lastName:"sqaurePant",
//     age:30,
//     job: "fry cook",
// }
// const person2 = {
//     firstName:"patrick",
//     lastName:"star",
//     age:30,

// }

// displayPerson(person1)
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