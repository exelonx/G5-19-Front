function tipoSocioConvertidor(tipo_Socio){
    switch(tipo_Socio){
        case '1':
            return 'PROVEEDOR';
        case '2':
            return 'CLIENTE';
    }
}

function estadoIIConvertidor(estado){
    switch(estado){
        case '1':
            return 'ACTIVO';
        case '2':
            return 'INACTIVO';
    }
}