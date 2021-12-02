// // import {EventEmitter, errorMonitor, captureRejections} from 'events'

<<<<<<< HEAD
import { strictEqual } from "assert";
import { count } from "console"
=======
// import { count } from "console"
>>>>>>> f728d838810bb33c1ac473a60fc2f948a57f0097

// // const ee = new EventEmitter({captureRejections: true})
// // ee.setMaxListeners(2)

// // // const a =  ee.on('click', (event) => {
// // //   console.log(event)
// // // })

// // const cb = async (event: any) => {
// //   // console.log(event)
// //   try {
// //     throw new Error('asdadasasdd@@@1111')
// //   } catch(e) {
// //     ee.emit('error', e)
// //   }
// // }

// // // const a = ee.once('click', cb)
// // // const a = ee.on('click', cb)

// // //отключить евент
// // // ee.off('click', cb)

// // ee.on('click', cb)
// // ee.on(errorMonitor, console.log)
// // ee.on("error", console.log)

// // console.log('listenerCount', ee.listenerCount('click'))
// // console.log('listeners', ee.listeners('click'))
// // console.log('eventNames', ee.eventNames())

// // setInterval(() => ee.emit('click', Date.now()), 1* 1000)

// ///////////////////////////////////////////////////////////////////////////////////////
// // import {EventEmitter} from 'events'

// // type EECb = (...args: any[]) => void
// // type EEEN = string | symbol

// // class Subscription {
// //   constructor (public eventEmitter: EventEmitter, private eventName: EEEN, private listener: EECb) {}
// //   unsubscribe() {
// //     this.eventEmitter.off(this.eventName, this.listener)
// //   }
// // }

// // class MyEventEmitter extends EventEmitter {
// //   constructor () {super()}

// //   subscribe(eventName: EEEN, listener: EECb): Subscription {
// //     this.on(eventName, listener)
// //     return new Subscription(this, eventName, listener)
// //   }
// // }

// // const myEE = new MyEventEmitter()

// // const sub = myEE.subscribe('click', () => {
// //   console.log(sub);
// // })

// ///////////////////////////////////////////////////////////////////////////////
// // import {EventEmitter} from 'events'

// // type MyListener = (...args: any[]) => void;

// // class MyEventEmitter extends EventEmitter {
// //     subscribe(eventName: string | symbol, listener: MyListener): Subscribe{
// //         return new Subscribe(this, eventName, listener)
// //     }
// // }

// // class Subscribe {
// //     private cb: MyListener;
// //     constructor(
// //         public eventEmiter: EventEmitter,
// //         private eventName: string | symbol,
// //         private listener: MyListener
// //     ){
// //         this.cb = (...args: any[]) => {
// //             return listener.apply(this.eventEmiter, args)
// //         }
// //         this.eventEmiter.on(eventName, this.cb)
// //     }

// //     unsubscribe(): void{
// //         this.eventEmiter.off(this.eventName, this.cb)
// //     }
// // }

// // const ee = new MyEventEmitter({captureRejections: true});
// // const a = ee.on("click", console.log);
// // const b = ee.subscribe("click2", (e)=>{
// //     console.log(e);
// // });
// // ee.off('click2', console.log)
// // console.log(ee);
// // b.unsubscribe()
// // console.log(ee);

// ////////////////////////////////////////////////////////////////////////////////

// // import { EventEmitter} from "events";
// // const EE = new EventEmitter()

// // type MyListener = (...args: any[]) => void;
// // class MyEE extends EventEmitter {
      
// //       emite(event: string): void {
// //             this.emit(event)
// //       }
// //       ontimes(event: string , cb: MyListener, count: number): void {
          
// //           for (let i = 0; i < count; i++) {
// //               ee.once(event, cb)
// //           }
// //       }
// // }
// // const ee = new MyEE()
// // ee.ontimes('click', () => console.log('click'), 3)
// // ee.ontimes('brock', () => console.log('brock'), 1)

// // ee.emite('click')
// // ee.emite('brock')

// // ee.emite('click')

// /////////////////////////////////////////////
// // import {EventEmitter} from 'events'

