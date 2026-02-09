//font loop

//var fonts = ['times', 'verdana', 'arial'];
//var currentFont = 0
//function changeFont() {
//document.body.style.fontFamily = fonts[currentFont++ % fonts.length]
//}
//setInterval(changeFont, 100);



//button color change
$("#color").on("click", function () {
  const ids = [
    "#bio", "#randomise", "#contact", "#press",
    "#p-08", "#p-07", "#p-06", "#p-05", "#p-04", "#p-03", "#p-02", "#p-01",
    "#e-01", "#e-02", "#e-03", "#e-04", "#e-05", "#randomLoc", "#randomNoise", "#reset_randomise"
  ];

  const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  ids.forEach((selector) => {
    $(selector).animate().css({ backgroundColor: randomHex() }, 2500);
  });
});


// reload on load for LeaderLine problem on Safari
(function () {
  window.onpageshow = function (event) {
    if (event.persisted) window.location.reload();
  };
})();

//elements
// Cache endpoints for LeaderLine
var element_baris, element_e01, element_e02, element_e03, element_e04, element_e05, element_e06,
    element_p01, element_p02, element_p03, element_p04, element_p05, element_p06, element_p07, element_p08,
    element_bio, element_contact, element_press,
    element_randomise, element_reset_randomise, element_color,
    element_randomLoc, element_randomNoise;

function cacheElements() {
  const ids = [
    'baris-cavusoglu', 'e-01', 'e-02', 'e-03', 'e-04', 'e-05', 'e-06',
    'p-01', 'p-02', 'p-03', 'p-04', 'p-05', 'p-06', 'p-07', 'p-08',
    'bio', 'contact', 'press',
    'randomise', 'reset_randomise', 'color', 'randomLoc', 'randomNoise'
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    switch (id) {
      case 'baris-cavusoglu': element_baris = el; break;
      case 'e-01': element_e01 = el; break;
      case 'e-02': element_e02 = el; break;
      case 'e-03': element_e03 = el; break;
      case 'e-04': element_e04 = el; break;
      case 'e-05': element_e05 = el; break;
      case 'e-06': element_e06 = el; break;
      case 'p-01': element_p01 = el; break;
      case 'p-02': element_p02 = el; break;
      case 'p-03': element_p03 = el; break;
      case 'p-04': element_p04 = el; break;
      case 'p-05': element_p05 = el; break;
      case 'p-06': element_p06 = el; break;
      case 'p-07': element_p07 = el; break;
      case 'p-08': element_p08 = el; break;
      case 'bio': element_bio = el; break;
      case 'contact': element_contact = el; break;
      case 'press': element_press = el; break;
      case 'randomise': element_randomise = el; break;
      case 'reset_randomise': element_reset_randomise = el; break;
      case 'color': element_color = el; break;
      case 'randomLoc': element_randomLoc = el; break;
      case 'randomNoise': element_randomNoise = el; break;
    }
  });
}

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  const __dateEl = document.querySelector('#date');
  if (__dateEl) __dateEl.textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

cacheElements();


// --- LeaderLine safe init (prevents one bad endpoint from killing the whole script) ---
function __noopLine() { return {position:function(){}, show:function(){}, hide:function(){}, remove:function(){}, setOptions:function(){} }; }

var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,line26,line27; // keep these in global scope for anim-event.min.js etc

function __safeNewLine(name, createFn) {
  try {
    var l = createFn();
    return l || __noopLine();
  } catch (e) {
    console.warn('[LeaderLine] failed to create', name, e);
    return __noopLine();
  }
}


// --- Safari handling for LeaderLine labels ---
// Safari/WebKit sometimes throws "The provided value is non-finite" when LeaderLine tries to measure SVG text.
// We disable native middleLabel captions on Safari and render HTML labels anchored to the line's SVG path instead.
var __LL_IS_SAFARI = (function () {
  try {
    var ua = navigator.userAgent || '';
    return /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
  } catch (e) { return false; }
})();

