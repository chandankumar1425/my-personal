// Write code related to dashboard page here

let parent=document.querySelector("tbody");

let data=JSON.parse(localStorage.getItem("task-list"))||[];
document.getElementById("task-count").innerText=data.length;
appendata(data)
function appendata(data)
{
    parent.innerHTML="";
    data.forEach(function(ele,ind){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=ele.name;
        let td2=document.createElement("td");
        td2.textContent=ele.desc;
        let td3=document.createElement("td");
        td3.textContent=ele.start;
        let td4=document.createElement("td");
        td4.textContent=ele.end;
        let td5=document.createElement("td");
        td5.textContent=ele.priority;
        let td6=document.createElement("td");
        td6.textContent="Add";
        td6.addEventListener("click",function(){
            //splice will return an array with deleted element
            let ele=data.splice(ind,1);
            //console.log(ele)
            let prioritylist=JSON.parse(localStorage.getItem("priority-list"))||[];
            prioritylist.push(ele[0])
            localStorage.setItem("priority-list",JSON.stringify(prioritylist));
            localStorage.setItem("task-list",JSON.stringify(data));
            appendata(data);
            
        })
        tr.append(td1,td2,td3,td4,td5,td6);
        parent.append(tr);
        
        document.getElementById("task-count").innerText=data.length;


    })
}


let select=document.querySelector("select");

select.addEventListener("change",selectfunction);

function selectfunction()
{
    let filtervalue=select.value;

    data=JSON.parse(localStorage.getItem("task-list"))||[];
    let data1=data.filter(function(ele,ind){
        if(filtervalue==="")
        {
            return true;
        }
        return ele.priority===filtervalue;
    })
    appendata(data1);
    document.getElementById("task-count").innerText=data1.length;

}