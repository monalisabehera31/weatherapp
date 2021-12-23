const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
      //datahide.classList.add('data_hide');
    city_name.innerText = `please enter the city name first`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=40773129bf4e363f59d60e9120ff3821`;
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      const arrData = [data];
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;

      // condition to check sunny or cloud
      if (tempMood == "Clear") {
        temp_status.innerHTML = `<i class= "fas fa-sun"style = "color: #eccc86;"></i>`;
      } else if (tempMood == "Cloud") {
        temp_status.innerHTML = `<i class= "fas fa-cloud" style = 'color: #f1f2f6;'></i>`;
      } else if (tempMood == "Rain") {
        temp_status.innerHTML = `<i class= "fas fa-cloud-rain" style = 'color: #a4b0be;'></i>`;
      } else {
        temp_status.innerHTML = `<i class= "fas fa-sun" style = 'color: #f1f2f6;'></i>`;
        //datahide.classList.remove('data_hide');

    }
    } catch {
      city_name.innerText = `please enter ther city name properly.`;
      //datahide.classList.add('data_hide');

    }
  }
};
submitBtn.addEventListener("click", getInfo);
