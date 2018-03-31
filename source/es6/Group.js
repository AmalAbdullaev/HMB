import {Man} from "./Man.js";
import {Woman} from "./Woman.js";
import {Song} from "./Songs.js";
import {Dance} from "./Dancing.js";
import {WindInstrument, StringInstrumet, PercussionInstrument, BowInstrument, KeyboardInstrument} from "./Instruments.js";

let womanDancer = new Woman();
womanDancer.dance('url(' + "gif/12.gif" + ')');

let manDancer = new Man();
manDancer.dance('url(' + "gif/5.gif" + ')');

let womanSinger = new Woman();
womanSinger.sing('url(' + "gif/1.gif" + ')','song/url');

let manSinger = new Man();
manSinger.sing('url(' + "gif/10.gif" + ')','song/url');

let accordeon = new KeyboardInstrument('mp3_url');
let synthesizer = new KeyboardInstrument('mp3_url');
let bass = new PercussionInstrument('mp3_url');
let davul = new PercussionInstrument('mp3_url');
let guitar = new StringInstrumet('mp3_url');
let saz = new StringInstrumet('mp3_url');
let pipe = new WindInstrument('mp3_url');
let sax = new WindInstrument('mp3_url');
let violin = new BowInstrument('mp3_url');

let accordeonPlayer = new Man();
let synthesizerPlayer = new Man();
let bassPlayer = new Man();
let davulPlayer = new Man();
let guitarPlayer = new Man();
let sazPlayer = new Man();
let pipePlayer = new Man();
let saxPlayer = new Man();
let violinPlayer = new Man();

accordeonPlayer.playOnInstrument('url(' + "gif/2.gif" + ')','mp3_url');
synthesizer.playOnInstrument('url(' + "gif/3.gif" + ')','mp3_url');
bassPlayer.playOnInstrument('url(' + "gif/4.gif" + ')','mp3_url');
davulPlayer.playOnInstrument('url(' + "gif/6.gif" + ')','mp3_url');
guitar.playOnInstrument('url(' + "gif/7.gif" + ')','mp3_url');
sazPlayer.playOnInstrument('url(' + "gif/8.gif" + ')','mp3_url');
pipePlayer.playOnInstrument('url(' + "gif/9.gif" + ')','mp3_url');
saxPlayer.playOnInstrument('url(' + "gif/11.gif" + ')','mp3_url');
violinPlayer.playOnInstrument('url(' + "gif/13.gif" + ')','mp3_url');
