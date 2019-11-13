// change background color
document.querySelector('body').style.background = 'hsl(' + Math.random() * 360 + ', 90%, 95%)';

// change text color
var headers = ['h1', 'h2', 'h3'];
headers.forEach(function (header) {
  var hue = Math.random() * 360;
  var saturation = 90;
  var lightness = Math.random() * 20 + 30;
  document.querySelector(header).style.color = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
})