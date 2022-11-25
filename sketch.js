let musicFile;
let button;


function setup()
{
    createCanvas(200,200);
    song=loadSound('music.mp3',loaded);
    buton=createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
//    soundFormats('mp3', 'ogg');
//    musicFile = loadSound('music', LoadMusic);
//    musicFile.play();

}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play()
        song.setVolume(0.3);
        button.html('pause');
    }else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}