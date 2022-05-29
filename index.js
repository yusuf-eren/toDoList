var liste = document.getElementById("list");
var listItem = document.getElementsByClassName("listItemLi");
function newElement() {
  if (document.getElementById("task").value != "") {
    var textTask = document.getElementById("task").value;
    document.getElementById("task").value = "";

    var li = document.createElement("li");
    li.className = "listItemLi";
    var text = document.createTextNode(textTask);
    liste.appendChild(li);
    li.appendChild(text);
    var span = document.createElement("span");
    var t = document.createTextNode("x");
    span.className = "close1";
    span.appendChild(t);
    li.appendChild(span);
    document.getElementById("liveToast1").className="error hide"
  } else {
    document.getElementById("liveToast2").className="error hide"
  }
}

liste.addEventListener("click", function (item) {
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
    console.log("li",item.target);
  }
  
});
var closeButon = document.getElementsByClassName("close1")
liste.addEventListener("click", function (item) { 
  
  if (item.target.tagName == "SPAN") {
    console.log(closeButon.length)
    for (let i = 0; i < closeButon.length; i++) {
      closeButon[i].onclick = function(){
        var li = this.parentElement
        li.style.display = "none"
        console.log("span",i,closeButon[i],li)

      }
    }
  }
});

function closeBtn2(){
  document.getElementById("liveToast2").className="toast error hide"
}
function closeBtn1(){
  document.getElementById("liveToast1").className="toast error hide"
}