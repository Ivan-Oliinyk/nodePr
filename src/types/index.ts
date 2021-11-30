// import {EventEmitter, errorMonitor, captureRejections} from 'events'

// const ee = new EventEmitter({captureRejections: true})
// ee.setMaxListeners(2)

// // const a =  ee.on('click', (event) => {
// //   console.log(event)
// // })

// const cb = async (event: any) => {
//   // console.log(event)
//   try {
//     throw new Error('asdadasasdd@@@1111')
//   } catch(e) {
//     ee.emit('error', e)
//   }
// }

// // const a = ee.once('click', cb)
// // const a = ee.on('click', cb)

// //отключить евент
// // ee.off('click', cb)

// ee.on('click', cb)
// ee.on(errorMonitor, console.log)
// ee.on("error", console.log)

// console.log('listenerCount', ee.listenerCount('click'))
// console.log('listeners', ee.listeners('click'))
// console.log('eventNames', ee.eventNames())

// setInterval(() => ee.emit('click', Date.now()), 1* 1000)

///////////////////////////////////////////////////////////////////////////////////////
// import {EventEmitter} from 'events'

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

// const myEE = new MyEventEmitter()

// const sub = myEE.subscribe('click', () => {
//   console.log(sub);
// })

///////////////////////////////////////////////////////////////////////////////
// import {EventEmitter} from 'events'

// type MyListener = (...args: any[]) => void;

// class MyEventEmitter extends EventEmitter {
//     subscribe(eventName: string | symbol, listener: MyListener): Subscribe{
//         return new Subscribe(this, eventName, listener)
//     }
// }

// class Subscribe {
//     private cb: MyListener;
//     constructor(
//         public eventEmiter: EventEmitter,
//         private eventName: string | symbol,
//         private listener: MyListener
//     ){
//         this.cb = (...args: any[]) => {
//             return listener.apply(this.eventEmiter, args)
//         }
//         this.eventEmiter.on(eventName, this.cb)
//     }

//     unsubscribe(): void{
//         this.eventEmiter.off(this.eventName, this.cb)
//     }
// }

// const ee = new MyEventEmitter({captureRejections: true});
// const a = ee.on("click", console.log);
// const b = ee.subscribe("click2", (e)=>{
//     console.log(e);
// });
// ee.off('click2', console.log)
// console.log(ee);
// b.unsubscribe()
// console.log(ee);

////////////////////////////////////////////////////////////////////////////////

// import { EventEmitter} from "events";
// const EE = new EventEmitter()

// type MyListener = (...args: any[]) => void;
// class MyEE extends EventEmitter {
      
//       emite(event: string): void {
//             this.emit(event)
//       }
//       ontimes(event: string , cb: MyListener, count: number): void {
          
//           for (let i = 0; i < count; i++) {
//               ee.once(event, cb)
//           }
//       }
// }
// const ee = new MyEE()
// ee.ontimes('click', () => console.log('click'), 3)
// ee.ontimes('brock', () => console.log('brock'), 1)

// ee.emite('click')
// ee.emite('brock')

// ee.emite('click')

/////////////////////////////////////////////
// import {EventEmitter} from 'events'

// type EECb = (...args: any[]) => void
// type EEEN = string | symbol
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

// const arr = [1, 8, 9, 22, 101, 0, 1, 2]

// // const result = arr.reverse().reduce((res, el, i, arr) => 2, [])

// // console.log(result);
// console.log(arr);

// class HUEpicker {
  
// }
///////////////////////////////////////////////////////////////////////////////
// class HUEpicker {
//   constructor(public line: number, public deg: number){}

//   rgb(pos: number){
//       return this.HSVtoRGB( Math.round((this.deg / this.line) * pos), 1, 1)
//   }
  
//   HSVtoRGB(H: number, S: number , V: number){
//       let V2 = V * (1 - S);
//       let r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? this.mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? this.mix(V2,V,(H-240)/60) : 0)));
//       let g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? this.mix(V2,V,H/60) : ((H>=180 && H<=240) ? this.mix(V,V2,(H-180)/60) : 0)));
//       let b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? this.mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? this.mix(V,V2,(H-300)/60) : 0)));
      
//       return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
//   }
  
//   mix(a: number, b: number, v: number){
//       return (1-v)*a + v*b;
//   }
// }

