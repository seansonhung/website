window.onload = (function(){
    "use strict";

    //manual typewriter effect for home page title and description
    var i = 0;
    var b = 0;
    var titleText = 'Hello! I’m Sean Nguyen';
    var descriptionText = "A fourth year computer science student specializing in software engineering at the University of Toronto.";
    var speedSlow = 75;
    var speedFast = 20;
    typeWriter();
    function typeWriter() {
        if (i < titleText.length) {
            document.getElementById("intro_title").innerHTML += titleText.charAt(i);
            i++;
            if (i == 6){
                document.getElementById("intro_title").innerHTML += "<br/>";
            }
            setTimeout(typeWriter, speedSlow);
        }
        else if (b < descriptionText.length) {
            document.getElementById("intro_description").innerHTML += descriptionText.charAt(b);
            b++;
            setTimeout(typeWriter, speedFast);
        }
    }
    

});
