//let arr=["A","B","c","r","s","j"]

// for(let i=0;1<arr.length;i++){
//     console.log(arr[i]);
    
// }

// // using forEach()
// arr.forEach((e,i)=>{
//     console.log(e,i);
    
//    });

//using map()

// arr.map((e,i)=>{
// console.log(e.toLowerCase());

// });
// const newArray=arr.map((e,i)=>{
//     return e.toLowerCase();
// });
// console.log(newArray);

//using filter()

// let newArray=[1,2,3,4,5,6,7]
// //filter out the odd number

// const oddNumber=newArray.filter((e,i)=>{
//     return e%2 !==0
// });
// console.log(oddNumber);

// let student={
//     name:"surjya",
//     age : 24,
//     batch:"mca",
//     roll:42

// };
// let student=["surjya",24,"mca",42]
// console.log(typeof student);
// console.log(student);

//using constructor
const student=new Object();
student.name="surjya";
student.age=24;
student.batch="mca";
student.roll=42;
console.log(student);

//Accessing element
//bracket notation([])
//dot notation(.)

//Q-want to access student name?

console.log(student["name"]);
console.log(student.name);

//modify element

student.name="surya";
console.log(student);

//todo:create an array ob object of 50 students

//JSON-Javascript Object Notation




