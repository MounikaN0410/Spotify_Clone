import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SpotifyLogo from '../images/SpotifyLogo.png'

export default function Loginnavbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:'black',height: '100px', paddingTop:'10px'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src={SpotifyLogo} alt="Spotify Logo" style={{ width: '52px', height: '52px'}} />
          </IconButton>
          <Typography variant="h5" color="inherit" component="div" style={{fontWeight:'bold', marginLeft:'-15px'}}>
            Spotify
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}