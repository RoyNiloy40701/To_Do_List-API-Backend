const express=require('express');
const router=express.Router();
const {Task,validateTask}=require('../Models/task');


router.get('/',async(req,res)=>{
     const tasks=await Task.find().sort('date');
     res.send(tasks);
})

router.post('/',async(req,res)=>{
 const{error}=validateTask(req.body);
 if(error) return res.status(400).send(error.details[0].message);

 let task=new Task({
     title:req.body.title,
     description: req.body.description
      
 });

 task=await task.save();
 res.send(task);

})


router.put('/:id', async (req, res) => {
    const { error } = validateTask(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let task = await Task.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        description: req.body.description

    },{new:true});

    if (!task) return res.status(404).send('The Task with the given ID was not found.');

    res.send(task);

})

router.delete('/:id',async(req,res)=>{
  const task=await Task.findByIdAndRemove(req.params.id);

  if(!task) return res.status(404).send('The task with given id not found');

  res.send(task);

})
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send('The task with given id not found');

    res.send(task);

})


module.exports=router;