const fs = require('fs')
const path = require('path')

//File System

//create folder, if folder alredy create we get errow
// fs.mkdir(path.join(__dirname, 'views'), (err) => {
//   if(err) {throw err}
  
//   console.log("folder was create");
// })

//create file in folder
// fs.writeFile(
//   path.join(__dirname, "views", "my.txt"),
//   "Hellow world2", //text was writed in my.txt
//   (err) => {
//     if (err) { throw err }
//     console.log("file was create");

//     //add text in file 
//     fs.appendFile(
//       path.join(__dirname, 'views', 'my.txt'),
//       ' File was update',
//       err => {
//         if (err) { throw err }
//         console.log("file was update");

//         fs.appendFile(
//           path.join(__dirname, 'views', 'my.txt'),
//           ' @New Update in file@ ',
//           err => {
//             if (err) { throw err }
//             console.log("file was update");

//             fs.readFile (
//               path.join(__dirname, 'views', 'my.txt'),
//               'utf-8',
//               (err, data) => {
//                 if (err) {throw err}
//                 console.log(data);
//                 // console.log(Buffer.from(data).toString());
//               }
//             )
//           }
//         )
//       }
//     )
//   }
// )

//Если вызвать сдесь то счиатемтолько 1ю запись остальные мы не увидим поэтому нужно 
// закинуть в конец цепочки для того чтобы они читали все данные
//read file
// fs.readFile (
//   path.join(__dirname, 'views', 'my.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) {throw err}
//     console.log(data);
//     // console.log(Buffer.from(data).toString());
//   }
// )

//переименновуем файл
fs.rename(
  path.join(__dirname, 'views', 'my.txt'), //путь к файл который нужно переименновать
  path.join(__dirname, 'views', 'rename.txt'), //переименнованный файл
  err => {
    if (err) throw err
    console.log('file was rename');
  }
)



