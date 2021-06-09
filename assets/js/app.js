// let addFromForm = document.querySelector('#addTask')
// let headTitle = ['id', 'title', 'content', 'taskType', 'dueDate', 'status', 'important']
// let displayAllTasks = document.querySelector('#allTasks')

// // Get data from local storage
// let getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('allData')) || []

// // Store data in local storage
// let setDataInLocalStorage = (allData) => localStorage.setItem('allData', JSON.stringify(allData))


// // Coustom function to create element
// let createCustomElements = function(parent, child, clasess, attributes, text) {
//     const element = document.createElement(child)
//     parent.appendChild(element)

//     if (clasess != '') element.className = clasess
//     if (attributes.length != 0) attributes.forEach(attribute => {
//         element.setAttribute(attribute.attrName, attribute.attrValue)
//     })
//     if (text != '') element.textContent = text

//     return element
// }

// let addedTask = (data) => {
//     allData = getDataFromLocalStorage()
//     allData.push(data)
//     etDataInLocalStorage(allData)
// }

// let allData = getDataFromLocalStorage()
// console.log(allData)

// divRow = createCustomElements(displayAllTasks, 'div', 'row my-3', [], '')

// addFromForm.addEventListener('submit', function(even) {
//     even.preventDefault()
//     divCol = createCustomElements(divRow, 'div', 'col-lg-4 col-md-6 py-1 rounded', [], '')
//     contentTask = createCustomElements(divCol, 'div', 'bg-primary text-white p-1 rounded', [], '')
//     dataTitel = createCustomElements(contentTask, 'h5', 'text-center m-0 mt-1', [], even.target.elements.title.value)
//     dataContent = createCustomElements(contentTask, 'p', 'my-1 p-1', [], even.target.elements.content.value)

//     headTitle.forEach((name, index) => {
//         if (index != 0 && name != 'title' && name != 'content' && name != 'status') otherData = createCustomElements(contentTask, 'span', 'gray d-flex my-1 p-1', [], even.target.elements[name].value)
//             // else if (name == 'status') otherData = createCustomElements(contentTask, 'span', 'gray d-flex my-2 p-1', [], even.target.elements[name].cheked)
//     })

//     // Create btn delete 
//     dtnDel = createCustomElements(contentTask, 'button', 'btn bg-danger text-white my-1', [], 'Delete task')

//     // Delete task 
//     dtnDel.addEventListener('click', function() {
//         this.parentElement.parentElement.remove()
//     })

//     // Create btn edit 
//     dtnEdit = createCustomElements(contentTask, 'button', 'btn bg-secondary text-white m-1', [], 'Edit info')

//     // Edit task 
//     dtnEdit.addEventListener('click', function(e) {
//         if (!this.parentElement.parentElement) {
//             let changeContent = [dataTitel, dataContent, otherData]
//             changeContent.forEach((ele, i) => {
//                 ele.textContent = prompt(`Enter new conent `)
//             })
//         }
//         // let changeContent = [dataTitel, dataContent, otherData]
//         // changeContent.forEach((ele, i) => {
//         //     ele.textContent = prompt(`Enter new conent `)
//         // })
//         console.log(e.target.parentElement.parentElement)
//     })

//     this.reset()
// })