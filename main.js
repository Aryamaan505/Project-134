var  img=" ";
var status=" ";
var objects = [];

function  setup(){
 canvas= createCanvas(380,380);
 canvas.center();
 video=createCapture(VIDEO);
video.size(380,380);
 video.hide();
objectDetector = ml5.objectDetector('CoCoSSD', modelLoaded);
document.getElementById("status").innerHTML= " Status : Object Detected";

}

function  preload() {

}

function  draw() {
image(video,0,0, 380,380);

// WE CAN USE RANDOM FUNCTION TO GET RANDOM VALUES FOR THE COLOURS
if (status !== " ") {
        objectDetector.detect(video,gotResult);
        for(i=0;i < objects.length; i++){
            document.getElementById("status").innerHTML= "Status- Object Detected";
            document.getElementById("number_of_objects").innerHTML= "Number of object detected are - " + objects.length;
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects [i].label + " " + percent + "%" , objects[i].x +15 , objects[i].y+15 );
            noFill();
            stroke(" red");
            rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
        }
        
    }
}

function   modelLoaded () {
    console.log("ModelLoaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    status=true ;
objectDetector.detect(video, gotResult);
}

function  gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}