import {Vista} from './vista.js'

export class VistaJuego extends Vista{
	/**
	 * Constructor de la clase vista juego
	 * @param {*} controler 
	 * @param {*} mainJuego 
	 */
	constructor(controler, mainJuego){
		super(mainJuego)
		this.conrolador = controler
		this.crear()
		let puntuacion= 0
		this.botonEuropa = mainJuego.getElementsByTagName('li')[5]
		this.divMapa = mainJuego.getElementsByTagName('div')[1]
		this.divIntroNick = mainJuego.getElementsByTagName('form')[0]
		this.btnAceptar = mainJuego.getElementsByTagName('input')[1]

		this.divPuntuacion = mainJuego.getElementsByTagName('div')[0]
		this.h2Puntuacion = this.divPuntuacion.getElementsByTagName('h2')[0]

		this.botonEuropa.onclick = this.pulsarEuropa.bind(this,puntuacion)


	}


	/**
	*	Metodo generar europa
	*/
	pulsarEuropa(puntuacion){	
		this.borrar()
		this.genEuropa(puntuacion)

		this.divPuntuacion.style.display = 'flex'
		this.h2Puntuacion.style.display = 'block'
		console.log(this.h2Puntuacion)
	
	}
	/**
	*	Metodo que crea el mapa mundi
	*/
	crear(){
		let div= document.createElement('div')
		div.setAttribute("id","divMapa")
		let  ul = document.createElement('ul')
		ul.setAttribute("id","continentes")	
		let liNo = document.createElement('li')
		liNo.setAttribute("id","norteamerica")
		let a1 = document.createElement('a')
		liNo.appendChild(a1)		
		let liSu = document.createElement('li')
		liSu.setAttribute("id","suramerica")
		let a2 = document.createElement('a')
		liSu.appendChild(a2)
		let liAs = document.createElement('li')
		liAs.setAttribute("id","asia")
		let a3 = document.createElement('a')
		liAs.appendChild(a3)
		let liAu = document.createElement('li')
		liAu.setAttribute("id","australia")
		let a4 = document.createElement('a')
		liAu.appendChild(a4)
		let liAf = document.createElement('li')
		liAf.setAttribute("id","africa")
		let a5 = document.createElement('a')
		liAf.appendChild(a5)
		let liEu = document.createElement('li')
		liEu.setAttribute("id","europa")
		let a6 = document.createElement('a')
		liEu.appendChild(a6)
		ul.appendChild(liNo)
		ul.appendChild(liSu)
		ul.appendChild(liAs)
		ul.appendChild(liAu)
		ul.appendChild(liAf)
		ul.appendChild(liEu)
		div.appendChild(ul)
		mainJuego.appendChild(div)
		
	}
	/**
	*	Metodo que borra todo lo de la pantalla del juego
	*/
	borrar(){	
	        mainJuego.lastElementChild.remove()
	}
	/**
	*	Metodo que crea la pantalla de europa
	*/
	genEuropa(puntuacion){
		let divDrag= document.createElement('div')
		divDrag.setAttribute("id","mapaDrag")
		
		let divImg = document.createElement('div')
		divImg.classList.add('dnd')
		divImg.setAttribute("id","divImagenes")
		divDrag.appendChild(divImg)
		
		let divEsp = document.createElement('div')
		divEsp.classList.add('dnd','divPais')
		divEsp.setAttribute("id","esp")
		divDrag.appendChild(divEsp)
		
		let divFra = document.createElement('div')
		divFra.classList.add('dnd','divPais')
		divFra.setAttribute("id","fra")
		divDrag.appendChild(divFra)
		
		let divNor = document.createElement('div')
		divNor.classList.add('dnd','divPais')
		divNor.setAttribute("id","nor")
		divDrag.appendChild(divNor)
		
		let divIta = document.createElement('div') 
		divIta.classList.add('dnd','divPais')
		divIta.setAttribute("id","ita")
		divDrag.appendChild(divIta)
		
		let divRus = document.createElement('div')
		divRus.classList.add('dnd','divPais')
		divRus.setAttribute("id","rus")
		divDrag.appendChild(divRus)
		
		let mapaEur = document.createElement('div')
		mapaEur.setAttribute("id","divMapaEuropa")
		
		let img = document.createElement('img')
		img.setAttribute("id","mapaEuropa")
		img.setAttribute("src","img/europa.png")		
		
		mapaEur.appendChild(img)
		divDrag.appendChild(mapaEur)
	
		mainJuego.appendChild(divDrag)
		fetch('js/get_imagenes.php?contienente=1') //Hacemos la petición
			.then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
			.then(texto => document.getElementById('divImagenes').innerHTML = texto)
			.then(respuesta =>{this.addImagenes('europa',puntuacion)})
		
		
	}
	/**
	*	Metodo añade las imagenes para el dnd
	*/
	addImagenes(contienente,puntuacion){
		
		if(contienente=='europa'){
			let imgEsp = document.getElementById('espana')
			let imgItalia = document.getElementById('italia')
			let imgRusia = document.getElementById('rusia')
			let imgNoruega = document.getElementById('noruega')
			let imgFrancia = document.getElementById('francia')
			
			
			imgEsp.addEventListener('dragstart',dragStart.bind(this))
			imgItalia.addEventListener('dragstart',dragStart.bind(this))
			imgRusia.addEventListener('dragstart',dragStart.bind(this))
			imgNoruega.addEventListener('dragstart',dragStart.bind(this))
			imgFrancia.addEventListener('dragstart',dragStart.bind(this))
			
			
			
			
			let divImagenes = document.getElementById('divImagenes')
		
			let dnds = document.querySelectorAll('.dnd')
				dnds.forEach(dnd => {
				dnd.addEventListener('dragenter', dragEnter.bind(this))
				dnd.addEventListener('dragover', dragOver.bind(this))
				dnd.addEventListener('dragleave', dragLeave.bind(this))
				dnd.addEventListener('drop', drop.bind(this))
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
				if(id.substring(0,3)==e.target.id){
					console.log("bien hecho")
					puntuacion+=200

					console.log(puntuacion)
					
					console.log(this.h2Puntuacion)
					// actualizar_puntuacion()
					this.h2Puntuacion.innerHTML = "Puntuación: "+puntuacion

					document.getElementById(id).removeEventListener('dragstart',dragStart.bind(this))
					document.getElementById(id).removeEventListener('dragenter',dragEnter.bind(this))
					document.getElementById(id).removeEventListener('dragover', dragOver.bind(this))
					document.getElementById(id).removeEventListener('dragleave', dragLeave.bind(this))
					document.getElementById(id).removeEventListener('drop', drop.bind(this))
					
					document.getElementById(e.target.id).removeEventListener('dragstart',dragStart.bind(this))
					document.getElementById(e.target.id).removeEventListener('dragenter', dragEnter.bind(this))
					document.getElementById(e.target.id).removeEventListener('dragover', dragOver.bind(this))
					document.getElementById(e.target.id).removeEventListener('dragleave',dragLeave.bind(this))
					document.getElementById(e.target.id).removeEventListener('drop',drop.bind(this))
					//thispuntuacion
					if(!divImagenes.firstChild){
						
						// salert("ENHORABUENA: "+puntuacion+" pts")
						this.intro_ranking(puntuacion)			
					}
					
				}
				else{
					console.log("mal")
					puntuacion-=100
					this.h2Puntuacion.innerHTML = "Puntuación: "+puntuacion
					divImagenes.appendChild(draggable);					
				}

				// display the draggable element
				draggable.classList.remove('hide');
			}

		}
	}

	intro_ranking(pts){

		this.divIntroNick.style.display = 'block'

		let label = this.divIntroNick.getElementsByTagName('label')[0]

		label.innerHTML = pts + ' puntos'

		
	}

	

	
}