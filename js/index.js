/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

document.getElementById('IconAbout').addEventListener('dblclick', popclick);
document.getElementById('closeButton').addEventListener('click', popdisap);

function popclick (){
document.getElementById("PopUpAbout").style.display = "block";
document.getElementById("popArt").style.display = "block";
document.getElementById("closeButton").style.display = "block";
}
function popdisap (){
document.getElementById("PopUpAbout").style.display = "none";
document.getElementById("popArt").style.display = "none";
document.getElementById("closeButton").style.display = "none";
}

document.getElementById('IconWerk').addEventListener('dblclick', popaboutclick);
document.getElementById('closeButtonWerk').addEventListener('click', popaboutdisap);

function popaboutclick (){
document.getElementById("PopUpWerk").style.display = "block";
document.getElementById("popArtWerk").style.display = "block";
document.getElementById("closeButtonWerk").style.display = "block";
}
function popaboutdisap (){
document.getElementById("PopUpWerk").style.display = "none";
document.getElementById("popArtWerk").style.display = "none";
document.getElementById("closeButtonWerk").style.display = "none";
}

dragElement(document.getElementById("headerPopUp"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("popArt")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("headerPopUp").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }
 
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

dragElementWerk(document.getElementById("headerPopUpWerk"));

function dragElementWerk(elmntW) {
  var pos1W = 0, pos2W = 0, pos3W = 0, pos4W = 0;
  if (document.getElementById("popArtWerk")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("headerPopUpWerk").onmousedown = dragMouseDownWerk;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmntW.onmousedown = dragMouseDownWerk;
  }

   function dragMouseDownWerk(eW) {
    eW = eW || window.event;
    eW.preventDefault();
    // get the mouse cursor position at startup:
    pos3W = eW.clientX;
    pos4W = eW.clientY;
    document.onmouseup = closeDragElementWerk;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDragWerk;
  }

  function elementDragWerk(eW) {
    eW = eW || window.event;
    eW.preventDefault();
    // calculate the new cursor position:
    pos1W = pos3W - eW.clientX;
    pos2W = pos4W - eW.clientY;
    pos3W = eW.clientX;
    pos4W = eW.clientY;
    // set the element's new position:
    elmntW.style.top = (elmntW.offsetTop - pos2W) + "px";
    elmntW.style.left = (elmntW.offsetLeft - pos1W) + "px";
  }

  function closeDragElementWerk() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





