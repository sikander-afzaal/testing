import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom'

const card = (
    <React.Fragment>
      <CardContent>
        <Box>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Sign in
        </Typography>
        <Typography sx={{fontSize:16,mt:3}}>
        Use your Streamify account
        </Typography>
        <Box sx={{mt:3}}>
        <TextField id="outlined-basic" className="col-12" label="Email address" size="medium" variant="outlined"/>
        </Box>
        <Button className="ml-md-2 ml-0 pl-0" sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3",mt:3}}>FORGOT PASSWORD?</Button>
        <Box className="d-md-flex d-block align-items-md-center align-items-start justify-content-between" sx={{mt:3}}>
            <Typography className="" sx={{fontSize:16,fontWeight:500}} variant="h6">
             Not your computer? Use Guest mode to sign in privately.
            </Typography>
            <Button className="ml-md-5 ml-0 mt-md-0 mt-3 pl-0" sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>LEARN MORE</Button>
        </Box>
        
        <Box className="d-flex justify-content-between align-items-center" sx={{mt:3}}>
            <Link to="/" className="link"><Button className="pl-0" sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>CREATE ACCOUNT</Button></Link>
            <Link to="/signinPass" className="link"><Button variant="contained" className="mt-md-0 mt-3" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>NEXT<ArrowForwardIcon sx={{ml:1,fontSize:16}}/></Button></Link>
        </Box>
        </Box>
      </CardContent>
    </React.Fragment>
  );
  const footerLinks=(
    <Box sx={{display:'flex',justifyContent:'end' ,color:'#000000',opacity:'60%',pt:3}}>    
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        HELP
        </Typography>
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        PRIVACY
        </Typography>
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        TERMS
        </Typography>
        </Box>
  );

function signin() {
    return (
        <Box className="w-100" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box className="mw-50 min-vw-75">
        <Card variant="outlined" className="pl-md-4 pl-sm-3 pl-2 pr-md-5 pr-sm-4 pr-3">{card}</Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
    </Box>
    )
}

export default signin
