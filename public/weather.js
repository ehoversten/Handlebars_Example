
$(document).ready(function() {

    // --> Grab the references to the HTML ELEMENTS on the "weather.html" page
    const form = document.querySelector(".inputs");
    const search = document.querySelector("#search");
    const cityName = document.querySelector(".city-name");
    const cityTemp = document.querySelector(".city-temp");

    // -- > API KEY should be kept in the .env file and kept PRIVATE
    let apiKey = "d004051e7659ba9ecc2bb5f3e34a8bb5";

    form.addEventListener("submit",  function (e) {
      e.preventDefault();
      console.log("Submitting Data ...");

      // --> Grab the value from the input 
      const inputVal = search.value;
      console.log(inputVal);

      // --> Call API function and pass in the USER INPUT VALUE
      dataSearch(inputVal);
    });



    // --> API FUNCTION CALL
    function dataSearch(inputVal){
        var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;
        console.log(requestUrl);

        // --> Make API call
        fetch(requestUrl)
            // --> this data that is being returned is in JSON format
            .then(results => results.json())
            // --> this data has been PARSED and is now a JavaScript Object
            .then(data => {
                // --> Let's log the data that is returned from the API
                console.log(data);

                // --> Here is were we now update the DOM with the data from the API
                cityName.innerText = data.name;
                cityTemp.innerHTML = data.main.temp;

                console.log(cityName, cityTemp);
            })
            .catch(err => console.log(err));
    }


});

