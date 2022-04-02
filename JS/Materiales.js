const UrlGetmateriales = 'http://52.152.236.67:90/G5_19/controller/materiales.php?op=Getmateriales';
const UrlGetmaterial = 'http://52.152.236.67:90/G5_19/controller/materiales.php?op=Getmaterial';
const UrlPostmaterial = 'http://52.152.236.67:90/G5_19/controller/materiales.php?op=Insertmaterial';
const UrlPutmaterial = 'http://52.152.236.67:90/G5_19/controller/materiales.php?op=Updatematerial';
const UrlDeletematerial = 'http://52.152.236.67:90/G5_19/controller/materiales.php?op=Deletematerial';

$(document).ready(function () {

    CargarMateriales();

});

function CargarMateriales() {

    $.ajax({

        url: UrlGetmateriales,
        type: 'GET',
        datatype: 'JSON',
        success: function (response) {

            var MiItems = response;
            var Valores = '';


            for (index = 0; index < MiItems.length; index++) {

                Valores += '<tr>' +
                    '<td>' + MiItems[index].ID + '</td>' +
                    '<td>' + MiItems[index].DESCRIPCION + '</td>' +
                    '<td>' + MiItems[index].UNIDAD + '</td>' +
                    '<td>' + MiItems[index].COSTO + '</td>' +
                    '<td>' + MiItems[index].PRECIO + '</td>' +
                    '<td>' + MiItems[index].APLICA_ISV + '</td>' +
                    '<td>' + MiItems[index].PORCENTAJE_ISV + '</td>' +
                    '<td>' + MiItems[index].ESTADO + '</td>' +
                    '<td>' + MiItems[index].ID_SOCIO + '</td>' +

                    '<td>' +
                    '<button class="btn btn-info" onclick="CargarMaterial(' + MiItems[index].ID + ')">Editar</button>' +
                    '<button class="btn btn-danger" onclick="EliminarMaterial(' + MiItems[index].ID + ')">Eliminar</button>' +
                    '</td>' +

                    '</tr>';

                $('.Materiales').html(Valores);
            }
        }
    });
}


function AgregarMaterial() {

    var datosmaterial = {
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
    };

    var datosmaterialjson = JSON.stringify(datosmaterial);
    
    $.ajax({
        url: UrlPostmaterial,
        type: 'POST',
        data: datosmaterialjson,
        dataType: 'JSON',
        contenttype: 'application/json',

        success: function (response) {
            console.log(response);
            CargarMateriales();
        },

        error: function () {
            alert('Error al Agregar el material');
        }

    });
    alert('Material Agregado');

}


function CargarMaterial(idmaterial) {

    var datosmaterial = {
        ID: idmaterial
    };

    var datosmaterialjson = JSON.stringify(datosmaterial);
    alert(datosmaterialjson);

    $.ajax({
        url: UrlGetmaterial,
        type: 'POST',
        data: datosmaterialjson,
        dataType: 'JSON',
        contenttype: 'application/json',

        success: function (response) {
            var MiItems = response;
            $('#DESCRIPCION').val(MiItems[0].DESCRIPCION);
            $('#UNIDAD').val(MiItems[0].UNIDAD);
            $('#COSTO').val(MiItems[0].COSTO);
            $('#PRECIO').val(MiItems[0].PRECIO),
            $('#APLICA_ISV').val(MiItems[0].APLICA_ISV);
            $('#PORCENTAJE_ISV').val(MiItems[0].PORCENTAJE_ISV);
            $('#ESTADO').val(MiItems[0].ESTADO);
            $('#ID_SOCIO').val(MiItems[0].ID_SOCIO);


            var btnActualizar = '<input type="submit" id="btnActualizar" onclick="ActualizarMaterial(' + MiItems[0].ID + ')"' +
                'value="Actualizar material" class="btn btn-primary"></input>';
            $('.btnmaterial').html(btnActualizar);

        },

        error: function () {

            alert('Error al Crear un Nuevo Material');

        }
    });
}

function ActualizarMaterial(idmaterial) {

    var datosmaterial = {

        ID: idmaterial,
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
    };

    var datosmaterialjson = JSON.stringify(datosmaterial);

    $.ajax({

        url: UrlPutmaterial,
        type: 'PUT',
        data: datosmaterialjson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function (response) {

            console.log(response);
            CargarSocios();

        },

        error: function () {

            alert('Error al Actualizar el Material');

        }

    });

    alert('El Material ha sido Actualizado');

}

function EliminarMaterial(idmaterial) {

    var datosmaterial = {

        ID: idmaterial

    };

    alert('Se ha seleccionado el Material con ID: ' + idmaterial);

    var datosmaterialjson = JSON.stringify(datosmaterial);

    $.ajax({

        url: UrlDeletematerial,
        type: 'DELETE',
        data: datosmaterialjson,
        datatype: 'JSON',
        contenttype: 'application/json',

        success: function (response) {

            console.log(response);
            CargarMateriales();

        },

        error: function () {

            alert('Error al Eliminar el Material');

        }

    });

    alert('El Material ha sido Eliminado');

}
