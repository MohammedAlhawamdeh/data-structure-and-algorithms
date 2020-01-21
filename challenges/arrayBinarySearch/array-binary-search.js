const arr = [4,8,15,16,23,42]
const key = 15

function BinarySearch(arr,key){
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