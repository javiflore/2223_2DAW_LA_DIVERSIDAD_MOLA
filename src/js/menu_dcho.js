import {Vista} from './vista.js'

/**
 * Clase menú derecho
 */
export class MenuDcho extends Vista{

    constructor(controler, div){
        super(div)
        // console.log(div)
        this.montarMenu(div)
    }

    montarMenu(div){
        let contextMenu = document.createElement('div')
        // console.log(contextMenu)
        div.appendChild(contextMenu)
        contextMenu.setAttribute('class', 'contextMenu')

        this.createSpan(contextMenu, 'Empezar de Nuevo')

    }

    createSpan(div, text){
        let span = document.createElement('span')
        div.appendChild(span)
        span.textContent = text
    }

    // <div class="container">
    //     <div class="contextMenu">
    //         <span>Option 1</span>
    //         <span>Option 2</span>
    //         <span>Option 3</span>
    //     </div>
    // </div>

}