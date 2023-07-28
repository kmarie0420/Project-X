
//REquiremnts
const routes = require('./routes');
const express = require('express');
const sequelize = require('');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

//Handlebars
const hbs = exphbs.create({ helpers });




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
