
function filtrar (Arr, letra){
 
    let nuevoArr = [];


    for(i = 0; i <= Arr.length; i++){

        let nombre = Arr[0];

        if(nombre[0] == letra ){

            nuevoArr.push(nombre);
        }



    }

    return nuevoArr

}




let nombres = ['Leslie', 'Hector', 'Esmeralda Lucia', 'Yeni', 'Lucia', 'Hemil'];
let  nombresCon = filtrar(nombres, 'L');

console.log(nombresCon);
