let searchInput = document.querySelector(".searchbar");
let serachButton = document.querySelector(".search-button");
let humidity = document.querySelector(".humidity-span span");
let wind = document.querySelectorAll(".wind-span span");
let weatherInfo = document.querySelector(".city");


const apiKey = "684a23639dbc72d1822a22ef9ae5193a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWheather(city) {
  const response = await fetch(
    apiUrl + city + `&appid=${apiKey}` + "&units=metric"
  );
  console.log(response);
  var data = await response.json();
  console.log(data);
  // https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=684a23639dbc72d1822a22ef9ae5193a&units =mertic
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
  const tempVal = data.main.temp;
  if (tempVal < 15 && tempVal >= 0) {
    const image = document.getElementById("temp-image");
    image.src = "./images/clouds.png";
  } else if (tempVal < 0) {
    const image = document.getElementById("temp-image");
    image.src = "./images/snow.png";
  } else {
    const image = document.getElementById("temp-image");
    image.src = "./images/clear.png";
  }
  document.getElementById("temp").style.color = "white";
  document.querySelectorinnerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  humidity.classList.add("span");
  wind[0].innerHTML = `${data.wind.speed} Kmph`;
  wind[1].innerHTML = `${data.wind.deg}° `; 
  weatherInfo.innerHTML = searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1).toLowerCase();

  console.log(searchInput.value);
  weatherInfo.style.color = "white";
}

serachButton.addEventListener("click", () => {
  checkWheather(searchInput.value);
});
