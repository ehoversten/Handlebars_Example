// --> Bring in the required LIBRARIES or File References
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
require('dotenv').config();


// --> Define the PORT that our application will be deployed to
const PORT = process.env.PORT || 3000;

// --> Create an Express Server Instance
const app = express();

// --> Create an Express Handlebars Template Instance
const hbs = exphbs.create({});

// -- Middleware Setup -- //

// --> We setup HANDLEBARS as our TEMPLATE VIEW ENGINE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// --> These two lines setup Express to accept JSON data from the Browser (for example an input or form) - These lines help Express PARSE the JSON data into a JavaScript OBJECT for use to use in the route. Because of these two lines we can PARSE the 'req.body' OBJECT within our Express Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --> this line tells Express where our Applications STATIC files are (these include .html, .css and .js files)
app.use(express.static(path.join(__dirname, 'public')));


// --> redirect to the applications Routes and Controller Logic
app.use(routes);


// --> Start our local Express Server
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));