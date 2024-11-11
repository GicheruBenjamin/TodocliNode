
//Entry point for the program
import { rl } from "./utils/Readinput.mjs";

function main() {
    //Welcome to the Todo App
    console.log("Welcome to the Todo App");
    console.log("An exiting way to to handle your todos");
    
    //Select an operation to do.
    console.log("Select an operation to do.");
    console.log("1. List todos");   
    console.log("2. Search todos");
    console.log("3. Add todo");
    console.log("4. Update todo");
    console.log("5. Delete todo");
    console.log("6. Exit");

    //Get the user's choice
    rl.question("Enter your choice: ", (choice) => {
        //Call the function that corresponds to the user's choice
        switch (choice) {
            case "1":
                console.log("Listing todos");
                break;
            case "2":
                console.log("Searching todos");
                break;
            case "3":
                console.log("Adding todos");
                break;
            case "4":
                console.log("Updating todos");
                break;
            case "5":
                console.log("Deleting todos");
                break;
            case "6":
                console.log("Exiting the program");
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    });
}

main();