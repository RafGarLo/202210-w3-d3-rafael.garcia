import { Component } from './components/old/component.js';
export class AddPet extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderOuter(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
    <form>
      <div>
        <input type="text" id="first-answer" placeholder="Pet name" required></div>
     <div>
       <input type="text" id="second-answer" placeholder="Pet breed" required></div>
     <div>
       <input type="text" id="third-answer" placeholder="Owner" required></div>
     <button type="submit">Enviar</button>
   </form>
    `;
    }
}