// // type EECb = (...args: any[]) => void
// // type EEEN = string | symbol
// // class TimesEventEmitter extends EventEmitter {
// //   onTimes(eventName: EEEN, listener: EECb, times: number): this {
// //     const cb = (() => {
// //       let callCount = 0;
// //       return (...args: any[]): void => {
// //         if(times > callCount) {
// //           listener.apply(this, args)
// //           callCount++;
// //         } else {
// //           this.off(eventName, cb)
// //         }
// //       }
// //     })()

// //     this.on(
// //       eventName,
// //       cb
// //     )
// //     return this;
// //   }
// // }

// // const tEE = new TimesEventEmitter()

// // tEE.onTimes('click', console.log, 5)

// // setInterval(() => (tEE.emit('click', Date.now()), console.log(tEE)), 1 * 1000)

// // const arr = [1, 8, 9, 22, 101, 0, 1, 2]

// // // const result = arr.reverse().reduce((res, el, i, arr) => 2, [])

// // // console.log(result);
// // console.log(arr);

// // class HUEpicker {
  
// // }
// ///////////////////////////////////////////////////////////////////////////////
// // class HUEpicker {
// //   constructor(public line: number, public deg: number){}

// //   rgb(pos: number){
// //       return this.HSVtoRGB( Math.round((this.deg / this.line) * pos), 1, 1)
// //   }
  
// //   HSVtoRGB(H: number, S: number , V: number){
// //       let V2 = V * (1 - S);
// //       let r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? this.mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? this.mix(V2,V,(H-240)/60) : 0)));
// //       let g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? this.mix(V2,V,H/60) : ((H>=180 && H<=240) ? this.mix(V,V2,(H-180)/60) : 0)));
// //       let b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? this.mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? this.mix(V,V2,(H-300)/60) : 0)));
      
// //       return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
// //   }
  
// //   mix(a: number, b: number, v: number){
// //       return (1-v)*a + v*b;
// //   }
// // }

// // const t = new HUEpicker(100, 240)
// // console.log(t.rgb(30))


// ///////////////////////////////////////////////////////////////////////////////////////////////////
// /*
// import {EventEmitter, errorMonitor} from 'events'

// type EECb = (...args: any[]) => void
// type EEEN = string | symbol

// class Subscription {
//   constructor (public eventEmitter: EventEmitter, private eventName: EEEN, private listener: EECb) {}
//   unsubscribe() {
//     this.eventEmitter.off(this.eventName, this.listener)
//   }
// }

// class MyEventEmitter extends EventEmitter {
//   constructor () {super()}

//   subscribe(eventName: EEEN, listener: EECb): Subscription {
//     this.on(eventName, listener)
//     return new Subscription(this, eventName, listener)
//   }
// }

// const myEE = new MyEventEmitter();

// const sub = myEE.subscribe('click', () => {
//   console.log(sub);
// })

// myEE.emit('click', {})

// sub.unsubscribe()

// myEE.emit('click')

// class MySafeEventEmitter extends EventEmitter {
//   private map = new Map()

//   on(eventName: string | symbol, listener: (...args: any[]) => void): this {
//     super.on(eventName, this.makeCb(listener))

//     return this;
//   }

//   once(eventName: string | symbol, listener: (...args: any[]) => void): this {
//     super.once(eventName, this.makeCb(listener))

//     return this;
//   }

//   off(eventName: string | symbol, listener: (...args: any[]) => void): this {
//     return this.removeListener(eventName, listener)
//   }

//   removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
//     if(this.map.has(listener)) {
//       super.removeListener(eventName, this.map.get(listener))
//     }

//     return this;
//   }

//   private makeCb(listener: EECb): EECb {
//     const cb = (...args: any[]): void => {
//       try {
//         return listener.apply(this, args);
//       } catch (e) {
//         this.emit('error', e)
//       }
//     }

//     this.map.set(listener, cb)

//     return cb
//   }
// }


// const mySEE = new MySafeEventEmitter();

// const cb = () => {
//   throw new Error('dasdas')
// }

// mySEE.on('click', cb)

