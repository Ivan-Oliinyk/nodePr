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

 