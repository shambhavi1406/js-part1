const score = 4000
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const num2 = 123.4578
console.log(num2.toPrecision(5))
const thousands = 1000000000000
console.log(thousands.toLocaleString('en-IN'))
//*********************************MATH*****************************************************
console.log(Math);
console.log(Math.abs(-6))
console.log(Math.round(4.5))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(4.1,4.2,6,7))
console.log(Math.max(4,6,7,8.1,8.4))
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 30
const max = 40
console.log(Math.floor(Math.random()*(max - min + 1))+min)

// ********************DATE AND TIME*************************************************************
let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(typeof myDate)
let createdDate = new Date(2023,1,17)
console.log(createdDate)

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myDate.getMonth())
myDate.toLocaleString('default', {
    weekday:"long",month:"numeric"
})
console.log(myDate.toLocaleString())