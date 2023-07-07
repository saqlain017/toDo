window.addEventListener('load',()=>{
    const form = document.querySelector("#taskForm");
    const input = document.querySelector('#taskInput');
    const li_el = document.querySelector('#taskList');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Do write your task ?");
            return;
        } else {
            console.log("success");
        }

        const list_el = document.getElementById('taskList');

        let task_el = document.createElement('div');
        task_el.classList.add('toDo');
        
        const content_task = document.createElement('div');
        content_task.classList.add('toDoList');


        const task_input = document.createElement('input');
        task_input.classList.add('text');
        task_input.type = "text";
        task_input.value=task;
        task_input.setAttribute("readonly","readonly");

        content_task.appendChild(task_input);

        task_el.appendChild(content_task);

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const task_edit = document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerHTML = "Edit";

        task_actions.appendChild(task_edit);

        const task_delete = document.createElement('button');
        task_delete.classList.add('Delete');
        task_delete.innerHTML = "Delete";

        task_actions.appendChild(task_delete);



        task_el.appendChild(task_actions);
        
        input.value = "";
         
        list_el.appendChild(task_el);

        task_edit.addEventListener('click',()=>{
            if (task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText ='Save'; 
            } else{
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText = "Edit";
            }
        })
        task_delete.addEventListener('click',()=>{
            task_el.remove();
        })
    })
})