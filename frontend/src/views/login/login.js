import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Loginnavbar from '../../components/loginnavbar.js';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import './login.css';
import CustomizedSwitches from '../../components/toggleswitch.js'


import Link from '@mui/material/Link';
import { FormLabel } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:'white',
  fontSize:'40px',
  fontWeight:'bold',
  minHeight: 'fit-content',
}));
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


const Login = () => {


    const handleLogin = () => {

      
    };
  
    return (
      <div style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8))', width:'100vw' }}>
        <Loginnavbar />
        <div>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'50px'}}>
          <Grid container spacing={3}>
            <Grid xs>
              
            </Grid>
            <Grid xs={6} >
            
              <Item style={{backgroundColor:'black', paddingTop: '60px', marginBottom:'30px'}}>Log in to Spotify
              <br/>
                <div style={{margin:'50px'}}>

                
                <Button variant="text" style={buttonStyle}>
                  Continue with Google
                </Button>
              <br/>
                <Button variant="text" style={buttonStyle}>
                  Continue with Facebook
                </Button>
              <br/>
                <Button variant="text" style={buttonStyle}>
                  Continue with Phone
                </Button>
              <br/>
              </div>
                <Divider sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.5)', transform: "translateX(12%)", }} />
              <br/>
              <TextField
              label="Email or Username"
              variant="outlined"
              className="custom-text-field" 
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px' }}
            />
            <br/>

              <TextField
              label="Password"
              type="Password"
              variant="outlined"
              className="custom-text-field"
              style={{marginBottom:'20px',width: '100%',maxWidth: '320px'}} 
            />
            <br/>

            <CustomizedSwitches/>
            <br/>
            <Button variant="text" sx={{ backgroundColor: 'rgb(30 215 96)', fontWeight: 'bold', color: 'black',borderRadius: '18px',width: '100%',maxWidth: '320px' ,
  
              transition: 'transform 0.3s ease-out-in', 
              '&:hover': { transform: 'scale(1.1)' },
          
          }}>
                  Log In
                </Button>
            <br/>
                <Link href="/password" underline="always" style={{color:'white', fontSize:'18px',textDecoration: 'underline', textDecorationColor: 'white' }}>Forgot you Password?</Link>
            <br/>
            <br/>
            <Divider sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.5)', transform: "translateX(12%)"}} />
             
            <br/>
            
            <Link href="/signup" underline="always" style={{color:'white', fontSize:'18px',textDecoration: 'underline', textDecorationColor: 'white' }}>Don't have an account? Signup for Spotify</Link>
               </Item>
          
            

            </Grid>
            <Grid xs>
              
            </Grid>
          </Grid>
        </Box>
        
        </div>
        
        
      </div>
    );
  };
  
  export default Login;

