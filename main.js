
function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(800, 90);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function gotPoses(results) {
if (results.length>0){
    console.log(results);
}
}
function modelLoaded() {
    console.log("poseNet foi inicializado");
}
function draw()
{
    background('#eead2d');

}