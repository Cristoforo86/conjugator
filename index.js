const express = require('express');
const querystring = require('querystring');
// const path = require('path');
var bodyParser = require('body-parser');
const sequelize = require('sequelize');
const app = express();

//Model
const Verbs = require('./models/Verbs');

//DB
const db = require('./config/database');
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error ' + err))

//Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Get route
app.get('/', async (req, res) => {
    try{
        const verbs = await Verbs.findAll();
        res.send(verbs);
        console.log(verbs);
    } catch (err){
        return console.log(err);
    }
    
});
//get - Query 
app.get('/random', async (req, res) => {
    try{
        const random = await Verbs.findAll({
            where: {
                infinitive: "amare"
            }
        });
        res.send(random);
        console.log(random);
    } catch (err){
        return console.log(err);
    }
    
});
//get - numerus query
app.get('/numerus/:numerus', async (req, res) => {
    try{
        const numerus = req.params.numerus;
        const random = await Verbs.findAll({
            where: {
                numerus: numerus
            }
        });
        res.send(random);
        console.log(random);
    } catch (err){
        return console.log(err);
    }
    
});
//get - tempus query
app.get('/tempus/:tempus', async (req, res) => {
    try{
        const tempus = req.params.tempus;
        const random = await Verbs.findAll({
            where: {
                tempus: tempus
            }
        });
        res.send(random);
        console.log(random);
    } catch (err){
        return console.log(err);
    }
    
});

//get random
app.get('/random/random', async (req, res) => {
    try{
        const random = await Verbs.findAll({
            order: [[ sequelize.fn('RANDOM')]],
            limit: 1
        });
        res.send(random);
        console.log(random);
    } catch (err){
        return console.log(err);
    }
    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, (req,res) => {
    console.log(`Server started on Port ${PORT}`);
});