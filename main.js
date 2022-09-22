noseX=0
noseY=0
difference=0
leftwristX=0
rightwristX=0

function setup() {
    canvas=createCanvas(500, 500)
    canvas.position(560, 150)
    video=createCapture(VIDEO)
    video.size(500, 550)

    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}
function modelloaded() {
    console.log("*We got the model* 🤓")
}
function gotposes(results) {
    if (results.length > 0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        difference= leftwristX-rightwristX
    }
}
function draw() {
    background("#8C2DE2")
    fill("#E2DF30")
    stroke("#2DE292")
    square(noseX, noseY, difference)
    document.getElementById("house").innerHTML="side of the square = " + difference 
}