function __llCaption(text) {
  try {
    if (__LL_IS_SAFARI) return null;
    return LeaderLine.captionLabel(String(text), { fontSize: '14px' });
  } catch (e) { return null; }
}

// --- HTML label layer (Safari only) ---
var __LL_LABEL_LAYER_ID = 'll-label-layer';
var __LL_LABEL_STYLE_ID = 'll-label-style';
var __LL_LABELS = []; // { line, el, text }

function __llEnsureLabelLayer() {
  var layer = document.getElementById(__LL_LABEL_LAYER_ID);
  if (!layer) {
    layer = document.createElement('div');
    layer.id = __LL_LABEL_LAYER_ID;
    layer.style.position = 'fixed';
    layer.style.left = '0';
    layer.style.top = '0';
    layer.style.width = '100vw';
    layer.style.height = '100vh';
    layer.style.pointerEvents = 'none';
    layer.style.zIndex = '2147483647';
    document.body.appendChild(layer);
  }

  if (!document.getElementById(__LL_LABEL_STYLE_ID)) {
    var st = document.createElement('style');
    st.id = __LL_LABEL_STYLE_ID;
    st.textContent =
      '#'+__LL_LABEL_LAYER_ID+' .ll-line-label{' +
      'position:fixed;' +
      'left:0;top:0;' +
      'transform:translate(-50%,-50%);' +
      'font-size:14px;' +
      'line-height:1;' +
      'color:#000;' +
      'background:rgba(255,255,255,0.0);' +
      'padding:0;' +
      'margin:0;' +
      'white-space:nowrap;' +
      'user-select:none;' +
      'pointer-events:none;' +
      '}' +
      '#'+__LL_LABEL_LAYER_ID+'{mix-blend-mode:normal;}';
    document.head.appendChild(st);
  }
  return layer;
}

function __llPathForLine(line) {
  try {
    if (!line || !line._id) return null;
    // LeaderLine uses APP_ID "leader-line" and creates path id: leader-line-<id>-line-path
    return document.getElementById('leader-line-' + line._id + '-line-path');
  } catch (e) { return null; }
}


function __llMidpointScreenXY(line) {
  var path = __llPathForLine(line);
  if (!path) return null;

  try {
    // Prefer true midpoint along the SVG path (works for L / S routed lines)
    if (path.getTotalLength && path.getPointAtLength) {
      var len = path.getTotalLength();
      if (isFinite(len) && len > 0) {
        var p = path.getPointAtLength(len * 0.5);

        // Convert SVG coords -> screen coords (robust under zoom)
        var svg = path.ownerSVGElement;
        if (svg && svg.createSVGPoint) {
          var pt = svg.createSVGPoint();
          pt.x = p.x; pt.y = p.y;

          var ctm = path.getScreenCTM ? path.getScreenCTM() : (svg.getScreenCTM ? svg.getScreenCTM() : null);
          if (ctm) {
            var sp = pt.matrixTransform(ctm);
            if (sp && isFinite(sp.x) && isFinite(sp.y)) {
              return { x: sp.x, y: sp.y };
            }
          }
        }
      }
    }

    // Fallback: screen-space bounding box center
    if (path.getBoundingClientRect) {
      var r = path.getBoundingClientRect();
      if (r && isFinite(r.left) && isFinite(r.top) && isFinite(r.width) && isFinite(r.height)) {
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }
    }

    return null;
  } catch (e) { return null; }
}


function __llRegisterSafariLabel(line, text) {
  try {
    if (!__LL_IS_SAFARI) return;
    if (!line) return;
    var layer = __llEnsureLabelLayer();
    var el = document.createElement('div');
    el.className = 'll-line-label';
    el.textContent = String(text);
    layer.appendChild(el);
    __LL_LABELS.push({ line: line, el: el, text: String(text) });
  } catch (e) {}
}