// mySEE.on('error', console.warn)

// mySEE.emit('click')


// mySEE.off('click', cb)

// mySEE.emit('click')

// ///
// class TimesEventEmitter extends EventEmitter {
//   onTimes(eventName: EEEN, listener: EECb, times: number): this {
//     const cb = (() => {
//       let callCount = 0;
//       return (...args: any[]): void => {
//         if(times > callCount) {
//           listener.apply(this, args)
//           callCount++;
//         } else {
//           this.off(eventName, cb)
//         }
//       }
//     })()

//     this.on(
//       eventName,
//       cb
//     )
//     return this;
//   }
// }

// const tEE = new TimesEventEmitter()

// tEE.onTimes('click', console.log, 5)

// setInterval(() => (tEE.emit('click', Date.now()), console.log(tEE)), 1 * 1000)

// */

// // const EventEmitter = require('events')

// // type Cb = (currentValue: any, oldValue: any) => any
// // class myEE extends EventEmitter {
// //   private pipeLineArr: object

// //   constructor() {
// //     super()
// //     this.pipeLineArr = []
// //   }

// //   addPopeLine(eventName: string, cbArr: Cb[]) {
    
// //   }
// // }

// // const EventEmitter = require('events')

// //type PriveteStorege = Object//
// // type Cb = (currentValue: any, oldValue: any) => any
// // class MyEventEmitter extends EventEmitter {
// //   private ctx = []

// //   addPipeline(event: string | symbol, arrCb: Cb[]){
// //     this.ctx.push({name: event, data: arrCb})
// //   }

// //   onWithPipe(event: string, handler: (event: any) => void, namesArray: string[]){
// //     let temp = this.ctx.filter((el, index) => namesArray.includes(el.name))
// //     temp.forEach(el => el.data.forEach(fn => this.on(event, fn)))
// //   }
// // } 

// // const tt = new MyEventEmitter()
// // tt.addPipeline('click-npc', [() => console.log('test'), () => console.log('test'), () => console.log('test')])
// // tt.onWithPipe('click', () => console.log('test'), ['click-npc'])
// // tt.emit('click', 'some-event')



// // console.log(111_222_123 * 2);
// // const a = {
// //   b: 'x',
// //   a: 123
// // }

// // console.log(a.b, a.a);

// // const user: {name: string, age: number} = {
// //   name: "Poly",
// //   age: 30
// // }

// // // const user = {
// // //   name: "Poly",
// // //   age: 30
// // // }

// // console.log(user.name, user.age)


// // class Person {
// //   constructor(
// //     public firstName: string,
// //     public secondName: string
// //   ){}
// // }
// // const c = new Person('Piter', 'Jecson')
// // console.log(c)

// // let a : {b: number, c?: string, [key: number]: boolean} ={
// //   b: 1, c: 'poly', 21: true
// // }

// // console.log(a)
// // type Age = number

// // type Person = {
// //   name: string,
// //   age: Age
// // }

// // const user: Person = {
// //   name : 'Poly',
// //   age : 30
// // }

// // console.log(user);

// // function splitPairs(text: string): string[] {
// //   // your code here
// //   const res: string[] = []
// //   let r: string = ''
  
// //   for(let i: number = 0; i < text.length; i++) {
// //       r += text[i]
            
// //       if(r.length === 2) {
// //           res.push(r)
// //           r = ''
// //       }
      
// //   }
    
// //   if (r.length === 1){
// //       res.push(r + "_")
// //   }
  
// //   return res;
// // }

// // console.log(splitPairs('abcde'));

// // function nearestValue(values: number[], search: number): number {
// //   // your code here
// //   return values.sort((a,b)=> a - b).reduce((res, el, i, arr) => {
     
// //   });
// // }

// // console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
// ////////////////////////////////////////////////////////////////////////////////
// // import { EventEmitter } from "events";

// // type TCallback = (args: any) => void;
// // type PIPES = { [key: string]: Array<TCallback> }
// // class MyEventEmitter extends EventEmitter {
// //   private PIPES: any = {}

// //   constructor() {
// //       super()
// //   }

