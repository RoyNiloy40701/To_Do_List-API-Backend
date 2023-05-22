const express=require('express');
const app=express();
const config=require('config');


if(!config.get('jwtPrivateKey')){
     console.error('Error: JwtPrivateKey is not define');
     process.exit(1);
} 

require('./Startup/routes')(app);
require('./Startup/db')();

// app.get('/',(req,res)=>{
//      res.send('Hello world');
// })




const port=process.env.PORT||3000;
app.listen(port, () => console.log(`Listening app ${port}`));