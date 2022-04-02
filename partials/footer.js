const footerLoad = () =>{
    let footer = `<footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <p class="col-md-4 mb-0 footerColorAcciones footerTextColor">&copy; 2022 UNAH - G5-19 - Lenguaje de Programacion IV</p>

                    <a href="" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        
                    </a>

                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="../Home.html" class="nav-link px-2 footerColorAcciones footerTextColor">Home</a></li>
                        <li class="nav-item"><a href="../Informacion.html" class="nav-link px-2 footerColorAcciones footerTextColor">Información</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle nav-link px-2 footerColorAcciones footerTextColor" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Formularios
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="../Forms/Socios.html">Socios de Negocio</a></li>
                            <li><a class="dropdown-item" href="../Forms/PedidosProveedor.html">Pedidos de Proveedores</a></li>
                            <li><a class="dropdown-item" href="../Forms/Materiales.html">Materiales</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="https://www.facebook.com/unahoficial" class="px-2 text-muted"><img src="../img/U.png" class="logoFooterUNAH" alt=""></a></li>
                        <li class="nav-item"><a href="https://www.facebook.com/InformaticaAdmitivaUNAH" class="px-2 text-muted"><img src="../img/LOGO INFORMÁTICA PA PROYECTO.png" class="logoFooter" alt=""></a></li>
                    </ul>
                </footer>`

    footerDiv.innerHTML = footer;
}