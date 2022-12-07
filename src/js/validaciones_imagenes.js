// Javier Florencio Airado

console.log("CARGADO")

let form = document.getElementsByTagName('form')[0]
let nombre = document.getElementsByTagName('input')[0]
let urlImg = document.getElementsByTagName('input')[1]
let descripcion = document.getElementsByTagName('input')[2]
let idPais = document.getElementsByTagName('input')[3]

// form.addEventListener('submit', validateForm.bind(this))

function validateForm(){
    // console.log(nombre.value, urlImg.value, descripcion.value, idPais.value)

    let name = nombre.value
    let img = urlImg.value
    let description = descripcion.value
    let pais = idPais.value

    //validacion campos VACIOS
    if (name == '' || img == ''|| description == ''|| pais == ''){
        alert('No puedes dejar campos vacíos')
        return false
    }else if(name.length >= 29){
        alert('Máximo 29 caracteres en Nombre')
        return false
    }else if(img.length >= 249){
        alert('Máximo 249 caracteres en urlImg')
        return false
    }else if(description.length >= 499){
        alert('Máximo 499 caracteres en Descripción')
        return false
    }else if(isNaN(pais)){
        alert('idPais tiene que ser un número')
        return false
    }

    return true
}