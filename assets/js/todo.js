// Elements in html
const displayDataElement = document.querySelector('#displayData .container')

// Insert data to local storage by function
const insertDataToLocalStorage = (listTasks) => localStorage.setItem('todoList', JSON.stringify(listTasks))

// Get data from local strorage by function ( with out key word return )
const getDataFromLocalStorage = () => listTasks = JSON.parse(localStorage.getItem('todoList')) || []

// Function to create elements
const createElements = (parent, ele, classes = false, text = false) => {
    // Mandatory
    childEle = document.createElement(ele)
    parent.appendChild(childEle)

    // Optional
    if (classes) childEle.className = classes
    if (text) childEle.textContent = text

    return childEle
}

// Created table to show all data
let tagTable = createElements(displayDataElement, 'table', 'table table-stripped my-3 ')
let theadTable = createElements(tagTable, 'thead')
let trTheadTable = createElements(theadTable, 'tr')

// to insert head data in table
let thTable = ['#', 'title', 'content', 'type', 'duedate', 'status', 'important', 'Action']
thTable.forEach(title => {
    thThead = createElements(trTheadTable, 'th', false, title)
    console.log(thThead)
})

let tbodyTable = createElements(tagTable, 'tbody')

// Create function to insert data to local storage
const addDataToInsert = (title, content, taskType, dueDate, status, important) => {
    // To uniq 
    let id = Date.now()

    // Store data in object
    let newDataInsert = {
        id: id,
        title: title,
        content: content,
        taskType: taskType,
        dueDate: dueDate,
        status: status,
        important: important
    }

    // Get data from local storage
    listTasks = getDataFromLocalStorage()

    // Add new data
    listTasks.push(newDataInsert)

    // Set data in the local storage after inserted
    insertDataToLocalStorage(listTasks)
}

// Display data by used function
const displayData = () => {
    // Get data from local storage
    listTasks = getDataFromLocalStorage()

    // Loop to used any data and indexed
    listTasks.forEach(task => {
        // Testing to show data in console
        console.table(
            `
                id : ${task.id}
                title: ${task.title}
                content : ${task.content}
                task type : ${task.taskType}
                dueDate: ${task.dueDate}
                status: ${task.status}
                important : ${task.important}
            `
        )

        // Insert data in body table
        trTbodyTable = createElements(tbodyTable, 'tr')

        for (content in task) {
            tdTbody = createElements(trTbodyTable, 'td', false, task[content])
        }

        // Create btn del
        btnDel = createElements(trTbodyTable, 'button', 'btn btn-danger bg-danger my-1', 'Delete')
    })

}

// Find index tasks
const taskFindIndex = (id) => {
    // Get data from local storage
    listTasks = getDataFromLocalStorage()

    // Find by array findindex
    taskIndex = listTasks.findIndex(task => task.id == id)

    return taskIndex
}

// Fire function to show data
displayData()















/****************     testing code      **************** */
// Testing insert data by argument function
// addDataToInsert(
//     'web devloper',
//     'The content fantastic',
//     'Meduim',
//     '6-2-2022',
//     '',
//     'important'
// )

// addDataToInsert(
//     'Programming',
//     'The content fantastic',
//     'Hard',
//     '6-7-2022',
//     'true',
//     'important'
// )


// Test
// let dateNow = new Date().toLocaleDateString()
// let timeNow = new Date().toLocaleTimeString()
// console.log(`${dateNow} ${timeNow}`)


// listTasks = getDataFromLocalStorage()
// listTasks.forEach((head, index) => {
//     for (let h in head) {
//         console.log(h)
//     }
//     if (index == 0) break
// })







/******************    Erros        ******************* */
// // Find task index from data
// const findTaskFromData = (id) => {
//     // Get data from local storage
//     listTasks = getDataFromLocalStorage()

//     // Find task by findIndex array
//     findTask = listTasks.findIndex(task => task.id == id)



//     // Return to used this varaibles
//     return findTask
// }

// listTasks = getDataFromLocalStorage()
// console.log(listTasks[0].id)
// let index = listTasks.findIndex(task => task === listTasks[1])
// if (index != -1) console.log(index)


// // Function to edit on data
// const updateData = (bla) => {

//     // Get data from local storage
//     listTasks = getDataFromLocalStorage()

//     let findTask = listTasks.findIndex(task => task.id == bla)

//     // Check found data by index
//     if (findTask !== -1) return console.log(`Not found data`)



//     return findTask



// }
// console.log(updateData(16231935040111))


////////