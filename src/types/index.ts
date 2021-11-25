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
import {EventEmitter} from 'events'

type MyListener = (...args: any[]) => void;

class MyEventEmitter extends EventEmitter {
    subscribe(eventName: string | symbol, listener: MyListener): Subscribe{
        return new Subscribe(this, eventName, listener)
    }
}

class Subscribe {
    private cb: MyListener;
    constructor(
        public eventEmiter: EventEmitter,
        private eventName: string | symbol,
        private listener: MyListener
    ){
        this.cb = (...args: any[]) => {
            return listener.apply(this.eventEmiter, args)
        }
        this.eventEmiter.on(eventName, this.cb)
    }

    unsubscribe(): void{
        this.eventEmiter.off(this.eventName, this.cb)
    }
}

const ee = new MyEventEmitter({captureRejections: true});
const a = ee.on("click", console.log);
const b = ee.subscribe("click2", (e)=>{
    console.log(e);
});
ee.off('click2', console.log)
console.log(ee);
b.unsubscribe()
console.log(ee);

////////////////////////////////////////////////////////////////////////////////





