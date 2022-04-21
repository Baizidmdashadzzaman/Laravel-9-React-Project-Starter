import {useDispatch} from 'react-redux'
import actions from '../redux/Authenticate/actions';
import {useSelector} from 'react-redux'
import {Form, Input, Button, Checkbox, Row, Col, Layout} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import React, { useState , useEffect } from 'react';
import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Login';

function LoginPage() {
  


  const {loader} = useSelector(state => state.authenticateReducer)

  const dispatch = useDispatch();

  let onFinish = (values) => {
    dispatch({
      type: actions.LOGIN,
      payload: {'email': values.email, 'password': values.password, 'remember': values.remember},
    });
  };
  
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
          <title>{ projectname } : Login</title>
        </Helmet>

<div  className="login-box">
  
  <div className="card card-outline card-primary">
    <br/>
    <div className="card-header text-center">
      <p className="h1"><b>{ projectname }</b></p>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <Form  name="normal_login" onFinish={onFinish} >
      <Form.Item
        name="email"
        validateTrigger="onSubmit"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input size="large"
          prefix={<UserOutlined className="site-form-item-icon"/>}
          placeholder="Email"/>
      </Form.Item>
      <Form.Item
        name="password"
        validateTrigger="onSubmit"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          size="large"
          prefix={<LockOutlined className="site-form-item-icon"/>}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
      
      
      <Form.Item>
        <Button loading={loader} type="primary" htmlType="submit" className="login-form-button"
          size="large">Log in
        </Button>
      </Form.Item>  
      </Form>
      <hr/> 
      <center>
        <b>Developed by </b>ASADZAMAN
        <br/>
        
      </center>


      {/* Or <NavLink to="/register">register now!</NavLink> */}
      
      
    </div>
    
  </div>
 
</div>
</div>
  );
}

export default LoginPage;
