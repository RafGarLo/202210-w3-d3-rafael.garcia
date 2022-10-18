import { Component } from './old/component.js';

export class Main extends Component {
    HTMLtemplate: string;
    constructor(public selector: string) {
        super();
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
          <main>
        <section>
            <h2>List of Pets</h2>
            <div></div>
            <div></div>
            <div></div>
               
                
            
        </section>

    </main>`;
    }
}
