const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./notes/buffer&stream/text.txt')
const writeStream = fs.createWriteStream('./notes/buffer&stream/new-text.txt')
const compressStream = zlib.createGzip()

// readStream.on('data', (chunk) => {
  // console.log('------------')
  // console.log(chunk)
  // console.log(chunk.toString())

  // writeStream.write('\n @@@-----\n CHUNK START \n------@@@ \n ')
  // writeStream.write(chunk)
  // writeStream.write('\n @@@-----\n CHUNK START \n------@@@ \n ')  
// })

const handleErorr = () => {
  console.log('Error')
  readStream.destroy()
  writeStream.end('Finished with error...')
}

readStream
  .on('error', handleErorr)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleErorr)