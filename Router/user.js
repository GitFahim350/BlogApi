const router=require('express').Router();
const USER=require('../models/user');
const bcrypt = require("bcrypt");

//Update user
router.put('/user/update/:id',async(req,res)=>{
    const s1=req.body.userid+""
    const s2=req.params.id+""
    if (s1 == s2) {
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
          const updatedUser = await USER.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your account!");
      }
})
//Delete user
router.delete('/user/delete/:id',async(req,res)=>{
    const s1=req.body.userid+""
    const s2=req.params.id+""
    if(s1===s2){
        try {
            const user=await USER.findById(req.params.id)
            try {
                await USER.findByIdAndDelete(req.params.id)
                res.status(400).json("User has been deleted")
            } catch (error) {
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(500).json("User not found...")
        }
    }
    else{
        res.status(400).json("You are not allowed to delete other's account");
    }
    
})

//get user
router.get('/user/get/:id',async(req,res)=>{
    console.log("paRAM",req.params.id)
    s1=req.params.id+""
    try {
        const user=await USER.findById(req.params.id)
       
        const{password,...others}=user._doc;
        res.status(200).json(others);
    } catch (error) {
       
        res.status(500).json("User not found")
    }
})

module.exports=router;

