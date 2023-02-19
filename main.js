let userInput = document.getElementById("userInput");
let inputBtn = document.querySelector(".my-btn");
let tasksState = document.getElementById("empty");
let taskNumber = document.getElementById("taskNumber");
let completedNumber = document.getElementById("completedNum");
let tasksUl = document.querySelector(".tasks");
let alt = document.getElementById("alrt");
let existSpan = document.getElementById("exist");
let delAll = document.getElementById("delAll");
let finAll = document.getElementById("finAll");
let taskArr,delBtn;
let myBool = false;


window.onload = function() {
    userInput.value = "";
    userInput.focus();
}
function createTask() {
    if(userInput.value == ''){
        alt.classList.add("on");
    }else{
        alt.classList.remove("on");
        checkTask();
        if(myBool == false){
            existSpan.classList.remove("on");
            tasksState.style.display = 'none';
            let element = document.createElement("li");
            element.classList.add("elem");
            let mySpan = document.createElement("span");
            mySpan.textContent = userInput.value;
            let myButton = document.createElement("button");
            myButton.classList.add("delete");
            myButton.textContent = "Delete";
            element.appendChild(mySpan);
            element.appendChild(myButton);
            tasksUl.appendChild(element);
            taskNumber.textContent++;
            userInput.value = "";
            userInput.focus();
        }else{
            existSpan.classList.add("on");
            myBool = false;
        }
    }
}
function checkTask(){
    let allTasks = document.querySelectorAll(".tasks li span");
    allTasks.forEach((task)=> {
        if(task.textContent == userInput.value){
            myBool = true;
        }
    });
}
inputBtn.addEventListener("click",()=> {

    createTask();

});
delAll.addEventListener("click",()=> {
    document.querySelectorAll(".tasks .elem").forEach((e)=>{
        e.remove();
        tasksState.style.display =  "flex";
        taskNumber.textContent = '0';
        completedNumber.textContent = '0';
    });
});
finAll.addEventListener("click",()=> {
    document.querySelectorAll(".tasks .elem span").forEach((e)=>{
        if(e.classList.contains("finished")){
            return;
        }else{
            e.classList.add("finished");
            completedNumber.textContent++;
        }
    });
});
document.addEventListener("click",(e)=> {
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        taskNumber.textContent--;
        if(taskNumber.textContent == 0){
            tasksState.style.display = "flex";
        }
    }
    if(e.target.classList.contains("elem")){
        e.target.firstChild.classList.toggle("finished");
        if(e.target.firstChild.classList.contains("finished")){
            completedNumber.textContent++;
        }else{
            completedNumber.textContent--   ;
        }
    }
})