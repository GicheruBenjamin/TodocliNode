
import { readFileSync } from 'fs';

export function generateId() {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    return data.length > 0 ? Math.max(...data.map(todo => todo.id)) + 1 : 1;
}
