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

console.log('Cargado')

class Controlador{
	/**
	 * Constructor de la aplicación
	 */
	constructor(){
		window.onload = this.iniciar.bind(this)
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
		this.mainRanking = document.getElementById('mainRanking')

		this.vistaHeader = new VistaHeader(this, this.header)
        this.vistaInicio = new VistaInicio(this, this.mainInicio)
		this.vistaJuego = new VistaJuego(this, this.mainJuego)
		this.vistaRanking = new VistaRanking(this, this.mainRanking)
		
		this.vistaInicio.mostrar(true)
    }

    /**
	 * Función para ocultar vistas no visibles
	 */
	ocultarVistas(){
		this.vistaInicio.mostrar(false)
		this.vistaRanking.mostrar(false)
		this.vistaJuego.mostrar(false)
		/*this.vistaAdmin.mostrar(false)*/
	}
	
	/**
	 * Función mostrar inicio
	 */
	pulsarBotonInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true)
	}

	/**
	 * Función mostrar juego
	 */
	pulsarBotonJuego(){
		this.ocultarVistas()
		this.vistaJuego.mostrar(true)
	}
	
	/**
	 * Función mostrar ranking
	 */
	pulsarBotonRanking(){
		this.ocultarVistas()
		this.vistaRanking.mostrar(true)
	}

	getModelo(){
		return this.modelo
	}
}

const app = new Controlador()