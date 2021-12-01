let venues = [{
    "name": "JetBrains Techlab",
    "description": "Gallery for Humanity and Technology",
    "addressLine1": "Plantage Middenlaan 21",
    "latitude": "52.36703480665766",
    "longitude": "4.910513670122589",
    "city": "Amsterdam",
    "postalCode": "1018DB",
    "email": "info@jetbrainstechlab.com",
    "website": "https://jetbrainstechlab.com/",
    "phone": "+31202402734"
},
{
    "name": "Museum of the Mind",
    "description": "Outsider art, in which artists show their imaginative inner world.",
    "addressLine1": "Amstel 51",
    "latitude": "52.3681145",
    "longitude": "4.9025139",
    "city": "Amsterdam",
    "postalCode": "1018EJ",
    "email": "info@museumvandegeest.nl",
    "website": "https://museumvandegeest.nl/",
    "phone": "+31235410681"
},
{
    "name": "Luther Museum",
    "description": "​The Lutheran Museum of Amsterdam shows how a religious community made a new start, with its own manner of believing, and built on care for one another.",
    "addressLine1": "Nieuwe Keizersgracht 570",
    "latitude": "52.3655353",
    "longitude": "4.9089125",
    "city": "Amsterdam",
    "postalCode": "1018VG",
    "email": "info@luthermuseum.nl",
    "website":"https://luthermuseum.nl/",
    "phone": "+31202142112"
},
{
    "name": "Museum Kromhout",
    "description": "Museum 't Kromhout provides you with a good and complete overview of the technical development of the engines built here (mainly Kromhout engines) in the Kromhout Engine Factory, in Amsterdam, from 1895.",
    "addressLine1": "Hoogte Kadijk 147",
    "latitude": "52.3679264",
    "longitude": "4.9174555",
    "city": "Amsterdam",
    "postalCode": "1018BJ",
    "email": "info@kromhoutmuseum.nl",
    "website":"https://kromhoutmuseum.nl/",
    "phone": "+31620329927"
},
{
    "name": "Cacaomuseum",
    "description": "Our Chocolate experiences take your chocolate knowledge to the next level. Experience how chocolate is made from bean-to-bar in one of our famous workshops.",
    "addressLine1": "Czaar Peterstraat 175",
    "latitude": "52.3713904",
    "longitude": "4.9290733",
    "city": "Amsterdam",
    "postalCode": "1018PK",
    "email": "info@cacaomuseum.nl",
    "website": "https://cacaomuseum.nl/",
    "phone": "+31612797707"
},
{
    "name": "Theo Thijssen Museum",
    "description": "The Theo Thijssen museum is dedicated to the Amsterdam writer, educator, trade unionist and social-democrat Theo Thijssen.",
    "addressLine1": "Eerste Leliedwarsstraat 16",
    "latitude": "52.3755365",
    "longitude": "4.8805219",
    "city": "Amsterdam",
    "postalCode": "1015TA",
    "email": "info@theothijssenmuseum.nl",
    "website": "https://www.theothijssenmuseum.nl/",
    "phone": "+31204207119"
},
{
    "name": "Pianola Museum",
    "description": "The Pianola Museum is located in the Jordaan, a 17th century quarter of Amsterdam, west of the old town centre. The museum has a collection of automatic pianos and related objects.",
    "addressLine1": "Westerstraat 106",
    "latitude": "52.378671",
    "longitude": "4.8813748",
    "city": "Amsterdam",
    "postalCode": "1015MN",
    "email": "info@pianola.nl",
    "website": "https://www.pianola.nl/", 
    "phone": "+31612797707"
},
{
    "name": "Multatuli Museum",
    "description": "In the Multatuli House, the writer's birthplace, you will find his most important furniture, utensils and his books. It's as if the writer can walk in at any moment to pick up the pen again..",
    "addressLine1": "Korsjespoortsteeg 20",
    "latitude": "52.3774735",
    "longitude": "4.8889206",
    "city": "Amsterdam",
    "postalCode": "1015AR",
    "email": "info@multatuli-museum.nl",
    "website": "http://www.multatuli-museum.nl/",
    "phone": "+31612797707"
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

function showVenueMarkers () {
    
}

function createMarker(latlng, name, address) {
    
}