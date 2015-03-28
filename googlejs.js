/*
function dothis(){
  console.log(encounter);
  setTimeout(dothis,1);
}
*/
var canvas = document.getElementById('myCanvas'),
  context = canvas.getContext('2d');

(function() {
  var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
  }
  resizeCanvas();
})();

var canvas2 = document.getElementById('myCanvas2'),
  context2 = canvas2.getContext('2d');

(function() {
  var canvas2 = document.getElementById('myCanvas2'),
    context2 = canvas2.getContext('2d');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas2, false);

  function resizeCanvas2() {
    canvas2.width = window.innerWidth - 20;
    canvas2.height = window.innerHeight - 20;
  }
  resizeCanvas2();
})();

//canvas.addEventListener("mousedown", doMouseDown, false);

google.load('search', '1');

var mousecounter2 = 0;

var imageSearch;
var counter = 0;
//start at zero, this will increment as searches are performed
var walkThroughImages = 0;

//search numbers
var maxnumber = 8;

//store images here, really shouldn't be named enemies
var enemies = {

}
var fireballCounter = 0;
var gamestage = 0;
var enemyHurtCounter = 0;
//coords
var locations = [
  "22.503636,114.0827",
  "55.77224,37.59361",
  "49.233083,28.468217",
  "22.449783,114.048671",
  "56.977725,8.601802",
  "-27.814132,-64.302795",
  "62.251561,25.784082",
  "54.786971,25.413652",
  "32.060557,34.841204",
  "49.206033,18.780585",
  "53.508432,-7.745089",
  "45.263985,5.886512",
  "-43.768175,169.140576",
  "58.07379,55.88719",
  "46.383968,11.967112",
  "46.243698,14.949381",
  "51.962053,5.03334",
  "64.342119,-21.608173",
  "41.039905,-7.425478",
  "52.628151,18.172648",
  "51.674216,-2.707317",
  "49.57557,6.22001",
  "-33.47941,-71.480579",
  "55.840771,48.398579",
  "49.609614,6.129591",
  "-7.460361,112.687598",
  "56.477561,23.393273",
  "22.132898,113.583916",
  "5.250776,103.183942",
  "25.016703,55.133725",
  "-7.165895,112.614505",
  "-22.066658,-43.213685",
  "54.342713,19.171865",
  "44.835037,-87.427292",
  "44.954608,20.220157",
  "27.238042,90.049675",
  "35.452603,-85.037635",
  "43.384935,-7.331792",
  "36.591295,139.711081",
  "49.631502,6.03718",
  "49.669821,5.958849",
  "55.701968,9.995923",
  "42.946222,-9.180416",
  "46.511404,17.190269",
  " 51.314203,12.365875",
  "-26.203332,-49.144783",
  "37.888808,-78.82393",
  "51.939592,4.779671",
  "40.606345,-7.741876",
  "54.549332,25.285503",
  "46.575186,30.80524",
  "-53.949253,-68.186684",
  "49.233563,18.557095",
  "46.482526,30.72331",
  "-32.86827,115.926271",
  "51.16089,2.762538",
  "27.482406,90.482925",
  "-27.206516,31.575487",
  "-49.076057,-71.10199",
  "52.192987,4.46732",
  "57.672075,27.321969",
  "43.848418,7.353569",
  "52.45147,6.518335",
  "-8.387039,-74.603969",
  "14.706392,100.023492",
  "46.721171,0.327866",
  "25.163645,55.425352",
  "42.462296,1.500707",
  "3.451357,101.176815",
  "37.497687,127.106683",
  "22.495946,114.076922",
  "37.88283,139.985985",
  "41.055228,-8.150369",
  "52.863703,4.709866",
  "65.110936,20.774528",
  "22.380339,113.980217",
  "45.794959,16.234367",
  "50.187671,3.722321",
  "49.672364,6.14757",
  "60.16495,22.995879",
  "-26.69099,31.678012",
  "19.403584,-96.36687",
  "63.169303,26.021508",
  "-34.96143,117.266945",
  "45.675475,11.594746",
  "22.113215,113.571116",
  "43.30571,23.914777",
  "61.576868,24.003213",
  "17.794745,100.407258",
  "47.098417,-122.793133",
  "38.458022,24.02528",
  "44.660115,4.753611",
  "23.70949,120.42722",
  "48.834414,-99.795786",
  "43.55847,-5.97344",
  "46.780358,17.253176",
  "-30.830806,30.394241",
  "-22.353273,-47.377016"
];
var health = 100;
var level = 1;
var properitem;
var panorama;
var money = 0;

