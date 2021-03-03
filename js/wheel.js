function myfunction(){
    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    var bleep = new Audio();
    bleep.src = "assets/sounds/sound.mp3";
    bleep.playbackRate = 2;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    bleep.play();
}