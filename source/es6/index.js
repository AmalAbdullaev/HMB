function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id);
}

function handleDragEnterLeave(e) {
    if (e.type == "dragenter") {
        this.className = "drag-enter";
        let draggedId = e.dataTransfer.getData("text");
        let draggedEl = document.getElementById(draggedId);
        draggedEl.style.width = '10px';
        draggedEl.style.height = '10px';
        
    } else {
        this.className = "";
    }
}

let arr = [];

function handleOverDrop(e) {
    e.preventDefault();

    if (e.type != "drop") {
        return; //Means function will exit if no "drop" event is fired.
    }

    let draggedId = e.dataTransfer.getData("text");
    let draggedEl = document.getElementById(draggedId);


    if (draggedEl.parentNode == this) {
        this.className = "";
        return; //note: when a return is reached a function exits.
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
    
    draggedEl.style.width = '50px';
    draggedEl.style.height = '50px';
    draggedEl.style.float = 'inherit';
    draggedEl.style.backgroundImage = 'none';
    arr.pop();

}


function handleOverDrop2(e) {
    e.preventDefault();

    if(arr.length>5){
        return;
    }

    if (e.type != "drop") {
        return; //Means function will exit if no "drop" event is fired.
    }

    let draggedId = e.dataTransfer.getData("text");
    let draggedEl = document.getElementById(draggedId);


    if (draggedEl.parentNode == this) {
        this.className = "";
        return; //note: when a return is reached a function exits.
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
    
    draggedEl.style.width = '450px';
    draggedEl.style.height = '450px'; 
    draggedEl.style.backgroundImage = 'url(' + "gif/7.gif" + ')';
    
    arr.push(draggedEl);   
    
}
let draggable = document.querySelectorAll('[draggable]')
let targets = document.querySelectorAll('[data-drop-target]');
let targets2 = document.querySelectorAll('[data-drop-target2]');


for (let i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener("dragstart", handleDragStart);
}

for (let i = 0; i < targets.length; i++) {
    targets[i].addEventListener("dragover", handleOverDrop);
    targets[i].addEventListener("drop", handleOverDrop);
    targets[i].addEventListener("dragenter", handleDragEnterLeave);
    targets[i].addEventListener("dragleave", handleDragEnterLeave);
}
for (let i = 0; i < targets.length; i++) {
    targets2[i].addEventListener("dragover", handleOverDrop2);
    targets2[i].addEventListener("drop", handleOverDrop2);
    targets2[i].addEventListener("dragenter", handleDragEnterLeave);
    targets2[i].addEventListener("dragleave", handleDragEnterLeave);
}
