video = "";

function start(){
    function start(){
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById('status').innerHTML = "Status = finding objects";
        document.getElementById('input_id').value;
        console.log(value);
    
    }
}
function preload(){
    video = createVideo("video.mp4");
    video.hide();

}

function setup(){
    canvas = createCanvas(480, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
    image(video,0,0,480,380);
}


function modelLoaded(){
    console.log("!Model LOADED!");
    status = true;
}