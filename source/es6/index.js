import {closeButtons,openButtons} from "./buttons.js";
import {Dance} from './Dancing.js';
import {WindInstrument , StringInstrumet , PercussionInstrument, BowInstrument, KeyboardInstrument } from './Instrument.js';
import {ManDancer,WomanDancer,ManSinger,WomanSinger,Musician} from './Member.js'; 
import {Song} from './Song.js';

let manDance = new Dance('url(' + "gif/manDance.gif" + ')','url(' + "stopGif/manDance.jpg" + ')');
let womanDance = new Dance('url(' + "gif/womanDance.gif" + ')','url(' + "stopGif/womanDance.jpg" + ')');//созданы танцы

let manSong = new Song('music/mansong.mp3');
let womanSong = new Song('music/womsong.wav'); // созданы песни

//сменить музыку 
let accordeon = new KeyboardInstrument('music/accordeon.mp3');
let synthesizer = new KeyboardInstrument('music/synthesizer.mp3');
let bass = new PercussionInstrument('music/bass.mp3');
let davul = new PercussionInstrument('music/davul.mp3');
let guitar = new StringInstrumet('music/guitar.mp3');
let saz = new StringInstrumet('music/saz.mp3');
let pipe = new WindInstrument('music/pipe.mp3');
let sax = new WindInstrument('music/sax.mp3');
let violin = new BowInstrument('music/violin.mp3'); // созданы инструменты

let womanDancer = new WomanDancer(womanDance);
let manDancer = new ManDancer(manDance); //созданые танцоры

let womanSinger = new WomanSinger(womanSong,'url(' + "gif/womanVoice.gif" + ')','url(' + "stopGif/womanVoice.jpg" + ')');
let manSinger = new ManSinger(manSong,'url(' + "gif/manVoice.gif" + ')','url(' + "stopGif/manVoice.jpg" + ')');// созданы певцы

let accordeonPlayer = new Musician(accordeon,'url(' + "gif/accordion.gif" + ')','url(' + "stopGif/accordion.jpg" + ')');
let synthesizerPlayer = new Musician(synthesizer,'url(' + "gif/synthesizer.gif" + ')','url(' + "stopGif/synthesizer.jpg" + ')');
let bassPlayer = new Musician(bass,'url(' + "gif/bass.gif" + ')','url(' + "stopGif/bass.jpg" + ')');
let davulPlayer = new Musician(davul,'url(' + "gif/davul.gif" + ')','url(' + "stopGif/davul.jpg" + ')');
let guitarPlayer = new Musician(guitar,'url(' + "gif/guitar.gif" + ')','url(' + "stopGif/guitar.jpg" + ')');
let sazPlayer = new Musician(saz,'url(' + "gif/saz.gif" + ')','url(' + "stopGif/saz.jpg" + ')');
let pipePlayer = new Musician(pipe,'url(' + "gif/pipe.gif" + ')','url(' + "stopGif/pipe.jpg" + ')');
let saxPlayer = new Musician(sax,'url(' + "gif/sax.gif" + ')','url(' + "stopGif/sax.jpg" + ')');
let violinPlayer = new Musician(violin,'url(' + "gif/violin.gif" + ')','url(' + "stopGif/violin.jpg" + ')'); // созданы люди играющие на инструментах


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
        return; 
    }

    let draggedId = e.dataTransfer.getData("text");
    let draggedEl = document.getElementById(draggedId);
        
    if (draggedEl.parentNode == this) {
        this.className = "";
        return; 
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
    
    //убрать потом  width and height
    draggedEl.style.width = '200px';
    draggedEl.style.height = '200px';
    draggedEl.style.float = 'inherit';
    draggedEl.style.backgroundImage = getIcon(draggedId);

    
    closeButtons(draggedId);
    let del = arr.indexOf(draggedId);
    arr.splice(del,1);
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
    
    //задать размер гифок
    draggedEl.style.width = '450px';
    draggedEl.style.height = '450px'; 

    draggedEl.style.backgroundImage = activation(draggedId);
    
    
    openButtons(draggedId);
    
    arr.push(draggedId);   
    
}
let draggable = document.querySelectorAll('[draggable]')
let targets = document.querySelectorAll('[data-drop-target]');
let targets2 = document.querySelectorAll('[data-drop-target2]');

//задаем дропы на элементы
(function(){
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
})();

