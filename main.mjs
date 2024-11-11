
import { rl, askQuestion } from './utils/Readline.mjs';
import { addTodo } from './services/Addtodo.mjs';
import { deleteTodoById } from './services/Deletetodo.mjs';
import { listTodos } from './services/Listtodos.mjs';
import { searchTodoByDescription } from './services/Searchtodo.mjs';
import { sortTodos } from './services/Sorttodos.mjs';
import { updateTodoById } from './services/Updatetodo.mjs';

async function main() {
    console.log('Welcome to the Todo List CLI App');
    console.log('Choose an option:');
    console.log('1. Add Todo');
    console.log('2. Delete Todo');
    console.log('3. List Todos');
    console.log('4. Search Todo');
    console.log('5. Sort Todos');
    console.log('6. Update Todo');
    console.log('7. Exit');

    const option = await askQuestion('Enter your choice: ');

    switch (option) {
        case '1':
            const desc = await askQuestion('Enter the description: ');
            const todoactiontime = await askQuestion('Enter the action time (HH:MM): ');
            addTodo(desc, todoactiontime);
            break;
        case '2':
            const deleteId = await askQuestion('Enter the ID to delete: ');
            deleteTodoById(Number(deleteId));
            break;
        case '3':
            listTodos();
            break;
        case '4':
            const keyword = await askQuestion('Enter a keyword to search: ');
            searchTodoByDescription(keyword);
            break;
        case '5':
            sortTodos();
            break;
        case '6':
            const updateId = await askQuestion('Enter the ID to update: ');
            const newDesc = await askQuestion('Enter new description (leave blank to skip): ');
            const newActionTime = await askQuestion('Enter new action time (HH:MM, leave blank to skip): ');
            updateTodoById(Number(updateId), newDesc, newActionTime);
            break;
        case '7':
            console.log('Goodbye!');
            rl.close();
            return;
        default:
            console.log('Invalid option. Please try again.');
    }

    main(); // Re-run the main function for continuous interaction
}

main();
