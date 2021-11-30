const os = require('os');
const { createJsxClosingElement } = require('typescript');

//get os platform
console.log(os.platform()); //linux

// Архитектруа
console.log(os.arch()); //x64

//Иформация по процессорам
console.log(os.cpus()); //объект с информацией

//Свободная память
console.log(os.freemem());

//all memory
console.log(os.totalmem());

//корневая директория
console.log(os.homedir());

//Сколько системиа работает в секундах
console.log(os.uptime());