function __llUpdateSafariLabels() {
  if (!__LL_IS_SAFARI) return;
  for (var i = 0; i < __LL_LABELS.length; i++) {
    var it = __LL_LABELS[i];
    if (!it || !it.el) continue;
    var xy = __llMidpointScreenXY(it.line);
    if (!xy) {
      it.el.style.display = 'none';
      continue;
    }
    it.el.style.display = 'block';
    it.el.style.left = xy.x + 'px';
    it.el.style.top = xy.y + 'px';
  }
}

function __llPatchPositionForSafari() {
  if (!__LL_IS_SAFARI) return;
  if (!window.LeaderLine || !LeaderLine.prototype || LeaderLine.prototype.__llSafariLabelPatched) return;
  var orig = LeaderLine.prototype.position;
  if (typeof orig !== 'function') return;
  LeaderLine.prototype.position = function () {
    var r = orig.apply(this, arguments);
    // Update labels after line recalculates geometry
    try { __llUpdateSafariLabels(); } catch (e) {}
    return r;
  };
  LeaderLine.prototype.__llSafariLabelPatched = true;
}


// --- Keep LeaderLine synced with DOM transforms/position changes (randP/randS/randN/hover/zoom) ---
function __positionAllLines() {
  for (var i = 1; i <= 27; i++) {
    try {
      var ln = window['line' + i];
      if (ln && typeof ln.position === 'function') ln.position();
    } catch (e) {}
  }
  try { if (typeof __llUpdateAllLabelsNow === 'function') __llUpdateAllLabelsNow(); } catch (e) {}
}

(function __startLeaderLineAutoReposition(){
  var last = 0;
  function tick(ts){
    if (!last || (ts - last) > 50) {
      last = ts;
      try { __positionAllLines(); } catch(e) {}
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

function __initLeaderLines() {
  if (!window.LeaderLine) {
    console.warn('[LeaderLine] library not loaded');
    return;
  }

line1 = __safeNewLine('line1', function(){ return new LeaderLine(element_baris, element_p04, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 1'),
color: 'black',
}); });
line2 = __safeNewLine('line2', function(){ return new LeaderLine(element_p04, element_p01, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 2'),
color: 'black'
}); });
line3 = __safeNewLine('line3', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 50, y:35}), element_p01, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 3'),
color: 'black'
}); });
if (line3) line3.setOptions({startSocket: 'bottom', endSocket: 'left'});
if (line3) line3.path = 'grid';

line4 = __safeNewLine('line4', function(){ return new LeaderLine(element_p01, element_p02, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 4'),
color: 'black'
}); });
if (line4) line4.path = 'grid';

line5 = __safeNewLine('line5', function(){ return new LeaderLine(element_baris, element_bio, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 5'),
color: 'black'
}); });
if (line5) line5.setOptions({startSocket: 'right', endSocket: 'top'});
if (line5) line5.path = 'grid';

line6 = __safeNewLine('line6', function(){ return new LeaderLine(element_p02, element_p03, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 6'),
color: 'black'
}); });
if (line6) line6.setOptions({startSocket: 'top', endSocket: 'bottom'});

line7 = __safeNewLine('line7', function(){ return new LeaderLine(element_p03, element_p05, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 7'),
color: 'black'
}); });
if (line7) line7.setOptions({startSocket: 'top', endSocket: 'top'});
if (line7) line7.path = 'grid';

line8 = __safeNewLine('line8', function(){ return new LeaderLine(element_p04, element_p06, {
dash: {animation: true},
/*dash:true,*/
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 8'),
color: 'black'
}); });
if (line8) line8.setOptions({startSocket: 'right', endSocket: 'bottom'});
if (line8) line8.path = 'grid';

line9 = __safeNewLine('line9', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 30, y:35}), element_e01, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 9'),
color: 'black'
}); });
if (line9) line9.setOptions({startSocket: 'bottom', endSocket: 'bottom'});
if (line9) line9.path = 'grid';

line10 = __safeNewLine('line10', function(){ return new LeaderLine(element_baris, element_e02, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 10'),
color: 'black'
}); });
line11 = __safeNewLine('line11', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 70, y:35}), element_e05, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 11'),
color: 'black'
}); });
if (line11) line11.setOptions({startSocket: 'bottom', endSocket: 'left'});
if (line11) line11.path = 'grid';

