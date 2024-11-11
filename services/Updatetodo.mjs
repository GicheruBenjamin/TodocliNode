
import { writeFileSync, readFileSync } from 'fs';

export function updateTodoById(id, newDesc, newActionTime) {
    const data = JSON.parse(readFileSync('./data/data.json', 'utf8'));
    const todo = data.find(todo => todo.id === id);

    if (todo) {
        if (newDesc) todo.desc = newDesc;
        if (newActionTime) todo.todoactiontime = newActionTime;
        writeFileSync('./data/data.json', JSON.stringify(data, null, 2));
        console.log(`Todo with ID ${id} updated successfully.`);
    } else {
        console.log(`No todo found with ID ${id}.`);
    }
}
