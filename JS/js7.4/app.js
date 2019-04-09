let numeros = [1, 28, 6, 23, 89, 200, 15]
let mayor = 0;

for( let i = 0; i <= numeros.length; i++){
    if(numeros[i]>= mayor){
        mayor = numeros[i]
    }
    
}
console.log("El numero mayor es: "+ mayor)