// //   addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
// //     this.PIPES[pipeName] = cbArr
// //   }

// //   onWithPipe(eventName: string | symbol, handler: TCallback, pipeNames: Array<string>): void {
// //     pipeNames.forEach((pipeName): void =>
// //       this.PIPES[pipeName].forEach((cb: TCallback) =>
// //         this.on(eventName, cb)
// //       )
// //     )

// //     this.on(eventName, handler)
// //   }
// // }

// // const myEE = new MyEventEmitter();

// // const cb1 = (someEvent: string) => console.log('cb1: ' + someEvent);
// // const cb2 = (someEvent: string) => console.log('cb2: ' + someEvent);
// // const cb3 = (someEvent: string) => console.log('cb3: ' + someEvent);

// // myEE.addPipeline('pipe', [cb1, cb2, cb3]);
// // myEE.addPipeline('dy-pipe', [cb3, cb2, cb3]);
// // myEE.addPipeline('justPipe', [cb3, cb2, cb3]);

// // myEE.onWithPipe('click', () => console.log('HANDLER'), ['pipe', 'dy-pipe']);
// // myEE.emit('click', 'some-event');

// ///////////////////////////////////////////////////////////////////////////////////////////
// // import Path from "path"
// // const path = 

// // import {EventEmitter} from "events";

// // type Cb = (currentVal: any, oldVal: any) => any
// // type Handler = (event: any) => void
// // class myEE extends EventEmitter {

// // }


//////////Den dev /////////////////

// //////////Den dev /////////////////

// const EventEmitter = require('events')

// type Cb = Array<(currentVal: any, oldVal: any) => any>
// type Handler = (event: any) => void
// type pipeLinesObj = { eventName: string, eventCb: Array<(...args: any) => void> }

// class myEE extends EventEmitter {
//   private pipeLinesStore: pipeLinesObj[] = []

//   addPipeLine(eventName: string, cbArray: Cb) {
//     this.pipeLinesStore.push({ eventName: eventName, eventCb: cbArray })
//   }

//   onWithPipe(event: string, handler: Handler, eventNamesArr: string[]): void {
//     let temp = this.pipeLinesStore.filter(obj => eventNamesArr.includes(obj.eventName))
//         .map(obj => obj.eventCb)
//         .flat(1)
    
//     const callbacks = (data: any) => {
//         temp.reduce((acc: any, cb: any) => cb.call(void 0, acc, data), data)

//         console.log(temp.reduce((acc: any, cb: any) => cb.call(void 0, acc, data), data))
//     }

//     this.on(event, callbacks)
//     handler(`callbacks ok! - emitName: ${event}`)
//   }
// }

// const a = new myEE();

// function f(currentVal: any, oldVal: any): any {
//     console.log(`${currentVal} | ${oldVal}`);
    
//   return currentVal + oldVal
// }

// a.addPipeLine('keyDown', [f, f])
// a.addPipeLine('keyDown', [f, f])
// a.addPipeLine('down', [f, f])
// a.onWithPipe('click', (e) => console.log(`Done! ${e}`), ['keyDown'])

// a.emit('click', '1')


// ///////////////////////////////////////////////

// function nearestValue(values: number[], search: number): number {
//   // your code here
//   let res: number = 0

//   const ar: number[] = values.sort((a,b)=> a - b)

//   if (values.indexOf(search)!== -1) {
//     res = ar[values.indexOf(search)]
//   } else if (search > ar[ar.length -1]){
//     return ar[ar.length -1]
//   } else {
//     let i = 0
//     let b = true

//     for(let i = 0; i < ar.length; i++) {
//       if (ar.indexOf(search - i) > -1) {
//         return ar[ar.indexOf(search - i)]
//       }

//       if (ar.indexOf(search + i) > -1) {
//         return  ar[ar.indexOf(search + i)]
//       }
//     }
//   }

//   return res
// }

// console.log(nearestValue([4, 7, 10, 11, 12, 17], 19));
// console.log(nearestValue([4, 8, 10, 11, 12, 17], 9));
// console.log(nearestValue([4, 7, 10, 11, 12, 17], 100));

