
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=0;

block_image_width = 300;
block_image_height = 380;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object=Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
            left:block_x
			
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '72') // add appropriate keycode
	{
		block_x=1;
		// upload red ranger
		new_image('h.webp');
		console.log("h");
	}
	if(keyPressed == '65')
	{
		block_x = 240;
		// upload green ranger
		new_image('r.jpg');
		console.log("a");
	}
	
	if(keyPressed == '82')
	{
		block_x =700;
		new_image('r.png');
		console.log("r");;
		// upload yellow ranger
	}
	if(keyPressed == '70')
	{
		block_x = 420;
		new_image('f.webp');
		console.log("f");
		// upload pink ranger
	}
	if(keyPressed == '84')
	{
		block_x = 1000;
		new_image('rt.webp');
		console.log("t");
	// upload blue ranger
	}
	
}

