const EventEmiter = require('events')

class Logger extends EventEmiter {
  log = (msg) => {
    console.log(msg)
    this.emit('some_event', {id: 1123, text: "Emiter Hello!"})
  }
}

module.exports = Logger

/////////////////////////////// with inherits
// const EventEmiter = require('events')
// const util = require('util')

// class Logger{
//   log = (msg) => {
//     console.log(msg)
//     this.emit('some_event', {id: 1123, text: "Emiter Hello!"})
//   }
// }

// util.inherits(Logger, EventEmiter)

// module.exports = Logger