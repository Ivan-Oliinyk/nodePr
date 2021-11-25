const fs =require('fs')

fs.readFile('./notes/text.txt', 'utf8',  (err, data) => {
  fs.mkdir('./notes/someDir/', () => {
    fs.writeFile('./notes/someDir/test2.txt', `${data} New text!`, (err) => {
      err ? console.log(err) : null
    })
  })
})

setTimeout(() => {
  if (fs.existsSync('./notes/someDir/test2.txt')) {
    fs.unlink('./notes/someDir/test2.txt', () => {})
  }
}, 4000)

setTimeout(() => {
  if (fs.existsSync('./notes/someDir')) {
    fs.rmdir('./notes/someDir', () => {})
  }
}, 6000)