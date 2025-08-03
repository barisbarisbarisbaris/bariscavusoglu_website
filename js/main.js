//font loop

//var fonts = ['times', 'verdana', 'arial'];
//var currentFont = 0
//function changeFont() {
//document.body.style.fontFamily = fonts[currentFont++ % fonts.length]
//}
//setInterval(changeFont, 100);



//button color change
$("#color").on("click", function() {
  $("#bio").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#randomise").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);


  $("#contact").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#press").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-08").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-07").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);


  $("#p-06").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-05").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-04").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-03").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-02").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#p-01").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#e-01").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#e-02").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#e-03").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#e-04").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#e-05").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#randomLoc").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#randomNoise").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

  $("#reset_randomise").animate().css({
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
  }, 2500);

});

//reload on load for leader line problem on Safari browser
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

//elements
var element_baris = document.getElementById('baris-cavusoglu'),
element_e01 = document.getElementById('e-01'),   
element_e02 = document.getElementById('e-02'),   
element_e03 = document.getElementById('e-03'),   
element_e04 = document.getElementById('e-04'),
element_e05 = document.getElementById('e-05'),
element_e06 = document.getElementById('e-06'),

element_p01 = document.getElementById('p-01'),          
element_p02 = document.getElementById('p-02'),
element_p03 = document.getElementById('p-03');
element_p04 = document.getElementById('p-04'),
element_p05 = document.getElementById('p-05'),
element_p06 = document.getElementById('p-06'),
element_p07 = document.getElementById('p-07'),
element_p08 = document.getElementById('p-08'),

element_bio = document.getElementById('bio'),
element_contact = document.getElementById('contact'),
element_press = document.getElementById('press'),

element_randomise = document.getElementById('randomise'),
element_reset_randomise = document.getElementById('reset_randomise'),
element_color = document.getElementById('color');

element_randomLoc = document.getElementById('randomLoc');

element_randomNoise = document.getElementById('randomNoise');


function updateDateTime() {
  // create a new `Date` object
const today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd;
  } 
  if(mm<10) {
    mm='0'+mm;
  } 
  // get the current date and time as a string
  var now = dd+''+mm+''+yyyy;
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#date').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);
debugger;
console.log("");

var line1 = new LeaderLine(element_baris, element_p04, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 1', {fontSize: 14}),
color: 'black',
});

var line2 = new LeaderLine(element_p04, element_p01, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 2', {fontSize: 14}),
color: 'black'
});

var line3 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 50, y:35}), element_p01, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 3', {fontSize: 14}),
color: 'black'
});
line3.setOptions({startSocket: 'bottom', endSocket: 'left'});
line3.path = 'grid';

var line4 = new LeaderLine(element_p01, element_p02, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 4', {fontSize: 14}),
color: 'black'
});
line4.path = 'grid';

var line5 = new LeaderLine(element_baris, element_bio, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 5', {fontSize: 14}),
color: 'black'
});
line5.setOptions({startSocket: 'right', endSocket: 'top'});
line5.path = 'grid';

var line6 = new LeaderLine(element_p02, element_p03, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 6', {fontSize: 14}),
color: 'black'
});
line6.setOptions({startSocket: 'top', endSocket: 'bottom'});

var line7 = new LeaderLine(element_p03, element_p05, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 7', {fontSize: 14}),
color: 'black'
});
line7.setOptions({startSocket: 'top', endSocket: 'top'});
line7.path = 'grid';

var line8 = new LeaderLine(element_p04, element_p06, {
dash: {animation: true},
/*dash:true,*/
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 8', {fontSize: 14}),
color: 'black'
});
line8.setOptions({startSocket: 'right', endSocket: 'bottom'});
line8.path = 'grid';

var line9 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 30, y:35}), element_e01, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 9', {fontSize: 14}),
color: 'black'
});
line9.setOptions({startSocket: 'bottom', endSocket: 'bottom'});
line9.path = 'grid';

var line10 = new LeaderLine(element_baris, element_e02, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 10', {fontSize: 14}),
color: 'black'
});

var line11 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 70, y:35}), element_e05, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 11', {fontSize: 14}),
color: 'black'
});
line11.setOptions({startSocket: 'bottom', endSocket: 'left'});
line11.path = 'grid';

