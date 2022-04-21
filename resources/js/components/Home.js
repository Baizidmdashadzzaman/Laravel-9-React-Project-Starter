import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import React, { useState , useEffect } from 'react';
import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Home';

function LoginPage() {
  

  const [projectname, setProjectName] = useState("Loading ...");
  
 
  useEffect(() => {
    axios
    .get('/api/setting')
    .then((response) => {
      setProjectName(response.data.allData.site_name);
    })
    .catch((error) => {
      console.error(error);
    });
    
    return () => {
        // Anything in here is fired on component unmount.
    }
   }, [])


  return (
<div className="login-page " >

        <Helmet>
          <title>{ projectname } : Home</title>
        </Helmet>

<div  className="login-box">
  
  <div className="card card-outline card-primary">
    <br/>
    <div className="card-header text-center">
      <p className="h1"><b>{ projectname }</b></p>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
         <NavLink to="/login">
         <Button type="primary" htmlType="submit" className="login-form-button"
          size="large">Log in
        </Button>
         </NavLink>
         
      <hr/> 
      <center>
        <b>Developed by </b>ASADZAMAN
        <br/>
        
      </center>

      
    </div>
    
  </div>
 
</div>
</div>
  );
}

export default LoginPage;
