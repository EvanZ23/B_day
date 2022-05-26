var canvas = new fabric.Canvas('B_day');
 var x= document.getElementById("myAudio");

 var image_object = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(IMG){
        image_object=IMG;
        image_object.scaleToWidth(700);
        image_object.scaleToHeight(510);
        image_object.set({
            
            top:0,left:0
            
        });
        canvas.add("image_object");
    });
	
}

function playSound(){
x.play();
	
}
