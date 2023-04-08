difference = 0;
leftwristX = 0;
rightwristX = 0;

function preload()
{
    
}

function setup(){
canvas = createCanvas(500,450);
canvas.position(565, 130);

video = createCapture(VIDEO);
video.size(550, 500);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}


function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("rightwristx = " + rightwristX + " leftwristX = " + leftwristX + " difference = " + difference);
    }

}

function draw(){
background("blue");

textSize(difference)
fill("red");
stroke("red");
text('Prateek', 0,0,difference);
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be =" + difference +"px";
}
