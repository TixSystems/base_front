

import indexHtml from "./index.html";
console.log(indexHtml);

var template = Handlebars.compile('<div>TESTE</div>');

var html = template();

$("#app").html(html)