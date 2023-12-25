var ran ;
var attempt;
//var started = false;

$("#enter").click(function()
{
        $(".game-rules").addClass("hide");
        start();
        playSound("start");
});

function start()
{
    ran = Math.floor(Math.random() * 100);
    started = true;
    attempt=0;
    $(".scorecard").addClass("view");
    $(".container").addClass("view");
    $("#numAttempts").text("No. of Attempts: "+attempt);
}

$(".sub").click(function()
{
    var input = $(".num").val();
    checker(input);
});

// Listen for the form submission event
$("#guessForm").submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user input
    var input = $(".num").val();
    checker(input);

    // Now you can compare 'ran' with 'input'
    console.log("Random number: " + ran);
    console.log("User input: " + input);

   
});

function checker(val)
{
    attempt++;
    $("#numAttempts").text("No. of Attempts: "+attempt);
    if(val > ran)
    {
        $("h1").text("Go for a small number! 🤏");
        playSound("wrong");
    }
    else if(val < ran)
    {
        $("h1").text("Go for a big number! 🍆");
        playSound("wrong");
    }
    else
    {
        $("h1").text("RIGHT! 👏");
        playSound("winner");
        tpt();
    }
}

function tpt()
{
    $(".num").val("");
    $(".winner").addClass("view");
    $(".scorecard").removeClass("view");
    $(".container").removeClass("view");
    $(".yay").text("🤩🥳 YaYY YOU WON IN " + attempt + " ATTEMPS !! 🕺💃");
}

$("#replay").click(function()
{
    $(".winner").removeClass("view");
    $("h1").text("🤔 Guess & Winn !! 🤑");
    playSound("restart");
    start();
});

function playSound(name)
{
    var aud = new Audio("./sounds/" +name+".mp3");
    aud.play();
}