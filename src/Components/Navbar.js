import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { router } from 'next/router';
import LogoutHandlerModal from './logOutModal';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen =() =>{
    // sessionStorage.clear();
    // localStorage.clear();
    // router.replace("/auth/Login");
    setOpen(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{boxShadow:'none'}}>
      <Toolbar style={{display:'flex',justifyContent:'space-between',backgroundColor:'aliceblue',padding:"1rem"}}>
        <div className="img">
          <img src="/assets/images/mg_logo.png" alt="#" style={{width:'180px'}} />
        </div>
        <Button color="inherit" style={{color:'#0078c3',fontWeight:'800'}} onClick={handleOpen}>Logout</Button>
      </Toolbar>
    </AppBar>
    <LogoutHandlerModal open={open} setOpen={setOpen} />
  </Box>
  )
}

export default Navbar