var hud = document.getElementById('TopOne');
var hudCountry = document.getElementById('country');
var moneydiv = document.getElementById('moneydiv');
moneydiv.innerHTML = "Money: " +money;

var hudHealth = document.getElementById('health');
hudHealth.innerHTML = "Health: " + health;

var emHealth = document.getElementById('emHP');
//emHealth.innerHTML = "";

//game variables
var invcounter = 0;

var weaponimage;
var invopened = false;
var gamestarted = false;
var openfirstwin = false;
var encounter = false;
var startbattle = false;
var itemadded = false;
var additem = false;
var invitems = [];
var eneminvitems = [];
var enemyHP = 0;
var attacked = 0;
var attacking = 0;
var armourRatingGlobal = 0;
var weaponRatingGlobal = 0;
////
//fight vars
var enctype;
var itemtype;
var alertwin = document.getElementById('popupwin');
var loadsc = document.getElementById('battlescreen');
var loadsc2 = document.getElementById('battlescreen2');
var invbut = document.getElementById('invbutton');

var searchcount = 0;

//arm image variables

var la1;
var la2;
var la3;

var ra1;
var ra2;
var ra3;
//arms
la1 = new Image();
la1.src = "images/image1left.png";
la2 = new Image();
la2.src = "images/image2left.png";
la3 = new Image();
la3.src = "images/image3left.png";

ra1 = new Image();
ra1.src = "images/image1right.png";
ra2 = new Image();
ra2.src = "images/image2right.png";
ra3 = new Image();
ra3.src = "images/image3right.png";


var leftarm = document.getElementById('leftarm');
var rightarm = document.getElementById('rightarm');

leftarm.innerHTML = '<canvas id="leftarmcan" width="270" height="360"></canvas>';
rightarm.innerHTML = '<canvas id="rightarmcan" width="270" height="360"></canvas>';

var lacan = document.getElementById("leftarmcan");
var lacancon = lacan.getContext("2d");

var racan = document.getElementById("rightarmcan");
var racancon = racan.getContext("2d");

lacancon.drawImage(la1, 0, 0);
racancon.drawImage(ra1, 0, 0);

//enemy postition vars

var enemyposx = 10;
var enemyposy = 10;
var speed = -5;
var speed2 = -5;
var imgdem = 150;
var modify = 0;
///
var mousecounter = 0;

var mousex;
var mousey;

var encountercounter = 0;

/*
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 65) {
     loadsc2.className = "hidden";
     loadsc.className = "hidden";
     itemadded = false;
     additem = false;
     invopened = false;
     encounter = false;
     startbattle = false;
     addingfinished = false;
   }
}
*/

function searchComplete(termen) {

  // Check that we got results
  if (imageSearch.results && imageSearch.results.length > 0 && gamestarted == false) {
    var cursor = imageSearch.cursor;

    var randompage = Math.floor(Math.random() * (8 - 0)) + 0;
    imageSearch.gotoPage(randompage);
    //console.log(randompage);

    var contentDiv = document.getElementById('loadsign');
    contentDiv.innerHTML = 'Loading...';

    // Loop through our results, printing them to the page.
    var results = imageSearch.results;
    //console.log(results.length);

    // For each result write it's title and image to the screen
    var result = results[Math.floor(Math.random() * (maxnumber - 0)) + 0];

    // Begin defining the images found throughout the game
    if (result == undefined) {
      return;
    } else {
      enemies.doctor = {};
      enemies.doctor.url = result.tbUrl;
      enemies.doctor.ysize = result.tbHeight;
      enemies.doctor.xsize = result.tbWidth;
    }
    //gamestarted = true
    if (walkThroughImages == 0) {
      initialize();
      walkThroughImages++;
    }
    if (gamestage == 1) {
      openfirstwin = true;
    }
    if (encounter == true) {
      startbattle = true;
    }
    if (additem == true) {
      itemadded = true;
    }
  }
}


