//Map
var map = document.getElementById("map"); //know where to display map
var marker = []; //to store pin/marker
var mymap;
var first = 1; //Use to control different search without reflesh the page


var Add_Map = function (lat, lon) {
    if(first){
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

var AddMarker = function (lat, lon, n, img_url, address) {
        if(lat&&lon){
        marker[n] = L.marker([lat, lon]).addTo(mymap);
        marker[n].bindPopup('<img src=' + img_url + '>' + address).openPopup();
        }
};

var Map_reset = function () { 
    if(mymap){
        var i = 0;
        while(i < marker.length) {
            marker[i].remove();
            i++;
        }
    }
};

async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/city', {
            method: 'GET',
            body: JSON.stringify({
                trail_name,
                lat,
                lon
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            Add_Map(lat, lon);
            AddMarker(lat, lon);
        document.location.reload();
        } else {
        alert(response.statusText);
        }
    }


}

document.querySelector('.SearchCity').addEventListener('submit', commentFormHandler);

/*
var formSubmitHandler = function (event) { //Get Input
    event.preventDefault();

    Map_reset(); //clear old map & markers

    city = cityInputEl.value.trim();
    state = document.querySelector("select[name='state-option']").value;

    AddHouse(city, state);
};


var buttonClickHandler = function (event) { //If user click search histories

    Map_reset(); //clear old map & markers
    
    var searchHistory = event.target.textContent;
    var history = searchHistory.split(", ");
    AddHouse(history[0], history[1]);
};


*/