var line12 = new LeaderLine(element_e05, element_contact, {
dash:false,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 12', {fontSize: 14}),
color: 'black'
});
line12.setOptions({startSocket: 'bottom', endSocket: 'top'});

var line13 = new LeaderLine(element_p05, element_p07, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 13', {fontSize: 14}),
color: 'black'
});

var line14 = new LeaderLine(element_p07, element_p08, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 14', {fontSize: 14}),
color: 'black'
});

var line15 = new LeaderLine(element_p03, element_randomLoc, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 15', {fontSize: 14}),
color: 'black'
});
line15.setOptions({startSocket: 'left', endSocket: 'top'});
line15.path = 'grid';

var line16 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:70}), element_press, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 16', {fontSize: 14}),
color: 'black'
});
line16.setOptions({startSocket: 'left', endSocket: 'top'});
line16.path = 'grid';

var line17 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 10, y:35}), element_e03, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 17', {fontSize: 14}),
color: 'black'
});
line17.setOptions({startSocket: 'bottom', endSocket: 'left'});
line17.path = 'grid';

var line18 = new LeaderLine(element_p08, element_color, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 18', {fontSize: 14}),
color: 'black'
});
line18.setOptions({startSocket: 'left', endSocket: 'right'});

var line19 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 75, y:0}), element_color, {
dash: {animation: true},
size:2,
startPlug: 'hand',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 19', {fontSize: 14}),
color: 'black'
});
line19.setOptions({startSocket: 'top', endSocket: 'top'});
line19.path = 'magnet';

var line20 = new LeaderLine(element_bio, element_e04, {
size:2,
startPlug: 'hand',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 20', {fontSize: 14}),
color: 'black'
});
line20.setOptions({startSocket: 'right', endSocket: 'left'});

var line21 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:30}), element_e03, {
size:2,
startPlug: 'arrow2',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 21', {fontSize: 14}),
color: 'black'
});
line21.path = 'grid';
line21.setOptions({startSocket: 'left', endSocket: 'right'});

var line22 = new LeaderLine(element_e01, element_e03, {
size:2,
dash: {animation: true},
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 22', {fontSize: 14}),
color: 'black'
});
line22.path = 'grid';
line22.setOptions({startSocket: 'right', endSocket: 'top'});

var line23 = new LeaderLine(element_randomise, element_reset_randomise, {
  size:2,
  dash:false,
  startPlug: 'square',
  endPlug: 'hand',
  /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
  middleLabel: LeaderLine.captionLabel('line 23', {fontSize: 14}),
  color: 'black'
  });
  line23.path = 'grid';
  line23.setOptions({startSocket: 'left', endSocket: 'left'});

  var line24 = new LeaderLine(element_color, element_reset_randomise, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: LeaderLine.captionLabel('line 24', {fontSize: 14}),
    color: 'black'
    });
    line24.path = 'grid';
    line24.setOptions({startSocket: 'top', endSocket: 'right'});

  var line25 = new LeaderLine(element_randomNoise, element_reset_randomise, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: LeaderLine.captionLabel('line 25', {fontSize: 14}),
    color: 'black'
    });
    line25.path = 'magnet';

  var line26 = new LeaderLine(element_e03, element_e06, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: LeaderLine.captionLabel('line 26', {fontSize: 14}),
    color: 'black'
    });
    line26.path = 'grid';
    line26.setOptions({startSocket: 'bottom', endSocket: 'left'});

  var line27 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:60}), element_e06, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: LeaderLine.captionLabel('line 27', {fontSize: 14}),
    color: 'black'
    });
    line27.path = 'grid';
    line27.setOptions({startSocket: 'left', endSocket: 'right'});
    

/* P 05 */
var listen_p5 = document.getElementById('p-05');

listen_p5.addEventListener('mouseover', AnimEvent.add(function() {
line7.position();
}), false);
listen_p5.addEventListener('mouseout', AnimEvent.add(function() {
line7.position();
}), false);

listen_p5.addEventListener('mouseover', AnimEvent.add(function() {
  line13.position();
  }), false);
  listen_p5.addEventListener('mouseout', AnimEvent.add(function() {
  line13.position();
  }), false);


/* P 03 */
var listen_p3 = document.getElementById('p-03');

listen_p3.addEventListener('mouseover', AnimEvent.add(function() {
line15.position();
}), false);
listen_p3.addEventListener('mouseout', AnimEvent.add(function() {
line15.position();
}), false);

