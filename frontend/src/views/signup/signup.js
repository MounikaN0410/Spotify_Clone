import React from 'react';
import { useState, useEffect } from 'react';
import Loginnavbar from '../../components/loginnavbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../login/login.css';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const buttonStyle = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    color: 'white',
    border: '1px solid white',
    borderRadius: '18px',
    width: '100%',
    maxWidth: '320px',
    height: '44px',
  };

export default function Signup() {
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [passwordconf,setPasswordconf] = useState('');



    const handleSignup= async(e)=>{
        e.preventDefault();
        if (password != passwordconf){
            alert('passwords do not match');
            return;
            }
        try{
        const data={
            email: email,
            username: username,
            password: password
        };
        console.log(data);
        const response = await axios.post('http://localhost:3000/api/signup', data);
        if (response.data.success) { 
            console.log(response.data);
          } else {
            console.log(response.data.message);
            return;
          }
        }

        catch(error){
            console.error(error.message);
        }

    }  
    
  return (
    <div>
        <Loginnavbar/>
        <div style={{background:'black'}}>
        
        <Container maxWidth="sm">
        
            <Box sx={{ bgcolor: 'white', height: '100vh',background:'black'}} >
            <Typography variant="h4" component="h1" style={{color:'white', fontWeight:'bold'}}>
                Signup to start<br/> listening
            </Typography>
            <br/>
            <TextField
              label="Email address"
              variant="outlined"
              className="custom-text-field" 
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px' }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Username"
              variant="outlined"
              className="custom-text-field" 
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px' }}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="Password"
              variant="outlined"
              className="custom-text-field" 
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px' }}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="Password"
              variant="outlined"
              className="custom-text-field" 
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px' }}
              value={passwordconf}
              onChange={e => setPasswordconf(e.target.value)}
            />
            <FormControlLabel required control={<Checkbox sx={{ color: 'white' }}/> } label="I Agree to Terms and Conditions" sx={{ color: 'white' }}/>
            <Button onclick={handleSignup} variant="text" sx={{ backgroundColor: 'rgb(30 215 96)', fontWeight: 'bold', color: 'black',borderRadius: '18px',width: '100%',maxWidth: '320px' ,
                
                transition: 'transform 0.3s ease-out-in', 
                '&:hover': { transform: 'scale(1.1)'},
                color: 'white',
                backgroundColor: 'rgb(30 215 96)',

                }}>
                    Signup
            </Button>
            <br/>
            <Divider sx={{ width: '80%', color: 'white', transform: "translateX(12%)", marginTop:'20px'}} >or</Divider>
            <br/>
            <Button variant="text" style={buttonStyle}>
                  Continue with Facebook
            
            </Button>
            <br/>
            <br/>
            <Button variant="text" style={buttonStyle}>
                  Continue with Google
            
            </Button>

            <br/>
            <Divider sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.5)', transform: "translateX(12%)", marginTop:'30px' }} />
            <br/>
            <Typography style={{color:'white', fontWeight:'bold'}}>
                Already have an account? <Link href="/login" underline="always" style={{color:'white',textDecoration: 'underline', textDecorationColor: 'white' }}>Login in here.</Link>
            </Typography>
            <br/>
            
            </Box>
            
            
            
        </Container>
        
        </div>
        
    </div>
  )
}



