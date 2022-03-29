let UrlPedidosProveedor = 'http://localhost:90/G5_19/controller/pedidos_proveedor.php?op=GetPedidosProveedores';


$(document).ready(()=>{
    cargarPedidosProveedor();
});

const cargarPedidosProveedor = () =>{
    $.ajax({
        url: UrlPedidosProveedor,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            let MiItems = response;
            let valores='';

            MiItems.forEach((element) => {
                //Obtener los valores de la tabla por elemento
                valores += `<tr>
                <td>${element.ID}</td>
                <td>${element.ID_SOCIO}</td>
                <td>${element.FECHA_PEDIDO}</td>
                <td>${element.DETALLE}</td>
                <td>${element.SUB_TOTAL}</td>
                <td>${element.TOTAL_ISV}</td>
                <td>${element.TOTAL}</td>
                <td>${element.FECHA_ENTREGA}</td>
                <td>${element.ESTADO}</td>
                </tr>`
                
                //Insertar el contenido en el formulario
                $('.PedidoProveedor').html(valores);
            });
        }
    });
}