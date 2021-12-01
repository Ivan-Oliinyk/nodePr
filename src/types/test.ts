// function nearestValue(values: number[], search: number): number {
//   let res: number = 0
//   const ar: number[] = values.sort((a, b) => a - b)

//   if (values.includes(search)) {
//     res =  values[values.indexOf(search)]
//   }

//   let count1: number = 0
//   let count2: number = 0
//   let res1: number = search
//   let res2: number = search

//   for(let i: number = 0; i < values.length; i++) {
//     count1++
//     count2++

//     ar.indexOf(search + i) !== -1 ? res1 = ar[ar.indexOf(search + i)] : res1
//     ar.indexOf(search - i) !== -1 ? res2 = ar[ar.indexOf(search + i)] : res2
    
//   }
  
//   return res
// }

// console.log(nearestValue([4, 7, 10, 11, 12, 17], 10));
function frequencySort(items: any[]): any[] {
  return items.map((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) 
    ? el : el)
    .sort((a, b) =>  items.filter(el => el === b ).length - items.filter(el => el === a).length)
    .reduce((res, el, i, arr) => arr.indexOf(arr[i - 1]) === undefined 
      ? el :  arr.indexOf(arr[i - 1]) === arr.lastIndexOf(arr[i - 1])
        ? res.concat(el) : res.concat(arr[i - 1]) 
        , []) 
}

console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
console.log(frequencySort([17, 99, 42]));
console.log(frequencySort([1, 2, 2, 1]));