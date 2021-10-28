console.log(window)
let nombre=prompt("Ingrese su nombre")

if(nombre!=null){
    alert("Bienvenido "+ nombre)
}


let edad= prompt("Ingrese su edad")

parseInt(edad)

if(edad<18){
    alert("No puedes conducir")
}else if(edad>=18){
    alert("Puedes Conducir")
}

let nc= prompt("Cuantas calificaciones quieres ingresar")
parseInt(nc)

let p=0;
for(let i=0; i<nc; i++){
   let cal=prompt("ingresa la calificacion")
   p=parseFloat(p)+parseFloat(cal)
   
}
let prom;
prom=parseFloat(p)/parseFloat(nc)

alert("Promedio " + parseFloat(prom))

let n=prompt("Ingresa la calificacion")
parseInt(n)
if(n<3||n==0){
    alert("Muy deficiente")
}else if(n>=3 &&n<5){
    alert("Insuficiente")
}else if(n>=5&& n<6){
    alert("Suficiente")
}else if(n>=6 && n<7){
    alert("Bien")
}else if(n>=7 && n<9){
    alert("Notable")
}else if(n>=9 || n==10){
    alert("Sobresaliente")
}


let n
let p=0;
let m=0;

do {
    
   n=prompt("ingrese la calificacion")
   m++;
   p=parseFloat(p)+parseFloat(n)
    
    
} while (n!=null);
    
let prom;
prom=parseFloat(p)/parseFloat(m)

alert("Promedio " + parseFloat(p))



let numeros=[0,1];

let n=prompt("ingrese n")
parseInt(n)

for (let i = 2; i < n; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
    alert(numeros[i]);
}

