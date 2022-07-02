let venue_data = [{
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
    "description": "​The Lutheran Museum of Amsterdam shows a religious community.",
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
    "description": "A good and complete overview of the technical development of the engines built here in the Kromhout Engine Factory.",
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
    "description": "Experience how chocolate is made from bean-to-bar.",
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
    "description": "Shows a collection of automatic pianos and related objects.",
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
    "description": "In the Multatuli House, you will find Multatuli's most important furniture, utensils and his books.",
    "addressLine1": "Korsjespoortsteeg 20",
    "latitude": "52.3774735",
    "longitude": "4.8889206",
    "city": "Amsterdam",
    "postalCode": "1015AR",
    "email": "info@multatuli-museum.nl",
    "website": "http://www.multatuli-museum.nl/",
    "phone": "+31612797707"
}]

function loadVenuePane(venues) {
    var container = document.getElementById('venue-container')
    for (let i = 0; i < venues.length; i++) {
        venue = venues[i];
        container.innerHTML += `<div id='venue-item'>
                                <h3>${venue.name}</h3>
                                <p>${venue.description}</p>
                                </div>`;
        
    } 
}

loadVenuePane(venue_data);