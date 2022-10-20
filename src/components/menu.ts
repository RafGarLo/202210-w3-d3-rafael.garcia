import { Component } from './component.js';

interface menuOptionI {
    path: string;
    label: string;
}

export class Menu extends Component {
    template!: string;
    menuOptions: Array<menuOptionI>;
    constructor(public selector: string) {
        super();
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
        this.menuOptions.forEach(
            (item: menuOptionI) =>
                (template += `<li><a href="${item.path}">${item.label}</a></li>`)
        );
        template += '<ul></nav>';
        return template;
    } //todos los foreach reciben un callback, ese callback recibe como argumento cada uno de los elementos del array, para que puedas hacer con ello lo que te venga en gana.
    manageComponent() {
        this.template = this.createTemplate();
        //this.renderOuter(this.selector);
    }
}
