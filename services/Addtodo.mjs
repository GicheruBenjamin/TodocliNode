
import { writeFileSync, readFileSync } from 'fs';
import { generateId } from '../utils/Generateid.mjs';

export function addTodo(desc, todoactiontime) {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    const now = new Date();
    const formattedDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newTodo = {
        id: generateId(),
        desc,
        todoactiontime,
        datetime: formattedDateTime
    };

    data.push(newTodo);
    writeFileSync('./data/data.json', JSON.stringify(data, null, 2));
    console.log('New todo added:', newTodo);
}
