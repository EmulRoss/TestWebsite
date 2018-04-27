/*// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}*/

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var select = document.getElementsByClassName("select");
var i;
for (i = 0; i < select.length; i++) {
  select[i].onclick = function() {
    window.location.href = '../items/view.html';
  }
}

function start(){
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  if (list) {
    console.log(list);
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span2 = document.createElement("SPAN");
  var txt2 = document.createTextNode("Open item list");
  span2.className = "select";
  span2.appendChild(txt2);
  li.appendChild(span2);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  for (i = 0; i < select.length; i++) {
    select[i].onclick = function() {
      window.location.href = '../items/view.html';
    }
  }
  
}

