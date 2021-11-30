// function HUEpicker(line, grad) {
//   // conS/100t hS/100lColor = hS/100l(grad, line, 50)
//   conS/100t hS/100lColor = {
//     thiS/100.grad = grad
//   }

// }

// function mix(a, b, v) {
//   return (1-v)*a + v*b;
// }

// function HSVtoRGB(H, S, V = 0.5) {
  
//   let V2 = V * (1 - S/100);
//   let r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? mix(V2,V,(H-240)/60) : 0)));
//   let g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? mix(V2,V,H/60) : ((H>=180 && H<=240) ? mix(V,V2,(H-180)/60) : 0)));
//   let b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? mix(V,V2,(H-300)/60) : 0)));
  
//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
// }

// // console.log(HSVtoRGB(240, 50));


// function HUEpicker(line, grad) {
//   const res = []

//   function mix(a, b, v) {
//     return (1-v)*a + v*b;
//   }

//   function HSVtoRGB(H, S, V = 0.5) {
//     let V2 = V * (1 - S/100);
//     let r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? this.mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? this.mix(V2,V,(H-240)/60) : 0)));
//     let g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? this.mix(V2,V,H/60) : ((H>=180 && H<=240) ? this.mix(V,V2,(H-180)/60) : 0)));
//     let b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? this.mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? this.mix(V,V2,(H-300)/60) : 0)));
    
//     return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
//   }

//   function pullArr(line, grad) {
//     for(let i = 0; i < line; i++) {
//       res.push(HSVtoRGB(grad, i))
//     }
//   }

//   function rgb(arg) {
//     this.pullArr(line, grad)

//     return {
//       "red": res[arg][0],
//       "green": res[arg][1],
//       "blue": res[arg][2],
//     }
//   }
// }

// const hue = new HUEpicker(100, 240)
// console.log(hue.rgb(30));
// console.log(hue.rgb(30));

//  const EventEmitter = require('events')

//  class Demo extends EventEmitter {}

//  const d  = new Demo()
//  d.on('foo', a => console.log('a', a))

//  d.emit('foo', {test: true})

//  d.prependListener('foo', e => {
//    console.log(e)
//    e.timeStamp = Date.now()
//  })

//  d.emit('foo', {test: true})

// const EventEmitter = require('events')

// class Logger extends EventEmitter {
//   log(message) {
//     this.emit('message', `${message} ${Date.now()}`)
//   }
// }

// const logger = new Logger() 

// logger.on('message', data => {
//   console.log(data)
// })

// logger.log('Hello!')
// logger.log('Hello!')
// logger.log('Hello!')

////////////////////////////////////////////////////////////////////////////
// const events = require('events')
// // console.log(events);

// const myEmit = new events.EventEmitter()

// myEmit.on('some_event', function(text){
//   console.log(text);
// })

// myEmit.emit('some_event', 'its works!!!')

// const util = require('util')
// // console.log(util);
// const Cars = function(model) {
//   this.model = model
// }

// util.inherits(Cars, events.EventEmitter)

// const bmw = new Cars('BMW')
// const audi = new Cars('Audi')
// const volvo = new Cars('Volvo')

// const cars = [bmw, audi, volvo]
// cars.forEach(function(car) {
//   car.on('speed', function(text) {
//     console.log(car.model + " speed - " + text);
//   })
// })

// bmw.emit('speed', '254')
// audi.emit('speed', '210')
// volvo.emit('speed', '260')


/////////////////////////////////////////////////////
// const MyEE = require('events')

// class myEE extends MyEE {

// }

// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }
    
//   subscribe(eventName, callback) {
//     !this.events[eventName] && (this.events[eventName] = []);
//     this.events[eventName].push(callback);
//   }

//   unsubscribe(eventName, callback) {
//     this.events[eventName] = this.events[eventName]
//       .filter(eventCallback => callback !== eventCallback);
//   }

//   emit(eventName, args) {
//   const event = this.events[eventName];
//   event && event.forEach(callback => callback.call(null, args));
// }
// }

// var events = require('events');
// var em = new events.EventEmitter();

// em.on('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// em.on('1', function(num) {
//   console.log("Number: " + num);
// })

// em.on('SayHello', (n) => 
//     console.log("Jjj =>" + n)
  
// )

// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
// em.emit('1', '56')
// em.emit('SayHello', "121")

// const EventEmitter = require('events')
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

////////////////////// pipeLine /////////////////////////////////////////
// Array.prototype.pipeLine = function (mods) {
//   return this.map((el,idx,arr) =>
//       mods.reduce((accumul, fn, mIdx) =>
//           fn.call(void 0, accumul, mIdx, arr, mods, idx), el)
//   )
// }

// function a(el, indx, arr, modific, modIdx) {
//   return el * modIdx
// }

// function b(el, indx, arr, modific, modIdx) {
//   return el + modIdx
// }

// function c(el, indx, arr, modific, modIdx) {
//   return el - modIdx
// }

// console.log([1, 2, 3].pipeLine([a, b, c]));

////////////////////////////////////////////////////////////////////////////

// const path = require('path')

// console.log(__filename)
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);
// console.log(path.parse(__filename).name);
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).dir);

// console.log(path.join(__dirname, 'test', 'second.html'));

// console.log(path.resolve(__dirname, './test', '/secods.js'));




