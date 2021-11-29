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


class Hue {
  constructor(public size: number, public count: number){}

  rgb(color: number){
      return this.HSVtoRGB( Math.round((this.count / this.size) * color), 1, 1)
  }
  
  HSVtoRGB(H: number, S: number , V: number){
      let V2 = V * (1 - S);
      let r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? this.mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? this.mix(V2,V,(H-240)/60) : 0)));
      let g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? this.mix(V2,V,H/60) : ((H>=180 && H<=240) ? this.mix(V,V2,(H-180)/60) : 0)));
      let b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? this.mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? this.mix(V,V2,(H-300)/60) : 0)));
      
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }
  
  mix(a: number, b: number, v: number){
      return (1-v)*a + v*b;
  }
}

const t = new Hue(100, 240)
console.log(t.rgb(30));