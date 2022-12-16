/**
 * @author DawVersiTeam
*	Francisco Javier Florencio Airado
*	Alberto Bravo Rostro
*	Jorge Ortega Rivera
*	Alejandro Fernández Banda
**/

import {Modelo} from './modelo.js'
import {VistaHeader} from './vistaheader.js'
import {VistaInicio} from './vistainicio.js'
import {VistaJuego} from './vistajuego.js'
import {VistaRanking} from './vistaranking.js'
import {VistaContinente} from './vistacontinente.js'
import {VistaTiempoAemet} from './vista_tiempo_aemet.js'
import {MenuDcho} from './menu_dcho.js'

console.log('Cargado')

class Controlador{
	/**
	 * Constructor de la aplicación
	 */
	constructor(){
		window.onload = this.iniciar.bind(this)
		this.bandera = false
	}

    /**
	 * Función iniciar de la aplicación
	 */
	iniciar(){
		this.modelo = new Modelo()

		/**
		 * Declaración elementos html
		 */
		this.header = document.getElementsByTagName('header')[0]
		this.mainInicio = document.getElementById('mainInicio')
		this.mainJuego = document.getElementById('mainJuego')
		this.mainAemet = document.getElementById('mainAemet')
		this.divGrupo = document.getElementById('integrantes')
		this.pGrupo = document.getElementById('grupo')
		this.menuDcho = document.getElementsByClassName('container')[0]

		
		this.europa=document.getElementById('europa')
		this.namerica=document.getElementById('norteamerica')
		this.samerica=document.getElementById('suramerica')
		this.africa=document.getElementById('africa')
		this.australia=document.getElementById('australia')
		this.asia=document.getElementById('asia')
		
		this.mainRanking = document.getElementById('mainRanking')

		this.vistaHeader = new VistaHeader(this, this.header)
        this.vistaInicio = new VistaInicio(this, this.mainInicio)
		this.vistaJuego = new VistaJuego(this, this.mainJuego)
		this.vistaRanking = new VistaRanking(this, this.mainRanking)
		this.vistaTiempoAemet = new VistaTiempoAemet(this, this.mainAemet)
		this.vistaMenuDcho = new MenuDcho(this, this.menuDcho)
		
		this.vistaInicio.mostrar(true,"flex")
		this.vistaTiempoAemet.mostrar(true, 'block')
		this.pGrupo.addEventListener('mouseover', this.overGrupo.bind(this))
		this.pGrupo.addEventListener('mouseout', this.overGrupo.bind(this))


		this.mainJuego.onclick = this.hideMenu.bind(this);
        this.mainJuego.oncontextmenu = this.rightClick.bind(this);

    }

    /**
	 * Función para ocultar vistas no visibles
	 */
	ocultarVistas(){
		this.vistaInicio.mostrar(false,"none")
		this.vistaRanking.mostrar(false,"none")
		this.vistaJuego.mostrar(false,"none")
		this.vistaTiempoAemet.mostrar(false,"none")
	}
	
	/**
	 * Función mostrar inicio
	 */
	pulsarBotonInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true,"flex")
	}

	/**
	 * Función mostrar juego
	 */
	pulsarBotonJuego(){
		this.ocultarVistas()
		this.vistaJuego.mostrar(true,"block")
		
	}
	
	/**
	 * Función mostrar ranking
	 */
	pulsarBotonRanking(){
		this.ocultarVistas()
		this.vistaRanking.mostrar(true,"flex")
	}

	getModelo(){
		return this.modelo
	}

	overGrupo(){

		if(this.bandera){
			this.divGrupo.style.display = 'none'
			this.mainInicio.style.filter = 'blur(0px)'
			this.mainAemet.style.filter = 'blur(0px)'
			this.bandera = false
		}else{
			this.divGrupo.style.display = 'block'
			this.mainInicio.style.filter = 'blur(3px)'
			this.mainAemet.style.filter = 'blur(3px)'
			this.bandera = true
		}
	}


	

	hideMenu() {
		document.getElementsByClassName("contextMenu")[0].style.display = "none"
	}
  
	rightClick(e) {
		e.preventDefault();
  
		if (document.getElementsByClassName("contextMenu")[0]
				.style.display == "block")
			hideMenu();
		else{
			var menu = document.getElementsByClassName("contextMenu")[0]
  
			menu.style.display = 'block';
			menu.style.left = e.pageX + "px";
			menu.style.top = e.pageY + "px";
		}
	}










}

const app = new Controlador()