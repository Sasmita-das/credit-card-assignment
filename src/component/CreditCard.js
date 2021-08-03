import React,{useState} from 'react';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {Grid,Paper,Container,form, TextField,Button, FormControl, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    button:{
      height:"1rem"
    }
  },
  textfield: {
    '& > *': {
      margin: theme.spacing(3),
      width: '40ch',
      height : "1rem"
    },
   },
   
  }));

const CreditCard = () => {
  const classes = useStyles();
  const paperStyle={padding :20, height:'90vh',width:400,margin:'0 auto'}
  const [number,setNumber] =useState('')
    const [name,setName] =useState('')
    const [expiry,setExpiry] =useState('')
    const [cvc,setCvc] =useState('')
    const [focus,setFocus] =useState('')

    return (
        <>
         <Container fixed style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
           <Grid>
           <Paper elevation={10} style= {paperStyle}>
           <Cards
          number ={number}
          name={name}
          expiry ={expiry}
          cvc= {cvc}
          focused ={focus}
          />
           
           <CardContent  className = {classes.textfield}  >
            <TextField id="outlined-basic"  variant="outlined"
                   type = 'tel'
                   name= 'number'
                   label="Card Number"
                   value ={number}
                   onChange = {e=> setNumber(e.target.value)}
                   onFocus = {e=> setFocus(e.target.name)}
                   />
              <TextField id="outlined-basic"  variant="outlined" 
                  type = 'text'
                   name= 'name'
                   label="name"
                   value ={name}
                   onChange = {e=> setName(e.target.value)}
                   onFocus = {e=> setFocus(e.target.name)}/>
           <TextField id="outlined-basic"  variant="outlined" type = 'text'
                   name= 'expiry'
                   label='MM/YY Expiry'
                   value ={expiry}
                   onChange = {e=> setExpiry(e.target.value)}
                   onFocus = {e=> setFocus(e.target.name)}/>
                   
            
             <TextField id="outlined-basic"  variant="outlined" type = 'tel'
                   name= 'cvc'
                   placeholder='cvc'
                   value ={cvc}
                   onChange = {e=> setCvc(e.target.value)}
                   onFocus = {e=> setFocus(e.target.name)}/>
                   <Grid xs ={12}><Button variant="contained" color="primary" fullWidth >
                    Submit
                     </Button></Grid>
                   
        </CardContent>  
        
         </Paper>
           </Grid>      
        </Container>
        </>
       
    )
}

export default CreditCard
