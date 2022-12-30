
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
function onDataReceived(text) {
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else{
    let textt = text.trim();
    const myArray = textt.split(" ");
      if(myArray.includes('hello')){
        hello(myArray);
      }
      else if(myArray.includes('add')){
        add(myArray);
      }
      else if(myArray.includes('remove')){
        remove(myArray);
      }
      else if(myArray.includes('edit')){
        edit(myArray)
      }
      else if(myArray.includes('check')){
        check(myArray)
      }
      else if(myArray.includes('uncheck')){
        uncheck(myArray)
      }
      else {
      unknownCommand(text);
      }
  }
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
 /**
  * helps you by listing all the possible commands
  * 
  * @returns {void}
  */
 function help(){
  console.log('if you type any sentence that starts with "hello" you will receive your sentence as a message')
  console.log('if you type "exit" or "quit" you quit the application')
  console.log('if you type any other text you will receive "unknown command')
  console.log('if you type "list" you will get a list of tasks to do')
  console.log('if you type "add" you will be able to add to the list of tasks')
  console.log('if you type "remove" you will remove the last element of the tasks')
  console.log('if you type "remove" followed by a number, you will remove the task associated with that number')
  console.log('if you type "edit" you will edit the last element of the tasks')
  console.log('if you type "edit" followed by a number, you will edit the task associated with that number')
  console.log('if you type "check" followed by a number, you will add a check sign next to the task associated with that number')
  console.log('if you type "uncheck" followed by a number, you will remove the check sign next to the task associated with that number')
 }

/**
 * Says hello
 *
 * @returns {void}
 */
 function hello(myArray){
  let p = "hello!"
  let u = myArray.join(' ')
  let result = p.replace("hello!", u);
  console.log(result +"!")
  }

/**
 * Lists all the tasks
 * 
 * @returns {void}
 */
let tasks = [
  {
    title: "clean the room",
    value: 'done',
  }, 
  {
    title: 'cook the lunch',
    value: 'undone',
  },
  {
    title: 'watch a tutorial',
    value: 'undone',
  }
];
function list(){
  for (let i  =0; i < tasks.length; i++){
    let j = i + 1;
    if (tasks[i].value === 'done'){
    console.log(j +'.[✓] '+ tasks[i].title)
    } else {
    console.log(j +'.[ ] '+ tasks[i].title) 
    }
  }
}
/**
 * Adds a new task
 * 
 * @returns {void}
 */
function add(myArray){
  myArray.shift();
  let q = myArray.join(' ')
  if (q == ""){
  console.log('error');
  }else {
  let z = {title: q, value:""};
  tasks.push(z);
  }
}
/**
 * Removes elements in tasks
 * 
 * @returns {void}
 */
function remove(myArray){
  myArray.shift();
  let q = myArray.join(' ')
  for (let i  =1; i <= tasks.length; i++){
    if (q == 0){
    tasks.pop();
    } else if(i == q){
    tasks.splice([i-1], 1);
    }
    else if(q > tasks.length) {
      console.log("number does not exist")
      break
    }
  }
}
/**
 * edits the elements in tasks
 * 
 * @returns {void}
 */
 function edit(myArray){
  let t = myArray.splice(1, 1);
  let s = myArray
  s.shift()
  s.unshift(t)
  let ss = s.join(' ')
  let sss= {title: ss, value:""};
  myArray.shift()
  let q = myArray.join(' ')
  let z = {title: q, value:""};
  let n = tasks.length;
  for (let i  = 1; i < tasks.length; i++){
    if (t == ""){
      console.log('error');
      break
    } else if (isNaN(t) == true){
      tasks[n-1] = sss;
    }
      else if(i == t){
      tasks[i - 1] = z;
    }
    else if(t > tasks.length) {
      console.log("number does not exist")
      break
    }
  }
}
/**
 * Checks values in tasks
 * 
 * @returns {void}
 */
 function check(myArray){
  myArray.shift();
  let q = myArray.join(' ')
  for (let i  =1; i <= tasks.length; i++){
    if (q == 0){
    console.log('error');
    break
    } else if(i == q){
    tasks[i-1].value = 'done';
    }
    else if(q > tasks.length) {
      console.log("number does not exist")
      break
    }
  }
}
/**
 * Unchecks values in tasks
 * 
 * @returns {void}
 */
 function uncheck(myArray){
  myArray.shift();
  let q = myArray.join(' ')
  for (let i  =1; i <= tasks.length; i++){
    if (q == 0){
    console.log('error');
    break
    } else if(i == q){
    tasks[i-1].value = 'undone';
    }
    else if(q > tasks.length) {
      console.log("number does not exist")
      break
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
startApp("Fatema Fakhourji")
