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

		this.listarRanquing()
	}

	listarRanquing(){

		fetch('php/listar_ranking.php')
		.then(respuesta => respuesta.json())
		.then(data =>
				// console.log(data),
				this.montarRanking(data)
			)
	}

	montarRanking(data){
		// console.log(data)

		let tbody = mainRanking.getElementsByClassName('tbody')[0]

		for( let i=0; i < data.length; i++){
			console.log(data[i])
			let tr = document.createElement('tr')
			tbody.appendChild(tr)

			console.log(tbody)

			let td = document.createElement('td')
			td.appendChild(document.createTextNode(i+1))
			tr.appendChild(td)

			let td1 = document.createElement('td')
			td1.appendChild(document.createTextNode(data[i]['alias']))
			tr.appendChild(td1)

			let td2 = document.createElement('td')
			td2.appendChild(document.createTextNode('Europa'))
			tr.appendChild(td2)
			td2.classList = 'celdaContinente'

			let td3 = document.createElement('td')
			td3.appendChild(document.createTextNode(data[i].puntuacion))
			tr.appendChild(td3)
		}

	}
}