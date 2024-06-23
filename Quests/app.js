// Creating a variable to reference the add class
const addForm = document.querySelector('.add')

// Creating a variable to reference the ul. The ul has a class of '.todos'
const list = document.querySelector('.todos')

// Creating a global function to inject text into the DOM 
const generateTemplate = (todo) =>{
    // Writting a template string to hold template
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i>Completed</i>
        </li>
    `
    // We dont want to use a strict "=" because it would overwrite the previous existing list items
    // rather than adding. "+=" will append, "=" will replace.
    list.innerHTML += html
}

//adding an event listener to addForm for submit event. 
// we also pass the event into the callback function
addForm.addEventListener('submit', e =>{
    // Stop the page from reloading with prevent default
    e.preventDefault()
    // creating a todo variable as the value of the add input
    // also using the trim method to trim any possible white space
    const todo = addForm.add.value.trim()

    // If the length of todo is a positive value, it will be evaluated as truthy
    // and trigger the template function.
    if(todo.length){
    // Passing the todo text UP into the DOM text template aka generateTemplate
    generateTemplate(todo)
    // last in the chain is to rest the add text to clear after submission
    // using the reset method
    addForm.reset()
    }
    console.log(todo)
})