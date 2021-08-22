noseX = 0;
noseY = 0;

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(1100, 400);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);


}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function draw(){

}
function gotPosses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + ", nose y = " + noseY);
    }
}