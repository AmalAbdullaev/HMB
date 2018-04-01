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
    
    draggedEl.style.width = width2(draggedId);
    draggedEl.style.height = '400px';
    draggedEl.style.float = 'inherit';
    draggedEl.style.backgroundImage = comparator2(draggedId);
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

    draggedEl.style.backgroundImage = comparator(draggedId);
    
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

function comparator(draggedId){
    if('box1' == draggedId){
        return manDancer.dance_gif_file;
    }
    if('box2' == draggedId){
        return womanDancer.dance_gif_file;
    }
    if('box3' == draggedId){
        return manSinger.song_gif;
    }
    if('box4' == draggedId){
        return womanSinger.song_gif;
    }
    if('box5' == draggedId){
        return accordeonPlayer.instrument_gif;
    }
    if('box6' == draggedId){
        return bassPlayer.instrument_gif;
    }
    if('box7' == draggedId){
        return davulPlayer.instrument_gif;
    }
    if('box8' == draggedId){
        return guitarPlayer.instrument_gif;
    }
    if('box9' == draggedId){
        return violinPlayer.instrument_gif;
    }
    if('box10' == draggedId){
        return pipePlayer.instrument_gif;
    }
    if('box11' == draggedId){
        return saxPlayer.instrument_gif;
    }
    if('box12' == draggedId){
        return sazPlayer.instrument_gif;
    }
    if('box13' == draggedId){
        return synthesizerPlayer.instrument_gif;

    }
}


function width2(draggedId){
    if('box1' == draggedId){
        return '300px';
    }
    if('box2' == draggedId){
        return '250px';
    }
    if('box3' == draggedId){
        return '300px';
    }
    if('box4' == draggedId){
        return '213px';
    }
    if('box5' == draggedId){
        return '500px';
    }
    if('box6' == draggedId){
        return '213px';
    }
    if('box7' == draggedId){
        return '350px';
    }
    if('box8' == draggedId){
        return '413px';
    }
    if('box9' == draggedId){
        return '400px';
    }
    if('box10' == draggedId){
        return '400px';
    }
    if('box11' == draggedId){
        return '400px';
    }
    if('box12' == draggedId){
        return '500px';
    }
    if('box13' == draggedId){
        return '400px';
    }
}



