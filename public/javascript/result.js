
var trailInfoArr = [];


async function searchFormHandler(event) {
  event.preventDefault();

  const response = await fetch('/api/trail', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(function (json) {

      console.log('Success')

      // const city_input = document.querySelector('#CityInput').value.trim();
      // const animal_input = document.querySelector("select[name='AnimalInput']").value;

      const city_input = document.querySelector('#CityInput').value.trim();
      const animal_input = document.querySelector("select[name='AnimalInput']").value;

      console.log(city_input);
      console.log(animal_input)

      if (animal_input != "All") {

        console.log(json[0])
        // console.log(json[1].animals[0].animal_name)
        console.log(animal_input)

        // Check for City match
        for (var i = 0; i < json.length; i++) {
          console.log(json[i].city_name)

          // Check for Animal match
          for (var j = 0; j < json[i].animals.length; j++) {
            // console.log(json[i].animals[j].animal_name)

            if (json[i].city_name === city_input && json[i].animals[j].animal_name === animal_input) {
              console.log("I am 2nd for loop")
              console.log(json[i].animals[j].animal_name)
              console.log(json[i].trail_name)
              console.log(json[i].trail_img)

              renderSearchCards(json[i].trail_name)
              // Need What if No Animal Option
              //   alert(`A ${animal_input} hasn't been spoted before on these trails!`)
              // }
            }
          }
        }
      }
      //If look for All Animals
      else {
        for (var i = 0; i < json.length; i++) {
          console.log(json[i].trail_name)
          // let trailImg = (json[i].trail_img).replace("./public", ".")
          console.log(json[i].trail_img)

          let text1 = "."
          let text2 = (json[i].trail_img).slice(8)
          let trailImg = text1.concat(text2);
          console.log(trailImg)
          console.log(json[i].all_trails)
          renderSearchCards(trailImg, json[i].trail_name, json[i].all_trails)
        }
      }
    });
}


var searchCardContainer = document.querySelector(".card-container");
// var resultCard = document.createElement("div");
// searchCardContainer.appendChild(searchCard);


function renderSearchCards(trailImg, trail_name, all_trails) {

  //Card
  var searchCard = document.createElement("div");
  searchCard.classList = "card m-3";
  searchCardContainer.appendChild(searchCard);


  //Card Row
  var searchCardRow = document.createElement("div");
  searchCardRow.classList = "row g-0";
  searchCard.appendChild(searchCardRow);

  //Card Col-4
  var searchCardCol4 = document.createElement("div");
  searchCardCol4.classList = "col-md-4";
  searchCardRow.appendChild(searchCardCol4);

  //Card img
  var searchCardImg = document.createElement("img");
  searchCardImg.classList = "img-fluid rounded-start";
  // searchCardImg.src = './assets/images/creek-2.jpg'
  searchCardImg.src = trailImg

  searchCardCol4.appendChild(searchCardImg);

  //Card Col-8
  var searchCardCol8 = document.createElement("div");
  searchCardCol8.classList = "col-md-8";
  searchCardRow.appendChild(searchCardCol8);

  //Card body
  var searchCardBody = document.createElement("div");
  searchCardBody.classList = "card-body";
  searchCardCol8.appendChild(searchCardBody);

  //Card Title
  var searchCardTitle = document.createElement("h3");
  searchCardTitle.classList = "card-title";
  searchCardTitle.textContent = trail_name
  searchCardBody.appendChild(searchCardTitle);

  //Card All-Trails URL
  var searchCardAllTrails = document.createElement("a");
  searchCardAllTrails.classList = "card-allT-url";
  var atURL = document.createTextNode("Learn more!")
  searchCardAllTrails.appendChild(atURL)
  searchCardAllTrails.title = "Learn more at All Trails"
  searchCardAllTrails.href = all_trails
  searchCardBody.appendChild(searchCardAllTrails);

}





document.querySelector('.SearchCity').addEventListener('click', searchFormHandler);