// Name: Roshan Dhimal
// Project: Final Project Art 151


// varaibles for the project cnavas
let canvasWidth = 1000;
let canvasHeight = 800;
let currentImg = 0;   // imageCounter or the caption counter
let imageArray = []; // populate with image
let caption = ["Long ago there was a lake near the forest called 'Khuttidangi Jhil' where a lake deity dwell.The deity \n" +
               "was gracious and kind to her followers who came to worship her. The deity helped anyone in need \nespecially" +
                " the poor in need.", "Legend goes that the deity required sacrifice like goat, pigeon or chicken etc. to initiate a request.\n"+
                "The deity helped anyone who required tools, utensils, gold and silver to those in desperate need.\n" +
" However, the deal was that the given stuff where to be returned back to the lake after certain period \n" +
"of time.", "After every prayer, if the deity deems a person worthy, they would give them a required stuff which was\n" +
"requested. Poor families who could not afford utensils, decoration items, money etc. for wedding or \n" +
"funeral were given adequate to perform their duties.", "People were helped to perform marriage ceremony etc. the lake god was " +
"gracious for anyone in need.", "One Day, a rich man in the village found out this the tribal ritual and performed a prayer to give him wealth" +
"\nto pay his debt, but after gaining the wealth he didn't return what was given. The trust between the deity \nand prayer was broken.",
"The deity was furious and it cursed the greedy man and his family. The cursed family lost their wealth \nas the days went by," +
"and family members started to die one after another.", "These made everyone in the village and the tribe paranoid and isolated." +
    "People feared the goddess wrath\n and they slowly stopped worshipping for the gifts. People who have been worshipping" +
    "the goddess prayed\nfor help but she did not respond their cry.","It is said because of that incident, the Dhimal tribe " +
    "got together as one tribe and formed a 'Dhimal Samaj'\n to help each other. A foundation to help each other in need " +
    " was established to provide manpower,\n tools and financial support during all the ceremonies. This community established at 1800 still exists today."];

//make lightening variables
let x = 0
let x2 = 0;
let y = 0;
let y2 = 0;


// load image in the array
function preload(){
    imageArray[0] = loadImage('slides/IntroPng1.png');
    imageArray[1] = loadImage('slides/pic3.jpg');
    imageArray[2] = loadImage('slides/pic2.jpg');
    imageArray[3] = loadImage('slides/pic4.jpg');
    imageArray[4] = loadImage('slides/pic5.jpg');
    imageArray[5] = loadImage('slides/pic6.jpg');
    imageArray[6] = loadImage('slides/pic7.jpg');
    imageArray[7] = loadImage('slides/pic8.jpg');
}

// create class to make text size, color
// class texter{
//     constructor(){
//         this.textSize(15);
//         fill("red");
//
//     }
// }

// sketch setup
function setup() {
    // padding in the hello div id
    let cv = createCanvas(canvasWidth, canvasHeight);
    cv.parent("hello");
    // setup button for press
    setupButtons();

    // set coordinates for the lightening
    x2 = 0;
    y2 = canvasHeight/2;
}

// here the fun  occurs
function draw() {
    // frameRate(1);
    background(0);
    // look for the specific image counter
    // to light the wrath
    if (currentImg == 5){
        for (var i = 0; i < 20; i++) {
            x = x2;
            y = y2;
            x2 = x + int(random(-20, 20));
            y2 = y + int(random(-10, 20));
            strokeWeight(random(1, 3));
            strokeJoin(MITER);
            line(x, y, x2, y2);

            if ((x2 > canvasWidth) | (x2 < 0) | (y2 > canvasHeight) | (y2 < 0)) {
                clear();
                x2 = int(random(0, canvasWidth));
                y2 = 0;
                stroke(255, 255, random(0, 255));
            }
        }


    }

    // deliver image
    image(imageArray[currentImg], 0, 0);
    // write caption
    noStroke();
    textSize(15);
    fill("#c4c4ce");
    text(caption[currentImg],10, 720);
    stroke(255, 255, random(0, 255));

}

// make the button for the mouse to click and move accordingly
const setupButtons = _ => {
    previous = createButton('Prev');
    previous.position(canvasWidth*0.5 - 0, canvasHeight + 2340);

    previous.mouseClicked(_ => {
        if (currentImg > 0) currentImg--;
    });

    next = createButton('Next');
    next.position(canvasWidth*0.5 + 500, canvasHeight + 2340);

    next.mouseClicked(_ => {
        if (currentImg < imageArray.length - 1) currentImg++;
    });
};