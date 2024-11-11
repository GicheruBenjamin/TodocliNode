
import { readFileSync } from 'fs';

export function sortTodos() {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    data.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

    console.log('Sorted todos:');
    data.forEach(todo => {
        console.log(`ID: ${todo.id}, Description: ${todo.desc}, Action Time: ${todo.todoactiontime}, Added: ${todo.datetime}`);
    });
}
