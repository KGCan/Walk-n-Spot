




async function submitAnimal(event) {

    const response = await fetch('/api/trail', {
        method: 'GET',
        })
        .then(response => response.json())
        .then(function (json) {
            console.log('Success')
            const animal_submit = document.querySelector("select[name='animalSubmit']").value;    

            console.log(json)
            if(animal_submit != "All"){
                for(var i =0; i <json.length; i++) {
                    for(var j=0; j< json[i].animals.length; j++) {
                        if (animal_submit === json[i].animals[j].animal_name) {
                            console.log(json[i].animals[j].trail_animal.sighting)
                        } else {
                            console.log('Weird')
                        }
                    }
                }
            }//If look for all animals
            else {
                console.log('All')
            }
             
        });

}


document.querySelector('.submitAnimal').addEventListener('click', submitAnimal);


// Make a search bar to check input for the trail name and animal inputted, then make a 
// function to increase that count and create a put request