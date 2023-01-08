// Write code related to Home page here

//submit form- local storage with key task-list

let form = document.querySelector("form");

form.addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let priority = document.getElementById("priority").value;
  let obj = {
    name: name,
    desc: desc,
    start: start,
    end: end,
    priority: priority,
  };
  let tasklist=JSON.parse(localStorage.getItem("task-list"))||[]
  tasklist.push(obj);
  localStorage.setItem("task-list",JSON.stringify(tasklist))

}
