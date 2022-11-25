let musicFile;
let button;


function setup()
{
    createCanvas(640,480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music.mp3', loadMusic);
    
    button=createButton('play');
    button.mousePressed(togglePlaying);
 

}

function togglePlaying(){
    if(!musicFile.isPlaying()){
        musicFile.play()
        button.html('pause');
    }else{
        musicFile.stop();
        button.html('play');
    }
}

function loadMusic(){
    console.log("It's working");
}
function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
}