import { Component } from './component.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
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
