import {Vista} from './vista.js'

export class VistaLogin extends Vista{
	/**
	 * Constructor de la clase vista login
	 * @param {*} controler 
	 * @param {*} divLogin 
	 */
	constructor(controler, divLogin){
		super(divLogin)
		this.conrolador = controler
	}
}