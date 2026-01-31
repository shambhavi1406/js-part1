
const mysymb = Symbol('mykey')
const jsuser = {
    name:'Shambhavi',
    "fav color":'black',
    [mysymb]:'mykey1',
    age:21,
    location:"pune",
    email:'shambhavi123@gmail.com',
    isloggedin:false,
    lasloggedinon:['monday','wednesday']
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["fav color"])
console.log(jsuser[mysymb])
console.log(jsuser['age'])
console.log(typeof jsuser[mysymb])

// jsuser.email='shambhavi@google.com' //change values
// Object.freeze(jsuser) // now no changes allowed in jsuser object
 //************************FUNCTION********************************************************************* */
jsuser.greeting=function(){
    console.log("hello! User")
}
jsuser.greetingtwo=function(){
    console.log(`"hello! User",${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
//************************************************************************************************** */
// const tinderuser = new Object()     singleton object
 const tinderuser = {
    id:'145ab',
    name:'Sam',
    isLoggedin: false

 }     // Non-Singleton object 

 const regularuser = {
    email:'name@gmail.com',
    fullname:{
        userfullname:{
            firstname:'Shambhavi', //nested objects
            lastname : 'Singh'
        }
    }
 }
 console.log(regularuser.fullname.userfullname.lastname)

 const obj1 = {1: 'a',2: 'b'}
 const obj2 = {3: 'c',4: 'd'}
 const obj3 = {5: 'e',6: 'f'}

 const obj4 = Object.assign({},obj1,obj2,obj3) //for object concatenation
 console.log(obj4)

 const obj5 = {...obj1,...obj2}
 console.log(obj5)

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isLoggedin'))
console.log(tinderuser.hasOwnProperty('isLogged'))
console.log(tinderuser.hasOwnProperty('isLog'))
//*******************************OBJECT DESTRUCTURING************************************************ */
const course = {
         coursename:'java-basics',
         courselearner:'Shambhavi'
}
const{coursename:Name} = course
//console.log(coursename)
console.log(Name)


