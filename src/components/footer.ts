import { Component } from './old/component.js';

export class Footer extends Component {
    HTMLtemplate: string;
    constructor(public selector: string) {
        super();
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
        <footer><address>Rafael ISDI Coders</address></footer>`;
    }
}
