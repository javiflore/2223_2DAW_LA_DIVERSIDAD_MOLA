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
	}
	
}