const myArray = [1,2,3,4,5]
console.log(myArray[3])
// ARRAY METHODS 
myArray.push(0)
console.log(myArray)

const myArray2 = new Array(4,5,8,2)
console.log(myArray2)
myArray2.pop()
console.log(myArray2)
myArray.unshift(9)
myArray.shift()
console.log(myArray.includes(9))
console.log(myArray.indexOf(45))

const newArray = myArray.join()
console.log(typeof newArray)

console.log("A" , myArray)
const myn1 = myArray.slice(1,4)   //slice operation(doesnt alter the original array)

console.log(myn1)
console.log(myArray)

const myn2 = myArray.splice(1,4) //splice operation(alters the original array)
console.log(myn2)
console.log(myArray)

//*************************************************************************************************** */
const marvelheroes=['ironman','spiderman']
const dcheroes=['superman','flash']
// marvelheroes.push(dcheroes)
console.log(marvelheroes)

const allheores= marvelheroes.concat(dcheroes) //concat operation
console.log(allheores)
allnewheroes = [...dcheroes, ...marvelheroes] //spread method
console.log(allnewheroes)
const newarr = [1,2,[4,5],6,[7,[8,9],[0,3]]]
const newarr2 = newarr.flat(Infinity)
console.log(newarr2)

console.log(Array.isArray('Shambhavi'))
console.log(Array.from('Shambhavi'))
console.log(Array.from({name:'Shambhavi'}))