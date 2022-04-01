var UrlSocios = 'http://52.152.236.67:90/G5_19/controller/socio_negocio.php?op=GetSocios';
var UrlPostSocios = 'http://52.152.236.67:90/G5_19/controller/socio_negocio.php?op=InsertSocio';
var UrlPostInsertSocio = 'http://52.152.236.67:90/G5_19/controller/socio_negocio.php?op=GetSocio';
var UrlPutUpdateSocio = 'http://52.152.236.67:90/G5_19/controller/socio_negocio.php?op=UpdateSocio';
var UrlDeleteSocio = 'http://52.152.236.67:90/G5_19/controller/socio_negocio.php?op=DeleteSocio';

$(document).ready(function(){ //función anónima que no lleva nombre

    CargarSocios();

});

$('#formulario').on("click", function(event){

    event.preventDefault();

});

function CargarSocios(){

    $.ajax({

        url: UrlSocios,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){

            var MiItems= response;
            var Valores='';
            

            for (index = 0; index < MiItems.length; index++) {
                
                const center = 'class="text-center"';
                const right = 'class="text-end"';
                const EstadoSocio = estadoIIConvertidor(MiItems[index].ESTADO);
                const TipoSocio = tipoSocioConvertidor(MiItems[index].TIPO_SOCIO)

                Valores +=`<tr>
                <td ${right}> ${MiItems[index].ID}</td>
                <td ${center}> ${MiItems[index].NOMBRE}</td>
                <td ${center}> ${MiItems[index].RAZON_SOCIAL}</td>
                <td ${center}> ${MiItems[index].DIRECCION}</td>
                <td ${center}> ${TipoSocio}</td>
                <td ${center}> ${MiItems[index].CONTACTO}</td>
                <td ${center}> ${MiItems[index].EMAIL}</td>
                <td ${center}> ${MiItems[index].FECHA_CREADO}</td>
                <td ${center}> ${EstadoSocio}</td>
                <td ${center}> ${MiItems[index].TELEFONO}</td>

                <td ${center}>
                <button class="btn btn-secondary" onclick="CargarSocio(${MiItems[index].ID})">Editar</button>
                <hr>
                <button class="btn btn-danger" onclick="EliminarSocio(${MiItems[index].ID})">Eliminar</button>
                </td>

                </tr>` 
                
                $('.Socios').html(Valores);

            }

        }

    });

}

function AgregarSocio(){

    var datosSocio={

        NOMBRE:$('#NOMBRE').val(),
        RAZON_SOCIAL:$('#RAZON_SOCIAL').val(),
        DIRECCION:$('#DIRECCION').val(),
        TIPO_SOCIO:$('#TIPO_SOCIO').val(),
        CONTACTO:$('#CONTACTO').val(),
        EMAIL:$('#EMAIL').val(),
        FECHA_CREADO:$('#FECHA_CREADO').val(),
        ESTADO:$('#ESTADO').val(),
        TELEFONO:$('#TELEFONO').val()
    };

    var datosSocioJson = JSON.stringify(datosSocio); //stringify Convierte código JavaScript a código JSON
    
    $.ajax({

        url: UrlPostSocios,
        type: 'POST',
        data: datosSocioJson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function(response){

            console.log(response);
            CargarSocios();
            swal('¡Inserción Exitosa!', 'Se ha agregado el socio con el ID:' + idSocio, 'success');
        },

        error: function(){

            swal('¡Error!',`Error al agregar un nuevo socio: \nTipo de Socio inválido o Estado incorrecto`, 'error')

        }

    });

    alert('El Nuevo Socio ha sido Creado');

}

function CargarSocio(idSocio){

    var datosSocio ={

        ID:idSocio

    };

    alert('Se ha seleccionado el Socio con ID: '+ idSocio);

    var datosSocioJson = JSON.stringify(datosSocio); //stringify Convierte código JavaScript a código JSON

    $.ajax({

        url: UrlPostInsertSocio,
        type: 'POST',
        data: datosSocioJson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function(response){

            var MiItems= response;

            $('#NOMBRE').val(MiItems[0].NOMBRE);
            $('#RAZON_SOCIAL').val(MiItems[0].RAZON_SOCIAL);
            $('#DIRECCION').val(MiItems[0].DIRECCION);
            $('#TIPO_SOCIO').val(MiItems[0].TIPO_SOCIO);
            $('#CONTACTO').val(MiItems[0].CONTACTO);
            $('#EMAIL').val(MiItems[0].EMAIL);
            $('#FECHA_CREADO').val(MiItems[0].FECHA_CREADO);
            $('#ESTADO').val(MiItems[0].ESTADO);
            $('#TELEFONO').val(MiItems[0].TELEFONO);

            var btnActualizar= '<input type="submit" id="btnActualizar" onclick="ActualizarSocio('+MiItems[0].ID+')"'+
            'value="Actualizar Socio" class="btn btn-primary"></input>';

            $('.btnsocio').html(btnActualizar);

        },

        error: function(){

            alert('Error al Crear un Nuevo Socio');

        }

    });

}

function ActualizarSocio(idSocio){

    var datosSocio={

        ID: idSocio,
        NOMBRE:$('#NOMBRE').val(),
        RAZON_SOCIAL:$('#RAZON_SOCIAL').val(),
        DIRECCION:$('#DIRECCION').val(),
        TIPO_SOCIO:$('#TIPO_SOCIO').val(),
        CONTACTO:$('#CONTACTO').val(),
        EMAIL:$('#EMAIL').val(),
        FECHA_CREADO:$('#FECHA_CREADO').val(),
        ESTADO:$('#ESTADO').val(),
        TELEFONO:$('#TELEFONO').val()
    };

    var datosSocioJson = JSON.stringify(datosSocio); //stringify Convierte código JavaScript a código JSON
    
    $.ajax({

        url: UrlPutUpdateSocio,
        type: 'PUT',
        data: datosSocioJson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function(response){

            console.log(response);
            CargarSocios();

        },

        error: function(){

            alert('Error al Actualizar el Socio');

        }

    });

    alert('El Socio ha sido Actualizado');

}

function EliminarSocio(idSocio)
{

    var datosSocio={

        ID: idSocio

    };

    alert('Se ha seleccionado el Socio con ID: '+ idSocio);

    var datosSocioJson = JSON.stringify(datosSocio); //stringify Convierte código JavaScript a código JSON

    $.ajax({

        url: UrlDeleteSocio,
        type: 'DELETE',
        data: datosSocioJson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function(response){

            console.log(response);
            CargarSocios();

        },

        error: function(){

            alert('Error al Eliminar el Socio');

        }

    });

    alert('El Socio ha sido Eliminado');

}