$(document).ready(function() {
var tempF;
var tempC;
$(".loc").click(function () {
    if ("geolocation" in navigator){ 
      navigator.geolocation.getCurrentPosition(function(position){ 
 var lat = position.coords.latitude;
 var long = position.coords.longitude;  var url = "https://fcc-weather-api.glitch.me/api/current?lat=";
          
$.getJSON(url + lat + "&lon=" + long, function(json) {
  tempF = json.main.temp * 9/5 +32 + " °F";
 tempC = json.main.temp+" °C";
  
  $( ".temp" ).text("Temp: " + tempF);
  $( ".location" ).text("You are in: " + json.name + "!");
  $(".icon").append("<img src=" + json.weather[0].icon + " >"); 
  $("#change").css("opacity", "1"); 
  $("#getweather").removeClass( "animated pulse infinite" );
  $("#change").addClass( "animated pulse infinite" );
  
  
  
  
})})}});  


$('#change').click(function(){
    if ($(".temp").html() === "Temp: " + tempF) {
      $(".temp").html("Temp: " + tempC)
    }   else {
        $(".temp").html("Temp: " + tempF)
    }
});


});