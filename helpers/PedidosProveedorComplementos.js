//Funciones complementarias
function limpiarFormularios(){
    let formulario = document.getElementById('formularios');
    console.log(formulario)
    formulario.reset();
}

function estadoConvertidor(estado){
    switch(estado){
        case 'A':
            return 'ANULADO';
        case 'P':
            return 'PENDIENTE';
        case 'F':
            return 'FINALIZADO';
    }
}

function resetParametrosHTML(){
    //Desbloquear textbox
    ID.readOnly = false;
    ID_SOCIO.readOnly = false;
    //Convertir botón de actualizar a agregar
    boton = `<input type="submit" id="btnSubmit" value="Ingresar Pedido de Proveedor" class="btn btn-secondary"></input>`
    document.getElementById("btnFormulario").innerHTML = boton;
}

function convertToLempiras(numero){
    let preResult = (new Intl.NumberFormat('en-HN',{ currency: 'USD', style: 'currency'}).format(numero));
    return preResult.replace('$', 'L.')
}