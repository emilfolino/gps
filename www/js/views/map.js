"use strict";

var m = require("mithril");

function showMap() {
    var places = {
        "BTH": { lat: 56.181932, lng: 15.590525 },
        "Stortorget": { lat: 56.160817, lng: 15.586703 },
        "Hoglands Park": { lat: 56.164077, lng: 15.585887 },
        "Rödebybacken": { lat: 56.261121, lng: 15.628609 }
    };

    var addresses = [
        "Bastionsgatan 14, 371 32 Karlskrona, Sweden",
        "Krutholmskajen 1, 371 38 Karlskrona, Sweden"
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: places["BTH"]
    });

    var geocoder = new google.maps.Geocoder();

    for (var place in places) {
        if (places.hasOwnProperty(place)) {
            new google.maps.Marker({
                position: places[place],
                map: map,
                title: place
            });
        }
    }

    addresses.map(function(address) {
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

module.exports = {
    oncreate: function () {
        console.log("create");
        showMap();
    },
    view: function() {
        return [
            m("h1", "Map"),
            m("div#map.map", "")
        ];
    }
};