// const t = new HUEpicker(100, 240)
// console.log(t.rgb(30))


///////////////////////////////////////////////////////////////////////////////////////////////////
/*
import {EventEmitter, errorMonitor} from 'events'

type EECb = (...args: any[]) => void
type EEEN = string | symbol

class Subscription {
  constructor (public eventEmitter: EventEmitter, private eventName: EEEN, private listener: EECb) {}
  unsubscribe() {
    this.eventEmitter.off(this.eventName, this.listener)
  }
}

class MyEventEmitter extends EventEmitter {
  constructor () {super()}

  subscribe(eventName: EEEN, listener: EECb): Subscription {
    this.on(eventName, listener)
    return new Subscription(this, eventName, listener)
  }
}

const myEE = new MyEventEmitter();

const sub = myEE.subscribe('click', () => {
  console.log(sub);
})

myEE.emit('click', {})

sub.unsubscribe()

myEE.emit('click')

class MySafeEventEmitter extends EventEmitter {
  private map = new Map()

  on(eventName: string | symbol, listener: (...args: any[]) => void): this {
    super.on(eventName, this.makeCb(listener))

    return this;
  }

  once(eventName: string | symbol, listener: (...args: any[]) => void): this {
    super.once(eventName, this.makeCb(listener))

    return this;
  }

  off(eventName: string | symbol, listener: (...args: any[]) => void): this {
    return this.removeListener(eventName, listener)
  }

  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
    if(this.map.has(listener)) {
      super.removeListener(eventName, this.map.get(listener))
    }

    return this;
  }

  private makeCb(listener: EECb): EECb {
    const cb = (...args: any[]): void => {
      try {
        return listener.apply(this, args);
      } catch (e) {
        this.emit('error', e)
      }
    }

    this.map.set(listener, cb)

    return cb
  }
}


const mySEE = new MySafeEventEmitter();

const cb = () => {
  throw new Error('dasdas')
}

mySEE.on('click', cb)

mySEE.on('error', console.warn)

mySEE.emit('click')


mySEE.off('click', cb)

mySEE.emit('click')

///
class TimesEventEmitter extends EventEmitter {
  onTimes(eventName: EEEN, listener: EECb, times: number): this {
    const cb = (() => {
      let callCount = 0;
      return (...args: any[]): void => {
        if(times > callCount) {
          listener.apply(this, args)
          callCount++;
        } else {
          this.off(eventName, cb)
        }
      }
    })()

    this.on(
      eventName,
      cb
    )
    return this;
  }
}

const tEE = new TimesEventEmitter()

tEE.onTimes('click', console.log, 5)

setInterval(() => (tEE.emit('click', Date.now()), console.log(tEE)), 1 * 1000)

*/

// const EventEmitter = require('events')

// type Cb = (currentValue: any, oldValue: any) => any
// class myEE extends EventEmitter {
//   private pipeLineArr: object

//   constructor() {
//     super()
//     this.pipeLineArr = []
//   }

//   addPopeLine(eventName: string, cbArr: Cb[]) {
    
//   }
// }

// const EventEmitter = require('events')

//type PriveteStorege = Object//
// type Cb = (currentValue: any, oldValue: any) => any
// class MyEventEmitter extends EventEmitter {
//   private ctx = []

//   addPipeline(event: string | symbol, arrCb: Cb[]){
//     this.ctx.push({name: event, data: arrCb})
//   }

//   onWithPipe(event: string, handler: (event: any) => void, namesArray: string[]){
//     let temp = this.ctx.filter((el, index) => namesArray.includes(el.name))
//     temp.forEach(el => el.data.forEach(fn => this.on(event, fn)))
//   }
// } 

// const tt = new MyEventEmitter()
// tt.addPipeline('click-npc', [() => console.log('test'), () => console.log('test'), () => console.log('test')])
// tt.onWithPipe('click', () => console.log('test'), ['click-npc'])
// tt.emit('click', 'some-event')



// console.log(111_222_123 * 2);
// const a = {
//   b: 'x',
//   a: 123
// }

// console.log(a.b, a.a);

// const user: {name: string, age: number} = {
//   name: "Poly",
//   age: 30
// }

// // const user = {
// //   name: "Poly",
// //   age: 30
// // }

// console.log(user.name, user.age)


// class Person {
//   constructor(
//     public firstName: string,
//     public secondName: string
//   ){}
// }
// const c = new Person('Piter', 'Jecson')
// console.log(c)

