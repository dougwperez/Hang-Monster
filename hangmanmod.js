var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var phrases = [
  "No big deal",
  "Oh my God!",
  "My bad",
  "In no time",
  "Pig out",
  "Piece of cake",
  "Raining cats and dogs",
  "Its not rocket science",
  "Not a big fan",
  "knock on wood",
];
var transportations = [
  "Automobile",
  "Airplane",
  "Train",
  "Motorcycle",
  "Cargo Ship",
  "Spaceship",
  "Tractor",
  "Bike",
  "Bus",
  "Subway",
];
var animals = [
  "Elephant",
  "Giraffe",
  "Snake",
  "Whale",
  "Gorilla",
  "Monkey",
  "Dog",
  "Kangaroo",
  "Aardvark",
  "Hippo",
  "Bison",
  "Hawk",
  "Skunk",
];
var familys = [
  "Mother",
  "Father",
  "Cousin",
  "Grandfather",
  "Grandmother",
  "Uncle",
  "Aunt",
  "Sister",
  "Brother",
  "Nephew",
  "Niece",
];
var jobs = [
  "Teacher",
  "Firefighter",
  "Developer",
  "Doctor",
  "Lawyer",
  "Policeman",
  "President",
  "Fisherman",
  "Nurse",
  "Soldier",
  "Dancer",
  "Actor",
  "Astronaut",
  "Accountant",
];
var birds = ["Nightjar", "Owl", "Sparrow", "Eagle", "Bluebird"];

//value for RandomW is stored here, fetched from wordnik API

fetch(
  "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
)
  .then((res) => res.json())
  .then((data) => (randomW = data[0].word))
  .then(() => console.log(randomW));

var heads = [
  "heads/monsterhead1.jpg",
  "heads/monsterhead2.jpg",
  "heads/monsterhead3.jpg",
  "heads/monsterhead4.png",
  "heads/monsterhead5.png",
  "heads/monsterhead6.png",
];
var bodys = [
  "bodys/monsterbody1.jpg",
  "bodys/monsterbody2.jpg",
  "bodys/monsterbody3.png",
  "bodys/monsterbody4.png",
  "bodys/monsterbody5.png",
  "bodys/monsterbody6.png",
];
var rArms = [
  "rArms/monsterrarm1.jpg",
  "rArms/monsterrarm2-removebg-preview.png",
  "rArms/monsterrarm3.jpg",
  "rArms/monsterrarm4.png",
  "rArms/monsterrarm5.png",
  "rArms/monsterrarm6.png",
];
var lArms = [
  "lArms/monsterlarm1-removebg-preview.png",
  "lArms/monsterlarm2-removebg-preview.png",
  "lArms/monsterlarm3-removebg-preview.png",
  "lArms/monsterlarm4-removebg-preview.png",
  "lArms/monsterlarm5-removebg-preview.png",
  "lArms/monsterlarm6-removebg-preview.png",
];
var rLegs = [
  "rLegs/monsterrleg1.jpg",
  "rLegs/monsterrleg2.jpg",
  "rLegs/monsterrleg3.png",
  "rLegs/monsterrleg4.png",
  "rLegs/monsterrleg5-removebg-preview.png",
  "rLegs/monsterrleg6.png",
];
var lLegs = [
  "lLegs/monsterlleg1.png",
  "lLegs/monsterlleg2.png",
  "lLegs/monsterlleg3.jpg",
  "lLegs/monsterlleg4.png",
  "lLegs/monsterlleg5.png",
  "lLegs/monsterlleg6.jpg",
];
var tails = [
  "tails/monstertail1-removebg-preview.png",
  "tails/monstertail2-removebg-preview.png",
  "tails/monstertail3-removebg-preview.png",
  "tails/monstertail4-removebg-preview.png",
  "tails/monstertail5-removebg-preview.png",
  "tails/monstertail6-removebg-preview.png",
];

var roar = new Audio();
var ping = new Audio();

roar.src = "roar.mp3";
roar.volume = 0.3;
ping.src = "ping.mp3";
ping.volume = 0.3;

