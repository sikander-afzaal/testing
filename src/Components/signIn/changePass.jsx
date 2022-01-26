import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import personImg from '../../images/Avatar.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from 'react-router-dom'

const card = (
    <React.Fragment>
      <CardContent>
        <Box>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 600}} variant="h1">
        Change password
        </Typography>
        <Box sx={{ background:'#CFD8DC',borderRadius:20 ,width:180,height:35,mt:3,display:'flex',alignItems:'center'}}>
          <Avatar alt="Logo" src={personImg} sx={{mx:1,width:25,height:25}} />
          <Typography sx={{fontSize:14,color:'#000000',opacity:'87%'}} variant="h6">
              kate@gmail.com
          </Typography>
          <KeyboardArrowDownIcon sx={{color:'#000000',opacity:'60%'}}/>
        </Box>
        <Typography sx={{fontSize:16,fontWeight:700,mt:3}} variant="h6">
        Create a strong password
            </Typography>
        <Typography sx={{fontSize:16,fontWeight:500,mt:2}} variant="h6">
            Create a new, strong password that you don’t use for other websites.
            </Typography>
            <Box className="col-lg-6 col-md-8 col-sm-10 col-11 p-0">
        <TextField
        className="col-12"
          id="outlined-basic"
          id="outlined-error-helper-text" label="Create password" size="medium" variant="outlined" sx={{width:323,mt:3}}
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        </Box>
        <Box className="col-lg-6 col-md-8 col-sm-10 col-11 p-0">
        <TextField
        className="col-12"
          id="outlined-basic"
          id="outlined-error-helper-text" label="Confirm" size="medium" variant="outlined" sx={{width:323,mt:3}}
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        </Box>
        <Box className="d-md-flex d-block" sx={{mt:3,justifyContent:'space-between'}}>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>SKIP</Button>
            <Button className="mt-md-0 ml-md-0 ml-sm-5 ml-0 mt-3" variant="contained" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>SAVE PASSWORD</Button>
        </Box>
        </Box>
      </CardContent>
    </React.Fragment>
  );

function changePass() {
    return (
      <Box className="col-100" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
      <Box className="col-lg-6 col-md-8 col-sm-10 col-12 p-0">
      <Card variant="outlined" className="pl-md-4 pl-sm-3 pl-2 pr-md-5 pr-sm-4 pr-3">{card}</Card>
          </Box>
  </Box>
    )
}

export default changePass
