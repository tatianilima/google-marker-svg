var map;

function initialize() {
	showMap("-18.8800397", "-47.05878999999999", 14);        
}

function showMap(latitude, longitude, zoom) {	
  var mapDiv = document.getElementById("map");
  var latlng = new google.maps.LatLng(latitude, longitude);

  var mapOptions = {
    zoom: zoom,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(mapDiv, mapOptions);
  new google.maps.Marker({
  position: latlng,
  map: map,
  icon: {    
    url: drawMarker("#000")
  }
});
}

function drawMarker(color){
	return 'data:image/svg+xml;utf-8, \
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25.000000pt" height="60.000000pt" viewBox="0 0 96.000000 111.000000" preserveAspectRatio="xMidYMid meet"> \
      	<g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)" fill="'+color+'" stroke="none"> \
        <path fill="'+color+'" stroke="white" stroke-width="1.5" d="M115 968 c-3 -7 -4 -168 -3 -358 l3 -345 83 -3 82 -3 89 -89 c49 -50 94 -90 101 -90 7 0 52 40 101 90 l89 89 82 3 83 3 0 355 0 355 -353 3 c-277 2 -354 0 -357 -10z" ></path> \
        </g> \
      </svg>';
}

//Link original: https://developers.google.com/maps/documentation/javascript/symbols?hl=pt-br