listen_p3.addEventListener('mouseover', AnimEvent.add(function() {
line7.position();
}), false);
listen_p3.addEventListener('mouseout', AnimEvent.add(function() {
line7.position();
}), false);

listen_p3.addEventListener('mouseover', AnimEvent.add(function() {
line6.position();
}), false);
listen_p3.addEventListener('mouseout', AnimEvent.add(function() {
line6.position();
}), false);



/* P 06 */
var listen_p6 = document.getElementById('p-06');

listen_p6.addEventListener('mouseover', AnimEvent.add(function() {
line8.position();
}), false);
listen_p6.addEventListener('mouseout', AnimEvent.add(function() {
line8.position();
}), false);


/* P 07 */
var listen_p7 = document.getElementById('p-07');

listen_p7.addEventListener('mouseover', AnimEvent.add(function() {
line13.position();
}), false);
listen_p7.addEventListener('mouseout', AnimEvent.add(function() {
line13.position();
}), false);

listen_p7.addEventListener('mouseover', AnimEvent.add(function() {
  line14.position();
  }), false);
  listen_p7.addEventListener('mouseout', AnimEvent.add(function() {
  line14.position();
  }), false);


/* P 08 */
var listen_p8 = document.getElementById('p-08');

listen_p8.addEventListener('mouseover', AnimEvent.add(function() {
line18.position();
}), false);
listen_p8.addEventListener('mouseout', AnimEvent.add(function() {
line18.position();
}), false);

listen_p8.addEventListener('mouseover', AnimEvent.add(function() {
  line14.position();
  }), false);
  listen_p8.addEventListener('mouseout', AnimEvent.add(function() {
  line14.position();
  }), false);


/* P 04 */
var listen_p4 = document.getElementById('p-04');

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line1.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line1.position();
}), false);

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line2.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line2.position();
}), false);

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line8.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line8.position();
}), false);


/* P 02 */
var listen_p2 = document.getElementById('p-02');

listen_p2.addEventListener('mouseover', AnimEvent.add(function() {
line4.position();
}), false);
listen_p2.addEventListener('mouseout', AnimEvent.add(function() {
line4.position();
}), false);

listen_p2.addEventListener('mouseover', AnimEvent.add(function() {
line6.position();
}), false);
listen_p2.addEventListener('mouseout', AnimEvent.add(function() {
line6.position();
}), false);


/* P 02 */
var listen_p1 = document.getElementById('p-01');

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line3.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line3.position();
}), false);

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line4.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line4.position();
}), false);

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line2.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line2.position();
}), false);


/* E 01 */
var listen_e1 = document.getElementById('e-01');

listen_e1.addEventListener('mouseover', AnimEvent.add(function() {
line9.position();
}), false);
listen_e1.addEventListener('mouseout', AnimEvent.add(function() {
line9.position();
}), false);

listen_e1.addEventListener('mouseover', AnimEvent.add(function() {
line22.position();
}), false);
listen_e1.addEventListener('mouseout', AnimEvent.add(function() {
line22.position();
}), false);


/* E 02 */
var listen_e2 = document.getElementById('e-02');

listen_e2.addEventListener('mouseover', AnimEvent.add(function() {
line10.position();
}), false);
listen_e2.addEventListener('mouseout', AnimEvent.add(function() {
line10.position();
}), false);


/* E 03 */
var listen_e3 = document.getElementById('e-03');

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line17.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line17.position();
}), false);

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line21.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line21.position();
}), false);

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line22.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line22.position();
}), false);

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line26.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line26.position();
}), false);


/* E 04 */
var listen_e4 = document.getElementById('e-04');

listen_e4.addEventListener('mouseover', AnimEvent.add(function() {
line20.position();
}), false);
listen_e4.addEventListener('mouseout', AnimEvent.add(function() {
line20.position();
}), false);

/* E 05 */
var listen_e5 = document.getElementById('e-05');

listen_e5.addEventListener('mouseover', AnimEvent.add(function() {
line11.position();
}), false);
listen_e5.addEventListener('mouseout', AnimEvent.add(function() {
line11.position();
}), false);

listen_e5.addEventListener('mouseover', AnimEvent.add(function() {
line12.position();
}), false);
listen_e5.addEventListener('mouseout', AnimEvent.add(function() {
line12.position();
}), false);