// function correctSentence(text: string): string {
//   // your code here
//   if(text.slice(-1) === '.') {
//     return text.slice(0,1).toUpperCase() + text.slice(1)
//   }

//   return text.slice(0,1).toUpperCase() + text.slice(1) + '.'
// }

// console.log(correctSentence('greetings, friends'))
// console.log(correctSentence('Greetings, friends.'))

// function sumNumbers(test: string): number {
//   return test.split(' ').reduce((sum: number, el: string) => !isNaN(Number(el)) ? sum += Number(el) : sum  ,0)
// }

// console.log(sumNumbers('This picture is an oil on canvas '
// + 'painting by Danish artist Anna '
// + 'Petersen between 1845 and 1910 year'));

// console.log(isNaN(Number('2')));
// console.log("HelloWorldhello".split('').every(el => isNaN(Number(el))))

// function threeWords(text: string): boolean {
//   // return text.split(' ').length < 3 ? false :
//   //   text.split(' ').reduce((res: boolean, el: string, i: number, arr: string[]) => arr.slice(i, i + 3)
//   //     .every((it: string) => isNaN(Number(it))) ? res = true : res, false)
//   const arr = text.split(' ')

//   if (arr.length < 3) return false

//   let count: number = 0
  
//   for(let i: number = 0; i < arr.length; i++) {
//     if (isNaN(Number(arr[i]))) {
//       count++

//       if(count >= 3) {
//         return true
//       }
//     } else {
//       count = 0
//     }
//   }
  
//   return count >= 3
// }

// console.log("Hello World hello 12".split(' ').slice(0, 0+3));
// console.log('isNaN', isNaN(Number('sd')));

// console.log(threeWords("Hello World hello"));
// console.log(threeWords("Hello World hello 12"))
// console.log(threeWords("Hi"))
// console.log(threeWords("123 2123 123 sdsd sdad"))
// console.log(threeWords("bla 21 bla bla bla 12"));
// console.log(threeWords("He is 123 man"));


// console.log("He is 123 man".split(' ').every(el => isNaN(Number(el))));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
import { EventEmitter } from "events";

type TCallback = (current: any, old: any) => any;
type TPipes = { [key: string]: Array<TCallback> }
type TPipesOn = { [key: string]: any }
class MyEventEmitter extends EventEmitter {
  private PIPES: TPipes = {}
  private PIPES_ON: TPipesOn = {}
  constructor() {
    super()
  }
  addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
    this.PIPES[pipeName] = cbArr
  }
  onWithPipe(eventName: string | symbol, handler: (...args: any) => void, pipeNames: Array<string>): void {
    pipeNames.forEach((pipeName) => {
    const eventPipe = (data: any): void => {
      this.PIPES[pipeName].reduce((acc: [any, any, any], cb: TCallback) => {
        acc[2] = acc[1]
        acc[1] = acc[0]
        acc[0] = cb.call(void 0, acc[0], acc[2])

        return acc
        }, [data, null, null])
      }

      this.PIPES_ON[pipeName] = eventPipe;
      this.on(eventName, eventPipe)
    })

    handler(`pipes [${pipeNames}] были связаны с событием: ${String(eventName)}\n`);
  }
  offWithPipe(eventName: string | symbol, pipeNames: Array<string>): void {
    pipeNames.forEach((pipeName) =>
        this.off(eventName, this.PIPES_ON[pipeName])
    )

    console.log(`\npipes [${pipeNames}] были отвязаны от события: ${String(eventName)}\n`);
  }
}

const myEE = new MyEventEmitter();

const cb1 = (current: any, old: any): any => {
  console.log(`cb1: ${current} | ${old} `);
  return current + '1'
}

const cb2 = (current: any, old: any): any => {
  console.log(`cb2: ${current} | ${old} `);
  return current * 2
}

const handler = (eventyany: string) => console.log(eventyany);
myEE.addPipeline('pipe', [cb1, cb1, cb1, cb1, cb1]);
myEE.addPipeline('dy-pipe', [cb2, cb2, cb2, cb2, cb2]);
myEE.onWithPipe('click', handler, ['pipe', 'dy-pipe']);
myEE.emit('click', 1);
myEE.offWithPipe('click', ['pipe'])
myEE.emit('click', 4);

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');

