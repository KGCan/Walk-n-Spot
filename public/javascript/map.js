//Map
var map = document.getElementById("map"); //know where to display map
var marker = []; //to store pin/marker
var mymap;
var first = 1; //Use to control different search without reflesh the page


var Add_Map = function (lat, lon) {
    if (first) {
        mymap = L.map('map').setView([lat, lon], 13);
        first = 0;
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFnZ2llOTY4NSIsImEiOiJja3Z0NmRsajk3c3pqMzBxcDg4bTU5amc0In0.eZRtZIrAHKxxLrTXZ3jAUg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoibWFnZ2llOTY4NSIsImEiOiJja3Z0NmRsajk3c3pqMzBxcDg4bTU5amc0In0.eZRtZIrAHKxxLrTXZ3jAUg'
        }).addTo(mymap);
    } else {
        mymap.flyTo([lat, lon], 13);
    }
};

var AddMarker = function (lat, lon, n, img_url, trail_name, sighting) {
    marker[n] = L.marker([lat, lon]).addTo(mymap);
    marker[n].bindPopup(/*'<img src=' + img_url + '>' + */trail_name + " has " + sighting + " people spotted").openPopup();
};

var Map_reset = function () {
    if (mymap) {
        var i = 0;
        while (i < marker.length) {
            marker[i].remove();
            i++;
        }
    }
};

async function commentFormHandler(event) {

    if (first === 0) {
        Map_reset();
    }


    const response = await fetch('/api/trail', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(function (json) {

            map.style.display = "flex";
            Add_Map(json[0].lat, json[0].lon);

            const city_input = document.querySelector('#CityInput').value.trim().toUpperCase();
            const animal_input = document.querySelector("select[name='AnimalInput']").value;

            var found = 0;

            if (animal_input != "All") {
                for (var i = 0; i < json.length; i++) { //track city
                    for (var j = 0; j < json[i].animals.length; j++) { //track animals
                        if (json[i].city_name === city_input && json[i].animals[j].animal_name === animal_input) {
                            AddMarker(json[i].lat, json[i].lon, found, json[i].trail_img, json[i].trail_name, json[i].animals[j].trail_animal.sighting);
                            found++;
                        }
                    }
                }
            }//If look for all animals
            else {
                for (var i = 0; i < json.length; i++) {
                    if (json[i].city_name === city_input) {
                        AddMarker(json[i].lat, json[i].lon, found, json[i].trail_img, json[i].trail_name, 0);
                        found++;
                    }
                }
            }

        });


}


document.querySelector('.SearchCity').addEventListener('click', commentFormHandler);