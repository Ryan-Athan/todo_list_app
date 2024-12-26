import express from 'express';

// => Express Server Setup 

// third party module form npm
const exapp = express(); // 

// server static file form the src folder
exapp.use(express.static('dist')); 

//start the express server by default port
exapp.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000");
});