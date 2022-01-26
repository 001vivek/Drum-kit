
// Detecting button press
var allDrumButton=document.querySelectorAll(".drum").length
for(i=0;i<allDrumButton; i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
   
    }
});


//Detecting keyboard press

   
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

 function makeSound(key){
    switch (key) {
        case "w":
            var crash=new Audio("soundplus/mixkit1.wav");
            crash.play();
            break;
            case "a":
                var kick=new Audio(" soundplus/mixkit2.wav");
                kick.play();
                break;
                case "s":
                    var snare=new Audio("soundplus/mixkit3.wav");
                    snare.play();
                    break;
                    case "d":
                        var tom_1=new Audio(" soundplus/mixkit4.wav");
                        tom_1.play();
                        break;
                        case "j":
                            var tom_2=new Audio("soundplus/mixkit5.wav");
                            tom_2.play();
                            break;
                            case "k":
                            var tom_3=new Audio("soundplus/mixkit6.wav");
                            tom_3.play();
                            break;
                            case "l":
                            var tom_4=new Audio(" soundplus/mixkit7.wav");
                            tom_4.play();
                            break;

    
        default:   //console.log(innerHTML);
        break;
    } 
     
 }

 function buttonAnimation(currentKey){
   var butttonClick= document.querySelector("."+currentKey);
   butttonClick.classList.add("pressed");


   setTimeout(function(){
       butttonClick.classList.remove("pressed");
   },100);
   
 }



 
