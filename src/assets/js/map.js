

   // Where you want to render the map.
var element = document.getElementById('osm-map1');

// Height has to be set. You can do this in CSS too.
element.style = 'height:400px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.


var target = L.latLng('27.85851913339213', '-82.32715974444365');

// Set map's center to target with zoom 14.
map.setView(target, 16);

// Place a marker on the same location.
L.marker(target).addTo(map);
