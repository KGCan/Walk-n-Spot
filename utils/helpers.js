
const Handlebars = require('handlebars')

// const city_input = window.querySelector('#CityInput').value.trim();
// const animal_input = window.querySelector("select[name='AnimalInput']").value;

var output = "";


Handlebars.registerHelper('compare', function (city_input, animal_input) {
  console.log("I am here!!")
  const response = fetch('/api/trail', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(function (json) {

      const city_input = window.querySelector('#CityInput').value.trim();
      const animal_input = window.querySelector("select[name='AnimalInput']").value;

      for (var i = 0; i < json.length; i++) { //track city
        for (var j = 0; j < json[i].animals.length; j++) { //track animals
          if (json[i].city_name === city_input && json[i].animals[j].animal_name === animal_input) {

            output = "This helper is working";

          }
        }
      }
    })
  return output;
})


module.exports = Handlebars.registerHelper