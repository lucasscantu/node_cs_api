/*import express from 'express'
import routes from './routes'
import 'reflect-metadata'
import './database/connect.ts'
const app = express()
app.use(express.json())
app.use(routes)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET,POST')
    next()
});
app.listen(3000, () => console.log('Server started...'))*/
import 'reflect-metadata';
import express, { application } from 'express';
import { setup } from "./database/connect"
import routes from './routes';
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});
app.use(routes);
export { app, setup };