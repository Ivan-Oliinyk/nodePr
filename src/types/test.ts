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

//////////////////////////////////////////////////////////////////////////////////
// function frequencySort(items: any[]): any[] {
//   return items.map((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) 
//     ? el : el)
//     .sort((a, b) =>  items.filter(el => el === b ).length - items.filter(el => el === a).length)
//     .reduce((res, el, i, arr) => arr.indexOf(arr[i - 1]) === undefined 
//       ? el :  arr.indexOf(arr[i - 1]) === arr.lastIndexOf(arr[i - 1])
//         ? res.concat(el) : res.concat(arr[i - 1]) 
//         , []) 
// }

// console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
// console.log(frequencySort([17, 99, 42]));
// console.log(frequencySort([1, 2, 2, 1]));

///////////////////////////////////////////////////////////////////////////////////////////////////

import { EventEmitter } from "events";

class Demo extends EventEmitter {}

const myEE = new Demo()
// myEE.on("foo", (a) => console.log("a" ,a))

// myEE.prependListener('foo', e => {
//   console.log(e)
//   e.timeStamp = Date.now()
// })

// myEE.emit('foo', {test: true})
// myEE.emit('as', 'asd')

// myEE.on('messageLogged', arg => {
//   console.log("Listener called1", arg);
// })

// myEE.on('messageLogged', arg => {
//   console.log("Listener called2", arg);
// })

// myEE.on('messageLogged', arg => {
//   console.log("Listener called3", arg);
// })

// myEE.emit('messageLogged', {id: 1, url: 'http://'})

// myEE.off('messageLogged', arg => {
//   console.log("Listener called3", arg);
// })

// myEE.once('once', (text)=>{
//   console.log(text);
// })

// myEE.emit('messageLogged', {id: 1, url: 'http://123123213'})

// myEE.emit('once', 'I am first')
// myEE.emit('once', 'I am second')

// myEE.on('messageLogged', function do(arg: any): any { 
//   console.log("Listener called2", arg);
//   return 21
// })

// myEE.emit('messageLogged', 'WWW@@!')


function addEv(arg: any): any{
  console.log(`Hellow ${arg}`);
}

const listE = () => {console.log('USDDS');}

myEE.emit('Hey', '!!!!!!!!!!!!!!!')

myEE.on("Hey", listE)
myEE.on('Hay', addEv)

myEE.on('No-name', () => {
  console.log("NoName");
})

const h1 =()=>{console.log('h1');}
const h2 =()=>{console.log('h2');}
const h3 =()=>{console.log('h3');}
const h4 =()=>{console.log('h4');}

myEE.on('No-name', h1)
myEE.on('No-name', h2)
myEE.on('No-name', h3)
myEE.on('No-name', h4)

myEE.on('Hay', h1)
myEE.on('Hay', h2)

console.log(myEE);

myEE.off('No-name', h1);
console.log(myEE.listenerCount('No-name'));

