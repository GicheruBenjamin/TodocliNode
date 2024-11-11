// /services/Deletetodo.mjs
import { writeFileSync, readFileSync } from 'fs';

export function deleteTodoById(id) {
    let data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    const initialLength = data.length;
    data = data.filter(todo => todo.id !== id);

    if (data.length < initialLength) {
        writeFileSync('./data/data.json', JSON.stringify(data, null, 2));
        console.log(`Todo with ID ${id} deleted successfully.`);
    } else {
        console.log(`No todo found with ID ${id}.`);
    }
}