function dropdownmenu() {
  if (menu.value == "phrase") {
    phrase();
  } else if (menu.value == "transportation") {
    transportation();
  } else if (menu.value == "animal") {
    animal();
  } else if (menu.value == "family") {
    family();
  } else if (menu.value == "job") {
    job();
  } else if (menu.value == "bird") {
    bird();
  } else if (menu.value == "random") {
    randomWords();
  }
}

function randomWords() {
  //rand = Math.floor(Math.random() * randomW.length);
  word = randomW;
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Random";
  hangman();
}

function phrase() {
  rand = Math.floor(Math.random() * phrases.length);
  word = phrases[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Phrases";
  hangman();
  switch (word) {
    case "No big deal":
      $("#hinttext").html("You are welcome. It’s a piece of cake.");
      break;
    case "Oh my God!":
      $("#hinttext").html("Someone yells this when something bad happens.");
      break;
    case "My bad":
      $("#hinttext").html("Oops! It’s my fault. ");
      break;
    case "In no time":
      $("#hinttext").html("Right away!");
      break;
    case "Pig out":
      $("#hinttext").html("Hungry piggies.");
      break;
    case "Piece of cake":
      $("#hinttext").html("Something that is very easy.");
      break;
    case "Raining cats and dogs":
      $("#hinttext").html("What you say when it rains a lot.");
      break;
    case "Its not rocket science":
      $("#hinttext").html("Oops! It’s very easy.");
      break;
    case "Not a big fan":
      $("#hinttext").html("Something you don't like.");
      break;
    case "knock on wood":
      $("#hinttext").html("Good luck saying.");
  }
}

function transportation() {
  rand = Math.floor(Math.random() * transportations.length);
  word = transportations[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Transportation";
  hangman();
  switch (word) {
    case "Automobile":
      $("#hinttext").html("Another word for it is car.");
      break;
    case "Airplane":
      $("#hinttext").html("Fly like a bird.");
      break;
    case "Train":
      $("#hinttext").html("Looks like a long snake.");
      break;
    case "Motorcycle":
      $("#hinttext").html("Wear a helmet to ride this two-wheels thing!");
      break;
    case "Cargo Ship":
      $("#hinttext").html("Carry goods on the ocean.");
      break;
    case "Spaceship":
      $("#hinttext").html("We go to the moon with this.");
      break;
    case "Tractor":
      $("#hinttext").html("Used on a farm.");
      break;
    case "Bike":
      $("#hinttext").html("First vehicle a kid will learn to use.");
      break;
    case "Bus":
      $("#hinttext").html("Can hold many people");
      break;
    case "Subway":
      $("#hinttext").html("Another name for this is the metro");
  }
}

function animal() {
  rand = Math.floor(Math.random() * animals.length);
  word = animals[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Animals";
  hangman();
  switch (word) {
    case "Elephant":
      $("#hinttext").html("Large with thick, gray skin and a big trunk.");
      break;
    case "Giraffe":
      $("#hinttext").html("Our long necks are impressive.");
      break;
    case "Whale":
      $("#hinttext").html("Large ocean mammal with a blowhole on his head.");
      break;
    case "Snake":
      $("#hinttext").html("I have no legs and sometimes I have a rattle.");
      break;
    case "Gorilla":
      $("#hinttext").html("Ape!");
      break;
    case "Monkey":
      $("#hinttext").html("Like a hairy person.");
      break;
    case "Dog":
      $("#hinttext").html("Man's best friend.");
      break;
    case "Kangaroo":
      $("#hinttext").html("This animal loves to jump.");
      break;
    case "Aardvark":
      $("#hinttext").html("Many As in his name.");
      break;
    case "Hippo":
      $("#hinttext").html("Big fat water animal from Africa.");
      break;
    case "Bison":
      $("#hinttext").html("An animal from the American west.");
      break;
    case "Hawk":
      $("#hinttext").html("This predator flys in the sky.");
      break;
    case "Skunk":
      $("#hinttext").html("They smell really bad.");
  }
}

function family() {
  rand = Math.floor(Math.random() * familys.length);
  word = familys[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Family";
  hangman();

  switch (word) {
    case "Mother":
      $("#hinttext").html("Word for Mommy.");
      break;
    case "Father":
      $("#hinttext").html("Word for Daddy.");
      break;
    case "Cousin":
      $("#hinttext").html("The son or daughter of an aunt or uncle.");
      break;
    case "Grandfather":
      $("#hinttext").html("Parents’ father.");
      break;
    case "Grandmother":
      $("#hinttext").html("Parents’ mother.");
      break;
    case "Uncle":
      $("#hinttext").html("Mother's brother.");
      break;
    case "Aunt":
      $("#hinttext").html("Father's sister.");
      break;
    case "Sister":
      $("#hinttext").html("A female sibling.");
      break;
    case "Brother":
      $("#hinttext").html("A male sibling.");
      break;
    case "Nephew":
      $("#hinttext").html("Not a niece.");
      break;
    case "Niece":
      $("#hinttext").html("Not a nephew.");
      break;
    case "President":
      $("#hinttext").html("They lead a country.");
  }
}

function job() {
  rand = Math.floor(Math.random() * jobs.length);
  word = jobs[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Jobs";
  hangman();

  switch (word) {
    case "Teacher":
      $("#hinttext").html("Who teaches you?");
      break;
    case "Firefighter":
      $("#hinttext").html("Fire is afraid of them.");
      break;
    case "Developer":
      $("#hinttext").html("They design your games!");
      break;
    case "Doctor":
      $("#hinttext").html("They cure you!");
      break;
    case "Lawyer":
      $("#hinttext").html("They represent you in court.");
      break;
    case "Policeman":
      $("#hinttext").html("They arrest bad guys.");
      break;
    case "Fisherman":
      $("#hinttext").html("They go fishing a lot.");
      break;
    case "Nurse":
      $("#hinttext").html("They help people when they are sick.");
      break;
    case "Soldier":
      $("#hinttext").html("They serve in the army.");
      break;
    case "Dancer":
      $("#hinttext").html("They love to go dancing.");
      break;
    case "Actor":
      $("#hinttext").html("You see them in the movies.");
      break;
    case "Astronaut":
      $("#hinttext").html("They work in space.");
      break;
    case "Accountant":
      $("#hinttext").html("They work with money, but not a banker.");
      break;
  }
}

function bird() {
  rand = Math.floor(Math.random() * birds.length);
  word = birds[rand];
  document.getElementById("introPage").style.display = "none";
  document.getElementById("singlePage").style.display = "none";
  document.getElementById("categoryName").innerHTML = "Birds";
  hangman();

  switch (word) {
    case "Nightjar":
      $("#hinttext").html("Nocturnal birds of the goatsucker family.");
      break;
    case "Owl":
      $("#hinttext").html("Work at night with big eyes!");
      break;
    case "Sparrow":
      $("#hinttext").html(
        "Small with brown or gray feathers; begins with letter s."
      );
      break;
    case "Eagle":
      $("#hinttext").html("Large and strong; hunt mice sometimes.");
      break;
    case "Bluebird":
      $("#hinttext").html("Small, blue songbirds!");
  }
}

function hangman() {
  var x = word.length;
  if (x == 0) {
    alert("Please enter something into the text box.");
    return;
  }
  var y = x - 1;
  var spaces = 0;
  var validChar = new Array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "?",
    "!",
    ",",
    ".",
    "-",
    "'"
  );
  for (z = 0; z < word.length; z++) {
    var letter = word.substring(y, x);
    if (validChar.indexOf(letter) > -1) {
      x--;
      y--;
    } else {
      alert("Please remove any special characters.");
      return;
    }
  }
  x = word.length;
  y = x - 1;
  while (x > 0) {
    numChar++;
    var letter = word.substring(y, x);
    if (letter === " ") {
      document.getElementById("letter" + x).innerHTML = "&nbsp;";
      document.getElementById("letter" + x).style.visibility = "hidden";
      document.getElementById("letter" + x).style.display = "block";
      document.getElementById("underline" + x).style.display = "block";
      spaces++;
    } else if (
      letter === "?" ||
      letter === "!" ||
      letter === "," ||
      letter === "." ||
      letter === "-" ||
      letter === "'"
    ) {
      document.getElementById("letter" + x).innerHTML = letter;
      document.getElementById("letter" + x).style.display = "block";
      document.getElementById("underline" + x).style.display = "block";
      spaces++;
    } else {
      document.getElementById("letter" + x).innerHTML = letter;
      document.getElementById("letter" + x).style.visibility = "hidden";
      document.getElementById("underline" + x).style.display = "block";
      document.getElementById("underline" + x).style.borderBottom =
        "3px solid black";
    }
    x--;
    y--;
  }
  phraseLength = word.length - spaces;
  document.getElementById("multiPage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
  splitWords();
  //removed line below, unnecesary
  //document.getElementById('challengeBank').style.display = "none";
  draw();
}

function draw() {
  var ctx = document.getElementById("hangman").getContext("2d");
  ctx.fillStyle = "white";
  ctx.lineWidth = 3;
  ctx.fillRect(0, 0, 350, 350);
  ctx.beginPath(); //vertical bar
  ctx.moveTo(50, 320);
  ctx.lineTo(50, 25);
  ctx.strokeStyle = "#996633";
  ctx.stroke();
  ctx.beginPath(); //vertical bar long piece
  ctx.moveTo(65, 320);
  ctx.lineTo(65, 85);
  ctx.stroke();
  ctx.beginPath(); //vertical bar short piece
  ctx.moveTo(65, 64);
  ctx.lineTo(65, 40);
  ctx.stroke();
  ctx.beginPath(); //horizontal bar
  ctx.moveTo(49, 25);
  ctx.lineTo(175, 25);
  ctx.stroke();
  ctx.beginPath(); //horizontal bar short piece
  ctx.moveTo(49, 40);
  ctx.lineTo(86, 40);
  ctx.stroke();
  ctx.beginPath(); //horizontal bar long piece
  ctx.moveTo(106, 40);
  ctx.lineTo(175, 40);
  ctx.stroke();
  ctx.beginPath(); //small vertical bar
  ctx.moveTo(173, 25);
  ctx.lineTo(173, 40);
  ctx.stroke();
  ctx.beginPath(); //cross bar
  ctx.moveTo(50, 80);
  ctx.lineTo(100, 25);
  ctx.stroke();
  ctx.beginPath(); //cross bar
  ctx.moveTo(60, 90);
  ctx.lineTo(111, 35);
  ctx.stroke();
  ctx.beginPath(); //cross bar
  ctx.moveTo(50, 80);
  ctx.lineTo(60, 90);
  ctx.stroke();
  ctx.beginPath(); //cross bar
  ctx.moveTo(100, 25);
  ctx.lineTo(111, 35);
  ctx.stroke();
  ctx.beginPath(); //ground
  ctx.moveTo(35, 320);
  ctx.lineTo(300, 320);
  ctx.stroke();
  ctx.beginPath(); //noose
  ctx.moveTo(173, 40);
  ctx.lineTo(173, 80);
  ctx.stroke();
  var cntx = document.getElementById("homeHangman").getContext("2d");
  cntx.fillStyle = "white";
  cntx.lineWidth = 3;
  cntx.fillRect(0, 0, 350, 350);
  cntx.beginPath(); //vertical bar
  cntx.moveTo(50, 320);
  cntx.lineTo(50, 25);
  cntx.strokeStyle = "#996633";
  cntx.stroke();
  cntx.beginPath(); //vertical bar long piece
  cntx.moveTo(65, 320);
  cntx.lineTo(65, 85);
  cntx.stroke();
  cntx.beginPath(); //vertical bar short piece
  cntx.moveTo(65, 64);
  cntx.lineTo(65, 40);
  cntx.stroke();
  cntx.beginPath(); //horizontal bar
  cntx.moveTo(49, 25);
  cntx.lineTo(175, 25);
  cntx.stroke();
  cntx.beginPath(); //horizontal bar short piece
  cntx.moveTo(49, 40);
  cntx.lineTo(86, 40);
  cntx.stroke();
  cntx.beginPath(); //horizontal bar long piece
  cntx.moveTo(106, 40);
  cntx.lineTo(175, 40);
  cntx.stroke();
  cntx.beginPath(); //small vertical bar
  cntx.moveTo(173, 25);
  cntx.lineTo(173, 40);
  cntx.stroke();
  cntx.beginPath(); //cross bar
  cntx.moveTo(50, 80);
  cntx.lineTo(100, 25);
  cntx.stroke();
  cntx.beginPath(); //cross bar
  cntx.moveTo(60, 90);
  cntx.lineTo(111, 35);
  cntx.stroke();
  cntx.beginPath(); //cross bar
  cntx.moveTo(50, 80);
  cntx.lineTo(60, 90);
  cntx.stroke();
  cntx.beginPath(); //cross bar
  cntx.moveTo(100, 25);
  cntx.lineTo(111, 35);
  cntx.stroke();
  cntx.beginPath(); //ground
  cntx.moveTo(35, 320);
  cntx.lineTo(300, 320);
  cntx.stroke();
  cntx.beginPath(); //noose
  cntx.moveTo(173, 40);
  cntx.lineTo(173, 80);
  cntx.stroke();
}

function splitWords() {
  var placeKeep = 0;
  var countBack = 16;
  if (numChar > 15) {
    while (countBack > 1) {
      if (document.getElementById("letter16").innerHTML == "&nbsp;") {
        document.getElementById("underline16").style.width = "0px";
        document.getElementById("underline16").style.marginRight = "0px";
      }
      if (document.getElementById("letter" + countBack).innerHTML == "&nbsp;") {
        document.getElementById("underline" + countBack).style.width =
          document.getElementById("underline1").offsetWidth * (16 - countBack) +
          "px";
        placeKeep = countBack;
        countBack = 0;
      }
      countBack--;
    }
  }
  for (x = 0; x < 8; x++) {
    countBack = 15 + placeKeep;
    if (numChar > countBack) {
      while (countBack > 1) {
        if (
          document.getElementById("letter" + countBack).innerHTML == "&nbsp;"
        ) {
          document.getElementById("underline" + countBack).style.width =
            document.getElementById("underline1").offsetWidth *
              (16 + placeKeep - countBack) +
            "px";
          placeKeep = countBack;
          countBack = 0;
        }
        countBack--;
      }
    }
  }
}

function guessLetter() {
  var correct = 0;
  var target = event.target || event.srcElement;
  target.style.visibility = "hidden";
  var lower = target.id;
  var upper = document.getElementById(lower).getAttribute("value");
  var results = document.getElementById("results");
  var ul1 = document.getElementById("underline1").offsetWidth;
  for (a = 1; a < 101; a++) {
    if (
      document.getElementById("letter" + a).innerHTML === upper ||
      document.getElementById("letter" + a).innerHTML === lower
    ) {
      document.getElementById("letter" + a).style.visibility = "visible";
      correct++;
      numRight++;
      ping.play();
    }
  }
  if (correct == 0) {
    numWrong++;
    hang();
  }
  if (numWrong == 6) {
    results.style.visibility = "visible";
    results.style.color = "red";
    results.innerHTML = "You can't miss another letter!";
    if (ul1 == 50) {
      results.style.lineHeight = "70px";
      results.style.fontSize = "30px";
    }
    if (ul1 == 28) {
      results.style.lineHeight = "50px";
      results.style.fontSize = "25px";
    }
    if (ul1 == 18) {
      results.style.lineHeight = "40px";
      results.style.fontSize = "20px";
    }
  }
  if (numWrong == 7) {
    results.innerHTML = "You lose! Keep Trying!";
    document.getElementById("again").style.display = "block";
    document.getElementById("home").style.display = "block";
    document.getElementById("vidSent").style.display = "block";
    if (ul1 == 50) {
      results.style.lineHeight = "40px";
    }
    if (ul1 == 28) {
      results.style.lineHeight = "25px";
    }
    if (ul1 == 18) {
      results.style.lineHeight = "20px";
    }
  }
  if (numRight == phraseLength) {
    win();
  }
}

function win() {
  var ul1 = document.getElementById("underline1").offsetWidth;
  var again = document.getElementById("again");
  var results = document.getElementById("results");
  results.style.visibility = "visible";
  results.style.color = "#00b100";
  results.style.fontSize = "40px";
  if (numWrong > 6) {
    results.innerHTML = "It's about time you figured it out...";
    document.getElementById("letterBank").style.display = "none";
    again.style.display = "block";
    document.getElementById("home").style.display = "block";
    document.getElementById("vidSent").style.display = "block";
    if (ul1 == 50) {
      results.style.lineHeight = "70px";
      results.style.fontSize = "30px";
    }
    if (ul1 == 28) {
      results.style.lineHeight = "50px";
      results.style.fontSize = "25px";
    }
    if (ul1 == 18) {
      results.style.lineHeight = "40px";
      results.style.fontSize = "20px";
    }
  } else {
    results.innerHTML = "You win!";
    document.getElementById("letterBank").style.display = "none";
    again.style.display = "block";
    document.getElementById("home").style.display = "block";
    document.getElementById("vidSent").style.display = "block";
    if (ul1 == 50) {
      again.style.marginTop = "75px";
      results.style.marginTop = "75px";
      results.style.fontSize = "200px";
    }
    if (ul1 == 28) {
      again.style.marginTop = "50px";
      results.style.marginTop = "40px";
      results.style.fontSize = "100px";
    }
    if (ul1 == 18) {
      again.style.marginTop = "40px";
      results.style.marginTop = "15px";
      results.style.fontSize = "75px";
    }
  }
}

function gethead() {
  let headNumber = Math.floor(Math.random() * heads.length);
  var img = document.createElement("img");
  img.src = heads[headNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 140, 60, 60, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function getbody() {
  let bodyNumber = Math.floor(Math.random() * bodys.length);
  var img = document.createElement("img");
  img.src = bodys[bodyNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 140, 115, 70, 100);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function getrArm() {
  let rArmNumber = Math.floor(Math.random() * rArms.length);
  var img = document.createElement("img");
  img.src = rArms[rArmNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 188, 113, 60, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function getlArm() {
  let lArmNumber = Math.floor(Math.random() * lArms.length);
  var img = document.createElement("img");
  img.src = lArms[lArmNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 90, 115, 60, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function getrLeg() {
  let rLegNumber = Math.floor(Math.random() * rLegs.length);
  var img = document.createElement("img");
  img.src = rLegs[rLegNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 170, 213, 60, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function getlLeg() {
  let lLegNumber = Math.floor(Math.random() * lLegs.length);
  var img = document.createElement("img");
  img.src = lLegs[lLegNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 110, 213, 60, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function gettail() {
  let tailNumber = Math.floor(Math.random() * tails.length);
  var img = document.createElement("img");
  img.src = tails[tailNumber];
  img.onload = function () {
    document
      .getElementById("hangman")
      .getContext("2d")
      .drawImage(img, 155, 215, 30, 60);
    //remove the image after drawing
    img.style.display = "none";
    console.log(img);
  };
}

function hang() {
  var ctx = document.getElementById("hangman").getContext("2d");
  if (numWrong == 1) {
    gethead();
    roar.play();
  }
  if (numWrong == 2) {
    getbody();
    roar.play();
  }
  if (numWrong == 3) {
    getrArm();
    roar.play();
  }
  if (numWrong == 4) {
    getlArm();
    roar.play();
  }
  if (numWrong == 5) {
    getrLeg();
    roar.play();
  }
  if (numWrong == 6) {
    getlLeg();
    roar.play();
  }
  if (numWrong == 7) {
    gettail();
    roar.play();
  }
  if (numWrong == 8) {
    roar.play();
  }
  if (numWrong == 9) {
    roar.play();
  }
  if (numWrong == 10) {
    roar.play();
  }
  if (numWrong == 11) {
    roar.play();
  }
  if (numWrong == 12) {
    roar.play();
  }
  if (numWrong == 13) {
    roar.play();
  }
  if (numWrong == 14) {
    roar.play();
  }
  if (numWrong == 15) {
    roar.play();
  }
  if (numWrong == 16) {
    roar.play();
  }
  if (numWrong == 17) {
    roar.play();
  }

  if (numWrong == 18) {
    roar.play();
  }
  if (numWrong == 19) {
    roar.play();
  }
  if (numWrong == 20) {
    roar.play();
  }
  if (numWrong == 21) {
    roar.play();
  }
  if (numWrong == 22) {
    roar.play();
  }
  if (numWrong == 23) {
    roar.play();
  }
  if (numWrong == 24) {
    roar.play();
  }
  if (numWrong == 25) {
    roar.play();
  }
}

function reset() {
  var ul1 = document.getElementById("underline1").offsetWidth;
  var results = document.getElementById("results");
  var again = document.getElementById("again");
  for (a = 1; a < 101; a++) {
    document.getElementById("letter" + a).innerHTML = "&nbsp;";
    document.getElementById("underline" + a).style.width = ul1 + "px";
    if (ul1 == 50) {
      document.getElementById("underline" + a).style.marginRight = "5px";
      results.style.height = "70px";
    } else if (ul1 == 28) {
      document.getElementById("underline" + a).style.marginRight = "3px";
      results.style.height = "50px";
    } else {
      document.getElementById("underline" + a).style.marginRight = "3px";
      results.style.height = "40px";
    }
    document.getElementById("underline" + a).style.display = "none";
    document.getElementById("underline" + a).style.borderBottom = "0px";
  }
  var bank = document.getElementById("letterBank").querySelectorAll("div");
  var cBank = document.getElementById("challengeBank").querySelectorAll("div");
  for (b = 0; b < 26; b++) {
    bank[b].style.visibility = "visible";
    cBank[b].style.visibility = "visible";
  }
  numWrong = 0;
  numRight = 0;
  phraseLength = 0;
  numChar = 0;
  results.style.marginTop = "5px";
  results.style.lineHeight = "40px";
  results.innerHTML = " ";
  document.getElementById("vidSent").style.display = "none";
  document.getElementById("letterBank").style.display = "block";
  again.style.marginTop = "0px";
  again.style.display = "none";
  document.getElementById("home").style.display = "none";
  if (phrases.indexOf(word) > -1) {
    phrases.splice(rand, 1);
    phrase();
  } else if (randomW.indexOf(word) > -1) {
    randomW.splice(rand, 1);
    randomWords();
  } else if (transportations.indexOf(word) > -1) {
    transportations.splice(rand, 1);
    transportation();
  } else if (animals.indexOf(word) > -1) {
    animals.splice(rand, 1);
    animal();
  } else if (familys.indexOf(word) > -1) {
    familys.splice(rand, 1);
    family();
  } else if (jobs.indexOf(word) > -1) {
    jobs.splice(rand, 1);
    job();
  } else if (birds.indexOf(word) > -1) {
    birds.splice(rand, 1);
    bird();
  } else if (document.getElementById("charcount").innerHTML > 0) {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("input").value = "";
    document.getElementById("charcount").innerHTML = "0";
    document.getElementById("multiPage").style.display = "block";
  } else {
    challenge();
  }
}

var menu = document.getElementById("themes");
//menu.addEventListener("themes", generateData);

function hint() {
  hintbox.style.display = "block";
  $("#hinttext").html(hints);
}

function hidebox() {
  hintbox.style.display = "none";
  aboutbox.style.display = "none";
}
