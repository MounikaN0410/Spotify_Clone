

const express=require("express");//Adding the exress package into variable express
const mongoose=require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
const User=require('./models/User');
const authRoutes=require('./routes/auth');


const app=express(); //importing express into main variable app
const port=8000;

app.use(express.json());

//Connecting to Mongo Db.
mongoose.connect('mongodb+srv://nmounika0410:3LeL59E6Fm8Xnl0z@cluster0.rfnvmee.mongodb.net/?retryWrites=true&w=majority',
{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    connectTimeoutMS: 100000, 
    socketTimeoutMS: 60000,
    retryWrites: true,
    w: 'majority',

}).then((x)=>{
    console.log('Connected to Mongo DB!')
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


//Set up passport-jwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'abcd';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
        
    });
}));

// GET API
app.get('/',(req,res)=>{
    //req contains data for request
    //res contains data for response
    res.send("Hello World")
});

app.use("/auth", authRoutes);


//Express starts to listen in this port
app.listen(port,()=>{
    console.log('The server is started on port:,' + port);
})

