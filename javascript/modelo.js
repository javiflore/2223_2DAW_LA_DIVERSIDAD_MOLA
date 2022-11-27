
export class Modelo{
	/**
	 * Constructor del modelo
	 */
	constructor(){
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
	}
	/**
	 * Método de registro
	 * @param {*} callback 
	 */
	registrar(callback){
        this.callbacks.push(callback)
	}

	/**
	 * Método de avisar 
	 */
	avisar(){
		for(let callback of this.callbacks)
		callback()
	}
	/**
	 * Método que obtendrá los datos
	 * @returns lista 
	 */
	getDatos(){
		return this.lista
	}
}