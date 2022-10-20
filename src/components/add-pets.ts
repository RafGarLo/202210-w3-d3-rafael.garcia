import { Component } from './component.js';

export class AddPet extends Component {
    template!: string;
    constructor(
        public selector: string,
        public handleAdd: (ev: Event) => void
    ) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    this.handleAdd(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `<form>
            <div>
                <input type="text" id="pet-name" placeholder="What is the pet name" required>
            </div>
            <div>
                <input type="text" id="breed" placeholder="What is the pet breed?">
            </div>
            <div>
                <input type="text" id="owner" placeholder="Who is going to be the owner?">
            </div>
            <button type="submit">Send</button>
        </form>`;
    }
}
