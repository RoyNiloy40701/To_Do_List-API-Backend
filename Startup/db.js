const mongoose=require('mongoose');

module.exports=function(){
     mongoose.connect('mongodb://localhost/to_do_list')
      .then(()=>console.log('Connected to database'))
}