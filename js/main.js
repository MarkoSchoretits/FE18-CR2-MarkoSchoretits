// JSON DATA

let tasks = [{
    "taskName":"Birdwatching",
    "taskImage":"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605__340.jpg",
    "taskDescription":"Relax and recover positive energy in nature.",
    "importance":0,
    "deadline":"2024-02-18"
},{
    "taskName":"Raccoonwatching",
    "taskImage":"https://cdn.pixabay.com/photo/2022/05/29/05/31/raccoon-7228457__340.jpg",
    "taskDescription":"Relax and recover positive energy in nature in the evenings.",
    "importance":0,
    "deadline":"2024-02-18"
},{
    "taskName":"Birdwatching",
    "taskImage":"https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605__340.jpg",
    "taskDescription":"Relax and recover positive energy in nature.",
    "importance":0,
    "deadline":"2024-02-18"
},{
    "taskName":"Raccoonwatching",
    "taskImage":"https://cdn.pixabay.com/photo/2022/05/29/05/31/raccoon-7228457__340.jpg",
    "taskDescription":"Relax and recover positive energy in nature in the evenings.",
    "importance":0,
    "deadline":"2024-02-18"
}
]

// MAIN JS FILE

for(let count of tasks){
document.getElementById("output").innerHTML += `
<div><div class="card" style="width: 18rem;">
<img src="${count.taskImage}" class="card-img-top" alt="${count.taskName}">
<div class="card-body">
  <h5 class="card-title">${count.taskName}</h5>
  <p class="card-text">${count.taskDescription}</p>
  <p class="iMinus btn btn-danger">-</p>
  <span class="importance btn btn-dark">&nbsp; ${count.importance} &nbsp;</span>
  <p class="iPlus btn btn-success">+</p>
  <br>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div><div>`
}

let plusBtns = document.getElementsByClassName("iPlus");
let minusBtns = document.getElementsByClassName("iMinus");

function refresh(i) {
    document.getElementsByClassName("importance")[i].innerHTML = `&nbsp; ${tasks[i].importance} &nbsp;`;
}

for(let i = 0; i < plusBtns.length; i++){
    plusBtns[i].addEventListener("click", function(){
        tasks[i].importance++;
        refresh(i);
    })
    minusBtns[i].addEventListener("click", function(){
        tasks[i].importance--;
        refresh(i);
    })
}