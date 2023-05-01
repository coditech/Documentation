
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
  

const List = [help, quit,exit, hello, add, remove, list, edit];
  
  
function onDataReceived(text) {
  text = text.trim();

  // Iterate through the List array and call the functions that match the input text
  List.forEach(function(func) {
    if (text.startsWith(func.name)) {
      func(text);
    }
  });
}


/**
 * Prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
// this function lists commands
function help() {
  console.log(
    "Write hello to have hello! in return and you can add any other argument so if you write hello x you will receive hello x!\n" + "you can exit by typing quit or exit\n" + 
    "write list to list all tasks, add to add any new task, and remove to remove any task you want"
    );
}

function hello(text) {
  console.log(`hello ${text.substring(6)}!`);
}

var tasks = [];

function list() {
  console.log('Task list:');
  tasks.forEach(function(task, index) {
    console.log(`${index + 1}: ${task}`);
  });
}

function add(text) {
  tasks.push(text.substring(4));
  console.log(`Task "${text.substring(4)}" added to the list!`);
}

function remove(text) {
  const index = parseInt(text.substring(7)) - 1;
  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log("Please enter a valid task number.");
  } else {
    tasks.splice(index, 1);
    console.log(`Task ${index + 1} removed from the list!`);
  }
}

function edit(text) {
  const parts = text.split(" ");
  if (parts.length < 3) {
    console.log("Please enter a task number and a new task description.");
  } else {
    const index = parseInt(parts[1]) - 1;
    if (isNaN(index) || index < 0 || index >= tasks.length) {
      console.log("Please enter a valid task number.");
    } else {
      tasks[index] = parts.slice(2).join(" ");
      console.log(`Task ${index + 1} edited!`);
  }
  }
}










/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


// The following line starts the application
startApp("Mohannad")
