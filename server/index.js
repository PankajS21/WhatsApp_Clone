import express from 'express';
import Connection from './database/db.js';

const app=express();

Connection();

const PORT=4000;

app.listen(PORT, ()=>{
    console.log(`App listening on PORT no. ${PORT}`);
});