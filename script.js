const inputBox = document.getElementById("your_text");
const listContainer = document.getElementById("list_container");
var flexChild = document.querySelector(".flex-child");

function AddItem() {
  if(inputBox.value === '') {

    flexChild.classList.remove("hidden");
    flexChild.style.fontSize = "12px";
    flexChild.style.color = "red";
   
  } else {
    flexChild.classList.add("hidden");
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
  }
  inputBox.value="";
  saveDate();
}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function show()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
show();

