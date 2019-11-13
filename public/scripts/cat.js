function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get('https://api.thecatapi.com/v1/images/search?limit=6&size=full', function(data) {
  console.log(data)
  var images = document.querySelectorAll('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = data[i].url;
  }
});

document.querySelector('body').style.background = 'hsl(' + Math.random() * 360 + ', 90%, 95%)';
