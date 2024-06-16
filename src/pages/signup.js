import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch, useSelector } from "react-redux";
import { addDdetails } from "@/redux/reducer/quiz";
import { useRouter } from 'next/router'




export default function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail]= useState("");
    const dispatch = useDispatch()
    const [err, setErr] = useState(""); 
    const router = useRouter()
    const {fName, lName,em}=useSelector(state=>state.quiz.data)

    const onSubmitHandler = () =>{
        if(firstName !=="" && lastName !== "" && email != "" ){
            dispatch(addDdetails({email:email,firstName:firstName, lastName:lastName}))
            router.push("/")
        }else{
            setErr("Please fill required input.")
        }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{marginTop:120, display:"flex", flexDirection:"column",alignItems:"center"}}>
        <Avatar sx={{margin:2, backgroundColor:"#ad00b3"}}>
          <LoginIcon  />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form style={{marginTop:15, width:"100%"}} noValidate>
            <p style={{color:"red"}}>{err?err:null}</p>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive game  updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{marginTop:5}}
            onClick={onSubmitHandler}
          >
            Sign Up
          </Button>
          <br/>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
