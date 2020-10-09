const form = document.querySelector("form");
const search = document.querySelector("form input");
const heading = document.querySelector("#location");
const weatherMsg = document.querySelector("#weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = search.value;
  getWeather(address);
});

const getWeather = (address) => {
  heading.textContent = "Loading...";
  weatherMsg.textContent = "";
  fetch(`http://localhost:3000/weather?address=${address}`)
    .then((dataJSON) => {
      dataJSON.json().then((data) => {
        if (data.error) {
          return (heading.textContent = data.error);
        }
        heading.textContent = data.location;
        weatherMsg.textContent = data.forecast;
      });
    })
    .catch((error) => console.log(error));
};
