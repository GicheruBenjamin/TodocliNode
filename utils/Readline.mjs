
// /utils/Readline.mjs
import readline from 'readline';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
