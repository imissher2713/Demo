// // var array = [
// //     {
// //         id: 1,
// //         name: "Nam",
// //         age: 14
// //     },
// //     {
// //         id: 2,
// //         name: "Naem",
// //         age: 15
// //     },
// //     {
// //         id: 3,
// //         name: "Dam",
// //         age: 17
// //     }, 
// //     {
// //         id: 4,
// //         name: "Duong",
// //         age: 20
// //     }
// // ]
// // // accu
// // // function sum(accu, value, index, origin){
// // //     console.log(origin[index].id)
// // //     accu.push(value.age);
// // //     return accu;

// // // }
// // function hello(value, index, array){
// //     return value.age;
// // }
// // a = [1, 2, 3, 4, 5];
// // Array.prototype.map2 = function(callback){
// //     var arr = []
// //     for(var val = 0; val < this.length; val++){
// //         arr.push(callback(this[val], val, this));
// //     }
// //     return arr;
// // }
// // console.log(array.map2(hello))
// // function callback(accu, valuecur, index, arrayObj){
// //     return accu.concat(valuecur + 100)

// // }
// // Array.prototype.reduce2 = function(callback, init){
// //     var result = init;
// //     for(var i = 0; i < this.length;i++){
// //         result = callback(result, this[i], i, this);

// //     }
// //     return result;


// // }
    
// // console.log(a.reduce2(callback, []))


// // Setup
// function Validator(options){
//   options.rules.forEach(function(rule){
//     console.log(rule);

//   })
// }
// Validator.isRequired = function(element){
//   return {
//     selector: element,
//     test: function(){

//     }
//   }
// }
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
// let reduce = contacts.reduce(((accu, element)=> {
//   return accu.concat(element.likes);

// }), [])
// // console.log(reduce)
// let element = document.querySelector('.header').querySelector('.header-text');
// let button = document.querySelector('.button');
// // button.onblur = function(e){
// //   button.classList.add('red_background')
// // }

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  var BookList = bookList;
  BookList.push(bookName);
  return BookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const BookList = bookList;
  const book_index = BookList.indexOf(bookName);
  if (book_index >= 0) {

    BookList.splice(book_index, 1);
    return BookList;

    // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"));
console.log(bookList)