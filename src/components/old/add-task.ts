import { Component } from './component.js';

export class AddTask extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template); //borra el componente una vez se ha mostrado, creo
    }
    createTemplate() {
        return `
        <form>
    <div>
    <input type="text" id="title" placeholder="Cual es la tarea?" required></div>
    <div><input type="text" id="responsable" placeholder="Quien es el responsable?"></div>
    <button type="submit">Enviar</button>
</form>`;
    }
}