// import { EventEmitter } from "events"
// const myEE = new EventEmitter()

// myEE.on('kkk', ()=>{
//   console.log("adada");
// })

// myEE.emit('kkk')

// import { EventEmitter } from "events"

// const myEE = new EventEmitter()

// myEE.on('ev', function(a,b): any{
//   console.log(a, b, this, this === myEE);
// })

// myEE.emit('ev', 3, 2)

// import { EventEmitter } from "events"

// const myEE = new EventEmitter()
// myEE.on('e', (a,b)=>{
//   console.log(a,b,this);
// })
// myEE.emit('e', 2, 1)

// import { EventEmitter } from "events"

// const myEE = new EventEmitter()

// let count = 0

// // myEE.on('ev', (a, b) => {
// //   setImmediate(() => {
// //     console.log("Async");
// //   })
// // })

// // myEE.on('Lol', ()=>{console.log('Say lol')})

// // myEE.emit('ev', 2, 3)
// // myEE.emit('Lol')

// // console.log(myEE);

// myEE.on('Add', ()=> {
//   console.log(count++);
// })

// myEE.emit('Add')
// function firstWord(text: string): string {
//   return 
// }

// console.log(firstWord("Hello world"));
// console.log(firstWord("... and so on ..."))

// console.log(/^[A-Z]+$/i.test('dsasd...'));

// function firstWord(text: string): string {
//   return String(text.split(' ').find(el => /^[A-Z]+$/i.test(el)))
// }

// console.log(firstWord("... and so on ..."));
// console.log(firstWord("Hello world"));
/*

import { EventEmitter } from "events";

type TCallback = (current: any, old: any) => any;
type TPipes = { [key: string]: Array<TCallback> }
type TPipesOn = { [key: string]: any }

class MyEventEmitter extends EventEmitter {
  private PIPES: TPipes = {}
  private PIPES_ON: TPipesOn = {}
  constructor() {
    super()
  }
  addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
    this.PIPES[pipeName] = cbArr
  }
  onWithPipe(eventName: string | symbol, handler: (...args: any) => void, pipeNames: Array<string>): void {
    pipeNames.forEach((pipeName) => {
    const eventPipe = (data: any): void => {
      this.PIPES[pipeName].reduce((acc: [any, any, any], cb: TCallback) => {
        acc[2] = acc[1]
        acc[1] = acc[0]
        acc[0] = cb.call(void 0, acc[0], acc[2])

        return acc
        }, [data, null, null])
      }

      this.PIPES_ON[pipeName] = eventPipe;
      this.on(eventName, eventPipe)
    })

    handler(`pipes [${pipeNames}] были связаны с событием: ${String(eventName)}\n`);
  }
  offWithPipe(eventName: string | symbol, pipeNames: Array<string>): void {
    pipeNames.forEach((pipeName) =>
        this.off(eventName, this.PIPES_ON[pipeName])
    )

    console.log(`\npipes [${pipeNames}] были отвязаны от события: ${String(eventName)}\n`);
  }
}

const myEE = new MyEventEmitter();

const cb1 = (current: any, old: any): any => {
  console.log(`cb1: ${current} | ${old} `);
  return current + '1'
}

const cb2 = (current: any, old: any): any => {
  console.log(`cb2: ${current} | ${old} `);
  return current * 2
}

const handler = (eventyany: string) => console.log(eventyany);
myEE.addPipeline('pipe', [cb1, cb1, cb1, cb1, cb1]);
myEE.addPipeline('dy-pipe', [cb2, cb2, cb2, cb2, cb2]);
myEE.onWithPipe('click', handler, ['pipe', 'dy-pipe']);
myEE.emit('click', 1);
myEE.offWithPipe('click', ['pipe'])
myEE.emit('click', 4);

*/

// import { EventEmitter } from "events"

// type CallBack = (current: any, old: any) => any
// type Handler = (event: any) => void
// class myEE extends EventEmitter {


