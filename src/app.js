const express = require('express');
const connectDB = require('./Config/database');
const User = require('./Models/user');
const user = require('./Models/user');

const app = express();
app.use(express.json())
app.post('/signUp',async (req,res)=>{
const user = new User(req.body);
try { 
    await user.save()
    res.send('Data updated in database')
    
} catch (error) {
    res.status(404).send('Data not sent')
    console.log(error)
}
});
//Get API of a particular user with an email
app.get('/feed',async (req,res)=>{
    const userEmail = req.body.email
    try {
        const users= await user.find({email:userEmail})
        if (users.length=== 0) {
            res.send('user not found')
        }
        else{
            res.send(users)
        }
    } catch (error) {
        res.status(404).send('Something went wrong')
    }
});
//get API for all users
app.get('/user',async (req,res)=>{
    try {
        const Users= await user.find({})
        if(Users.length === 0){
            res.send('User data not found')
        }else{
            res.send(Users)
        }
    } catch (error) {
        res.status(404).send('Something went wrong')
    }
});

connectDB()
.then(()=>{
    console.log('Database Connection Successfull')
    app.listen(7000, ()=>{
        console.log('Server running sucessfully')
    })
})
.catch((err)=>{
    console.log('Failed Database Connection')
    console.log(err,'Error in DB connection')
})
