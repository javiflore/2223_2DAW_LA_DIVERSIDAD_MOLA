import {Vista} from './vista.js'

export class VistaAdmin extends Vista{
	/**
	 * Constructor de la clase vista Administrador
	 * @param {*} controler 
	 * @param {*} mainAdmin 
	 */
	constructor(controler, mainAdmin){
		super(mainAdmin)
		this.conrolador = controler

		//valorCorreo = document.getElementById('correo')

		//this.valorCorreo.validaciones()
	}
	/*
	validaciones(){
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
			return false
		}
	}
	*/
}