function OnLoad() {

  // Create an Image Search instance.
  imageSearch = new google.search.ImageSearch();
  imageSearch.setResultSetSize(maxnumber)
    // Set searchComplete as the callback function when a search is
    // complete.  The imageSearch object will have results in it.

  imageSearch.setSearchCompleteCallback(this, searchComplete, null);

  //this is where the FIRST search term is
  imageSearch.execute("hello");

  // Include the required Google branding
  //google.search.Search.getBranding('branding');

}

google.setOnLoadCallback(OnLoad);
////
function initialize() {
  lacancon.drawImage(la1, 0, 0);
  racancon.drawImage(ra1, 0, 0);

  var theplace = locations[Math.floor(Math.random() * (locations.length - 0)) + 0]
  var theplace2 = theplace.split(",");
  var fenway = new google.maps.LatLng(theplace2[0], theplace2[1]);
  var mapOptions = {
    center: fenway,
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var panoramaOptions = {
    position: fenway,
    zoomControl: false,
    panControl: false,
    streetViewControl: false,
    pov: {
      heading: 34,
      pitch: 10
    }
  };
  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  map.setStreetView(panorama);
  findpos();
}
var links;
//main function, loaded each time step is taken
function findpos() {
  google.maps.event.addListener(panorama, 'links_changed', function() {
    links = panorama.getLocation();
    //console.log(links.latLng["k"]);
    //console.log(links.latLng["D"]);
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + links.latLng["k"] + ',' + links.latLng["D"] + '&result_type=country&key=AIzaSyATOOQ96BxW7zMtcl86aZdS5droq38sfc0', function(data) {
      //console.log(data);
      properitem = data.results[0].formatted_address;
      console.log(properitem);
      hudCountry.innerHTML = "Country = " + properitem;

      // if this is the first screen in the game, initiate the following
      if (gamestage == 0) {
        //  searchpres2();
        searchpres();
        imageSearch.execute(properitem + " leader");
        gamestage++;
      } else {
        //random number for battle
        var battlerand = Math.floor((Math.random() * 100) + 1);
        if (battlerand < 16) {
          //random enc init
          loadsc.className = "normalone";
          loadsc.title = "Enemy encountered!";
          loadsc2.className = "normalone";
          loadsc2.title = "Enemy encountered!";
          enctype = Math.random() >= 0.5;
          //  console.log(enctype);
          alertwin.title = "You have encountered an enemy!";

          encounter = true;
          beginfight();
        }
      }
      //walkThroughImages=0;
    });
  });
}


function searchpres2() {
  imageSearch.execute(properitem + " leader");
}

function searchpres() {
  if (openfirstwin == true) {
    var loadsc = document.getElementById('loadscreen');
    loadsc.className = "hidden";

    imageSearch.execute(properitem + " leader");
    console.log(enemies.doctor.url);
    var popupwin = document.getElementById('popupwin');
    popupwin.innerHTML = "<center> <img src=" + enemies.doctor.url + " alt=\"leader\" height=" + enemies.doctor.ysize * 2 + " width=" + enemies.doctor.xsize * 2 + "></center><p>Our beautiful homeland of " + properitem + " has been overrun by escaped criminals and dangerous wildlife! Only you can save us.</p><p>Navegate the map by clicking the ground or arrow buttons, destroying the enemies that cross your path. For the homeland!</p>";
    popupwin.title = "Welcome to my Country!";

    $("#popupwin").dialog({
      resizable: false,
      width: 550,
      height: 500,
      dialogClass: "no-close",
      buttons: [{
        text: "OK",
        click: function() {

          $(this).dialog("close");
        }
      }]
    });
  } else {
    setTimeout(searchpres, 1);
  }
}
var enemyimg;

