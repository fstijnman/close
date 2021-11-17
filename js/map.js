let venues = [{
    "name": "JetBrains Techlab",
    "description": "Gallery for Humanity and Technology",
    "addressLine1": "Plantage Middenlaan 21",
    "latitude": "52.36703480665766",
    "longitude": "4.910513670122589",
    "city": "Amsterdam",
    "postalCode": "1018DB",
    "email": "info@jetbrainstechlab.com",
    "phone": "+31202402734"
},
{
    "name": "Museum of the Mind",
    "description": "Outsider art, in which artists show their imaginative inner world.",
    "addressLine1": "Amstel 51",
    "latitude": "52.3681145",
    "longitude": "4.9025139,15",
    "city": "Amsterdam",
    "postalCode": "1018EJ",
    "email": "info@museumvandegeest.nl",
    "phone": "+31235410681"
}]

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

    for (let i = 0; i < venues.length; i++) {
        const marker = new google.maps.Marker({
            position: { lat: parseFloat(venues[i].latitude), lng: parseFloat(venues[i].longitude) },
            map: map,
            title: venues[i].name
        });
    };

    // new google.maps.Marker({
    //     position: { lat: parseFloat(venue.latitude), lng: parseFloat(venue.longitude) },
    //     map,
    //     title: venue.name
    // });

};