'use strict'
let arrayBinarySearch = module.exports ={}
function BinarySearch(arr,key){
  const arr = [];
  let index = 0
  for(let i =0;i<arr.length;i++){
    if(key === arr[i]){
      index = i
    }
    if (index === 0){
      index =-1
    }
  }
return index
}
BinarySearch(arr,key) 