//   constructor() {
//     super()
//   }


// }


// import { EventEmitter } from "events";
// type TCallback = (current: any, old: any) => any;
// type TPipes = { [key: string]: Array<TCallback> }
// class MyEventEmitter extends EventEmitter {
//   private PIPES: TPipes = {}
//   constructor() {
//     super()
//   }

//   addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
//     this.PIPES[pipeName] = cbArr
//   }

//   onWithPipe(eventName: string | symbol, handler: (data: any) => any, pipeNames: Array<string>): void {
//     const pipesGo = (data: any): void => {
//       pipeNames.forEach((pipeName) => {
//         this.PIPES[pipeName].reduce((acc: [any, any, any], cb: TCallback) => {
//           acc[2] = acc[1]
//           acc[1] = acc[0]
//           acc[0] = cb.call(void 0, acc[0], acc[2])
//           return acc
//         }, [data, null, null])
//       }
//     )}
//     handler.bind(void 0, pipesGo(1))
//     this.on(eventName, handler)
//   }
// }
// const myEE = new MyEventEmitter();
// const cb1 = (current: any, old: any): any => {
//   console.log(`cb1: ${current} | ${old} `);
//   return current + 1
// }
// const cb2 = (current: any, old: any): any => {
//   console.log(`cb2: ${current} | ${old} `);
//   return current * 2
// }
// const handler = (data: any): any => console.log(data);
// myEE.addPipeline('pipe', [cb1, cb1, cb1, cb1, cb1]);
// myEE.addPipeline('dy-pipe', [cb2, cb2, cb2, cb2, cb2]);
// myEE.onWithPipe('click', handler, ['pipe', 'dy-pipe']);
// //console.log(myEE);
// myEE.emit('click', 10);
// myEE.off('click', handler)
// //console.log(myEE);

////////////////////////////////////////////find first world//////////////////////////////
// function firstWord(text: string): string {
//   let str = (text.split(' ').filter(el => /^[A-Z]+$/i.test(el[0]) && el !== ' ').join(' ').trim().split(' ')[0])
//   return str[str.length - 1] === "," ? str.slice(0, -1) : str.includes('.') ? str.slice(0, str.indexOf('.')) : str
// }

// console.log(firstWord("... a and so on ..."));
// console.log(firstWord(" a.a word "));
/////////////////////////////////////////////////////////////////////////////////////////////////// how much numbers in yhe string
// function countDigits(text: string): number {
//   return text.split('').reduce((sum: number, el: string) => !isNaN(Number(el)) && el !== ' ' ? sum += 1 : sum  , 0)
// }

// console.log(countDigits('This picture is an oil on canvas '
// + 'painting by Danish artist Anna '
// + 'Petersen between 1845 and 1910 year'));
///////////////////////////////////////////////////////////////////////////////
// function backwardStringByWord(text: string): string {
//   return text.split(' ').map(el => el.split('').reverse().join('')).join('')
// }

// console.log(backwardStringByWord('world'));
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
import { EventEmitter } from "events";
type TCallback = (current: any, old: any) => any;
type TPipes = { [key: string]: Array<TCallback> }
class MyEventEmitter extends EventEmitter {
  private PIPES: TPipes = {}
  constructor() {
    super()
  }
  addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
    this.PIPES[pipeName] = cbArr
  }
  onWithPipe(eventName: string | symbol, handler: (data: any) => any, pipeNames: Array<string>): void {
    const pipesGo = (data: any): void => {
      pipeNames.forEach((pipeName) => {
        this.PIPES[pipeName].reduce((acc: [any, any, any], cb: TCallback) => {
          acc[2] = acc[1]
          acc[1] = acc[0]
          acc[0] = cb.call(void 0, acc[0], acc[2])
          return acc
        }, [data, null, null])
      })
    }
    this.on(
      eventName,
      handler.call(void 0, pipesGo)
    )
  }
}
const myEE = new MyEventEmitter();
const cb1 = (current: any, old: any): any => {
  console.log(`cb1: ${current} | ${old}` );
  return current + 1
}
const cb2 = (current: any, old: any): any => {
  console.log(`cb2: ${current} | ${old}` );
  return current * 2
}
const handler = (data: any): any => data
myEE.addPipeline('pipe', [cb1, cb1, cb1, cb1, cb1]);
myEE.addPipeline('dy-pipe', [cb2, cb2, cb2, cb2, cb2]);
const someEvent = myEE.onWithPipe('click', handler, ['pipe', 'dy-pipe']);
//console.log(myEE);
myEE.emit('click', 100);
myEE.off('click', handler)
//console.log(myEE);

