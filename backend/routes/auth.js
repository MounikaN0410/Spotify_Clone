

const express=require("express");
const bcrypt=require('bcrypt');
const User=require('../models/User');
const {getToken}=require('../utils/helper')


const router=express.Router();

router.post('/signup',async (req,res)=>{
    console.log("entered")

    const {email,password,username}=req.body;
    //Check if user already exists

    const user_email= await User.findOne({email:email});
    const user_username= await User.findOne({username:username});
    if(user_email ||user_username){
        return res.status(403).json({message: 'User already exists' });

    };
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserDetails={
        email,
        password:hashedPassword,
        username
    }


    const newUser= await User.create(newUserDetails);

    const token = await getToken(email, newUser);
    const userToReturn = {...newUser.toJSON(), token};

    console.log(userToReturn);
    
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
    // console.log(newUserDetails)
    

});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);



    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(403).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(403).json({ error: 'Invalid username or password' });
    }

    const token =await getToken(email,user)
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;

    return res.status(200).json({ message: 'Login successful'},userToReturn);





    
});
module.exports = router;

