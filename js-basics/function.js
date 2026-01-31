function myname(){    //Define Funtion 
     console.log('S')
     console.log('H')
     console.log('A')
     console.log('M')     // function scope
     console.log('B')
     console.log('H')
     console.log('A')
     console.log('V')
     console.log('I')
}
console.log(myname()) // call function
/***************MATHEMATICAL FUNCTIONS************************************************************** */
function addtwonumb(num1,num2){
    console.log(num1 + num2)
}
addtwonumb(3,4)

function addtwonumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addtwonumbers(3,4)
console.log(result)

function loginmessage(username){
    if(username===undefined){                                // !username
        console.log("please enter a username ")
        return 
    }
    let response = console.log(`hello! ${username} hope you are having a great time`)
    return response
}
const response = loginmessage('Shambhavi')
//********************************REST OPERATOR******************************************************** */
function addtocart(...num){     //rest operator
return num
}
const cart = addtocart(200,300,400,560)

console.log(cart)
//************************************************************************************************** */
const user1 = {
    username : 'Shambhavi1204',
    cartprice: 299
}
function handdleobject(anyobject){
    console.log(`hello ${anyobject.username} your toal price is ${anyobject.cartprice}`)
}
const function1 = handdleobject(user1)
console.log(function1);

const myarray = [200,670,450]
function returnsecondvalue(getarray){
return getarray[1]
}
console.log(returnsecondvalue(myarray))
//**********************************SCOPE************************************************************ */
let a = 35       //global scope 
if(true){
    const a = 30 //doesnt work outside scope      //block scope 
    let b = 40   // doesnt work outside scope
    // var c = 56   // does work outside scope
    console.log('inner : ', a)
}
// console.log(c)
console.log(a)

//****************************THIS AND ARROW FUNCTION************************************************** */
const user = {
    username1 : 'Shambhavi' ,
    userage : 21 ,
    welcomemessage : function(){
        console.log(` ${this.username1} , welcome to website`)
    }
}

user.welcomemessage()
user.username1 = 'Sam'
user.welcomemessage()

// function chai(){
// console.log(this);
// } 
// let username console.log(this.username)
// chai() 
//******************************ARROW FUNCTION****************************************************** */
const addtwo = (numb1,numb2) => {
    return numb1 + numb2
}
console.log(addtwo(3,7))

// const addtwo = (numn1,numb2)=> (numb1+numb2)  NO RETURN STATEMENT