var chomp1;
var chomp2;
var chomp3;
var chomp4;
var chomp5;

function beginfight() {
  if (encountercounter == 500) {
    $("#failedenc").dialog({
      //  resizable: false,
      width: 400,
      height: 550,
      dialogClass: "no-close",
      buttons: [{
        text: "OK",
        click: function() {
          loadsc2.className = "hidden";
          loadsc.className = "hidden";
          itemadded = false;
          additem = false;
          invopened = false;
          encounter = false;
          startbattle = false;
          addingfinished = false;
          encountercounter = 0;
          $('body').css('cursor', 'crosshair');
          $(this).dialog("close");
        }
      }]
    });
    return;
  }
  window.getSelection().removeAllRanges();
  invbut.className = "hidden2";

  context.clearRect(0, 0, canvas.width, canvas.height);
  fireballimg = new Image();
  if (weaponRatingGlobal == 0){
    fireballimg.src = "images/fireball.png";
  }else{
    fireballimg.src = weaponimage;
  }
  imageSearch.clearResults();
  if (enctype == false) {
    imageSearch.execute(properitem + " wildlife");

  }
  if (enctype == true) {
    imageSearch.execute(properitem + " person");

  }
  if (startbattle == true) {
    encountercounter = 0;
    enemyHP = 100;
    emHealth.innerHTML = "Enemy HP: " + enemyHP;
    enemyimg = new Image();
    enemyimg.src = enemies.doctor.url;

    chomp1 = new Image();
    chomp1.src = "images/c1.png";
    chomp2 = new Image();
    chomp2.src = "images/c2.png";
    chomp3 = new Image();
    chomp3.src = "images/c3.png";
    chomp4 = new Image();
    chomp4.src = "images/c4.png";
    chomp5 = new Image();
    chomp5.src = "images/c5.png";

    if (enctype == false) {
      alertwin.innerHTML = "You have enountered a wild animal!";
      alertwin.innerHTML += "<p><img src=" + enemies.doctor.url + " alt=\"Animal\" height=" + enemies.doctor.ysize * 2 + " width=" + enemies.doctor.xsize * 2 + "></p>";
    }
    if (enctype == true) {
      alertwin.innerHTML = "You have enountered an escaped prisoner!";
      alertwin.innerHTML += "<p><img src=" + enemies.doctor.url + " alt=\"Animal\" height=" + enemies.doctor.ysize * 2 + " width=" + enemies.doctor.xsize * 2 + "></p>";
    }


    $("#popupwin").dialog({
      //  resizable: false,
      width: 400,
      height: 550,
      dialogClass: "no-close",
      buttons: [{
        text: "OK",
        click: function() {
          beginfighttrue();
          $('body').css('cursor', 'crosshair');
          $(this).dialog("close");
        }
      }]
    });

  } else {
    encountercounter++;
    setTimeout(beginfight, 1);
  }
}

