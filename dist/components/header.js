import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
        <header>
        <h1>PETS</h1>
    </header>`;
    }
}
//todos los templates se van a parecer a esta estructura.
