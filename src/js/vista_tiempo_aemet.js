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
		this.divDatos.innerHTML = 'waiting...'

		this.getTiempoAemet()
	}

	/**
	 * Método que muestra el tiempo en Badajoz
	 */
	getTiempoAemet(){

		const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmamZsb3JlbmNpb2FpcmFkby5ndWFkYWx1cGVAYWx1bW5hZG8uZnVuZGFjaW9ubG95b2xhLm5ldCIsImp0aSI6IjJjOTg5NDljLWVhYjMtNDY3Mi1iYzc0LWRmNmU5MjU2Njc0MyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjY5Mjg4MzQ0LCJ1c2VySWQiOiIyYzk4OTQ5Yy1lYWIzLTQ2NzItYmM3NC1kZjZlOTI1NjY3NDMiLCJyb2xlIjoiIn0.WETUjoNv9JOcQ2TQQCWI3UZpt9568CA8cE4dbEAngaY';

		const API_URL = `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/06015?api_key=${API_KEY}`;
		
		// Petición HTTP a la API de la AEMET y obtener los datos meteorológicos
		fetch(API_URL)
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			fetch(data.datos)
			.then(response => response.json())
			.then(data2 => {
				//console.log(data2[0]['prediccion']['dia'][0])

				let prediccion = data2[0]['prediccion']['dia'][0]

				this.montarTiempo(prediccion)

				// this.divDatos.innerHTML = prediccion['temperatura']['maxima']

				return data2[0]['prediccion']['dia'][0]
			})
		});
	}

	montarTiempo(prediccion){
		// console.log(prediccion)

		this.divDatos.innerHTML = ''
		let p = document.createElement('p')
		this.divDatos.appendChild(p)

		let fechaHoy = this.obtenerFechaHoy()

		p.textContent = 'Hoy : ' + fechaHoy 
		p.innerHTML += '</br></br>'

		let p1 = document.createElement('p');
		this.divDatos.appendChild(p1)
		p1.textContent = 'Temperatura MÁXIMA: '
		let span3 = document.createElement('span')
		p1.appendChild(span3)
		span3.classList = 'destacar'
		span3.textContent = prediccion['temperatura']['maxima'] + 'ºC'

		let p2 = document.createElement('p');
		this.divDatos.appendChild(p2)
		p2.textContent = 'Temperatura MÍNIMA: '
		let span2 = document.createElement('span')
		p2.appendChild(span2)
		span2.classList = 'destacar'
		span2.textContent = prediccion['temperatura']['minima'] + 'ºC'

		let p3 = document.createElement('p');
		this.divDatos.appendChild(p3)
		p3.textContent = 'Humedad relativa Máxima: '
		let span1 = document.createElement('span')
		p3.appendChild(span1)
		span1.classList = 'destacar'
		span1.textContent = prediccion['humedadRelativa']['maxima'] + '%'

		let p4 = document.createElement('p');
		this.divDatos.appendChild(p4)
		p4.textContent = 'Humedad relativa Mínima: '
		let span = document.createElement('span')
		p4.appendChild(span)
		span.classList = 'destacar'
		span.textContent = prediccion['humedadRelativa']['minima'] + '%'

	}

	obtenerFechaHoy(){

		let fecha = new Date();
		// console.log(fecha)
		return fecha.toDateString()
	}

}