function comparator2(draggedId){
    if('box1' == draggedId){
        return 'url(' + "icons/icoHalpah.png" + ')';
    }
    if('box2' == draggedId){
        return 'url(' + "icons/icoFes.png" + ')';
    }
    if('box3' == draggedId){
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if('box4' == draggedId){
        return 'url(' + "icons/icoMicroF.png" + ')';
    }
    if('box5' == draggedId){
        return 'url(' + "icons/icoMusicAccordeon.png" + ')';
    }
    if('box6' == draggedId){
        return 'url(' + "icons/icoMusicBass.png" + ')';
    }
    if('box7' == draggedId){
        return 'url(' + "icons/icoMusicDavul.png" + ')';
    }
    if('box8' == draggedId){
        return 'url(' + "icons/icoMusicGuitar.png" + ')';
    }
    if('box9' == draggedId){
        return 'url(' + "icons/icoMusicViolin.png" + ')';
    }
    if('box10' == draggedId){
        return 'url(' + "icons/icoMusicPipe.png" + ')';
    }
    if('box11' == draggedId){
        return 'url(' + "icons/icoMusicSax.png" + ')';
    }
    if('box12' == draggedId){
        return 'url(' + "icons/icoMusicSaz.png" + ')';
    }
    if('box13' == draggedId){
        return 'url(' + "icons/icoMusicSynthesizer.png" + ')';
    }
}




 class Dance{
    constructor(dance_file){
        this.dance_file =  dance_file;
    }
}

 class WindInstrument{
    constructor(gif_file,instument_mp3_file){
        this.gif_file = gif_file;
        this.instument_mp3_file = instument_mp3_file;
    }
}
 class StringInstrumet{
    constructor(gif_file, instument_mp3_file ){
        this.gif_file = gif_file;
        this.instument_mp3_file = instument_mp3_file;
    }
}
class PercussionInstrument{
    constructor(gif_file, instument_mp3_file){
        this.gif_file = gif_file;
        this.instument_mp3_file = instument_mp3_file;
    }
}
 class BowInstrument{
    constructor(gif_file,instument_mp3_file){
        this.gif_file = gif_file;
        this.instument_mp3_file = instument_mp3_file;
    }
}
 class KeyboardInstrument{
    constructor(gif_file, instument_mp3_file){
        this.gif_file = gif_file;
        this.instument_mp3_file = instument_mp3_file;
    }
}
 class Man {
    sing(song_gif,song_file){
        this.song_gif = song_gif;
        this.song_file = song_file;
    }

    dance(dance_gif_file){
        this.dance_gif_file = dance_gif_file;
    }

    playOnInstrument(instrument_gif, instrument_mp3_file){
        this.instrument_gif = instrument_gif;
        this.instrument_mp3_file = instrument_mp3_file;
    }
}
 class Song{
    constructor(song_gif_file,song_mp3_file){
       this.song_gif_file = song_gif_file;
       this.song_mp3_file = song_mp3_file;
    }
}

class Woman{
    sing(song_gif, song_file){
        this.song_gif = song_gif;
        this.song_file = song_file;
    }

    dance(dance_gif_file){
        this.dance_gif_file = dance_gif_file;
    }
}

let manDance = new Dance('url(' + "gif/12.gif" + ')');
let womanDance = new Dance('url(' + "gif/5.gif" + ')');//созданы танцы

let manSong = new Song('url(' + "gif/1.gif" + ')','song_mp3_file');
let womanSong = new Song('url(' + "gif/10.gif" + ')', 'song_mp3_file'); // созданы песни

let accordeon = new KeyboardInstrument('url(' + "gif/2.gif" + ')','mp3_url');
let synthesizer = new KeyboardInstrument('url(' + "gif/3.gif" + ')','mp3_url');
let bass = new PercussionInstrument('url(' + "gif/4.gif" + ')','mp3_url');
let davul = new PercussionInstrument('url(' + "gif/6.gif" + ')','mp3_url');
let guitar = new StringInstrumet('url(' + "gif/7.gif" + ')','mp3_url');
let saz = new StringInstrumet('url(' + "gif/8.gif" + ')','mp3_url');
let pipe = new WindInstrument('url(' + "gif/9.gif" + ')','mp3_url');
let sax = new WindInstrument('url(' + "gif/11.gif" + ')','mp3_url');
let violin = new BowInstrument('url(' + "gif/13.gif" + ')','mp3_url'); // созданы инструменты


let accordeonPlayer = new Man();
let synthesizerPlayer = new Man();
let bassPlayer = new Man();
let davulPlayer = new Man();
let guitarPlayer = new Man();
let sazPlayer = new Man();
let pipePlayer = new Man();
let saxPlayer = new Man();
let violinPlayer = new Man(); // созданы люди играющие на инструментах

let womanDancer = new Woman();
let manDancer = new Man(); //созданые танцоры

let womanSinger = new Woman();
let manSinger = new Man();// созданы певцы


womanDancer.dance(womanDance.dance_file);
manDancer.dance(manDance.dance_file); //заданы танцы для танцоров


womanSinger.sing(womanSong.song_gif_file , womanSinger.song_mp3_file);
manSinger.sing(manSong.song_gif_file,manSong.song_mp3_file); //заданы песни для певцов

accordeonPlayer.playOnInstrument(accordeon.gif_file,accordeon.instument_mp3_file);
synthesizerPlayer.playOnInstrument(synthesizer.gif_file,synthesizer.instument_mp3_file);
bassPlayer.playOnInstrument(bass.gif_file,bassPlayer.instrument_mp3_file);
davulPlayer.playOnInstrument(davul.gif_file,davul.instument_mp3_file);
guitarPlayer.playOnInstrument(guitar.gif_file,guitar.instument_mp3_file);
sazPlayer.playOnInstrument(saz.gif_file,saz.instument_mp3_file);
pipePlayer.playOnInstrument(pipe.gif_file,pipe.instument_mp3_file);
saxPlayer.playOnInstrument(sax.gif_file,sax.instument_mp3_file);
violinPlayer.playOnInstrument(violin.gif_file,violin.instument_mp3_file); // заданы инструменты для музыкантов