var numberofbuttons = document.querySelectorAll(".drum").length;
var i;
for (i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleclick() {
        // alert("I got clicked!");
        // document.querySelectorAll(".drum")[i].style.color = "red";

        // console.log(this.innerHTML);
        // this.style.color = "white";
        var pressbutton = this.innerHTML;
        makesound(pressbutton);
        buttonanimation(pressbutton);
        // console.log(pressbutton)
    

    });
}

document.addEventListener("keypress", function(event) {
    // alert("Key Is Presed");
    // console.log(event.key);
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonanimation(buttonkey){
    var key = document.querySelector("."+buttonkey);
    key.classList.add("pressed");

    setTimeout(() => {
        key.classList.remove("pressed");
    }, 100);
}