
import ihtml from "./index.html";
import icss from "./styles.css";

var template = Handlebars.compile("<div class='bg-red-900 p-2 font-bold text-white'>Jonatas</div>");

var html = template();

$("#app").html(html)

$(".template").remove()