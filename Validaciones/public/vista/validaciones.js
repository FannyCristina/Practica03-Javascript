function validarCedula(cedula) {
    // algoritmo de validacion de cedula
    var total = 0;
    var longitud = cedula.length;
    var longcheck = longitud - 1;
    for(let i = 0; i < longcheck; i++){
        if (i%2 === 0) {
            var aux = cedula.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
        } else {
            total += parseInt(cedula.charAt(i));
        }
    }
    total = total % 10 ? 10 - total % 10 : 0;
    return cedula.charAt(longitud-1) == total;
}


function validarTexto(event) {
    if(event.key >= '0' && event.key <= '9'){
        event.preventDefault();
    }
}