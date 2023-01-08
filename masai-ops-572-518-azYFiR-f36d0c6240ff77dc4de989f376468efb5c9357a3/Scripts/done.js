// Write code related to Done page here

let parent=document.querySelector("tbody");

let data=JSON.parse(localStorage.getItem("done-list"))||[];

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
        tr.append(td1,td2,td3,td4,td5);
        parent.append(tr);


    })
}