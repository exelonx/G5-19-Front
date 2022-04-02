const navbarLoad = ()=>{
    let navbar = '';
    navbar = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand fs-3" href="https://www.unah.edu.hn/"><img src="../img/UNAH LOGO PROYECTO.png" class="logo" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../Home.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../Informacion.html">Información</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Formularios
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="../Forms/Socios.html">Socios de Negocio</a></li>
                <li><a class="dropdown-item" href="../Forms/PedidosProveedor.html">Pedidos de Proveedores</a></li>
                <li><a class="dropdown-item" href="../Forms/Materiales.html">Materiales</a></li>
                </ul>
            </li>
            </ul>
            
        </div>
        <span class="navbar-text fs-4 ">
                ${document.title}
            </span>
        </div>
    </nav>`;

    headerNavBar.innerHTML = navbar;
}



