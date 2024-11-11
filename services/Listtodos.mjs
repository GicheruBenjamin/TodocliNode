
import { readFileSync } from 'fs';

export function listTodos() {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    if (data.length === 0) {
        console.log('No todos found.');
    } else {
        console.log('List of todos:');
        data.forEach(todo => {
            console.log(`ID: ${todo.id}, Description: ${todo.desc}, Action Time: ${todo.todoactiontime}, Added: ${todo.datetime}`);
        });
    }
}
