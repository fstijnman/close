let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.3700777, lng: 4.9005954 },
    disableDefaultUI: true,
    zoom: 13,
  });

  setMarkers(map, venue_data);
}

function setMarkers(map, venues) {
    for (let i = 0; i < venues.length; i++) {
        const venue = venues[i];

        new google.maps.Marker({
            position: { lat: parseFloat(venue.latitude), lng: parseFloat(venue.longitude) },
            map: map,
            title: venue.name
        })
    }
}

window.initMap = initMap;