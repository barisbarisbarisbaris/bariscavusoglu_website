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

  $("#i").animate().css({
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
element_images = document.getElementById('images'),
element_randomise = document.getElementById('randomise'),
element_reset_randomise = document.getElementById('reset_randomise'),
element_color = document.getElementById('color');

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

var line11 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 70, y:35}), element_images, {
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

var line12 = new LeaderLine(element_images, element_contact, {
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

var line15 = new LeaderLine(element_p03, element_randomise, {
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

var line16 = new LeaderLine(element_bio, element_press, {
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


/* E 04 */
var listen_e4 = document.getElementById('e-04');

listen_e4.addEventListener('mouseover', AnimEvent.add(function() {
line20.position();
}), false);
listen_e4.addEventListener('mouseout', AnimEvent.add(function() {
line20.position();
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




// RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START RANDOM BUTTON SCALE START

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
    $("#press").css({
      transition: 'transform 0s ease',
      transform: 'scale(' + randomScaleX + ', ' + randomScaleY + ')'

    });
    line16.position();
  });
});
// RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END





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