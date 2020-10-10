function get_weather_data(city) {
  return $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    data: {
      q: city,
      appid: "98c18d81433b4f8e097a95a5d9c4ebb2",
      units: "metric"
    }
  });
}

function display_weather() {
  $("#firstcon").fadeOut();
  var city = $("#city").val();
  $.when(get_weather_data(city)).then(function(json) {
    var imgurl = "Image/" + json.weather[0].icon + ".png";
    $(".icon img").attr("src", imgurl);
    $(".temperature").text(
      json.main.temp_min + "°C/" + json.main.temp_max + "°C"
    );
    $(".main").text(json.weather[0].main);
    $(".city").append(json.name + ", " + json.sys.country);

    $(".pressure").text("Pressure: " + json.main.pressure + "mb");
    $(".humid").text("Humidity: " + json.main.humidity + "%");
    $(".long-lat").text(
      "Longitude/Latitude: " + json.coord.lon + "/" + json.coord.lat
    );
    $(".avg-temp").text("Average temperature: " + json.main.temp + "°C");
    $(".wind").text("Wind: " + json.wind.deg + "° " + json.wind.speed + "m/s");
    $(".real-feel").text("Feels like: " + json.main.feels_like + "°C");
  });

  $("#secondcon").fadeIn();
}
