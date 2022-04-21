import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import { useParams } from "react-router-dom";
import queryString from 'query-string';
import { useLocation } from "react-router-dom";
import {BrowserRouter} from 'react-router';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Systemuser edit';

export default class UsersEdit extends Component {

constructor(props) {
    
    super(props);
    
    this.state = {
        name: "",
        email: "",
        password: "",
        phone: "",
        description: "",
        status: 1,
        id:"",
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        processing: 0,
        
    };
    
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

componentDidMount() {
  
  this.props.checkPermission(1);
    axios
    .get('/api/systemuser-edit/' + this.props.match.params.id)
    .then((response) => {
      if(response.data.singledata.primeuser === 1)
      {
        swal.fire(
          'Warning',
          'Sorry this users cannot be edited.',
          'warning'
        )
        this.props.history.push("/admin/systemuser", { state: 'sample data'}); 
      }
      else
      {
        this.setState({
          name: response.data.singledata.name,
          email: response.data.singledata.email,
          password: "",
          phone: response.data.singledata.phone,
          description: response.data.singledata.description,
          status: response.data.singledata.status,
          id:this.props.match.params.id
        });
      }

    })
    .catch((error) => {
      console.error(error);
    });
    
    
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
    data.append('id', this.state.id)
    axios.post("/api/systemuser-update", data)
    .then((response) => {
        if (response.data.status === 1) {
        this.setState({
            responseMsg: {
            status: response.data.status,
            message: response.data.message,
            },
        });
        this.setState({ processing: 0 });

        this.props.history.push("/admin/systemuser", { state: 'sample data'}); 
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
              <li className="breadcrumb-item active">Edit</li>
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
      <h3 className="card-title"><font color="white" >Edit system user</font></h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

      <div className="form-group">
          <label htmlFor="name">User name</label>
          <input type="text" className="form-control" onChange={this.handleChangeName} 
          id="name" value={this.state.name} placeholder="Enter user name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" 
          onChange={this.handleChangeEmail} value={this.state.email} placeholder="Enter email" required readOnly  />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={this.handleChangePassword} 
          id="password" value={this.state.password} placeholder="Enter password"  />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" onChange={this.handleChangePhone} 
          id="phone" value={this.state.phone} placeholder="Enter phone"  />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" onChange={this.handleChangeDescription} 
          id="description" value={this.state.description} placeholder="Enter description"  />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" onChange={this.handleChangeStatus} 
          id="status" value={this.state.status} placeholder="Enter status" required >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
          </select>
        </div>

        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          <i class="fa fa-spinner" aria-hidden="true"></i>
          { this.state.processing == 0 ? ( ' Update' ) : ( ' Please wait ...' ) }</button>
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
