"use strict"; // treat all JS code as newer version
// alert( 3 + 3 ) we are usind nodejs,not browser

let name = "Shambhavi"
let age = 20
let isstuding = false
let state;
// number - 2 to the power of 53
// bigInt
// boolean - true/false
// string - ""
// null - standalone value
// undefined - not assigned a value yet
// symbol - unique

// object
console.log(typeof false);
console.log(typeof "Shambhavi");
console.log(typeof 20);
 let score = "33abc"
 console.log(typeof score)
 let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 - true, 0 - false
//"" - false
//"hello" - true

let someNumber = 56
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2)
console.log(2*2)
console.log(2**2)
console.log(2%3)
    let str1="hello"
    let str2=" Shambhavi"
    let str3 = str1 + str2
    console.log(str3)
    console.log("1"+2+2)
    console.log(1+1+"2")
    console.log("1"+2)
console.log(+true)
console.log(+"")
let gamecounter = 100
gamecounter++
console.log(gamecounter)

console.log("2">1)
console.log("02">1)
console.log(null>0)
console.log(null== 0)
console.log(null>= 0)
//console.log("2"===2) double equal

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)

//Reference(Non-primitive)

//Arrays,Objects,Functions
 const heroes = ["superwoman", "catwoman" , "powerrangers"] ; // arrays
    let obj1 = {
        name:"Shambhavi" , // objects
        age:21,
    }
    
    const myFunction = function(){
        console.log("this is a function")
    }
    //*********************************************************************************** */
      // memory- stack(primtive) and heap(non-primitve)
      // primitve datatypes get a copy of the original value whereas nonprimitve data types
      // direct refernce 
      let myName = "Shambhavi"
      let myNickname = myName
      myNickname = "khushu"
      console.log(myName)
      console.log(myNickname)  // primitve datatype or stack memory no change in orginal 
                               // myName even tho myNickname is changed
                                 
      let userone = {
        useremail:"user@gmail.com",
        userupi:"user@ybl"
      }
      let usertwo = userone
      usertwo.email="user2@gmail.com" //here both the values in userone.email and 
                                      // usertwo.email change as usertwo takes direct reference from userone
      console.log(userone.email)
      console.log(usertwo.email)

      //*********************************************************************************** */
      // string functions
      let Name= "Shambhavi"
      let repocount=50
      console.log("hello i am " + Name +" and my repocount is " + repocount)
      console.log(`hello my name is ${Name} and my repocount is ${repocount}`)
      const gamename = new String('shambhaviii') 
      console.log(gamename[3])