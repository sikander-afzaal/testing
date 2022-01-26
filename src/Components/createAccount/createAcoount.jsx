import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import {Link,useHistory} from 'react-router-dom'

const card = (
    <React.Fragment>
      <CardContent className="d-grid justify-content-md-start justify-content-center">
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Create your Streamify Account
        </Typography>
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
  
function CreateAcoount() {
  const [inp,setInp]=useState()
  const [error,setError]=useState()
    let handleChange=(e)=>{
       console.log(e.target.value)
               setInp({...inp,[e.target.name]:e.target.value})
    }
  const history=useHistory()
  let handleSubmit=(e)=>{
    e.preventDefault();
    if(inp.pass==inp.comPass){
      history.push("/verifyAccount")
    }
    else{
      setError("Password not match")

    }
  }
    return (
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box className="mb-5">
        <Card variant="outlined" className="pl-md-4 pl-sm-3 pl-2 pr-md-5 pr-sm-4 pr-3">{card}
        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <form onSubmit={handleSubmit}>
        <Box className="d-md-flex d-block" sx={{mt:3}}>
          <Box className="col-md-6 col-sm-8 col-12 pl-0">
        <TextField className="col-12 fname" id="outlined-basic" label="First name" size="small" variant="outlined" name="firstName"  required/>
        </Box>
        <Box className="col-md-6 col-sm-8 col-12 pr-md-0 pr-3 mt-md-0 mt-4 pl-md-3 pl-0">
        <TextField className="col-12 lname" id="outlined-basic" label="Last name" size="small"  variant="outlined" name="lastName" required />
        </Box>
        </Box>
        <Box className="col-12 pr-md-0 pr-sm-4 pr-3 pl-0 mt-4">
        <TextField id="outlined-basic" className="col-md-12 col-sm-8 col-12 email" label="Email address" size="small" variant="outlined" name="email" required/>
        </Box>
        <Box sx={{mt:3}} className="d-md-flex d-block">
        <Box className="col-md-6  col-sm-8 col-12 pl-0">
        <TextField
        className="col-12 pass"
          id="outlined-basic"
          onChange={handleChange}
          name="pass"
          id="outlined-error-helper-text" label="Password" size="small" variant="outlined"
          type='password'
          required
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        </Box>
        <Box className="col-md-6 col-sm-8 col-12 pr-md-0 pr-3 mt-md-0 mt-4 pl-md-3 pl-0">
        <TextField id="outlined-basic"
        className="col-12 compass"
        onChange={handleChange}
        name="comPass"
          id="outlined-error-helper-text" label="Password" size="small"  variant="outlined" 
          required
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
          />
          <Typography sx={{mt:1,fontSize:14,color:"red"}}>{error}</Typography>
          </Box>
        </Box>
        <FormGroup sx={{mt:4}}>
      <FormControlLabel sx={{color:"#0A56A3"}} control={<Checkbox/>} label=" I agree to the Terms of Service and Privacy Policy." />
      <FormControlLabel control={<Checkbox/>} label="I would like to receive emails about new features and news at Streamify." />
    </FormGroup>
        <Box sx={{my:3,display:'flex',justifyContent:'space-between'}}>
            <Link to="/signin"><Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>SIGN IN INSTEAD</Button></Link>
            <Button variant="contained" type="submit" onSubmit={handleSubmit} sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}
            >NEXT</Button>
        </Box>
        </form>
        </Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
    </Box>
    )
}


export default CreateAcoount
