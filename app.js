var listOfActivities=[];

var input =document.getElementById("input");

var toDolist =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    input.value="";

    showlist();
}

function showlist(){
    toDolist.innerHTML="";


    listOfActivities.forEach(function(current_value, index){
        toDolist.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times </a></li>")
    })
}

function editItem(index){
    var newVaule=prompt("Please insert your value");

    listOfActivities.splice(index,1,newVaule);
    
    showlist();
}

function deleteItem(index){
    listOfActivities.splice(index,1);

    showlist();
}

