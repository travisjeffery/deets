var json = require('deets')();
var stringify = require('json-stable-stringify');
var text = stringify(json, { space: 2, cmp: cmp });

document.getElementById("deets").innerText = text;

// so the userAgent key shows up at the bottom of the demo
function cmp(a, b) {
  if (a.key == 'userAgent') return 1;
  if (b.key == 'userAgent') return -1;
  return a.key < b.key ? -1 : 1;
}
