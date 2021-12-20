leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(600,550);
    canvas=createCanvas(650,600);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose net is initialized.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X= "+leftWristX+" Right Wrist X= "+rightWristX+" Difference= "+difference);
    }
}

function draw(){
    background("#3269a8");
    textSize(difference);
    fill('#dbb344');
    text("Advay",50,400);
}