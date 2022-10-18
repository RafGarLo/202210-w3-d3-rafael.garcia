import { Component } from './components/old/component.js';

export class Main extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
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
