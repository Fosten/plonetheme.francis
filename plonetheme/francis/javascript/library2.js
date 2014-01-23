(function ($) {
$(document).ready(function() {
// Mandatory customization
 var params = new Object();
 params["layout"] = "h";
 params["scoping"] = "1";
 params["tabon"] = "1";
 params["tabid"] = "all:arts:books";
 params["dftab"] = "all";
 params["w"] = 570;
 params["h"] = 130;
 params["lang"] = "en";
 params["host"] = "stfrancisuniversity.worldcat.org";

 // Optional customization, remove if you do not need
 /*
 params["title"] = "Search Your Library and beyond"; // override branding title
 params["background"] = "#f6f6f6"; // override background color
 params["scope"] = "2"; // override default
 */
 
 // Call WorldCat Local to display search box
 WCLSearch.display(params, "wcl_searchbox");
});
}) (jQuery);
