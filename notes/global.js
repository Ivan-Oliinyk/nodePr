// console.log(global);
// console.log(__dirname)
// console.log(__filename)
// console.log(process.argv);
// console.log(`Hello, ${process.argv[2]}`)

const url = new URL('https://webDev.com/path/name#test')
console.log(url.hostname)
console.log(url.href)
console.log(url.pathname)
console.log(url.hash)