function beginfighttrue() {
  if (encounter == true) {
    attack = Math.floor((Math.random() * 200) + 1);
    if (attack == 1 && chompframe == 0 && attacked == 0) {
      pauseSpeed(500);
      modify = 80;
      attacking = 1;
      chomp();
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(enemyimg, enemyposx - modify / 2, enemyposy - modify / 2, imgdem + modify, imgdem + modify);

    // if its animal
    enemyposx += speed;
    enemyposy += speed2;
    if (enemyposx <= 0) {
      speed = Math.floor(Math.random() * (20 - 8)) + 8;
    }
    if (enemyposx >= canvas.width - imgdem) {
      speed = (Math.floor(Math.random() * (20 - 8)) + 8) * -1;
    }
    if (enemyposy <= 0) {
      speed2 = Math.floor(Math.random() * (20 - 8)) + 8;
    }
    if (enemyposy >= canvas.height - imgdem) {
      speed2 = (Math.floor(Math.random() * (20 - 8)) + 8) * -1;
    }
    //
    //console.log(canvas.height);

    console.log(mousecounter2);
    setTimeout(beginfighttrue, 20);
  }
}
var chompframe = 0;

function chomp() {
  chompframe++;
  context2.clearRect(enemyposx - modify / 2, enemyposy - modify / 2, imgdem + modify, imgdem + modify);
  if (chompframe == 1) {
    context2.drawImage(chomp1, enemyposx, enemyposy);
  }
  if (chompframe == 2) {
    context2.drawImage(chomp2, enemyposx, enemyposy);
  }
  if (chompframe == 3) {
    context2.drawImage(chomp3, enemyposx, enemyposy);
  }
  if (chompframe == 4) {
    context2.drawImage(chomp4, enemyposx, enemyposy);
  }
  if (chompframe == 5) {
    context2.drawImage(chomp5, enemyposx, enemyposy);
  }
  if (chompframe == 6) {
    //damage
    var healthtake = (Math.floor(Math.random() * ((5 + level * 2) - (level * 1.5)) + (level * 1.5))) - armourRatingGlobal;
    if (healthtake > 0) {
      health -= healthtake;
    }
    hudHealth.innerHTML = "Health = " + health;

    context2.clearRect(enemyposx - modify / 2, enemyposy - modify / 2, imgdem + modify, imgdem + modify);

  }
  if (chompframe < 7) {
    setTimeout(chomp, 65);
  }
}

function pauseSpeed(speedvar) {
  speed = 0;
  speed2 = 0;
  attacked = 0;
  setTimeout(startSpeed, speedvar);
}

function startSpeed() {
  var randomNumber = Math.random() >= 0.5;
  if (randomNumber == true) {
    speed = Math.floor(Math.random() * (20 - 8)) + 8;
    speed2 = Math.floor(Math.random() * (20 - 8)) + 8;
  } else {
    speed = (Math.floor(Math.random() * (20 - 8)) + 8) * -1;
    speed2 = (Math.floor(Math.random() * (20 - 8)) + 8) * -1;
  }
  chompframe = 0;
  attacking = 0;
  modify = 0;
}


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left - 10,
    y: evt.clientY - rect.top - 10
  };

}

canvas2.addEventListener('mousedown', function(evt) {
  var mousePos = getMousePos(canvas2, evt);
  //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  mousex = mousePos.x;
  mousey = mousePos.y;
  counterup();
  if (fireballCounter == 0) {
    mouseclick();

    setTimeout(fireball, 20);
    fireballCounter = 1;
  }
  //console.log(message);
}, false);


canvas2.addEventListener('mouseup', function(evt) {
  mousecounter2 = 0;
}, false);

function counterup() {
  mousecounter2 = 1;
}

function mouseclick() {
  if (mousecounter <= 30) {
    mousecounter++;
    if (mousecounter <= 15) {
      lacancon.clearRect(0, 0, 270, 360);
      racancon.clearRect(0, 0, 270, 360);
      lacancon.drawImage(la2, 0, 0);
      racancon.drawImage(ra2, 0, 0);
    }
    if (mousecounter > 15) {
      lacancon.clearRect(0, 0, 270, 360);
      racancon.clearRect(0, 0, 270, 360);
      lacancon.drawImage(la3, 0, 0);
      racancon.drawImage(ra3, 0, 0);
    }
    setTimeout(mouseclick, 1);
  } else {
    lacancon.clearRect(0, 0, 270, 360);
    racancon.clearRect(0, 0, 270, 360);
    lacancon.drawImage(la1, 0, 0);
    racancon.drawImage(ra1, 0, 0);
    mousecounter = 0;
    //break;
  }
}

function clearcan() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
  }
  //////////THE ATTACKING FUNCTION
