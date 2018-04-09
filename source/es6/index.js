import {closeButtons,openButtons} from "./buttons.js";
import {Dance} from './Dancing.js';
import {WindInstrument , StringInstrumet , PercussionInstrument, BowInstrument, KeyboardInstrument } from './Instrument.js';
import {Man,Woman} from './Member.js'; 
import {Song} from './Song.js';

let manDance = new Dance('url(' + "gif/5.gif" + ')','url(' + "stopGif/1.jpg" + ')');
let womanDance = new Dance('url(' + "gif/12.gif" + ')','url(' + "stopGif/1.jpg" + ')');//созданы танцы

let manSong = new Song('url(' + "gif/1.gif" + ')','music/boom.wav','url(' + "stopGif/1.jpg" + ')');
let womanSong = new Song('url(' + "gif/10.gif" + ')', 'music/womsong.wav','url(' + "stopGif/1.jpg" + ')'); // созданы песни

//сменить музыку 
let accordeon = new KeyboardInstrument('url(' + "gif/2.gif" + ')','music/boom.wav','url(' + "stopGif/1.jpg" + ')');
let synthesizer = new KeyboardInstrument('url(' + "gif/3.gif" + ')','music/clap.wav','url(' + "stopGif/1.jpg" + ')');
let bass = new PercussionInstrument('url(' + "gif/4.gif" + ')','music/hihat.wav','url(' + "stopGif/1.jpg" + ')');
let davul = new PercussionInstrument('url(' + "gif/6.gif" + ')','music/clap.wav','url(' + "stopGif/1.jpg" + ')');
let guitar = new StringInstrumet('url(' + "gif/7.gif" + ')','music/kick.wav','url(' + "stopGif/1.jpg" + ')');
let saz = new StringInstrumet('url(' + "gif/8.gif" + ')','music/tom.wav','url(' + "stopGif/1.jpg" + ')');
let pipe = new WindInstrument('url(' + "gif/9.gif" + ')','music/kick.wav','url(' + "stopGif/1.jpg" + ')');
let sax = new WindInstrument('url(' + "gif/11.gif" + ')','music/clap.wav','url(' + "stopGif/1.jpg" + ')');
let violin = new BowInstrument('url(' + "gif/13.gif" + ')','music/boom.wav','url(' + "stopGif/1.jpg" + ')'); // созданы инструменты


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


womanDancer.dance(womanDance.dance_file,womanDance.stopDanceGifFile);
manDancer.dance(manDance.dance_file,manDance.stopDanceGifFile); //заданы танцы для танцоров

womanSinger.sing(womanSong.song_gif_file , womanSong.song_mp3_file, womanSong.stopSongGifFile);
manSinger.sing(manSong.song_gif_file,manSong.song_mp3_file,manSong.stopSongGifFile); //заданы песни для певцов

accordeonPlayer.playOnInstrument(accordeon.gif_file,accordeon.instument_mp3_file,accordeon.stopGif);
synthesizerPlayer.playOnInstrument(synthesizer.gif_file,synthesizer.instument_mp3_file,synthesizer.stopGif);
bassPlayer.playOnInstrument(bass.gif_file,bass.instument_mp3_file,bass.stopGif);
davulPlayer.playOnInstrument(davul.gif_file,davul.instument_mp3_file,davul.stopGif);
guitarPlayer.playOnInstrument(guitar.gif_file,guitar.instument_mp3_file,guitar.stopGif);
sazPlayer.playOnInstrument(saz.gif_file,saz.instument_mp3_file,saz.stopGif);
pipePlayer.playOnInstrument(pipe.gif_file,pipe.instument_mp3_file,pipe.stopGif);
saxPlayer.playOnInstrument(sax.gif_file,sax.instument_mp3_file,sax.stopGif);
violinPlayer.playOnInstrument(violin.gif_file,violin.instument_mp3_file,violin.stopGif); // заданы инструменты для музыкантов


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
    draggedEl.style.backgroundImage = getIcon(draggedId);

    
    closeButtons(draggedId);

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

    draggedEl.style.backgroundImage = activation(draggedId);
    
    
    openButtons(draggedId);
    
    arr.push(draggedId);   
    
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

