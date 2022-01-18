const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

Handlebars.registerHelper("link", function(text, url) {
    var url = Handlebars.escapeExpression(url),
        text = Handlebars.escapeExpression(text)
        
   return new Handlebars.SafeString("<a href='" + url + "'>" + text +"</a>");
});


