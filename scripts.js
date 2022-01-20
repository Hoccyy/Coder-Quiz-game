var points = 200;
var count = 0;

/* Array of images, questions, and choices  */
var img = -1;
var images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1024px-Question_mark_%28black%29.svg.png", "https://www.pngall.com/wp-content/uploads/2017/05/Congratulation-Download-PNG.png"];

var ques = -1;
var question = ["2. Is Javascript cool?", "3. The language C is important", "4. JS is the most used language?", "Congrats you scored a lot! Well done!"];

/* Change frames */
function nextFrame () {
    document.getElementById ("framePic").src = (images[img]);
    document.getElementById ("question1").innerHTML = (question[ques]);
}

function endFrame () {
    document.getElementById ("framePic").src = (images[img]);
    document.getElementById ("question1").innerHTML = (question[ques]);
}

/* choices*/
function choice1 (){
    if (count != 5) {
        document.getElementById ("question1").innerHTML = ("Correct! Well done");
        setTimeout(function(){
            points += 100;
            document.getElementById ("score_").innerHTML = ("Score " + points);
        }, 3000);

        setTimeout(function() {
            img += 1;
            ques += 1;
            nextFrame();
        }, 3000);
        count += 1;
}

    else {
        setTimeout(function () {
            endFrame();
        }, 2000);
    }

}

function choice2 (){

    if (count != 5) {

    document.getElementById ("question1").innerHTML = ("Wrong!");
    setTimeout(function(){
        points -= 100;
        document.getElementById ("score_").innerHTML = ("Score " + points);    
    }, 4000);

    setTimeout(function() {
        img += 1;
        ques += 1;
        nextFrame();
    }, 3000);
    count += 1;
}

else {
    setTimeout(function () {
        endFrame();
    }, 2000);
}

}


/* Button stuff */
var button1 = document.getElementById ("but1");
var button2 = document.getElementById ("but2");

/* Button click events */
button1.addEventListener ("click", choice1);
button2.addEventListener ("click", choice2);