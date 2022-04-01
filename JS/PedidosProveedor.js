const UrlGetPedidosProveedor = 'http://52.152.236.67:90/G5_19/controller/pedidos_proveedor.php?op=GetPedidosProveedores';
const UrlGetUnPedidoProveedor = 'http://localhost:90/G5_19/controller/pedidos_proveedor.php?op=GetPedidosProveedor';
const UrlPostPedidosProveedor = 'http://52.152.236.67:90/G5_19/controller/pedidos_proveedor.php?op=InsertPedidosProveedor';
const UrlPutPedidosProveedor = 'http://localhost:90/G5_19/controller/pedidos_proveedor.php?op=UpdatePedidosProveedor';
const UrlDeletePedidosProveedor = 'http://localhost:90/G5_19/controller/pedidos_proveedor.php?op=DeletePedidosProveedor';

//Funciones de mantenimiento
const cargarPedidoProveedor = async(id) =>{
    let response = await fetch(UrlGetUnPedidoProveedor, {
        method: 'POST',
        body: JSON.stringify({ID:id}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let datosDelPedido = await response.json();

    //Asignación de valores
    ID.value = datosDelPedido[0].ID;
    ID_SOCIO.value = datosDelPedido[0].ID_SOCIO;
    FECHA_PEDIDO.value = datosDelPedido[0].FECHA_PEDIDO;
    DETALLE.value = datosDelPedido[0].DETALLE;
    SUB_TOTAL.value = datosDelPedido[0].SUB_TOTAL;
    FECHA_ENTREGA.value = datosDelPedido[0].FECHA_ENTREGA;
    ESTADO.value = datosDelPedido[0].ESTADO;
    //bloqueo de los ID's
    ID.readOnly = true;
    ID_SOCIO.readOnly = true;
    //Actualización del botón
    boton = `<input type="submit" id="btnSubmit" value="Actualizar Pedido de Proveedor" class="btn btn-primary"></input>
             <input type="button" id="btnCancel" onclick="resetParametrosHTML(); limpiarFormularios()" value="Cancelar" class="btn btn-secondary"></input>`
    document.getElementById("btnFormulario").innerHTML = boton;
    //Focus al formulario
    FECHA_PEDIDO.focus();
}

const cargarPedidosProveedor = async() =>{
    let response = await fetch(UrlGetPedidosProveedor);
    let data = await response.json();
    let body = "";
    data.forEach((element) => {
        const center = `class="text-center"`;
        const right = `class="text-end"`;
        //Convertir el estado a palabra completa
        let estado = estadoConvertidor(element.ESTADO);
        //Obtener los valores de la tabla por elemento
        body += `<tr class="redondeoInferior">
            <td ${center}>${element.ID}</td>
            <td ${center}>${element.ID_SOCIO}</td>
            <td ${center}>${element.FECHA_PEDIDO}</td>
            <td>${element.DETALLE.toUpperCase()}</td>
            <td ${right}>${convertToLempiras(element.SUB_TOTAL)}</td>
            <td ${right}>${convertToLempiras(element.TOTAL_ISV)}</td>
            <td ${right}>${convertToLempiras(element.TOTAL)}</td>
            <td ${center}>${element.FECHA_ENTREGA}</td>
            <td ${center}>${estado}</td>
            <td ${center}>
            <button class="btn btn btn-secondary" onclick="cargarPedidoProveedor(${element.ID})">Editar</button>  
            <button class="btn btn-danger" onclick="eliminarPedidoProveedor(${element.ID})">Eliminar</button>
            </td>
        </tr>`
        
        //Insertar el contenido en el formulario
        document.getElementById("PedidosProveedor").innerHTML = body;
    }); 
}

const agregarPedidoProveedor = async() =>{
    //Datos del formulario
    let datos={
        ID:ID.value,
        ID_SOCIO:ID_SOCIO.value,
        FECHA_PEDIDO:FECHA_PEDIDO.value,
        DETALLE:DETALLE.value,
        SUB_TOTAL:SUB_TOTAL.value,
        TOTAL_ISV:SUB_TOTAL.value*0.15,
        TOTAL:Number(SUB_TOTAL.value)+Number(SUB_TOTAL.value*0.15), //Suma el subtotal con el impuesto del 15%
        FECHA_ENTREGA:FECHA_ENTREGA.value,
        ESTADO:ESTADO.value.toUpperCase()   //Convierte en mayuscula el estado
    };
    //Post en la base de datos
    try {
        const response = await fetch(UrlPostPedidosProveedor, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })  //Si la petición de inserción sale exitosa
            swal('¡Inserción Exitosa!',`${await response.json()} con ID: ${ID.value}`, 'success');
            limpiarFormularios();
            cargarPedidosProveedor();
        
    } catch (error) {
            console.log(error)
            swal('¡Error!',`Error al agregar un nuevo pedido al proveedor: \nID inválido o Estado incorrecto`, 'error')
    }
}

const actualizarPedidoProveedor = () =>{
    //Datos del formulario
    let datos={
        ID:ID.value,
        ID_SOCIO:ID_SOCIO.value,
        FECHA_PEDIDO:FECHA_PEDIDO.value,
        DETALLE:DETALLE.value,
        SUB_TOTAL:SUB_TOTAL.value,
        TOTAL_ISV:SUB_TOTAL.value*0.15,
        TOTAL:Number(SUB_TOTAL.value)+Number(SUB_TOTAL.value*0.15), //Suma el subtotal con el impuesto del 15%
        FECHA_ENTREGA:FECHA_ENTREGA.value,
        ESTADO:ESTADO.value.toUpperCase()   //Convierte en mayuscula el estado
    };
    //Post en la base de datos
    fetch(UrlPutPedidosProveedor, {
            method: 'PUT',
            body: JSON.stringify(datos),
        })  //Si la petición de inserción sale exitosa
        .then(res =>res.json())
        .then(response=>{
            swal(`Actualización ID: ${ID.value}` ,response, 'success', {button: false});
            limpiarFormularios();
            cargarPedidosProveedor();
            resetParametrosHTML();
        })  //Si la inserción falla
        .catch(error =>{
            swal(`Actualización ID: ${ID.value}`, `Estado incorrecto`, 'error', {button: false})
        })
}

const eliminarPedidoProveedor = async(id) =>{
    let response = await fetch(UrlDeletePedidosProveedor, {
        method: 'DELETE',
        body: JSON.stringify({ID:id}),
    })
    swal(`Eliminación ID: ${id}`,await response.json(), 'info', {button: false}); //Imprimir mensaje de la API
    await cargarPedidosProveedor();
    resetParametrosHTML();  //No confío en los usuarios, desbloqueo los ID´s y regreso el botón original para evitar bloqueos
    limpiarFormularios();
}

//Eventos
window.onload =() =>{
    //Al darle click al boton submit
    document.getElementById('formularios').addEventListener('submit', async(e)=>{
        e.preventDefault();
        if(btnSubmit.value === 'Ingresar Pedido de Proveedor'){
            await agregarPedidoProveedor()
        }else if(btnSubmit.value === 'Actualizar Pedido de Proveedor'){
            actualizarPedidoProveedor();
        }   
    })
    //Carga el navbar
    navbarLoad();
    footerLoad();
}

cargarPedidosProveedor();

