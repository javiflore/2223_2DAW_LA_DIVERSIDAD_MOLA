export class Vista{
	/**
	 * Constructor de la clase vista
	 * @param {*} div 
	 */
	constructor(div){
		this.div = div
	}

	/**
	 * Método mostrar
	 * @param {*} ver 
	 */
	mostrar(ver,tipo){
		if (ver){
			if(tipo=="flex")
				this.div.style.display = 'flex'	//Visualizar DIV
			if(tipo=="block")
				this.div.style.display = 'block'	//Visualizar DIV
		}
		else
			this.div.style.display = 'none'		//Ocultar DIV
	}
	
}