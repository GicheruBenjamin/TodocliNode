
import { readFileSync } from 'fs';

export function searchTodoByDescription(keyword) {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    const results = data.filter(todo => todo.desc.toLowerCase().includes(keyword.toLowerCase()));

    if (results.length > 0) {
        console.log('Search results:');
        results.forEach(todo => {
            console.log(`ID: ${todo.id}, Description: ${todo.desc}, Action Time: ${todo.todoactiontime}, Added: ${todo.datetime}`);
        });
    } else {
        console.log('No todos found with the given description.');
    }
}
