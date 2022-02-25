const router=require('express').Router()
const POSTS=require('../models/post')
//create post
router.post('/posts/create',async(req,res)=>{
    const post=new POSTS(req.body)
    try {
        const createdpost=await post.save()
        res.status(200).json(createdpost)
    } catch (error) {
        res.status(400).json(error)
    }
})


//update post
router.put('/posts/update/:id',async(req,res)=>{
    try{
        const post=await POSTS.findById(req.params.id)
        if(post.username==req.body.username){
            try {
                const updatedpost=await POSTS.findByIdAndUpdate(req.params.id,{$set:req.body},{ new: true })
                res.status(200).json(updatedpost)
            } catch (error) {
                res.status(400).json(error)
            }
        }
        else{
            res.status(500).json('You are not allowed to update the post')
        }
    }
    catch (error) {
        res.status(400).json(error)
    }

    
})
//delete post
router.delete('/posts/delete/:id',async(req,res)=>{
    try{
        const post=await POSTS.findById(req.params.id)
        if(post.username==req.body.username){
            try {
                await POSTS.findByIdAndDelete(req.params.id)
                res.status(200).json("Post deleted")
            } catch (error) {
                res.status(400).json(error)
            }
        }
        else{
            res.status(500).json('You are not allowed to delete the post')
        }
    }
    catch (error) {
        res.status(400).json("post not found")
    }

})
//get all posts
router.get('/posts/get',async(req,res)=>{
    try {
        const posts=await POSTS.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
    
})

//get specific post
router.get('/posts/get/:id',async(req,res)=>{
    try {
        const post=await POSTS.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
    
})

module.exports = router;