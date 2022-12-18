let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jumpButton;
var t=0;
let amp;
var rB;
let music;
var slider;
var song;
let img;

function preload(){
img=loadImage('pic.jpg');
}

function setup()
{
    createCanvas(640, 480);
   
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    musicFile2 = loadSound('music2', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    amp = new p5.Amplitude();

    slider=createSlider(0,1,0.5,0.01);

    jumpButton = createButton("jump+30");
    jumpButton.mousePressed(jumpSong);

    sliderRate = createSlider(0.5, 1.5,1,0.01);
    background(img);    
}

function jumpSong() {
        var len = musicFile.duration();
        var cTime = musicFile.currentTime();
        if (cTime < len - 30 ) {
            musicFile.jump(cTime + 30);
            button.html("Pause");
          }
          var len = musicFile2.duration();
          var cTime = musicFile2.currentTime();
          if (cTime < len - 40 ) {
              musicFile2.jump(cTime + 40);
              button.html("Pause");
              //노래가 더 길어서 40초로 했습니다.
            }
      }

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('stop');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }

    if(music === 2){
        if(!musicFile2.isPlaying()){
            musicFile2.jump(200);
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            button.html('stop');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(music);
 }

function loadMusic()
{
    console.log("It's Working");
}

function draw(){
    console.log(amp.getLevel(), musicFile.duration());


var vol = amp.getLevel();
var diam = map(vol,0,0.3,10,200);
fill(250,237, 125);
ellipse(width/2,height/2,diam,diam);
musicFile.setVolume(slider.value());
musicFile2.setVolume(slider.value());

musicFile.rate(sliderRate.value());
musicFile2.rate(sliderRate.value());

}