function fireball() {
  var sizex = 150;
  var sizey = 150;
  var mousexnew = mousex;
  var mouseynew = mousey;

  function fireball2() {
    var offsetsize = sizex / 2;

    if (sizex > 0){
    context2.clearRect(mousexnew - offsetsize - 25, mouseynew - offsetsize - 25, sizex + 50, sizey + 50);
    context2.drawImage(fireballimg, mousexnew - offsetsize, mouseynew - offsetsize, sizex, sizey);

  } else {
    sizex = undefined;
    sizey = undefined;
  }
  sizex -= 15;
  sizey -= 15;
  if (sizex < 1 && sizex > -25){
    context2.clearRect(mousexnew - offsetsize - 25, mouseynew - offsetsize - 25, 10 + 50, 10 + 50);
    //return;
  }
    if (sizex < 1 && sizex > -25 && mousexnew - offsetsize > enemyposx && mousexnew - offsetsize < enemyposx + imgdem && mouseynew - offsetsize > enemyposy && mouseynew - offsetsize < enemyposy + imgdem && startbattle == true) {
      attacked = 1;
      if (attacking == 0) {
        pauseSpeed(80);
      }
      enemyHP -= 50 + weaponRatingGlobal;
      emHealth.innerHTML = "Enemy HP: " + enemyHP;
      if (enemyHP <= 0) {
        encounter = false;
        startbattle = false;
        emHealth.innerHTML = " ";
        //enemyimg = undefined;
        itemtype = Math.floor(Math.random() * (3.9 - 0)) + 0;
        additem = true;
        additemfun();
        setTimeout(clearcan, 20);
        //loadsc2.className = "hidden";
        //loadsc.className = "hidden";
      }
    }

    if (sizex < 1) {

      fireballCounter = 0;
    }

    setTimeout(fireball2, 41);

    //console.log(mousecounter3);
  }
  if (sizex > -25) {
    fireball2();
  }

}

///add items
function additemfun() {
  if (encountercounter == 500) {
    loadsc2.className = "hidden";
    loadsc.className = "hidden";
    itemadded = false;
    additem = false;
    invopened = false;
    encounter = false;
    startbattle = false;
    addingfinished = false;
    invbut.className = "normal2";
    encountercounter = 0;
    return;
  }
  imageSearch.clearResults();
  if (itemtype == 0) {
    imageSearch.execute(properitem + " clothing");

  }
  if (itemtype == 1) {
    imageSearch.execute(properitem + " hand weapons");

  }
  if (itemtype == 2) {
    imageSearch.execute(properitem + " cuisine");

  }
  if (itemtype == 3) {
    imageSearch.execute(properitem + " currency");

  }
  if (itemadded == true) {
    encountercounter = 0;

    function addTheItem() {
      var addingfinished = false;
      //console.log(enemies.doctor.url);
      //4th item = whether equipped or not
      if (itemtype == 0) {
        //CLOTHING
        var armourRating = (Math.floor(Math.random() * (5 - 1)) + 1) + level * 2;
        var clothstring = "Clothing from " + properitem;
        eneminvitems[eneminvitems.length] = [enemies.doctor.url, enemies.doctor.ysize, enemies.doctor.xsize, clothstring, 1, false, armourRating];

      }
      //WEAPONS
      if (itemtype == 1) {

        var weaponRating = (Math.floor(Math.random() * (10 - 5)) + 5) + level * 2;
        var weapstring = "Weapon from " + properitem;
        eneminvitems[eneminvitems.length] = [enemies.doctor.url, enemies.doctor.ysize, enemies.doctor.xsize, weapstring, 2, false, weaponRating];

      }
      if (itemtype == 2) {
        //FOOD

        var foodPotency = (Math.floor(Math.random() * (10 - 5)) + 5) + level * 2;
        var foodstring = "Food from " + properitem;
        eneminvitems[eneminvitems.length] = [enemies.doctor.url, enemies.doctor.ysize, enemies.doctor.xsize, foodstring, 3, false, foodPotency];

      }
      if (itemtype == 3) {
        //FOOD

        var moneyWorth = (Math.floor(Math.random() * (50 - 1)) + 1) + level * 2;
        var moneystring = "Currency from " + properitem;
        eneminvitems[eneminvitems.length] = [enemies.doctor.url, enemies.doctor.ysize, enemies.doctor.xsize, moneystring, 4, false, moneyWorth];

      }
      ///DO WE ADD A NEW ITEM? I DUNNO!
      addingfinished = Math.random() < .5;
      if (addingfinished == false) {
        itemadded = false;
        additem = true;
        itemtype = Math.floor(Math.random() * (3.9 - 0)) + 0;
        setTimeout(additemfun, 10);
        return;
      }
      if (addingfinished == true) {
        refreshenemyinv();
        $("#enemyinventory").dialog({
          //  resizable: false,
          width: 600,
          height: 550,
          dialogClass: "no-close",
          buttons: [{
            text: "OK",
            click: function() {
              loadsc2.className = "hidden";
              loadsc.className = "hidden";
              itemadded = false;
              additem = false;
              invopened = false;
              encounter = false;
              startbattle = false;
              addingfinished = false;
              invbut.className = "normal2";
              $('body').css('cursor', 'crosshair');
              $(this).dialog("close");
            }
          }]
        });
      }
    }
    addTheItem();
  } else {
    encountercounter++;
    setTimeout(additemfun, 1);
  }
}

