const breakTask = document.getElementById('break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

//start of own code addition
// Tasks click  (3) confirm bookings div button function

/*from bookingPage.html
const bookDay = document.querySelector("#bookDay"); 
const bookTime = document.querySelector("#bookTime");*/

//from adminPage.html
const bookingsList = document.querySelector("#bookingsList");
const bookingsOrdered = document.querySelector("#bookingsOrdered");


function sendBooking(e) {
    if(e.bookDay && e.bookTime){

        var bookingOrdered = document.createElement("li");
        bookingOrdered.setAttribute('id', "bookingOrdered");
        bookingOrdered.setAttribute('class', "bookingOrdered");

        var bookingNode = document.createElement("div");
        bookingNode.setAttribute('class', "bookingDetails");
        bookingNode.setAttribute('id', "bookingDetails");

        var confirmAppointmentBtn = document.createElement("button");
        confirmAppointmentBtn.setAttribute('id',"confirmAppointmentBtn");

        bookingNode.innerText= e;

        bookingOrdered.appendChild(bookingNode);
        bookingNode.appendChild(confirmAppointmentBtn);

        confirmAppointmentBtn.addEventListener('click', confirmBooking(e));    
    }
    else{
    }
};


function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
};

function confirmBooking(e, activatedBookingCol){
    e.classList.toggle('selected');

    if(e.classList.contains('selected')){
        active = true;
        selectedColor = color;
    }
    else{
        active = false;
    }
};

//end of own code addition


// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
}; 

/*

function selectTask (e){
    
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            icon = '<i class="fas fa-couch"></i>';
            break
        case 'gym':
            activeTask(gymTask, taskColor);
            icon = '<i class="fas fa-dumbbell"></i>';
            break
        case 'study':
            activeTask(studyTask, taskColor);
            icon = '<i class="fas fa-book"></i>';
            break
        case 'tv':
            activeTask(tvTask, taskColor);
            icon = '<i class="fas fa-tv"></i>';
            break
        case 'friends':
            activeTask(friendsTask, taskColor);
            icon = '<i class="fas fa-users"></i>';
            break
        case 'work':
            activeTask(workTask, taskColor);
            icon = '<i class="fas fa-briefcase"></i>';
            break
    }

};

// Active task (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
} */