//активации участника
function activation(draggedId){
    
    if('box1' == draggedId){
        return manDancer.play();
    }
    if('box2' == draggedId){
        return womanDancer.play();
    }
    if('box3' == draggedId){
        return manSinger.play();
    }
    if('box4' == draggedId){
        return womanSinger.play();
    }
    if('box5' == draggedId){
        return accordeonPlayer.play();
    }
    if('box6' == draggedId){
        return bassPlayer.play();
    }
    if('box7' == draggedId){
        return davulPlayer.play();
    }
    if('box8' == draggedId){
        return guitarPlayer.play();
    }
    if('box9' == draggedId){
        return violinPlayer.play();
    }
    if('box10' == draggedId){
        return pipePlayer.play();
    }
    if('box11' == draggedId){
        return saxPlayer.play();
    }
    if('box12' == draggedId){
        return sazPlayer.play();
    }
    if('box13' == draggedId){
        return synthesizerPlayer.play();
    }
}

//отключает участника
function pause(draggedId){
    if('box1' == draggedId){
        return manDancer.pause();
    }
    if('box2' == draggedId){
        return womanDancer.pause();
    }
    if('box3' == draggedId){
        return manSinger.pause();
    }
    if('box4' == draggedId){
        return womanSinger.pause();
    }
    if('box5' == draggedId){
        return accordeonPlayer.pause();
    }
    if('box6' == draggedId){
        return bassPlayer.pause();
    }
    if('box7' == draggedId){
        return davulPlayer.pause();
    }
    if('box8' == draggedId){
        return guitarPlayer.pause();
    }
    if('box9' == draggedId){
        return violinPlayer.pause();
    }
    if('box10' == draggedId){
        return pipePlayer.pause();
    }
    if('box11' == draggedId){
        return saxPlayer.pause();
    }
    if('box12' == draggedId){
        return sazPlayer.pause();
    }
    if('box13' == draggedId){
        return synthesizerPlayer.pause();
    }
}

function getIcon(draggedId){
    if('box1' == draggedId){
        return 'url(' + "icons/icoHalpah.png" + ')';
    }
    if('box2' == draggedId){
        return 'url(' + "icons/icoFes.png" + ')';
    }
    if('box3' == draggedId){
        manSinger.pause();
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if('box4' == draggedId){
        womanSinger.pause();
        return 'url(' + "icons/icoMicroF.png" + ')';
    }
    if('box5' == draggedId){
        accordeonPlayer.pause();
        return 'url(' + "icons/icoMusicAccordeon.png" + ')';
    }
    if('box6' == draggedId){
        bassPlayer.pause();
        return 'url(' + "icons/icoMusicBass.png" + ')';
    }
    if('box7' == draggedId){
        davulPlayer.pause();
        return 'url(' + "icons/icoMusicDavul.png" + ')';
    }
    if('box8' == draggedId){
        guitarPlayer.pause();
        return 'url(' + "icons/icoMusicGuitar.png" + ')';
    }
    if('box9' == draggedId){
        violinPlayer.pause();
        return 'url(' + "icons/icoMusicViolin.png" + ')';
    }
    if('box10' == draggedId){
        pipePlayer.pause();
        return 'url(' + "icons/icoMusicPipe.png" + ')';
    }
    if('box11' == draggedId){
        saxPlayer.pause();
        return 'url(' + "icons/icoMusicSax.png" + ')';
    }
    if('box12' == draggedId){
        sazPlayer.pause();
        return 'url(' + "icons/icoMusicSaz.png" + ')';
    }
    if('box13' == draggedId){
        synthesizerPlayer.pause();
        return 'url(' + "icons/icoMusicSynthesizer.png" + ')';
    }
}

//обработчики кнопок solo(on-off) and play(on-off)
(function (){
    // Вешаем обработчик клика на solo  каждого участника
    for (let i = 1; i <=13; i++) {
        document.querySelector('#btnSoloOn'+i).addEventListener('click', function(e){ 
            let elemIndex = arr.indexOf('box'+i);
            for (let index = 0; index < arr.length; index++){
                let elem = document.getElementById(arr[index]);
                    if(index!=elemIndex){
                        elem.style.backgroundImage = pause(arr[index]);
                    }else{
                        elem.style.backgroundImage = activation(arr[index]);
                    }
                }
        });
    }
    
    for (let i = 1; i <=13; i++) {
        document.querySelector('#btnSoloOff'+i).addEventListener('click', function(e){ 
            for (let index = 0; index < arr.length; index++) {
                let elem = document.getElementById(arr[index]);
                elem.style.backgroundImage = activation(arr[index]);
            }
        });
    }
    // Вешаем обработчик клика на play and pause  каждого участника
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnPause'+index).addEventListener('click', function(e){ 
            let elemIndex = arr.indexOf('box'+index);
            let elem = document.getElementById(arr[elemIndex]);
            elem.style.backgroundImage = pause(arr[elemIndex]);
        });
    }
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnPlay'+index).addEventListener('click', function(e){ 
            let elemIndex = arr.indexOf('box'+index);
            let elem = document.getElementById(arr[elemIndex]);
            elem.style.backgroundImage = activation(arr[elemIndex]);
        });
    }
})();