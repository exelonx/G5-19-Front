const selectorNav = (titulo) =>{
    let tituloCorto = titulo.substring(0,4);
    switch(tituloCorto){
        case 'Home':
            return { 'home':'active',
                     'info':'',
                     'formD': ''}
        case 'Info':
            return { 'home':'' ,
                     'info':'active',
                     'formD': ''}
        default:
            return { 'home':'' ,
                     'info':'',
                     'formD': 'active'}
    }
}