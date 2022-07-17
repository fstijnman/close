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
  const icons = {
    regular: {
      icon: "icons/map_icon.png",
    },
    on_hover: {
      icon: "icons/map_icon_hover.png",
    },
  };

  var width = 36;
  var height = 20;

  for (let i = 0; i < venues.length; i++) {
    const venue = venues[i];

    let marker = new google.maps.Marker({
      position: {
        lat: parseFloat(venue.latitude),
        lng: parseFloat(venue.longitude),
      },
      map: map,
      title: venue.name,
      icon: icons["regular"].icon,
    });

    google.maps.event.addListener(marker, "mouseover", function () {
      marker.setIcon(icons["on_hover"].icon);
    });

    google.maps.event.addListener(marker, "mouseout", function () {
      marker.setIcon(icons["regular"].icon);
    });
  }
}

window.initMap = initMap;
