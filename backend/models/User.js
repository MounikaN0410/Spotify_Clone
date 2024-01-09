//Creating User model using Mongoose
//Mongoose is used to link Mongo DB and Express
//Firstly mongoose is installed (npm i mongoose)
// Step 1 Require mongoose


const mongoose=require('mongoose');

//Step 2 Create schema

const User= new mongoose.Schema({
    //Give schema as json's
    // firstName:
    // {
    //     type:String,
    //     // required:true,

    // },
    // lastName:
    // {
    //     type:String,
    //     required:false,
    // },
    email:
    {
        type:String,
        required:true,
    },
    username:
    {
        type:String,
        required:true,

    },
    password:
    {
        type:String,
        required:true
    },

    likedSongs:
    {
        type:String,
        default:"",

    },
    playlists:
    {

        type:String,
        default:"",
    
    }

})
//Step 3 Creat model
const UserModel=mongoose.model('User',User);

module.exports=UserModel;