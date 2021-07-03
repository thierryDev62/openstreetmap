/*
* Brouet Thierry
*
* 2021
*  */

let lat = 50.4676822;
let lng = 2.5603700000000345;
let map = null;

// Map initialization
function initMap() {

    map = L.map('map').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>&nbsp&nbsp',
        minZoom: 10,
        maxZoom: 18,
    })
        .addTo(map);

    // Custom Marker
    let icon = L.icon({
        iconUrl: 'src/img/icon.png',
        iconSize: [65, 65],
        iconAnchor: [32, 60],
        popupAnchor: [-1, -60]
    });

    let marker = L.marker([lat, lng], {icon: icon})
        .addTo(map);

    marker.addEventListener("mouseover", () => {
        marker.bindPopup("<h3>Marker test</h3><br>Here is the text of marker test")
            .openPopup();
    });

    marker.addEventListener("mouseout", () => {
        marker.closePopup();
    });
}

window.onload = function() {
    initMap();
};