/* E 06 */
var listen_e6 = document.getElementById('e-06');

listen_e6.addEventListener('mouseover', AnimEvent.add(function() {
line26.position();
}), false);
listen_e6.addEventListener('mouseout', AnimEvent.add(function() {
line26.position();
}), false);

var listen_e6 = document.getElementById('e-06');

listen_e6.addEventListener('mouseover', AnimEvent.add(function() {
line27.position();
}), false);
listen_e6.addEventListener('mouseout', AnimEvent.add(function() {
line27.position();
}), false);





/* CONTACT */
var listen_contact = document.getElementById('contact');

listen_contact.addEventListener('mouseover', AnimEvent.add(function() {
line12.position();
}), false);
listen_contact.addEventListener('mouseout', AnimEvent.add(function() {
line12.position();
}), false);

/* PRESS */
var listen_contact = document.getElementById('press');

listen_contact.addEventListener('mouseover', AnimEvent.add(function() {
line16.position();
}), false);
listen_contact.addEventListener('mouseout', AnimEvent.add(function() {
line16.position();
}), false);


// RANDOM BUTTON POSITION START

// e01 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e01.offsetWidth;
  const maxY = window.innerHeight - element_e01.offsetHeight;

  const posX = Math.floor(Math.random() * maxX);
  const posY = Math.floor(Math.random() * maxY);

  element_e01.style.left = `${posX}px`;
  element_e01.style.top = `${posY}px`;

  line9.position();
  line22.position();
});

// e02 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e02.offsetWidth;
  const maxY = window.innerHeight - element_e02.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_e02.style.left = `${posX}px`;
  element_e02.style.top = `${posY}px`;

  line10.position();
});

// e03 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e03.offsetWidth;
  const maxY = window.innerHeight - element_e03.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_e03.style.left = `${posX}px`;
  element_e03.style.top = `${posY}px`;

  line17.position();
  line22.position();
  line21.position();
  line26.position();
});

// e04 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e04.offsetWidth;
  const maxY = window.innerHeight - element_e04.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_e04.style.left = `${posX}px`;
  element_e04.style.top = `${posY}px`;

  line20.position();
});

// e05 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e05.offsetWidth;
  const maxY = window.innerHeight - element_e05.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_e05.style.left = `${posX}px`;
  element_e05.style.top = `${posY}px`;

  line11.position();
  line12.position();
});

// e06 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_e06.offsetWidth;
  const maxY = window.innerHeight - element_e06.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_e06.style.left = `${posX}px`;
  element_e06.style.top = `${posY}px`;

  line26.position();
  line27.position();
});

// p01 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p01.offsetWidth;
  const maxY = window.innerHeight - element_p01.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p01.style.left = `${posX}px`;
  element_p01.style.top = `${posY}px`;

  line2.position();
  line3.position();  
  line4.position();
});

// p02 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p02.offsetWidth;
  const maxY = window.innerHeight - element_p02.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p02.style.left = `${posX}px`;
  element_p02.style.top = `${posY}px`;

  line4.position();
  line6.position();
});

// p03 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p03.offsetWidth;
  const maxY = window.innerHeight - element_p03.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p03.style.left = `${posX}px`;
  element_p03.style.top = `${posY}px`;

  line15.position();
  line6.position();  
  line7.position();
});

// p04 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p04.offsetWidth;
  const maxY = window.innerHeight - element_p04.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p04.style.left = `${posX}px`;
  element_p04.style.top = `${posY}px`;

  line1.position();
  line2.position();  
  line8.position();
});

// p05 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p05.offsetWidth;
  const maxY = window.innerHeight - element_p05.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p05.style.left = `${posX}px`;
  element_p05.style.top = `${posY}px`;

  line7.position();
  line13.position();  
});

// p06 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p06.offsetWidth;
  const maxY = window.innerHeight - element_p06.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p06.style.left = `${posX}px`;
  element_p06.style.top = `${posY}px`;

  line8.position();
});

// p07 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p07.offsetWidth;
  const maxY = window.innerHeight - element_p07.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p07.style.left = `${posX}px`;
  element_p07.style.top = `${posY}px`;

  line13.position();
  line14.position();  
});