// let a : {b: number, c?: string, [key: number]: boolean} ={
//   b: 1, c: 'poly', 21: true
// }

// console.log(a)
// type Age = number

// type Person = {
//   name: string,
//   age: Age
// }

// const user: Person = {
//   name : 'Poly',
//   age : 30
// }

// console.log(user);

// function splitPairs(text: string): string[] {
//   // your code here
//   const res: string[] = []
//   let r: string = ''
  
//   for(let i: number = 0; i < text.length; i++) {
//       r += text[i]
            
//       if(r.length === 2) {
//           res.push(r)
//           r = ''
//       }
      
//   }
    
//   if (r.length === 1){
//       res.push(r + "_")
//   }
  
//   return res;
// }

// console.log(splitPairs('abcde'));

// function nearestValue(values: number[], search: number): number {
//   // your code here
//   return values.sort((a,b)=> a - b).reduce((res, el, i, arr) => {
     
//   });
// }

// console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
////////////////////////////////////////////////////////////////////////////////
// import { EventEmitter } from "events";

// type TCallback = (args: any) => void;
// type PIPES = { [key: string]: Array<TCallback> }
// class MyEventEmitter extends EventEmitter {
//   private PIPES: any = {}

//   constructor() {
//       super()
//   }

//   addPipeline(pipeName: string, cbArr: Array<TCallback>): void {
//     this.PIPES[pipeName] = cbArr
//   }

//   onWithPipe(eventName: string | symbol, handler: TCallback, pipeNames: Array<string>): void {
//     pipeNames.forEach((pipeName): void =>
//       this.PIPES[pipeName].forEach((cb: TCallback) =>
//         this.on(eventName, cb)
//       )
//     )

//     this.on(eventName, handler)
//   }
// }

// const myEE = new MyEventEmitter();

// const cb1 = (someEvent: string) => console.log('cb1: ' + someEvent);
// const cb2 = (someEvent: string) => console.log('cb2: ' + someEvent);
// const cb3 = (someEvent: string) => console.log('cb3: ' + someEvent);

// myEE.addPipeline('pipe', [cb1, cb2, cb3]);
// myEE.addPipeline('dy-pipe', [cb3, cb2, cb3]);
// myEE.addPipeline('justPipe', [cb3, cb2, cb3]);

// myEE.onWithPipe('click', () => console.log('HANDLER'), ['pipe', 'dy-pipe']);
// myEE.emit('click', 'some-event');

///////////////////////////////////////////////////////////////////////////////////////////
// import Path from "path"
// const path = 

// import {EventEmitter} from "events";

// type Cb = (currentVal: any, oldVal: any) => any
// type Handler = (event: any) => void
// class myEE extends EventEmitter {

// }

//////////Den dev /////////////////
const EventEmitter = require('events')

type Cb = Array<(currentVal: any, oldVal: any) => any>
type Handler = (event: any) => void
type pipeLinesObj = { eventName: string, eventCb: Array<(...args: any) => void> }

class myEE extends EventEmitter {
  private pipeLinesStore: pipeLinesObj[] = []

  addPipeLine(eventName: string, cbArray: Cb) {
    this.pipeLinesStore.push({ eventName: eventName, eventCb: cbArray })
  }

  onWithPipe(event: string, handler: Handler, eventNamesArr: string[]): void {
    let temp = this.pipeLinesStore.filter(obj => eventNamesArr.includes(obj.eventName))
        .map(obj => obj.eventCb)
        .flat(1)
    
    const callbacks = (data: any) => {
        temp.reduce((acc: any, cb: any) => cb.call(void 0, acc, data), data)

        console.log(temp.reduce((acc: any, cb: any) => cb.call(void 0, acc, data), data))
    }

    this.on(event, callbacks)
    handler(`callbacks ok! - emitName: ${event}`)
  }
}

const a = new myEE();

function f(currentVal: any, oldVal: any): any {
    console.log(`${currentVal} | ${oldVal}`);
    
  return currentVal + oldVal
}

a.addPipeLine('keyDown', [f, f])
a.addPipeLine('keyDown', [f, f])
a.addPipeLine('down', [f, f])
a.onWithPipe('click', (e) => console.log(`Done! ${e}`), ['keyDown'])

a.emit('click', '1')




