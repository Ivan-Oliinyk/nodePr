const userData = require('./user')
const os = require('os')

userData.sayHello('Poly')
userData.user.sayHay()

console.log(os.platform(), os.release())