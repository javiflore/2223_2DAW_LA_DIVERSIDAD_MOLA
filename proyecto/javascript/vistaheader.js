import {Vista} from './vista.js'

export class VistaHeader extends Vista{
    /**
     * Constructor de la clase vista header
     * @param {*} controler 
     * @param {*} header 
     */
    constructor(controler, header){
        super(header)
        this.controlador = controler
      
        /**
		 * Declaración elementos html
		 */
        this.imagenInicio = header.getElementsByTagName('img')[1]
        this.imagenAdmin = header.getElementsByTagName('img')[0]

        this.imagenInicio.onclick = this.pulsarInicio.bind(this)
        this.imagenAdmin.onclick = this.pulsarAdmin.bind(this)
    }

    /**
     * Método pulsar botón inicio
     */
    pulsarInicio(){
        this.controlador.pulsarBotonInicio()
    }

    /**
     * Método pulsar para abrir login
     */
    pulsarAdmin(){
        this.controlador.pulsarBotonAdmin()
    }
}