*/
//////////////////////////////////////////////////////////////////////////////////////////////

// import { EventEmitter, errorMonitor } from "events";

// const myEE = new EventEmitter()

// let m: number = 0

// myEE.on('ev', ()=>{
//   console.log(++m);
// })

// myEE.emit('ev')
// myEE.emit('ev')

// myEE.emit('error', new Error('whoops!'))

// myEE.on('error', (err)=>{
//   console.error("whoops!")
// })

// myEE.emit('error', new Error('whoops!'))


// myEE.on(errorMonitor, (err)=>{
//   MyMonitoringTool.log(err)
// })

// myEE.emit('error', new Error('WHOOPS !'))

///////////////////////////////////////////////////////////////////
// import assert from "assert";

// interface Stock {
//     name: string,
//     price: number,
// };

// function biggerPrice(limit: number, data: Stock[]): Stock[] {
//     // your code here
//     return data.sort((a, b) => b.price - a.price).slice(0, limit);
// }

// console.log(biggerPrice(2, [
//   {"name": "bread", "price": 100},
//   {"name": "wine", "price": 138},
//   {"name": "meat", "price": 15},
//   {"name": "water", "price": 1}
// ]));

////////////////////////////////////////////////////////////////////
// function betweenMarkers(text: string, begin: string, end: string): string {
//   return text.slice(
//     (text.indexOf(begin) === -1 ? 0 : (text.indexOf(begin) + begin.length)), 
//     text.indexOf(end) === -1 ? text.length : text.indexOf(end));
// }

// console.log(betweenMarkers('What is >apple<', '>', '<'));
// console.log(betweenMarkers("<head><title>My new site</title></head>",
// "<title>", "</title>"), 'My new site');
// console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'));
// console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));

/////////////////////////////////////////////////////////////////////

// const obj: {[key: string] : number} = {}
// obj.a = 2
// console.log(obj); 

/////////////////////////////////////////////////////////////////

// function popularWords(text: string, words: string[]) {
//   const obj: {[key: string] : number} = {}
//   const text1: string = text.toLowerCase()
//     .split('').map(el => el === '\n' ? " " : el).join('')
     
//   words.forEach(el => obj[el] = 0)

//   text1.split(' ').forEach(el => {
//     words.forEach(word => {
//       if(el === word) {
        
//         obj[word] += 1
//       }

//     })
//   })

//   return obj;
// }

// console.log(popularWords(`
// When I was One
// I had just begun
// When I was Two
// I was nearly new`, ['i', 'was', 'three', 'near']));

//////////////////////////////////////////////////////////////////////
=======

//   const ar: number[] = values.sort((a,b)=> a - b)

//   if (values.indexOf(search)!== -1) {
//     res = ar[values.indexOf(search)]
//   } else {
//     let count1: number = 0
//     let count2: number = 0
//     let res1: number = 0
//     let res2: number = 0

//     console.log(count1, res1);
//     console.log(count2, res2);

//     for(let i = 0; i < ar.length; i++) {
//       count1++
      
//       if (ar.indexOf(search + i) !== -1) {
//         i = ar.length
//         res1 = ar[ar.indexOf(search + i)]
//       }
//     }

//     for(let i = 0; i < ar.length; i++) {
//       count2++
      
//       if (ar.indexOf(search - i) !== -1) {
//         i = ar.length
//         res2 = ar[ar.indexOf(search - i)]
//       }
//     }

//     res = count1 > count2 ? res2 : res1
//   }

//   return res
// }

// console.log(nearestValue([4, 7, 10, 11, 12, 17], 32)); //10

