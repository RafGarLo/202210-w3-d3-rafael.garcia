import { Component } from './component.js';
export class Menu extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.menuOptions = [
            { path: '', label: 'Home' },
            { path: '', label: 'Pets' },
            { path: '', label: 'About' },
        ];
        this.manageComponent();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        let template = '<nav><ul>';
        this.menuOptions.forEach((item) => (template += `<li><a href="${item.path}">${item.label}</a></li>`));
        template += '<ul></nav>';
        return template;
    } //todos los foreach reciben un callback, ese callback recibe como argumento cada uno de los elementos del array, para que puedas hacer con ello lo que te venga en gana.
    manageComponent() {
        this.template = this.createTemplate();
        //this.renderOuter(this.selector);
    }
}
