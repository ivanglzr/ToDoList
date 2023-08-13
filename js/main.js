let container = document.querySelector(".tasks")
let addTaskBtn = document.querySelector(".btn")
let txtTasksCompleted = document.querySelector(".tasksCompleted")

let tasksCount = 0
let elements = 0

addTaskBtn.addEventListener("click", ()=>{
  if (elements == 10) {
    return alert("Hay demasiadas tareas")
  }
  
  elements++
  
  let name = prompt("Cual es el nombre")
  
  if (name.length < 2) {
    return alert("El nombre no es valido")
  }

  let taskContainer = document.createElement("DIV")
  taskContainer.classList.add("task")
  
  let taskTitle = document.createElement("SPAN")
  taskTitle.classList.add("task__span")
  taskTitle.innerHTML = name
  
  let checkBtn = document.createElement("INPUT")
  checkBtn.setAttribute("type","checkbox")
  checkBtn.classList.add("checkBtn")
  
  checkBtn.addEventListener("click", ()=>{
    if (checkBtn.checked) {
      tasksCount--
    }else{
      tasksCount++
    }
    
    if (tasksCount <= 0) {
      txtTasksCompleted.innerHTML = ''
    }else{
      txtTasksCompleted.innerHTML = `Quedan ${tasksCount} tareas`
    }
  })
  
  let deleteBtn = document.createElement("BUTTON")
  deleteBtn.classList.add("deleteBtn")
  deleteBtn.innerHTML = "x"

  deleteBtn.addEventListener("click", e => {
    container.removeChild(e.target.parentNode);

    if (tasksCount > 0) {
      tasksCount--
      txtTasksCompleted.innerHTML = `Quedan ${tasksCount} tareas`
    } else if (tasksCount == 0) {  
      txtTasksCompleted.innerHTML = ``
    }
    
    elements--
  })

  taskContainer.appendChild(taskTitle)
  taskContainer.appendChild(checkBtn)
  taskContainer.appendChild(deleteBtn)
  
  container.appendChild(taskContainer)
  
  tasksCount++
  txtTasksCompleted.innerHTML = `Quedan ${tasksCount} tareas`
})
