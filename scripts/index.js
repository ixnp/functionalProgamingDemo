// Functions are First Class
const teaTime = function(){
    return true
} 
 
const notTeaTime = function(){
    return false 
}


//functions can return other functions 

const outSide = function(){  
    return function(){
        console.log('meow: let me back in')
    }
}

console.log(outSide())
console.log(outSide()())

//functions can be passed to other functions
let tea = 'earl grey'
function makeTeaCallback(teaTime, tea){
    if(teaTime()){
        console.log(`it's tea time lets have some ${tea} and crumpets`)
    }else{
        console.log(`not time for tea`)
    }
}
makeTeaCallback(teaTime,tea)
makeTeaCallback(notTeaTime,tea)

//Where have you seen this before?


//Arrow Functions

const oneLineReturn = () => 'i am an implicit return'
const oneVar = data => console.log(data)
const moreThanOne = (dataOne, dataTwo) => console.log(dataOne,dataTwo)

oneLineReturn()
oneVar('one var no ()')
moreThanOne('any more than one', 'you need ()')

// const moreLines = () => (
//     console.log('this wont work')
//     return 'welp'
// )

const moreLines = () => {
    console.log('this wont work')
    return 'welp'
}

//IIFE

const runNow = (function runNow(){
    console.log('it ran')
    return 'it ran'
})()

//pure functions

const pureFunction = function(a,b){
    return a + b
}

const alsoPure = function(arr){
    let oddArr = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0 ){
            oddArr.push(arr[i])
        }  
    }
    return oddArr
}

// Mutable vs Immutable

const numsOne = [1, 2, 3]

const destructivelyMutate = (numArr) => {
  for (let i = 0; i < numArr.length; i++) {
    numArr[i]++
  }
  return numArr
}

const nums = [1, 2, 3]

nums.map((n) => n+1) // [2, 3, 4]

