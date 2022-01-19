
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

      // console.log(city_input);
      // console.log(animal_input)

      if (animal_input != "All") {

        // console.log(json[0])
        // console.log(json[1].animals[0].animal_name)
        // console.log(animal_input)

        // Check for City match
        for (var i = 0; i < json.length; i++) {
          // console.log(json[i].city_name)

          // Check for Animal match
          for (var j = 0; j < json[i].animals.length; j++) {
            // console.log(json[i].animals[j].animal_name)

            if (json[i].city_name === city_input && json[i].animals[j].animal_name === animal_input) {
              // console.log("I am 2nd for loop")


              // console.log(json[i].animals[j].animal_name)
              // console.log(json[i].trail_name)
              // console.log(json[i].trail_img)
              // console.log(json[i].trail_info)
              console.log(json)

              let text1 = "."
              let text2 = (json[i].trail_img).slice(8)
              let trailImg = text1.concat(text2);
              console.log(trailImg)

              let trailUrl = json[i].trail_info
              
              // Adding the trail "id" so it can be used to save
              let trailID = json[i].id



              renderSearchCards(trailImg, json[i].trail_name, trailUrl, trailID)
              // ************ Need What if No Animal Option ***************
              //   alert(`A ${animal_input} hasn't been spoted before on this trail!`)
              // }
            }
          }
        }
      }
      //If look for All Animals
      else {
        for (var i = 0; i < json.length; i++) {
          // console.log(json[i].trail_name)
          // let trailImg = (json[i].trail_img).replace("./public", ".")
          // console.log(json[i].trail_img)

          let text1 = "."
          let text2 = (json[i].trail_img).slice(8)
          let trailImg = text1.concat(text2);
          let trailUrl = (json[i].trail_info);
          // console.log(trailImg)
          // console.log(json[i].all_trails)
          renderSearchCards(trailImg, json[i].trail_name, trailUrl)
        }
      }
    });
}


var searchCardContainer = document.querySelector(".card-container");
// var resultCard = document.createElement("div");
// searchCardContainer.appendChild(searchCard);


function renderSearchCards(trailImg, trail_name, trailUrl, trailID) {

  //Card
  var searchCard = document.createElement("div");
  searchCard.classList = "result-card-div m-3";
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
  searchCardImg.classList = "result-card-img img-fluid rounded-start";
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


  //Card Total Animal Count
  var searchCardAnCount = document.createElement("p");
  searchCardAnCount.classList = "card-text text-muted card-animal-count";
  searchCardAnCount.textContent = "A total of 9 animals of all types have been seen on this trail."
  searchCardBody.appendChild(searchCardAnCount);


  //Card Trail_info URL
  var trailUrla = document.createElement("a");
  trailUrla.classList = "card-trail-url";
  var atURL = document.createTextNode("Learn more about this trail!")
  trailUrla.appendChild(atURL)
  trailUrla.title = "Learn more at All Trails"
  trailUrla.href = trailUrl
  trailUrla.setAttribute("target", "_blank")
  searchCardBody.appendChild(trailUrla);

  // // Result Save Trail Link Button
  var saveTrailBtn = document.createElement("button");
  var saveText = document.createTextNode("Save This Trail");
  saveTrailBtn.setAttribute("id", trailID);
  saveTrailBtn.classList = "trail-save-btn ms-2 text-nowrap btn btn-save";
  saveTrailBtn.appendChild(saveText)
  searchCardBody.appendChild(saveTrailBtn);
}


function saveTrail(id) {
  
}

// async function trailSaveHandler(event) {
//   event.preventDefault();

//   const saved_trail = document.querySelector('textarea[name="comment-body"]').value.trim();
//   const post_id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];

//   if (comment_text) {
//     const response = await fetch('/api/comments', {
//       method: 'POST',
//       body: JSON.stringify({
//         post_id,
//         comment_text
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);




document.querySelector('.SearchCity').addEventListener('click', searchFormHandler);