line12 = __safeNewLine('line12', function(){ return new LeaderLine(element_e05, element_contact, {
dash:false,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 12'),
color: 'black'
}); });
if (line12) line12.setOptions({startSocket: 'bottom', endSocket: 'top'});

line13 = __safeNewLine('line13', function(){ return new LeaderLine(element_p05, element_p07, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 13'),
color: 'black'
}); });
line14 = __safeNewLine('line14', function(){ return new LeaderLine(element_p07, element_p08, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 14'),
color: 'black'
}); });
line15 = __safeNewLine('line15', function(){ return new LeaderLine(element_p03, element_randomLoc, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 15'),
color: 'black'
}); });
if (line15) line15.setOptions({startSocket: 'left', endSocket: 'top'});
if (line15) line15.path = 'grid';

line16 = __safeNewLine('line16', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:70}), element_press, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 16'),
color: 'black'
}); });
if (line16) line16.setOptions({startSocket: 'left', endSocket: 'top'});
if (line16) line16.path = 'grid';

line17 = __safeNewLine('line17', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 10, y:35}), element_e03, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 17'),
color: 'black'
}); });
if (line17) line17.setOptions({startSocket: 'bottom', endSocket: 'left'});
if (line17) line17.path = 'grid';

line18 = __safeNewLine('line18', function(){ return new LeaderLine(element_p08, element_color, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 18'),
color: 'black'
}); });
if (line18) line18.setOptions({startSocket: 'left', endSocket: 'right'});

line19 = __safeNewLine('line19', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 75, y:0}), element_color, {
dash: {animation: true},
size:2,
startPlug: 'hand',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 19'),
color: 'black'
}); });
if (line19) line19.setOptions({startSocket: 'top', endSocket: 'top'});
if (line19) line19.path = 'magnet';

line20 = __safeNewLine('line20', function(){ return new LeaderLine(element_bio, element_e04, {
size:2,
startPlug: 'hand',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 20'),
color: 'black'
}); });
if (line20) line20.setOptions({startSocket: 'right', endSocket: 'left'});

line21 = __safeNewLine('line21', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:30}), element_e03, {
size:2,
startPlug: 'arrow2',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 21'),
color: 'black'
}); });
if (line21) line21.path = 'grid';
if (line21) line21.setOptions({startSocket: 'left', endSocket: 'right'});

line22 = __safeNewLine('line22', function(){ return new LeaderLine(element_e01, element_e03, {
size:2,
dash: {animation: true},
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: __llCaption('line 22'),
color: 'black'
}); });
if (line22) line22.path = 'grid';
if (line22) line22.setOptions({startSocket: 'right', endSocket: 'top'});

line23 = __safeNewLine('line23', function(){ return new LeaderLine(element_randomise, element_reset_randomise, {
  size:2,
  dash:false,
  startPlug: 'square',
  endPlug: 'hand',
  /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
  middleLabel: __llCaption('line 23'),
  color: 'black'
  }); });
if (line23) line23.path = 'grid';
  line23.setOptions({startSocket: 'left', endSocket: 'left'});

  line24 = __safeNewLine('line24', function(){ return new LeaderLine(element_color, element_reset_randomise, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: __llCaption('line 24'),
    color: 'black'
    }); });
if (line24) line24.path = 'grid';
    line24.setOptions({startSocket: 'top', endSocket: 'right'});

  line25 = __safeNewLine('line25', function(){ return new LeaderLine(element_randomNoise, element_reset_randomise, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: __llCaption('line 25'),
    color: 'black'
    }); });
if (line25) line25.path = 'magnet';

  line26 = __safeNewLine('line26', function(){ return new LeaderLine(element_e03, element_e06, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: __llCaption('line 26'),
    color: 'black'
    }); });
