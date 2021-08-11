const router = require('express').Router();
const path = require('path');

// --> Try out each of these ROUTES in the URL to see the differences
router.get('/', (req, res) => {
    // --> Respond with simple text
    res.send('Hello There!');
});


router.get('/home', (req, res) => {
    // --> using HANDLEBARS 'render' method we send the 'home.handlebars' VIEW as the RESPONSE to the Browser
    res.render('home');
});


router.get('/page', (req, res) => {
    // --> Respond with a HTML PAGE 
    res.sendFile(path.join(__dirname, '../public/weather.html'));
})



module.exports = router;