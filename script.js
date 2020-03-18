
    
function informing(){
    console.log(window.localStorage.getItem('test'));
}
function iclear(){
    window.localStorage.clear();
}
function createList(listName, taskArray){
    var list = document.createElement('div');
    list.className = 'listMain';
    var header = document.createElement('div');
    header.id = 'listHeader';
    var taskname = document.createElement('input');
    taskname.type = "text";
    taskname.placeholder = "List Name";
    taskname.id = 'taskName';
    taskname.className = "mdl-textfield__input";
    taskname.rows = '3';
    if(listName != null){
        taskname.value = listName;
    }
    var tasknameBox = document.createElement('div');
    tasknameBox.style.width = '200px';
    tasknameBox.appendChild(taskname);
    var addTaskButton = document.createElement('input');
    // addTaskButton.id = "addTaskButton";
    addTaskButton.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
    addTaskButton.value = "Add New Task";
    addTaskButton.type = 'button';
    // addTaskButton.setAttribute('onclick', 'createTask("",false)');
    addTaskButton.onclick = createTask;
    var removeListButton = document.createElement('input');
    removeListButton.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
    removeListButton.value = "Delete List";
    removeListButton.type = 'button';
    removeListButton.onclick = animat;
    // var clearTasks
    list.addEventListener('animationend', function(){this.remove(this)});
    var deleteCompleted = document.createElement('input');
    deleteCompleted.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
    deleteCompleted.value = "Delete Completed Tasks";
    deleteCompleted.type = 'button';
    deleteCompleted.onclick = clearCompletedLocal;
    header.appendChild(tasknameBox);
    header.appendChild(addTaskButton);
    header.appendChild(deleteCompleted);
    header.appendChild(removeListButton);
    list.appendChild(header);
    document.getElementById('listContainer').appendChild(list);
    if(taskArray != null){
        for(var i = 0; i < taskArray.length; i++){
            createTaskLoad(taskArray[i][0], taskArray[i][1],list);
        }

    }
}
function createTask(){
    // console.log(elem.parentNode.style.height);
    // elem.parentElement.style.animationName = 'normal';
    var node = document.createElement('div');
    node.id = 'taskBody';
    var text = document.createElement('input');
    text.className = "mdl-textfield__input";
    text.type = 'text';
    var textBox = document.createElement('div');
    textBox.style.width = '300px';
    textBox.appendChild(text);
    var deleteTask = document.createElement('button');
    deleteTask.className = "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored";
    deleteTask.innerHTML = "X";
    deleteTask.onclick = deleteThis;
    var deleteTaskBox = document.createElement('div');
    deleteTaskBox.style.margin = '0px';
    deleteTaskBox.appendChild(deleteTask);
    var completed = document.createElement('input');
    completed.type = "checkbox";
    completed.id = 'switch-1';
    completed.className = "mdl-switch__input";
    var span = document.createElement('span');
    span.className="mdl-switch__label";
    span.innerHTML = "Completed?";
    var label = document.createElement('div');
    label.className = "mdl-switch mdl-js-switch mdl-js-ripple-effect";
    label.setAttribute('for', 'switch-1');
    label.style.width = '120px';

    label.appendChild(completed);
    label.appendChild(span);
    node.appendChild(textBox);
    node.appendChild(label);
    node.appendChild(deleteTaskBox);
    
    this.parentNode.parentNode.appendChild(node);
}
function createTaskLoad(taskTextValue, completedTaskValue, elem){
    var node = document.createElement('div');
    node.id = 'taskBody';
    var text = document.createElement('input');
    text.className = "mdl-textfield__input";
    text.type = 'text';
    var textBox = document.createElement('div');
    textBox.style.width = '300px';
    textBox.appendChild(text);
    var deleteTask = document.createElement('button');
    deleteTask.className = "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored";
    deleteTask.innerHTML = "X";
    deleteTask.onclick = deleteThis;
    var deleteTaskBox = document.createElement('div');
    deleteTaskBox.style.margin = '0px';
    deleteTaskBox.appendChild(deleteTask);
    var completed = document.createElement('input');
    completed.type = "checkbox";
    var span = document.createElement('span');
    span.className="mdl-switch__label";
    span.innerHTML = "Completed?";
    var label = document.createElement('div');
    label.style.width = '120px';


    if(completedTaskValue === 'true'){
        completed.checked = 'checked';
    }
    if(typeof taskTextValue == typeof ""){
        text.value = taskTextValue;
    }


    label.appendChild(completed);
    label.appendChild(span);
    node.appendChild(textBox);
    node.appendChild(label);
    node.appendChild(deleteTaskBox);
    
    elem.appendChild(node);
}
function deleteThis(){
    this.parentNode.parentNode.remove(this);
}
function deleteThisList(){
    //this.class = "test";
    this.remove(parentNode.removeChild(this));
}
function animat(){
    this.parentNode.parentNode.style.animation = "delete 4s";
}
function save(){
    var webItems = document.getElementById('listContainer');
    for(var i = 0; i < webItems.childNodes.length - 1; i ++){
        var temp1 = [];
        temp1.push(webItems.childNodes[i+1].childNodes[0].childNodes[0].childNodes[0].value);
        for(var j = 0; j < webItems.childNodes[i+1].childNodes.length - 1; j++){
            var temp2 = [];
            temp2.push(webItems.childNodes[i+1].childNodes[j+1].childNodes[0].childNodes[0].value);
            temp2.push(webItems.childNodes[i+1].childNodes[j+1].childNodes[1].childNodes[0].checked);
            temp1.push(temp2);
        }
        window.localStorage.setItem("item"+i,temp1)
    }
}
function clearCompleted(){
    var webItems = document.getElementById('listContainer');
    console.log(webItems.childNodes);
    console.log(webItems.childNodes.length);
    for(let i = 0; i < webItems.childNodes.length - 1; i++){
    //console.log(webItems.childNodes[i+1].childNodes.length);
        for(let j = 0; j < webItems.childNodes[i+1].childNodes.length - 1; j++){
            console.log(webItems.childNodes[i+1].childNodes[j+1]);
            if(webItems.childNodes[i+1].childNodes[j+1].childNodes[1].childNodes[0].checked == true){
                webItems.childNodes[i+1].childNodes[j+1].remove();
			}
		}
        
	}
}
function clearCompletedLocal(){
    console.log(this.parentNode.parentNode.childNodes);
    for(let i = 1; i < this.parentNode.parentNode.childNodes.length; i++){
        if(this.parentNode.parentNode.childNodes[i].childNodes[1].childNodes[0].checked == true){
            this.parentNode.parentNode.childNodes[i].remove();
		}
	}
}
window.onload = function(){
    var arrayinside = [];
    for(let i = 0; i < this.localStorage.length; i++){
        var tempor = this.localStorage.getItem('item'+i).split(',');
            for(var j = 2; j < tempor.length; j+= 2){
                var arrayinsideinside = [];
                arrayinsideinside.push(tempor[j-1] );
                arrayinsideinside.push(tempor[j] );
            arrayinside.push(arrayinsideinside);
            }
        this.createList(tempor[0], arrayinside);
        arrayinside = [];
    }
    
}