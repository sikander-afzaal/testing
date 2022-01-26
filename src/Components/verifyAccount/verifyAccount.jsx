import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
  
  const card = (
    <React.Fragment>
      <CardContent sx={{maxWidth:688,}}>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Verify your email address
        </Typography>
        <Typography className="verify-detail-text" sx={{mt:3,}}>
        To make sure this email address is yours, Streamify will send you an email with a verification link. If you don’t see it in your inbox, check your spam.
        </Typography>
        <Typography sx={{fontSize:19,mt:2,display:'flex',}}>
        <EmailIcon sx={{color:'#0A56A3',mr:3}}/>
        kate@gmail.com
        </Typography>
        <Link to="/" className="link"><Typography sx={{fontSize:14,fontWeight:"bold",mt:2,display:'flex',color:'#0A56A3',ml:3,mt:4,alignItems:'center'}} variant="h6">
        <ArrowBackIcon sx={{mr:1,fontSize:16}}/>
        BACK
        </Typography></Link>
        <Box sx={{mt:5,display:'flex',justifyContent:'space-between'}}>
            <Link to="/signin" className="link"><Button variant="outlined" sx={{borderRadius:'20px',fontWeight:'bold',border:2,borderColor:"#0A56A3",color:"#0A56A3"}}>NOT NOW</Button></Link>
            <Link to="/signinpass" className="link"><Button variant="contained" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>SEND</Button></Link>
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

function VerifyAccount() {
    return (
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
                <Box>
        <Card variant="outlined" className="pl-md-4 pl-sm-3 pl-2 pr-md-5 pr-sm-4 pr-3">{card}</Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
            </Box>
    )
}

export default VerifyAccount
