

function initMap() {
    // Create the map.

    var myMapCenter = {
        lat: 52.3667996,
        lng: 4.8947421
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        mapId: "a79d604461467bf5",
        disableDefaultUI: true,
        zoom: 14,
        center: myMapCenter,
    });

}