const b=[1, true, "hola", ["A", "B"]]
console.log(b[2]);
console.log(b[3][1]);

const c= Array.of("x", "t", "z", 9, 8, 7)
console.log(c);

const d=Array(100).fill(false);
console.log(d) 
// (100) [false, false, false..

const colores=["rojo", "verde","azul"]
console.log(colores)

colores.push("negro")
console.log('colores');
// agrega elementos

colores.pop();
console.log(colores)
// quita el ultimo elemento

colores.forEach(function(el, index){
console.log(`<li id="${index}">${el}</li>`);
});
/* <li>rojo</li>
<li>verde</li>
    <li>azul</li> */  