function refreshinv() {
  invopened = true;
  var htmlstring;
  htmlstring = '<table border="2" style="width:100%">';
  for (i = 0; i < invitems.length; i++) {
    if (invitems[i] != "not") {
      if (invitems[i][5] == false) {
        htmlstring += '<tr>';
      } else {
        htmlstring += '<tr bgcolor="red">';
      }
      htmlstring += '<td>';
      htmlstring += "<img src=" + invitems[i][0] + " alt=" + invitems[i][4] + " height=" + invitems[i][1] + " width=" + invitems[i][2] + ">";
      htmlstring += '</td>';
      htmlstring += '<td>';
      if (invitems[i][4] == 1) {
        htmlstring += '<a href="javascript:void(0)" onclick="equipitem(' + i + ',' + invitems[i][4] + ');">' + invitems[i][3] + '<br>Armour Rating: ' + invitems[i][6] + '</a>';
      }
      if (invitems[i][4] == 2) {
        htmlstring += '<a href="javascript:void(0)" onclick="equipitem(' + i + ',' + invitems[i][4] + ');">' + invitems[i][3] + '<br>Weapon Rating: ' + invitems[i][6] + '</a>';
      }
      if (invitems[i][4] == 3) {
        htmlstring += '<a href="javascript:void(0)" onclick="equipitem(' + i + ',' + invitems[i][4] + ');">' + invitems[i][3] + '<br>Healing Properties: +' + invitems[i][6] + 'HP</a>';
      }
      htmlstring += '</td>';
      htmlstring += '</tr>';
    }
  }
  htmlstring += '</table>';
  document.getElementById('inventory').innerHTML = htmlstring;
}

