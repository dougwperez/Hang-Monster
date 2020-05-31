var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var phrases = ["No big deal", "Oh my God!", "My bad", "In no time", "Pig out"];
var transportations = [
  "Automobile",
  "Airplane",
  "Train",
  "Motorcyle",
  "Cargo Ship",
];
var animals = ["Elephant", "Giraffe", "Snake", "Whale", "Gorilla"];
var familys = ["Mother", "Father", "Cousin", "Grandfather", "Grandmother"];
var jobs = ["Teacher", "Firefighter", "Developer", "Doctor", "Lawyer"];
var birds = ["Nightjar", "Owl", "Sparrow", "Eagle", "Bluebird"];

var heads = [
  "heads/monsterhead1.jpg",
  "heads/monsterhead2.jpg",
  "heads/monsterhead3.jpg",
  "heads/monsterhead4.png",
  "heads/monsterhead5.jpg",
  "heads/monsterhead6.png",
];
var bodys = [
  "bodys/monsterbody1.jpg",
  "bodys/monsterbody2.jpg",
  "bodys/monsterbody3.jpg",
  "bodys/monsterbody4.jpg",
  "bodys/monsterbody5.png",
  "bodys/monsterbody6.png",
];
var rArms = [
  "rArms/monsterrarm1.jpg",
  "rArms/monsterrarm2.jpg",
  "rArms/monsterrarm3.jpg",
  "rArms/monsterrarm4.png",
  "rArms/monsterrarm5.png",
  "rArms/monsterrarm6.png",
];
var lArms = [
  "lArms/monsterlarm1.jpg",
  "lArms/monsterlarm2.jpg",
  "lArms/monsterlarm3.jpg",
  "lArms/monsterlarm4.jpg",
  "lArms/monsterlarm5.jpg",
  "lArms/monsterlarm6.png",
];
var rLegs = [
  "rLegs/monsterrleg1.jpg",
  "rLegs/monsterrleg2.jpg",
  "rLegs/monsterrleg3.png",
  "rLegs/monsterrleg4.png",
  "rLegs/monsterrleg5.png",
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
  "tails/monstertail1.jpg",
  "tails/monstertail2.jpg",
  "tails/monstertail3.jpg",
  "tails/monstertail4.jpg",
  "tails/monstertail5.jpg",
  "tails/monstertail6.png",
];

function sound() {
  document.getElementById("blank").src = "roar.mp3";
}

function ping() {
  document.getElementById("blank").src = "ping.mp3";
}

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
  }
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
    case "Elepahnt":
      $("#hinttext").html("Large with thick, gray skin and a big trunk.");
      break;
    case "Giraffe":
      $("#hinttext").html("Our long necks are impressive.");
      break;
    case "Whale":
      $("#hinttext").html(
        "Large mammal in the ocean with a blowhole on top of the head."
      );
      break;
    case "Snake":
      $("#hinttext").html("I have no legs and sometimes I have a rattle.");
      break;
    case "Gorilla":
      $("#hinttext").html("Ape!");
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
      ping();
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
    sound();
  }
  if (numWrong == 2) {
    getbody();
    sound();
  }
  if (numWrong == 3) {
    getrArm();
    sound();
  }
  if (numWrong == 4) {
    getlArm();
    sound();
  }
  if (numWrong == 5) {
    getrLeg();
    sound();
  }
  if (numWrong == 6) {
    getlLeg();
    sound();
  }
  if (numWrong == 7) {
    gettail();
    sound();
  }
  if (numWrong == 8) {
    sound();
  }
  if (numWrong == 9) {
    sound();
  }
  if (numWrong == 10) {
    sound();
  }
  if (numWrong == 11) {
    sound();
  }
  if (numWrong == 12) {
    sound();
  }
  if (numWrong == 13) {
    sound();
  }
  if (numWrong == 14) {
    sound();
  }
  if (numWrong == 15) {
    sound();
  }
  if (numWrong == 16) {
    sound();
  }
  if (numWrong == 17) {
    sound();
  }

  if (numWrong == 18) {
    sound();
  }
  if (numWrong == 19) {
    sound();
  }
  if (numWrong == 20) {
    sound();
  }
  if (numWrong == 21) {
    sound();
  }
  if (numWrong == 22) {
    sound();
  }
  if (numWrong == 23) {
    sound();
  }
  if (numWrong == 24) {
    sound();
  }
  if (numWrong == 25) {
    sound();
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

