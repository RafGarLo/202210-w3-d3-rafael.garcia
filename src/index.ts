import { AddTask } from './components/add-task.js';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { TaskList } from './components/task-list.js';
import { TASKS } from './models/data.js';

console.log(TASKS);

new Header('body');
new Main('body');
new TaskList('main');
new AddTask('slot #add-task');
new Footer('body');