function refreshenemyinv() {
  invopened = true;

  var htmlstring;
  htmlstring = '<table border="2" style="width:100%">';
  for (i = 0; i < eneminvitems.length; i++) {
    var v0 = eneminvitems[i][0]
    var v1 = eneminvitems[i][1]
    var v2 = eneminvitems[i][2]
    var v3 = eneminvitems[i][3]
    var v4 = eneminvitems[i][4]
    var v5 = eneminvitems[i][5]
    var v6 = eneminvitems[i][6]
    if (eneminvitems[i] != "not") {
      htmlstring += '<tr>';
      htmlstring += '<td>';
      htmlstring += "<img src=" + eneminvitems[i][0] + " alt=" + eneminvitems[i][4] + " height=" + eneminvitems[i][1] + " width=" + eneminvitems[i][2] + ">";
      htmlstring += '</td>';
      htmlstring += '<td>';
      if (eneminvitems[i][4] == 1) {
        htmlstring += '<a href="javascript:void(0)" onclick="takeitem(' + i + ');">' + eneminvitems[i][3] + '<br>Armour Rating: ' + eneminvitems[i][6] + '</a>';
      }
      if (eneminvitems[i][4] == 2) {
        htmlstring += '<a href="javascript:void(0)" onclick="takeitem(' + i + ');">' + eneminvitems[i][3] + '<br>Clothing Rating: ' + eneminvitems[i][6] + '</a>';
      }
      if (eneminvitems[i][4] == 3) {
        htmlstring += '<a href="javascript:void(0)" onclick="takeitem(' + i + ');">' + eneminvitems[i][3] + '<br>Food Rating: ' + eneminvitems[i][6] + '</a>';
      }
      if (eneminvitems[i][4] == 4) {
        htmlstring += '<a href="javascript:void(0)" onclick="equipitem(' + i + ',' + eneminvitems[i][4] + ');">' + eneminvitems[i][3] + '<br>Money Amount: +' + eneminvitems[i][6] + '</a>';
      }
      htmlstring += '</td>';
      htmlstring += '</tr>';
    }
  }
  htmlstring += '</table>';
  document.getElementById('enemyinventory').innerHTML = htmlstring;
}

function takeitem(itemnumberfun) {
  invitems[invitems.length] = [eneminvitems[itemnumberfun][0], eneminvitems[itemnumberfun][1], eneminvitems[itemnumberfun][2], eneminvitems[itemnumberfun][3], eneminvitems[itemnumberfun][4], eneminvitems[itemnumberfun][5], eneminvitems[itemnumberfun][6]];
  eneminvitems[itemnumberfun] = "not";
  refreshenemyinv();
  refreshinv();
  console.log("asdf")
}

function equipitem(itemnum, itemtype) {

  var donothing = false;
  if (itemtype !=4){
  for (i = 0; i < invitems.length; i++) {
    if (invitems[i][5] == true && invitems[i][4] == itemtype && i != itemnum) {
      donothing = true;
    }
  }
  console.log(itemtype);
  if (donothing == false) {
    if (invitems[itemnum][5] == true) {
      invitems[itemnum][5] = false;
    } else {
      invitems[itemnum][5] = true;
      if (itemtype == 1) {
        armourRatingGlobal = invitems[itemnum][6];
      }
      if (itemtype == 2) {
        weaponRatingGlobal = invitems[itemnum][6];
        //make weapon image into fireball image
        weaponimage = invitems[itemnum][0];
      }
    }
  }
  //food
  if (itemtype == 3) {
    health += invitems[itemnum][6];
    hudHealth.innerHTML = "Health: " + health;
    invitems[itemnum] = "not";

  }
  //money
}
  if (itemtype == 4) {
    money += eneminvitems[itemnum][6];
    moneydiv.innerHTML = "Money: " +money;
    eneminvitems[itemnum] = "not";
    refreshenemyinv();
  }
  refreshinv();
}

function openinv() {
    if (invopened == false) {
      refreshinv();
      $("#inventory").dialog({
        //  resizable: false,
        width: 600,
        height: 550,
        dialogClass: "no-close",
        buttons: [{
          text: "OK",
          click: function() {
            itemadded = false;
            additem = false;
            invopened = false;
            $('body').css('cursor', 'crosshair');
            $(this).dialog("close");
          }
        }]
      });
    } else {
      itemadded = false;
      additem = false;
      invopened = false;

      $("#inventory").dialog("close");
    }

  }
  /*
  var offsetsize = 75;
  context.drawImage(fireballimg, mousex-offsetsize, mousey-offsetsize, 150, 150);
  setTimeout(fireball, 20);
  */
  //google.maps.event.addDomListener(window, 'load', initialize);
  //console.log(google.maps.LatLng);