//активации участника
function activation(draggedId){
    if('box1' == draggedId){
        return manDancer.dance_gif_file;
    }
    if('box2' == draggedId){
        return womanDancer.dance_gif_file;
    }
    if('box3' == draggedId){
        manSinger.playSong();
        return manSinger.song_gif;
    }
    if('box4' == draggedId){
        womanSinger.playSong();
        return womanSinger.song_gif;
    }
    if('box5' == draggedId){
        accordeonPlayer.play();
        return accordeonPlayer.instrument_gif;
    }
    if('box6' == draggedId){
        bassPlayer.play();
        return bassPlayer.instrument_gif;
    }
    if('box7' == draggedId){
        davulPlayer.play();
        return davulPlayer.instrument_gif;
    }
    if('box8' == draggedId){
        guitarPlayer.play();
        return guitarPlayer.instrument_gif;
    }
    if('box9' == draggedId){
        violinPlayer.play();
        return violinPlayer.instrument_gif;
    }
    if('box10' == draggedId){
        pipePlayer.play();
        return pipePlayer.instrument_gif;
    }
    if('box11' == draggedId){
        saxPlayer.play();
        return saxPlayer.instrument_gif;
    }
    if('box12' == draggedId){
        sazPlayer.play();
        return sazPlayer.instrument_gif;
    }
    if('box13' == draggedId){
        synthesizerPlayer.play();
        return synthesizerPlayer.instrument_gif;
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
        manSinger.pausePlaySong();
        return 'url(' + "icons/icoMicroH.png" + ')';
    }
    if('box4' == draggedId){
        womanSinger.pausePlaySong();
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
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnSoloOn'+index).addEventListener('click', function(e){ 
            let arr2 = arr.slice(0, arr.length);
    
            let elemIndex = arr2.indexOf('box'+index);
            for (let index = 0; index < arr2.length; index++) {
                    if(index!=elemIndex){
                        pause(arr2[index]);
                    }else{
                        activation(arr2[index]);
                    }
    
                }
        });
    }
    
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnSoloOff'+index).addEventListener('click', function(e){ 
            let arr2 = arr.slice(0, arr.length);
    
            let elemIndex = arr2.indexOf('box'+index);
            for (let index = 0; index < arr2.length; index++) {
                    activation(arr2[index]);
                }
        });
    }
    // Вешаем обработчик клика на off  каждого участника
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnPause'+index).addEventListener('click', function(e){ 
            let arr2 = arr.slice(0, arr.length);
    
            let elemIndex = arr2.indexOf('box'+index);
            pause(arr2[elemIndex]);
        });
    }
    for (let index = 1; index <=13; index++) {
        document.querySelector('#btnPlay'+index).addEventListener('click', function(e){ 
            let arr2 = arr.slice(0, arr.length);
    
            let elemIndex = arr2.indexOf('box'+index);
            activation(arr2[elemIndex]);
        });
    }
})();


//отключает участников
function pause(draggedId){
    if('box1' == draggedId){
        return manDancer.stop_dance_gif_file;
    }
    if('box2' == draggedId){
        return womanDancer.stop_dance_gif_file;
    }
    if('box3' == draggedId){
        manSinger.pausePlaySong();
        return manSinger.stop_song_gif_file;
    }
    if('box4' == draggedId){
        womanSinger.pausePlaySong();
        return womanSinger.stop_song_gif_file;
    }
    if('box5' == draggedId){
        accordeonPlayer.pause();
        return accordeonPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box6' == draggedId){
        bassPlayer.pause();
        return bassPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box7' == draggedId){
        davulPlayer.pause();
        return davulPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box8' == draggedId){
        guitarPlayer.pause();
        return guitarPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box9' == draggedId){
        violinPlayer.pause();
        return violinPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box10' == draggedId){
        pipePlayer.pause();
        return pipePlayer.stopPlayOnInstrumentGifFile;
    }
    if('box11' == draggedId){
        saxPlayer.pause();
        return saxPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box12' == draggedId){
        sazPlayer.pause();
        return sazPlayer.stopPlayOnInstrumentGifFile;
    }
    if('box13' == draggedId){
        synthesizerPlayer.pause();
        return synthesizerPlayer.stopPlayOnInstrumentGifFile;
    }
}

// метод возврщает иконки в исходном размере (дроп вниз), 
// когда иконки все будут одного размера нужно убрать этот метод
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