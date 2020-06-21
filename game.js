
buttonColours=[ "red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var userChosenColour="";
var level=0;
var started=false;


$(document).click(function()
{         $("body").removeClass("game-over"); 
          $(".btn").show();
        if(!started)
        {       $("#level-title").text("Level "+level); 
                nextSequence();
                started=true;
        }
});


      
$(".btn").click( function()
{       var userChosenColour= $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel)
{
if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
{       console.log("Success");

        if(gamePattern.length===userClickedPattern.length)
 {       setTimeout(() => {
        nextSequence(); 
        }, 1000);
}}
else {  playSound("wrong");
        $("h1").html("<h3><span>Game Over☠️</span>,  Click anywhere to restart</h3>");
        $("body").addClass("game-over");
        /*setTimeout(() => {
                $("body").removeClass("game-over");      
        }, 200); */
        level=0;
        started=false;
        gamePattern=[];
        $(".btn").hide();
        
}



}

function nextSequence()
{       userClickedPattern=[];
        level++;
        $("h1").text("Level "+level);
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColour=buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeIn(100).fadeOut(400).fadeIn(100);
        playSound(randomChosenColour);
        


}


    
function animatePress(currentColour){   $("#"+currentColour).addClass("pressed").delay(100).removeClass("pressed");}

function playSound(name) { var audio=new Audio("sounds/"+name+".mp3"); audio.play();}
