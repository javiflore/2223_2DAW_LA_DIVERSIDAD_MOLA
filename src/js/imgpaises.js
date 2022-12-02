


export class  ImgPaises{
	
	constructor(){
		
		
	}
	
	insertarImg(){
		/*let divImagenes = document.getElementById("divImagenes")
		let img = document.createElement('img')
		img.id='sevillana'
		img.setAttribute('src',"https://i.pinimg.com/originals/72/04/d9/7204d9363dfc265aa169c3bcc1c84818.gif")
		divImagenes.appendChild(img)
		
		return img
		*/
		fetch('js/get_imagenes.php') //Hacemos la petición
			.then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
			.then(texto => document.getElementById('divImagenes').innerHTML = texto)
		
		
		
	}
	evento(){
		
		
	}
}