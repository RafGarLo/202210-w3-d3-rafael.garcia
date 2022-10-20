import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handleAdd) {
        super();
        this.selector = selector;
        this.handleAdd = handleAdd;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
