import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Systemuser add';

export default class UsersAdd extends Component {

constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        password: "",
        phone: "",
        description: "",
        status: 1,
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        processing: 0,
    };
}

componentDidMount() {
  this.props.checkPermission(1);
}

handleChangeName = (e) => {
  this.setState({
    name: e.target.value
  })
}
handleChangeEmail = (e) => {
  this.setState({
    email: e.target.value
  })
}
handleChangePassword = (e) => {
  this.setState({
    password: e.target.value
  })
}
handleChangePhone = (e) => {
  this.setState({
    phone: e.target.value
  })
}
handleChangeDescription = (e) => {
  this.setState({
    description: e.target.value
  })
}
handleChangeStatus = (e) => {
  this.setState({
    status: e.target.value
  })
}

submitHandler = (e) => {
    e.preventDefault();
    this.setState({ processing: 1 });
    
    const data = new FormData() 
    data.append('name', this.state.name)
    data.append('email', this.state.email)
    data.append('password', this.state.password)
    data.append('phone', this.state.phone)
    data.append('description', this.state.description)
    data.append('status', this.state.status)
    axios.post("/api/systemuser-store", data)
    .then((response) => {
        if (response.data.status === 1) {
        setTimeout(() => {
            this.setState({
              name: "",
              email: "",
              password: "",
              phone: "",
              description: "",
              status: 1,
              responseMsg: "",
              processing: 0
            });
        }, 2000);

        document.querySelector("#dataForm").reset();
        swal.fire(
          'Success',
           response.data.message,
          'success'
        )
        }
        else
        {
          swal.fire(
            'Sorry',
             response.data.message,
            'error'
          )
          this.setState({ processing: 0 });
        }
    })
    .catch((error) => {
        console.error(error);
    });
   
}

  render() {
    return (
        <div>

        <Helmet>
          <title>{this.props.appname} : {this.props.pagename}</title>
        </Helmet>

        <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Systemuser management</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Systemuser</li>
              <li className="breadcrumb-item active">Add</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    

    <section className="content">
      <div className="container-fluid">
        
        
        
<div className="col-md-12">
  
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title"><font color="white" >Add new systemuser</font></h3>
      
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

        <div className="form-group">
          <label htmlFor="name">User name</label>
          <input type="text" className="form-control" onChange={this.handleChangeName} 
          id="name" placeholder="Enter user name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" 
          onChange={this.handleChangeEmail} placeholder="Enter email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={this.handleChangePassword} 
          id="password" placeholder="Enter password" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" onChange={this.handleChangePhone} 
          id="phone" placeholder="Enter phone"  />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" onChange={this.handleChangeDescription} 
          id="description" placeholder="Enter description"  />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" onChange={this.handleChangeStatus} 
          id="status" placeholder="Enter status" required >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
          </select>
        </div>

        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          <i class="fa fa-spinner" aria-hidden="true"></i>
          { this.state.processing == 0 ? ( ' Submit' ) : ( ' Please wait ...' ) }</button>
      </div>
    </form>
  </div>

</div>

     
      </div>
       </section>
      </div>
    );
  }
}
