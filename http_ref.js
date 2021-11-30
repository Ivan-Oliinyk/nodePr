const http = require('http')

//Функция(хендлер (которая передается в колбэк)) 
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write('<h1>Hellow from NODe JS</h1>')
  res.end(`
    <div style="background: red; width: 200px; height: 100px">
      <h1>TEST</h1>
    </div>
  `)
})

server.listen(3333, () => {
  console.log('Server is running...');
})