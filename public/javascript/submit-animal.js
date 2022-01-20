// const router = require('express').Router();
// // const withAuth = require('../utils/auth');
// const sequelize = require('../../config/connection');
// const { User, Trail, Animal, TrailAnimal, UserTrail } = require('../../models');

// const { response } = require("express");


// async function submitAnimal(event) {

// const { json } = require("express/lib/response");

//     const response = await fetch('/api/animal/sighting', {
//         method: 'GET',
//         })
//         .then(response => response.json())
//         .then(function (json) {
//             console.log('Success')
//             const animal_submit = document.querySelector("select[name='animalSubmit']").id;    

//             console.log(json)
//             if(animal_submit != "All"){
//                 for(var i =0; i <json.length; i++) {
//                     for(var j=0; j< json[i].animals.length; j++) {
//                         if (animal_submit === json[i].animals[j].animal_name) {
//                             console.log(json[i].animals[j].trail_animal.sighting)
//                         } else {
//                             console.log('Weird')
//                         }
//                     }
//                 }
//             }//If look for all animals
//             else {
//                 console.log('All')
//             }
             
//         });

// }

function submitAnimal() {
    const trail_submit = document.querySelector("select[name='trailSubmit']").value;
    const animal_submit = document.querySelector("select[name='animalSubmit']").value;
    console.log(trail_submit);
    console.log(animal_submit);

    const response = fetch(`/api/animal/${parseInt(trail_submit)}/${parseInt(animal_submit)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
       })
       .then(response => response.json())
       .then((json) => {
           if (json) {
                console.log(json)
           } else {
               console.log("Doesn't exist")
           }
            console.log('----------------------------------------Here is the sighting data------------------------------------');
            console.log(json.sighting)
            let oldSighting = json.sighting;
            var newSighting = oldSighting + 1
            var sighting = newSighting
            console.log(sighting)
            const trail_submit = document.querySelector("select[name='trailSubmit']").value;
            const animal_submit = document.querySelector("select[name='animalSubmit']").value;
            console.log(trail_submit)
            console.log(animal_submit)
            // var sighting = await submitAnimal()
            console.log(sighting)
            fetch(`/api/animal/${parseInt(trail_submit)}/${parseInt(animal_submit)}`, {
                method: 'PUT',
                body: JSON.stringify({
                sighting
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            }).then((res) => {
                document.location.replace('/dashboard');
                console.log('works')
            })
            .catch((err) => { console.warn(err)});
        })
        .catch((error) => { console.warn(error); })
}




 
// function submitAnimal() {

//     const trail_submit = parseInt(document.querySelector("select[name='trailSubmit']").value);
//     const animal_submit = parseInt(document.querySelector("select[name='animalSubmit']").value);
//     console.log(trail_submit)
//     console.log(animal_submit)

    

//     fetch(`/api/animal/${trail_submit}/${animal_submit}/`, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//        })
//        .then(response => response.json())
//        .then((json) => {
//         console.log('----------------------------------------Here is the sighting data------------------------------------');

//             console.log(json.sighting)

//             let oldSighting = json.sighting;
            
//             var newSighting = oldSighting + 1

//             var sighting = newSighting
//             console.log(sighting)

//             const trail_submit = parseInt(document.querySelector("select[name='trailSubmit']").value);
//             const animal_submit = parseInt(document.querySelector("select[name='animalSubmit']").value);

//             console.log(trail_submit)
//             console.log(animal_submit)

//             // var sighting = await submitAnimal()
//             console.log(sighting)
            

//             const response = fetch(`/api/animal/${trail_submit}/${animal_submit}/`, {
//                 method: 'PUT',

//                 body: JSON.stringify({
//                 sighting
//             })
//             });
//             if (response.ok) {
//                 // document.location.replace('/dashboard');
//                 console.log('works')
//             } else {
//                 alert('Select again');
//             }
//         //    return sighting
//         })
//         .catch((error) => { console.warn(error); })
// }

// async function updateSighting() {
//     const trail_submit = document.querySelector("select[name='trailSubmit']").value;
//     const animal_submit = document.querySelector("select[name='animalSubmit']").value;

//     console.log(trail_submit)
//     console.log(animal_submit)

//     var sighting = await submitAnimal()
//     console.log(sighting)

//     const response = await fetch(`/api/animal/${trail_submit}/${animal_submit}/`, {
//         method: 'PUT',

//         body: JSON.stringify({
//            sighting
//        })
//     });
//     if (response.ok) {
//         // document.location.replace('/dashboard');
//         console.log('works')
//     } else {
//         alert('Select again');
//     }
// }

    //  const response = await fetch(`/api/animal/${trail_submit}/${animal_submit}/`, {
    //      method: 'PUT',

    //      body: JSON.stringify({
    //         sighting
    //     })
    //     })
    //     .then(response => response.json())
    //     .then(function(json) {
    //         console.log(json)
        
    //     })




document.querySelector('.submitAnimal').addEventListener('click', submitAnimal);


// Make a search bar to check input for the trail name and animal inputted, then make a 
// function to increase that count and create a put request