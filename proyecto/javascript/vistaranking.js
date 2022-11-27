import {Vista} from './vista.js'

export class VistaRanking extends Vista{
	/**
	 * Constructor de la clase vista ranking
	 * @param {*} controler 
	 * @param {*} mainRanking 
	 */
	constructor(controler, mainRanking){
		super(mainRanking)
		this.conrolador = controler
	}
}