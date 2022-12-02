import {Vista} from './vista.js'
import {ImgPaises} from './imgpaises.js'

export class VistaContinente extends Vista{
	/**
	 * Constructor de la clase vista juego
	 * @param {*} controler 
	 * @param {*} mainContinente
	 */
	constructor(controler, mainContinente){
		super(mainContinente)
		this.conrolador = controler
		this.crear()
		
		
		
		
		
		
		
		/*
		
		//let divImagenes = document.getElementById('divImagenes')
		
		let dnds = document.querySelectorAll('.dnd')
			dnds.forEach(dnd => {
			dnd.addEventListener('dragenter', dragEnter)
			dnd.addEventListener('dragover', dragOver)
			dnd.addEventListener('dragleave', dragLeave)
			dnd.addEventListener('drop', drop)
		})
		
		let divPaises = document.getElementsByClassName('dnd divPais')
		//console.log(divPaises)
		for(let i=0; i<divPaises.length; i++){
			divPaises[i].addEventListener('dragover', dragOverPais)
			divPaises[i].onmouseenter = function(){
				   this.classList.add('resaltar')
			}
			divPaises[i].onmouseleave = function(){
				setTimeout(function(){
				  this.classList.remove('resaltar')
				}.bind(this),100)
			}
			
		}
		

	
	
		/////DRAG no entiendo nada del drag
			function dragStart(e){
				e.dataTransfer.setData('text/plain', e.target.id);
				setTimeout(() => {
					e.target.classList.add('hide');
				}, 0);
			}
			function dragEnter(e) {
				e.preventDefault();
				e.target.classList.add('drag-over');
			}

			function dragOver(e) {
				e.preventDefault();
				e.target.classList.add('drag-over');	
			}
			
			function dragOverPais(e) {
				e.preventDefault();
				e.target.classList.add('drag-over');	
				this.classList.add('resaltar');
				setTimeout(function(){
					this.classList.remove('resaltar');
				}.bind(this),1000)
				
			}


			function dragLeave(e) {
				e.target.classList.remove('drag-over');
			}

			function drop(e) {
				e.target.classList.remove('drag-over');

				// get the draggable element
				let id = e.dataTransfer.getData('text/plain');
				let draggable = document.getElementById(id);

				// add it to the drop target
				e.target.appendChild(draggable);

				// display the draggable element
				draggable.classList.remove('hide');
			}
		
		
		console.log(this.imagenes)
		
	}		
	insertarImg(){
		fetch('js/get_imagenes.php') //Hacemos la petición
			.then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
			.then(texto => document.getElementById('divImagenes').innerHTML = texto)
		
		
		*/
	}
	crear(){
		
		
		
	}
	

	

}
