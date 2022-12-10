import {Vista} from './vista.js'

export class VistaInicio extends Vista{
	/**
	 * Constructor de la clase vista inicio
	 * @param {*} controler 
	 * @param {*} mainInicio 
	 */
	constructor(controler, mainInicio){
		super(mainInicio)
		this.controlador = controler

		/**
		 * Declaración elementos html
		 */
		this.botonJugar = mainInicio.getElementsByTagName('button')[0]
		this.imagenRanking = mainInicio.getElementsByTagName('img')[1]

		this.botonJugar.onclick = this.pulsarJuego.bind(this)
       	this.imagenRanking.onclick = this.pulsarRanking.bind(this)
	}


	/**
     * Método pulsar botón juego
     */
	pulsarJuego(){
        this.controlador.pulsarBotonJuego()
    }
	
	/**
     * Método pulsar botón ranking
	*/
	pulsarRanking(){
        this.controlador.pulsarBotonRanking()
    }




}