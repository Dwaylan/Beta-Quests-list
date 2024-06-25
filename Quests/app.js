// Creating a variable to reference the add class
const addForm = document.querySelector('.add')

// Creating a variable to reference the ul. The ul has a class of '.todos'
const list = document.querySelector('.todos')

// Creating a variable to reference the search bar input field.
const search = document.querySelector('.search input')

// Creating a global function to inject text into the DOM 
const generateTemplate = (todo) =>{
    // Writting a template string to hold template
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="delete">Completed</i>
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

// Deleting todos
list.addEventListener('click', e =>{
    //if the elements class list contains "delete"
    if(e.target.classList.contains('delete')){
        // Selecting the targeted element and removing it, by deleting its parent element, the li tag
        // ** child elements cannot exist without a parent element **
        e.target.parentElement.remove()
        console.log('Completed was clicked. Task removed')
    }
})

// Key-up event for filtering

// creating a global filter function for reusability 
const filterTodos = (searchValue) =>{
    // Step 1: Converting the child elements (aka "li" tags) from the list into an array
    Array.from(list.children)
    // Step 2: filtering
    .filter((todo)=>{
        // returning the text content of the todo item that does NOT inclues the search value
        return !todo.textContent.toLowerCase().includes(searchValue)
    })
    // Step 3: Adding a class of "filtered" to each to do item that does NOT include the search value
    .forEach((todo)=>{
        todo.classList.add('filtered')
    })


    Array.from(list.children)
    // Step 2: filtering
    .filter((todo)=>{
        // returning the text content of the todo item that DO include the search value
        return todo.textContent.toLowerCase().includes(searchValue)
    })
    // Step 3: REMOVING a class of "filtered" to each to do item that DO include the search value
    .forEach((todo)=>{
        todo.classList.remove('filtered')
    })
}

search.addEventListener('keyup', e =>{
    // declaring a variable for the search value, and trimming possivle white space with the trim method
    const searchValue = search.value.trim().toLowerCase()
    // passing search values up to the filter function
    filterTodos(searchValue)
})