if (line26) line26.path = 'grid';
    line26.setOptions({startSocket: 'bottom', endSocket: 'left'});

  line27 = __safeNewLine('line27', function(){ return new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:60}), element_e06, {
    dash: {animation: true},
    size:2,
    startPlug: 'square',
    endPlug: 'hand',
    /*dropShadow: {dx: 30, dy: 30, blur: 5},*/
    middleLabel: __llCaption('line 27'),
    color: 'black'
    }); });
if (line27) line27.path = 'grid';
    line27.setOptions({startSocket: 'left', endSocket: 'right'});
    

// Safari: render line names as HTML labels (native LeaderLine captions are disabled on Safari)
if (__LL_IS_SAFARI) {
  __llPatchPositionForSafari();
  // clear any existing labels (in case of reload)
  __LL_LABELS = [];
  var layer = document.getElementById(__LL_LABEL_LAYER_ID);
  if (layer) layer.innerHTML = '';

  __llRegisterSafariLabel(line1, 'line 1');
  __llRegisterSafariLabel(line2, 'line 2');
  __llRegisterSafariLabel(line3, 'line 3');
  __llRegisterSafariLabel(line4, 'line 4');
  __llRegisterSafariLabel(line5, 'line 5');
  __llRegisterSafariLabel(line6, 'line 6');
  __llRegisterSafariLabel(line7, 'line 7');
  __llRegisterSafariLabel(line8, 'line 8');
  __llRegisterSafariLabel(line9, 'line 9');
  __llRegisterSafariLabel(line10, 'line 10');
  __llRegisterSafariLabel(line11, 'line 11');
  __llRegisterSafariLabel(line12, 'line 12');
  __llRegisterSafariLabel(line13, 'line 13');
  __llRegisterSafariLabel(line14, 'line 14');
  __llRegisterSafariLabel(line15, 'line 15');
  __llRegisterSafariLabel(line16, 'line 16');
  __llRegisterSafariLabel(line17, 'line 17');
  __llRegisterSafariLabel(line18, 'line 18');
  __llRegisterSafariLabel(line19, 'line 19');
  __llRegisterSafariLabel(line20, 'line 20');
  __llRegisterSafariLabel(line21, 'line 21');
  __llRegisterSafariLabel(line22, 'line 22');
  __llRegisterSafariLabel(line23, 'line 23');
  __llRegisterSafariLabel(line24, 'line 24');
  __llRegisterSafariLabel(line25, 'line 25');
  __llRegisterSafariLabel(line26, 'line 26');
  __llRegisterSafariLabel(line27, 'line 27');

  // initial positioning (after layout)
  setTimeout(__llUpdateSafariLabels, 0);
  window.addEventListener('scroll', __llUpdateSafariLabels, true);
  window.addEventListener('resize', __llUpdateSafariLabels, true);
}

}

window.addEventListener('load', function () { setTimeout(__initLeaderLines, 50); });


// Consolidate many repetitive hover listeners using a data-driven approach
function safePosition(line) { try { line && line.position && line.position(); } catch (e) {} }

function addHoverHandlers(id, lines) {
  const el = document.getElementById(id);
  if (!el) return;
  const fn = AnimEvent && AnimEvent.add ? AnimEvent.add(function () { lines.forEach(safePosition); }) : function () { lines.forEach(safePosition); };
  el.addEventListener('mouseover', fn, false);
  el.addEventListener('mouseout', fn, false);
}

// mapping of element id => lines to reposition on hover
const hoverBindings = {
  'p-05': [line7, line13],
  'p-03': [line15, line7, line6],
  'p-06': [line8],
  'p-07': [line13, line14],
  'p-08': [line18, line14],
  'p-04': [line1, line2, line8],
  'p-02': [line4, line6],
  'p-01': [line3, line4, line2],
  'e-01': [line9, line22],
  'e-02': [line10],
  'e-03': [line17, line21, line22, line26],
  'e-04': [line20],
  'e-05': [line11, line12],
  'e-06': [line26, line27],
  'contact': [line12],
  'press': [line16]
};