// p08 RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_p08.offsetWidth;
  const maxY = window.innerHeight - element_p08.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_p08.style.left = `${posX}px`;
  element_p08.style.top = `${posY}px`;

  line14.position();
  line18.position();  
});

// press RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_press.offsetWidth;
  const maxY = window.innerHeight - element_press.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_press.style.left = `${posX}px`;
  element_press.style.top = `${posY}px`;

  line16.position(); 
});

// contact RAND POSITION
element_randomLoc.addEventListener('click', () => {
  const maxX = window.innerWidth - element_contact.offsetWidth;
  const maxY = window.innerHeight - element_contact.offsetHeight;

  posX = Math.floor(Math.random() * maxX);
  posY = Math.floor(Math.random() * maxY);

  element_contact.style.left = `${posX}px`;
  element_contact.style.top = `${posY}px`;

  line12.position(); 
});


// RANDOM BUTTON POSITION END




// RANDOM BUTTON NOISE START RANDOM BUTTON NOISE START




    // element_e05 RAND NOISE

let noiseInterval = null;

let posX_e04 = 100;
let posY_e04 = 100;

let posX_e05 = 100;
let posY_e05 = 100;
function startNoiseMovement() {
      if (noiseInterval) return;

      //E01
      // Get current position of the button
      const rect_e01 = element_e01.getBoundingClientRect();
      posX_e01 = rect_e01.left;
      posY_e01 = rect_e01.top;

      //E02
      // Get current position of the button
      const rect_e02 = element_e02.getBoundingClientRect();
      posX_e02 = rect_e02.left;
      posY_e02 = rect_e02.top;

      //E03
      // Get current position of the button
      const rect_e03 = element_e03.getBoundingClientRect();
      posX_e03 = rect_e03.left;
      posY_e03 = rect_e03.top;

      //E04
      // Get current position of the button
      const rect_e04 = element_e04.getBoundingClientRect();
      posX_e04 = rect_e04.left;
      posY_e04 = rect_e04.top;

      //E05
      // Get current position of the button
      const rect_e05 = element_e05.getBoundingClientRect();
      posX_e05 = rect_e05.left;
      posY_e05 = rect_e05.top;

      //E06
      // Get current position of the button
      const rect_e06 = element_e06.getBoundingClientRect();
      posX_e06 = rect_e06.left;
      posY_e06 = rect_e06.top;

      //P01
      // Get current position of the button
      const rect_p01 = element_p01.getBoundingClientRect();
      posX_p01 = rect_p01.left;
      posY_p01 = rect_p01.top;

      //P02
      // Get current position of the button
      const rect_p02 = element_p02.getBoundingClientRect();
      posX_p02 = rect_p02.left;
      posY_p02 = rect_p02.top;

      //P03
      // Get current position of the button
      const rect_p03 = element_p03.getBoundingClientRect();
      posX_p03 = rect_p03.left;
      posY_p03 = rect_p03.top;

      //P04
      // Get current position of the button
      const rect_p04 = element_p04.getBoundingClientRect();
      posX_p04 = rect_p04.left;
      posY_p04 = rect_p04.top;

      //P05
      // Get current position of the button
      const rect_p05 = element_p05.getBoundingClientRect();
      posX_p05 = rect_p05.left;
      posY_p05 = rect_p05.top;

      //P06
      // Get current position of the button
      const rect_p06 = element_p06.getBoundingClientRect();
      posX_p06 = rect_p06.left;
      posY_p06 = rect_p06.top;

      //P07
      // Get current position of the button
      const rect_p07 = element_p07.getBoundingClientRect();
      posX_p07 = rect_p07.left;
      posY_p07 = rect_p07.top;

      //P08
      // Get current position of the button
      const rect_p08 = element_p08.getBoundingClientRect();
      posX_p08 = rect_p08.left;
      posY_p08 = rect_p08.top;

      //CONTACT
      // Get current position of the button
      const rect_contact = element_contact.getBoundingClientRect();
      posX_contact = rect_contact.left;
      posY_contact = rect_contact.top;

      //PRESS
      // Get current position of the button
      const rect_press = element_press.getBoundingClientRect();
      posX_press = rect_press.left;
      posY_press = rect_press.top;

      noiseInterval = setInterval(() => {

        //e01
        const dx_e01 = (Math.random() - 0.5) * 50;
        const dy_e01 = (Math.random() - 0.5) * 50;
        posX_e01 = Math.max(0, Math.min(window.innerWidth - element_e01.offsetWidth, posX_e01 + dx_e01));
        posY_e01 = Math.max(0, Math.min(window.innerHeight - element_e01.offsetHeight, posY_e01 + dy_e01));
        element_e01.style.left = `${posX_e01}px`;
        element_e01.style.top = `${posY_e01}px`;

        line9.position();
        line22.position();

        //e02
        const dx_e02 = (Math.random() - 0.5) * 50;
        const dy_e02 = (Math.random() - 0.5) * 50;
        posX_e02 = Math.max(0, Math.min(window.innerWidth - element_e02.offsetWidth, posX_e02 + dx_e02));
        posY_e02 = Math.max(0, Math.min(window.innerHeight - element_e02.offsetHeight, posY_e02 + dy_e02));
        element_e02.style.left = `${posX_e02}px`;
        element_e02.style.top = `${posY_e02}px`;

        line10.position();

        //e03
        const dx_e03 = (Math.random() - 0.5) * 50;
        const dy_e03 = (Math.random() - 0.5) * 50;
        posX_e03 = Math.max(0, Math.min(window.innerWidth - element_e03.offsetWidth, posX_e03 + dx_e03));
        posY_e03 = Math.max(0, Math.min(window.innerHeight - element_e03.offsetHeight, posY_e03 + dy_e03));
        element_e03.style.left = `${posX_e03}px`;
        element_e03.style.top = `${posY_e03}px`;

        line17.position();
        line22.position();
        line21.position();
        line26.position();

        //e04
        const dx_e04 = (Math.random() - 0.5) * 50;
        const dy_e04 = (Math.random() - 0.5) * 50;
        posX_e04 = Math.max(0, Math.min(window.innerWidth - element_e04.offsetWidth, posX_e04 + dx_e04));
        posY_e04 = Math.max(0, Math.min(window.innerHeight - element_e04.offsetHeight, posY_e04 + dy_e04));
        element_e04.style.left = `${posX_e04}px`;
        element_e04.style.top = `${posY_e04}px`;

        line20.position();

        //e05
        const dx_e05 = (Math.random() - 0.5) * 50;
        const dy_e05 = (Math.random() - 0.5) * 50;
        posX_e05 = Math.max(0, Math.min(window.innerWidth - element_e05.offsetWidth, posX_e05 + dx_e05));
        posY_e05 = Math.max(0, Math.min(window.innerHeight - element_e05.offsetHeight, posY_e05 + dy_e05));
        element_e05.style.left = `${posX_e05}px`;
        element_e05.style.top = `${posY_e05}px`;

        line11.position();
        line12.position();

        //e06
        const dx_e06 = (Math.random() - 0.5) * 50;
        const dy_e06 = (Math.random() - 0.5) * 50;
        posX_e06 = Math.max(0, Math.min(window.innerWidth - element_e06.offsetWidth, posX_e06 + dx_e06));
        posY_e06 = Math.max(0, Math.min(window.innerHeight - element_e06.offsetHeight, posY_e06 + dy_e06));
        element_e06.style.left = `${posX_e06}px`;
        element_e06.style.top = `${posY_e06}px`;

        line26.position();
        line27.position();

        //p01
        const dx_p01 = (Math.random() - 0.5) * 50;
        const dy_p01 = (Math.random() - 0.5) * 50;
        posX_p01 = Math.max(0, Math.min(window.innerWidth - element_p01.offsetWidth, posX_p01 + dx_p01));
        posY_p01 = Math.max(0, Math.min(window.innerHeight - element_p01.offsetHeight, posY_p01 + dy_p01));
        element_p01.style.left = `${posX_p01}px`;
        element_p01.style.top = `${posY_p01}px`;

        line3.position();
        line2.position();
        line4.position();

        //p02
        const dx_p02 = (Math.random() - 0.5) * 50;
        const dy_p02 = (Math.random() - 0.5) * 50;
        posX_p02 = Math.max(0, Math.min(window.innerWidth - element_p02.offsetWidth, posX_p02 + dx_p02));
        posY_p02 = Math.max(0, Math.min(window.innerHeight - element_p02.offsetHeight, posY_p02 + dy_p02));
        element_p02.style.left = `${posX_p02}px`;
        element_p02.style.top = `${posY_p02}px`;

        line6.position();
        line4.position();

        //p03
        const dx_p03 = (Math.random() - 0.5) * 50;
        const dy_p03 = (Math.random() - 0.5) * 50;
        posX_p03 = Math.max(0, Math.min(window.innerWidth - element_p03.offsetWidth, posX_p03 + dx_p03));
        posY_p03 = Math.max(0, Math.min(window.innerHeight - element_p03.offsetHeight, posY_p03 + dy_p03));
        element_p03.style.left = `${posX_p03}px`;
        element_p03.style.top = `${posY_p03}px`;

        line15.position();
        line6.position();
        line7.position();

        //p04
        const dx_p04 = (Math.random() - 0.5) * 50;
        const dy_p04 = (Math.random() - 0.5) * 50;
        posX_p04 = Math.max(0, Math.min(window.innerWidth - element_p04.offsetWidth, posX_p04 + dx_p04));
        posY_p04 = Math.max(0, Math.min(window.innerHeight - element_p04.offsetHeight, posY_p04 + dy_p04));
        element_p04.style.left = `${posX_p04}px`;
        element_p04.style.top = `${posY_p04}px`;

        line1.position();
        line2.position();
        line8.position();

        //p05
        const dx_p05 = (Math.random() - 0.5) * 50;
        const dy_p05 = (Math.random() - 0.5) * 50;
        posX_p05 = Math.max(0, Math.min(window.innerWidth - element_p05.offsetWidth, posX_p05 + dx_p05));
        posY_p05 = Math.max(0, Math.min(window.innerHeight - element_p05.offsetHeight, posY_p05 + dy_p05));
        element_p05.style.left = `${posX_p05}px`;
        element_p05.style.top = `${posY_p05}px`;

        line7.position();
        line13.position();

        //p06
        const dx_p06 = (Math.random() - 0.5) * 50;
        const dy_p06 = (Math.random() - 0.5) * 50;
        posX_p06 = Math.max(0, Math.min(window.innerWidth - element_p06.offsetWidth, posX_p06 + dx_p06));
        posY_p06 = Math.max(0, Math.min(window.innerHeight - element_p06.offsetHeight, posY_p06 + dy_p06));
        element_p06.style.left = `${posX_p06}px`;
        element_p06.style.top = `${posY_p06}px`;

        line8.position();

        //p07
        const dx_p07 = (Math.random() - 0.5) * 50;
        const dy_p07 = (Math.random() - 0.5) * 50;
        posX_p07 = Math.max(0, Math.min(window.innerWidth - element_p07.offsetWidth, posX_p07 + dx_p07));
        posY_p07 = Math.max(0, Math.min(window.innerHeight - element_p07.offsetHeight, posY_p07 + dy_p07));
        element_p07.style.left = `${posX_p07}px`;
        element_p07.style.top = `${posY_p07}px`;

        line13.position();
        line14.position();

        //p08
        const dx_p08 = (Math.random() - 0.5) * 50;
        const dy_p08 = (Math.random() - 0.5) * 50;
        posX_p08 = Math.max(0, Math.min(window.innerWidth - element_p08.offsetWidth, posX_p08 + dx_p08));
        posY_p08 = Math.max(0, Math.min(window.innerHeight - element_p08.offsetHeight, posY_p08 + dy_p08));
        element_p08.style.left = `${posX_p08}px`;
        element_p08.style.top = `${posY_p08}px`;

        line14.position();
        line18.position();

        //contact
        const dx_contact = (Math.random() - 0.5) * 50;
        const dy_contact = (Math.random() - 0.5) * 50;
        posX_contact = Math.max(0, Math.min(window.innerWidth - element_contact.offsetWidth, posX_contact + dx_contact));
        posY_contact = Math.max(0, Math.min(window.innerHeight - element_contact.offsetHeight, posY_contact + dy_contact));
        element_contact.style.left = `${posX_contact}px`;
        element_contact.style.top = `${posY_contact}px`;

        line12.position();

        //press
        const dx_press = (Math.random() - 0.5) * 50;
        const dy_press = (Math.random() - 0.5) * 50;
        posX_press = Math.max(0, Math.min(window.innerWidth - element_press.offsetWidth, posX_press + dx_press));
        posY_press = Math.max(0, Math.min(window.innerHeight - element_press.offsetHeight, posY_press + dy_press));
        element_press.style.left = `${posX_press}px`;
        element_press.style.top = `${posY_press}px`;

        line16.position();

      }, 50);
    }

    function stopNoiseMovement() {
      clearInterval(noiseInterval);
      noiseInterval = null;
    }

    element_randomNoise.addEventListener('click', () => {
      if (noiseInterval) {
        stopNoiseMovement();
        element_randomNoise.textContent = 'randN';
      } else {
        startNoiseMovement();
        element_randomNoise.textContent = 'stopN';
      }
    });

