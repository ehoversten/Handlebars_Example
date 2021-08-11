const router = require('express').Router();
require('dotenv').config();
const fetch = require('node-fetch');

// --> This AND ALL ROUTES in this file are prefixed with /api

// --> Route is /api
router.get('/', (req, res) => {
    res.render('apiPage');
});

// --> Route is /api/weather
router.post('/weather', (req, res) => {

    // --> Grab the USER INPUT
    console.log(req.body);
    // --> Testing a static input value
    let inputVal = req.body.search;
    
    // --> make the API query within the ROUTE
    let apiKey = process.env.API_URL;
    // console.log(apiKey);

    // --> Put the request together
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;
    console.log(requestUrl);

    // --> Make API call
    fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        // --> this data that is being returned is in JSON format
        .then(results => results.json())
        // --> this data has been PARSED and is now a JavaScript Object
        .then(data => {
            // --> Let's log the data that is returned from the API
            console.log(data);

            // --> We create a CONTEXT OBJECT to load the data we want to PASS TO THE VIEW
            let dataObject = {
                cityName: data.name,
                cityTemp: data.main.temp
            }
            // --> Check the data
            console.log(dataObject);

            // --> Pass the VIEW you want this ROUTE to RENDER, and PASS the DATA (context object) that we want the VIEW to be able to use.
            res.render('weather', { viewData: dataObject });
        })
        .catch(err => console.log(err));
});

// router.post('/weather', (req, res) => {
//     console.log(req.body);
// });


// --> Make the 'router' object available outside of this file
module.exports = router;