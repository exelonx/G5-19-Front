
//funciones para convertir el Aplica_ISV y estado

function AplicaISV(aplica_isv){  
    switch(aplica_isv){
        case 'S':
            return 'Aplica ISV';
        case 'N':
            return 'No Aplica ISV';
        
    }
}

function EstadoConverter(estado){
    switch(estado){
        case 'A':
            return 'ACTIVO';
        case 'I':
            return 'INACTIVO';
    }
}