// RANDOM BUTTON NOISE END RANDOM BUTTON NOISE END



// RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START

/* E 06 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-06").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line26.position();
    line27.position();
  });
});

/* E 05 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-05").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line11.position();
    line12.position();
  });
});

/* E 04 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-04").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line20.position();
  });
});

/* E 03 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-03").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line17.position();
    line22.position();
    line21.position();
    line26.position();
  });
});

/* E 02 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-02").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line10.position();
  });
});

/* E 01 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#e-01").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line9.position();
    line22.position();
  });
});

/* P 01 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-01").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line3.position();
    line2.position();
    line4.position();
  });
});

/* P 02 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-02").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line6.position();
    line4.position();
  });
});

/* P 03 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-03").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line15.position();
    line6.position();
    line7.position();
  });
});

/* P 04 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 5;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-04").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line1.position();
    line2.position();
    line8.position();
  });
});

/* P 05 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 5;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-05").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line7.position();
    line13.position();
  });
});

/* P 06 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 5;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-06").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line8.position();
  });
});

/* P 07 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 5;   // Maximum scale (200% of original size)
    var noiseFactor = 5; // Adjust noise factor for randomness
    
    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactor + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-07").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line14.position();
    line13.position();
  });
});

/* P 08 RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactorX = 5; // Adjust noise factor for randomness
    var noiseFactorY = 20; // Adjust noise factor for randomness

    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactorX + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactorY + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#p-08").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line14.position();
    line18.position();
  });
});

/* PRESS RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactorX = 5; // Adjust noise factor for randomness
    var noiseFactorY = 20; // Adjust noise factor for randomness

    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactorX + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactorY + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#press").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line16.position();
  });
});

/* CONTACT RANDOMISATION */
$(document).ready(function() {
  $("#randomise").on("click", function() {
    var minScale = 0.5; // Minimum scale (50% of original size)
    var maxScale = 10;   // Maximum scale (200% of original size)
    var noiseFactorX = 5; // Adjust noise factor for randomness
    var noiseFactorY = 20; // Adjust noise factor for randomness

    // Generate a random scale factor within the defined limits X
    var randomScaleX = Math.random() * noiseFactorX + 1; // Random scale between 1 and 1.5
    randomScaleX = Math.min(Math.max(randomScaleX, minScale), maxScale);

    // Generate a random scale factor within the defined limits X
    var randomScaleY = Math.random() * noiseFactorY + 1; // Random scale between 1 and 1.5
    randomScaleY = Math.min(Math.max(randomScaleY, minScale), maxScale);
    
    // Apply the scale transformation with animation
    $("#contact").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line12.position();
  });
});

// RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END





//RANDOM CHARACTER CHANGE ON HOVER
const button = document.getElementById('randomFontButton');
const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman", "Comic Sans MS", "Impact", "Lucida Console", "Tahoma", "Trebuchet MS"];

button.innerHTML = button.textContent.split('').map(letter => `<span>${letter}</span>`).join('');

let intervals = [];

button.addEventListener('mouseover', () => {
    const letters = button.querySelectorAll('span');
    
    letters.forEach(letter => {
        const intervalId = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            letter.style.fontFamily = randomFont;
        }, 100); // Change the speed by adjusting the interval time (in milliseconds)

        intervals.push(intervalId);
    });
});

button.addEventListener('mouseout', () => {
    // Clear all intervals
    intervals.forEach(intervalId => clearInterval(intervalId));
    intervals = []; // Clear the array after stopping the intervals

    // Reset the font of each letter to the default font
    const letters = button.querySelectorAll('span');
    letters.forEach(letter => {
        letter.style.fontFamily = ""; // Resets to the inherited or default font
    });
});






