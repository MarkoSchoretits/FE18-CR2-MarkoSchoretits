
/* TO DO:
    Add Details
        Data
        Functionality
*/

// JSON DATA conversion

let tasks = JSON.parse(tasksData);

// MAIN JS FILE

// initial coloring of importance level
var colorCode = "btn-success";

// initial show of details content
var detailsContent = "";

// output of a single card
for(let count of tasks){
document.getElementById("output").innerHTML += `
<div class="p-3"><div class="card" style="width: 18rem;">
<img src="${count.taskImage}" class="card-img-top" alt="${count.taskName}">
<div class="card-body bg-light">
  <h5 class="card-title">${count.taskName}</h5>
  <p class="card-text">${count.taskDescription}</p>
  <p class="iMinus btn btn-success">-</p>
  <span class="importance btn ${colorCode}">&nbsp; ${count.importance} &nbsp;</span>
  <p class="iPlus btn btn-danger">+</p>
  <br>
  <p class="detailsBtn btn btn-primary">Show Details</p>
  <p class="details card-text">${detailsContent}</P>
</div>
</div><div>`
}

// fetch all buttons
let plusBtns = document.getElementsByClassName("iPlus");
let minusBtns = document.getElementsByClassName("iMinus");
let detailsBtns = document.getElementsByClassName("detailsBtn");

// refresh value output for property "importance"
function refresh(i) {
    document.getElementsByClassName("importance")[i].innerHTML = `&nbsp; ${tasks[i].importance} &nbsp;`;

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