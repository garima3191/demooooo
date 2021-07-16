var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 input=createInput();
 input.position(5,60);
 heading=createElement('h4','enter a alphabet');
 heading.position(5,20);
textAlign(CENTER);

}

function draw() {
const value=input.value();
// if(value=='a')
switch(value){
  case 'a':
    console.log("vowel");
    break;
  case 'e':
    console.log("vowel");
    break;
    case 'i':
      console.log("vowel");
      break;
      default:
        console.log("not a vowel");
}
  
}

