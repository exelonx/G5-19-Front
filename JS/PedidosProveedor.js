let UrlPedidosProveedor = 'http://52.152.236.67:90/G5_19/controller/pedidos_proveedor.php?op=GetPedidosProveedores';
let UrlPostPedidosProveedor = 'http://52.152.236.67:90/G5_19/controller/pedidos_proveedor.php?op=InsertPedidosProveedor';

const limpiarFormularios = () =>{
    let formulario = document.getElementById('formularios');
    formulario.reset();
}

const cargarPedidosProveedor = async() =>{
    let response = await fetch(UrlPedidosProveedor);
    let data = await response.json();
    let body = "";
    data.forEach((element) => {
        //Obtener los valores de la tabla por elemento
        body += `<tr>
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
        document.getElementById("PedidosProveedor").innerHTML = body;
    }); 
}

const agregarPedidoProveedor = async() =>{
    let datos={
        ID:ID.value,
        ID_SOCIO:ID_SOCIO.value,
        FECHA_PEDIDO:FECHA_PEDIDO.value,
        DETALLE:DETALLE.value,
        SUB_TOTAL:SUB_TOTAL.value,
        TOTAL_ISV:SUB_TOTAL.value*0.15,
        TOTAL:Number(SUB_TOTAL.value)+Number(SUB_TOTAL.value*0.15),
        FECHA_ENTREGA:FECHA_ENTREGA.value,
        ESTADO:ESTADO.value,
    };

    try {
    let response = await fetch(UrlPostPedidosProveedor, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await cargarPedidosProveedor();
        limpiarFormularios();
        alert(await response.json());
    } catch (error) {
        alert(error)
    }
}


cargarPedidosProveedor();