Object.keys(hoverBindings).forEach(id => addHoverHandlers(id, hoverBindings[id] || []));


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

// RANDOM BUTTON POSITION START
(function bindRandomPosition() {
  // Data-driven replacement for many repeated click listeners.
  const items = [
    { el: () => element_e01, lines: [line9, line22] },
    { el: () => element_e02, lines: [line10] },
    { el: () => element_e03, lines: [line17, line22, line21, line26] },
    { el: () => element_e04, lines: [line20] },
    { el: () => element_e05, lines: [line11, line12] },
    { el: () => element_e06, lines: [line26, line27] },

    { el: () => element_p01, lines: [line2, line3, line4] },
    { el: () => element_p02, lines: [line4, line6] },
    { el: () => element_p03, lines: [line15, line6, line7] },
    { el: () => element_p04, lines: [line1, line2, line8] },
    { el: () => element_p05, lines: [line7, line13] },
    { el: () => element_p06, lines: [line8] },
    { el: () => element_p07, lines: [line13, line14] },
    { el: () => element_p08, lines: [line14, line18] },

    { el: () => element_press, lines: [line16] },
    { el: () => element_contact, lines: [line12] },
  ];

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const repositionLine = (ln) => { try { ln && ln.position && ln.position(); } catch (_) {} };
  element_randomLoc && element_randomLoc.addEventListener("click", () => {
    items.forEach(({ el, lines }) => {
      const element = el();
      if (!element) return;

      const maxX = window.innerWidth - element.offsetWidth;
      const maxY = window.innerHeight - element.offsetHeight;

      const x = Math.floor(Math.random() * clamp(maxX, 0, maxX));
      const y = Math.floor(Math.random() * clamp(maxY, 0, maxY));

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      lines.forEach(repositionLine);
    });
  });
})();

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

(function bindRandomScale() {
  // Consolidated replacement for many repeated $(document).ready + #randomise click handlers.
  const scaleItems = [
    { selector: "#e-06", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line26, line27] },
    { selector: "#e-05", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line11, line12] },
    { selector: "#e-04", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line20] },
    { selector: "#e-03", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line17, line22, line21, line26] },
    { selector: "#e-02", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line10] },
    { selector: "#e-01", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line9, line22] },

    { selector: "#p-01", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line3, line2, line4] },
    { selector: "#p-02", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line6, line4] },
    { selector: "#p-03", min: 0.5, max: 10, nx: 5, ny: 5, lines: [line15, line6, line7] },
    { selector: "#p-04", min: 0.5, max: 5,  nx: 5, ny: 5, lines: [line1, line2, line8] },
    { selector: "#p-05", min: 0.5, max: 5,  nx: 5, ny: 5, lines: [line7, line13] },
    { selector: "#p-06", min: 0.5, max: 5,  nx: 5, ny: 5, lines: [line8] },
    { selector: "#p-07", min: 0.5, max: 5,  nx: 5, ny: 5, lines: [line14, line13] },

    { selector: "#p-08", min: 0.5, max: 10, nx: 5, ny: 20, lines: [line14, line18] },
    { selector: "#press", min: 0.5, max: 10, nx: 5, ny: 20, lines: [line16] },
    { selector: "#contact", min: 0.5, max: 10, nx: 5, ny: 20, lines: [line12] },
  ];

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const repositionLine = (ln) => { try { ln && ln.position && ln.position(); } catch (_) {} };

  $("#randomise").on("click", function () {
    scaleItems.forEach(({ selector, min, max, nx, ny, lines }) => {
      // Match original behavior: randomScale = Math.random() * noiseFactor + 1 (clamped)
      let randomScaleX = clamp(Math.random() * nx + 1, min, max);
      let randomScaleY = clamp(Math.random() * ny + 1, min, max);

      $(selector).css({
        transition: "transform 0s ease",
        transform: `scale(${randomScaleX}, ${randomScaleY})`,
      });

      lines.forEach(repositionLine);
    });
  });
})();

// RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END RANDOM BUTTON SCALE END
 
