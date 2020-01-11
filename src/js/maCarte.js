// Script d'affichage de la carte openStreetMap

// On initialise la latitude et la longitude de l'Agence et du bien
let latAgence = 50.4676822;
let lonAgence = 2.5603700000000345;
let latBien = 50.467886;
let lonBien = 2.558023;
let macarte = null;

// Fonction d'initialisation de la carte
function initMap() {

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([latAgence, lonAgence], 14);

    
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>&nbsp&nbsp',
        minZoom: 10,
        maxZoom: 18
    }).addTo(macarte);

    L.Routing.control({
        language: 'fr',
		formatter: new L.Routing.Formatter({
			language: 'fr' 
		}),

        // Itinéraire
        waypoints: [
          L.latLng(latAgence, lonAgence),
          L.latLng(latBien, lonBien)
        ]
      }).addTo(macarte);

    // Marqueur agence
    let iconeAgence = L.icon({
        iconUrl: 'src/img/icone-lacr-immo.png',
        iconSize: [65, 65],
        iconAnchor: [32, 60],
        popupAnchor: [-1, -60]
    });

    let markerAgence = L.marker([latAgence, lonAgence], {icon: iconeAgence}).addTo(macarte);
    
    markerAgence.addEventListener("mouseover", () => {
        markerAgence.bindPopup("<h3>Lacr Immo</h3><br>10, rue Roger Salengro<br>62940 Haillicourt<br>03 00 00 00 00").openPopup();
    });

    markerAgence.addEventListener("mouseout", () => {
        markerAgence.closePopup();
    });

    // Marqueur Bien
    let iconeBien = L.icon({
        iconUrl: 'src/img/icone-bien.png',
        iconSize: [65, 65],
        iconAnchor: [32, 60],
        popupAnchor: [-1, -60]
    });


    let markerBien = L.marker([latBien, lonBien], {icon: iconeBien}).addTo(macarte);
    
    markerBien.addEventListener("mouseover", () => {
        markerBien.bindPopup("<h3>Superbe Maison Abandonnée</h3><br>Rue de Fez<br>62940 Haillicourt").openPopup();
    });

    markerBien.addEventListener("mouseout", () => {
        markerBien.closePopup();
    });

}

$(function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
});