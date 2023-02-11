// JSON DATA conversion

let tasks = JSON.parse(tasksData);

// initial coloring of importance level
var colorCode = "btn-success";

// initial show of details content
var detailsContent = "";

let plusBtns = document.getElementsByClassName("iPlus");
let minusBtns = document.getElementsByClassName("iMinus");
let detailsBtns = document.getElementsByClassName("detailsBtn");

// SORTING ALGORITHM
// fetch all sort buttons and -links 
let sumBtns = document.getElementsByClassName("sumBtn");

// the actual sorting algorithm
function sort() {
    let newTasks = new Array();
    newTasks.length = 0;
    console.log(newTasks);

    for(let level = 0; level < 43; level++){
        for(let i = 0; i < plusBtns.length; i++){
            if(tasks[i].importance == level){
                console.log(tasks[i].importance);
                console.log(level);
                
                newTasks.push(tasks[i]);
            }
        }
    }
    tasks = newTasks;
    document.getElementById("output").innerHTML = ``;
    main();
}

// trigger sort by event on sort buttons and -links
for(let i = 0; i < sumBtns.length; i++){
    sumBtns[i].addEventListener("click", function(){
        sort();
    })}
function main(){
// MAIN JS FILE

// output of a single card
for(let count of tasks){
document.getElementById("output").innerHTML += `
<div class="p-3">
    <div class="card bg-light" style="width: 18rem; margin: auto;">
        <img src="${count.taskImage}" class="card-img-top" alt="${count.taskName}">
        <div class="card-body mb-1">
            <h5 class="card-title">${count.taskName}</h5>
            <p class="card-text">${count.taskDescription}</p>
            <div class="text-center">
                <p class="iMinus btn btn-outline-success mt-3">-</p>
                <span class="importance btn ${colorCode}">&nbsp;${count.importance}&nbsp;</span>
                <p class="iPlus btn btn-outline-danger mt-3">+</p>
                <br>
                <p class="detailsBtn btn btn-outline-dark">Show Details</p>
            </div>
            <p class="details card-text">${detailsContent}</P>
        </div>
    </div>
</div>`
}

// fetch all buttons
plusBtns = document.getElementsByClassName("iPlus");
minusBtns = document.getElementsByClassName("iMinus");
detailsBtns = document.getElementsByClassName("detailsBtn");

// refresh value output for property "importance"
function refresh(i) {
    document.getElementsByClassName("importance")[i].innerHTML = `&nbsp;${tasks[i].importance}&nbsp;`;

    if(tasks[i].importance > 1) {
        if(tasks[i].importance > 3) {
            colorCode = "btn-danger";
        }
        else {
            colorCode = "btn-warning";
        }
    }
    else {
        colorCode = "btn-success";
    }

    // refresh coloring
    document.getElementsByClassName("importance")[i].classList.remove("btn-dark", "btn-danger", "btn-warning", "btn-success");
    document.getElementsByClassName("importance")[i].classList.add(colorCode);
}

// limit importance to values between 0 and 6
function minimax(check) {
    if(check > -1){
        if(check < 5) {
            check = check
        }
        else {
            check = 5
        }
    }
    else{
        check = 0
    }
    return(check);
}

// increase and decrease value of "importance", show details
for(let i = 0; i < plusBtns.length; i++){
    plusBtns[i].addEventListener("click", function(){
        tasks[i].importance++;
        tasks[i].importance = minimax(tasks[i].importance);
        refresh(i);
    })
    minusBtns[i].addEventListener("click", function(){
        tasks[i].importance--;
        tasks[i].importance = minimax(tasks[i].importance);
        refresh(i);
    })
    detailsBtns[i].addEventListener("click", function(){
        detailsContent = tasks[i].deadline;
        document.getElementsByClassName("details")[i].innerHTML = `deadline: ${detailsContent}`;
    })
}
}

main();