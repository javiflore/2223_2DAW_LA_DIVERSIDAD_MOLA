import {Vista} from './vista.js'

export class VistaTiempoAemet extends Vista{
	/**
	 * Constructor de la clase vista aemet
	 * @param {*} controler 
	 * @param {*} mainAemet 
	 */
	constructor(controler, mainAemet){
		super(mainAemet)
		this.controlador = controler

		this.divDatos = mainAemet.getElementsByTagName('div')[0]
		this.divDatos.innerHTML = 'hola'

		this.mostrarTiempo()
	}

	/**
	 * Método que muestra el tiempo en Badajoz
	 */
	mostrarTiempo(){

		const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmamZsb3JlbmNpb2FpcmFkby5ndWFkYWx1cGVAYWx1bW5hZG8uZnVuZGFjaW9ubG95b2xhLm5ldCIsImp0aSI6IjJjOTg5NDljLWVhYjMtNDY3Mi1iYzc0LWRmNmU5MjU2Njc0MyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjY5Mjg4MzQ0LCJ1c2VySWQiOiIyYzk4OTQ5Yy1lYWIzLTQ2NzItYmM3NC1kZjZlOTI1NjY3NDMiLCJyb2xlIjoiIn0.WETUjoNv9JOcQ2TQQCWI3UZpt9568CA8cE4dbEAngaY';

		const API_URL = `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/06015?api_key=${API_KEY}`;
		
		// Petición HTTP a la API de la AEMET y obtener los datos meteorológicos
		fetch(API_URL)
			.then(response => response.json())
			.then(data => {
			console.log(data);
			fetch(data.datos)
				.then(response => response.json())
				.then(data2 => {
					console.log(data2[0]['prediccion']['dia'][0])
				})
			});
	}



}