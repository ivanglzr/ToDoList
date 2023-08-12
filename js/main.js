let container = document.querySelector(".tasks")
let addTaskBtn = document.querySelector(".btn")
let txtTasksCompleted = document.querySelector(".tasksCompleted")

let tasksCount = 0

addTaskBtn.addEventListener("click", ()=>{
  tasksCount++
  txtTasksCompleted.innerHTML = `Quedan ${tasksCount} tareas`

  let name = prompt("Cual es el nombre")

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

  taskContainer.appendChild(taskTitle)
  taskContainer.appendChild(checkBtn)

  container.appendChild(taskContainer)

  
})
