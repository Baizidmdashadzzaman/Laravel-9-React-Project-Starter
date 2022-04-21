import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import { useParams } from "react-router-dom";
import queryString from 'query-string';
import { useLocation } from "react-router-dom";
import {BrowserRouter} from 'react-router';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Systemuser permission';

export default class UsersPermission extends Component {

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
        description: 0,
        permission_admin:0,
        permission_category: 0,
        permission_setting: 0,
        permission_contactus: 0,
        
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
          'Sorry this users permission cannot be updated.',
          'warning'
        )
        this.props.history.push("/systemuser", { state: 'sample data'}); 
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
          id:this.props.match.params.id,
          permission_admin: response.data.singledata.permission_admin,
          permission_category: response.data.singledata.permission_category,
          permission_setting: response.data.singledata.permission_setting,
          permission_contactus: response.data.singledata.permission_contactus,
        });
      }

    })
    .catch((error) => {
      console.error(error);
    });
    
    
}

addPermissionBlock(id){
    swal.fire(
        'Warning',
         'This module only available for super admin.',
        'warning'
      )

}

addPermission(id) {
    const data = new FormData() 
    data.append('user_id', this.state.id)
    data.append('permission_id', id)
    axios.post("/api/systemuser-addpermission", data)
    .then((response) => {
       this.setState({
        name: response.data.singledata.name,
        email: response.data.singledata.email,
        password: "",
        phone: response.data.singledata.phone,
        description: response.data.singledata.description,
        status: response.data.singledata.status,
        id:this.props.match.params.id,
        permission_admin: response.data.singledata.permission_admin,
        permission_category: response.data.singledata.permission_category,
        permission_setting: response.data.singledata.permission_setting,
        permission_contactus: response.data.singledata.permission_contactus,
       });
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

        this.props.history.push("/systemuser", { state: 'sample data'}); 
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
              <li className="breadcrumb-item active">Permission</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <section className="content">
      <div className="container-fluid">
        
        
        
<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Permission for : <b>{this.state.name}</b></h3>
        
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th>SL</th>
              <th>Module name</th>
              <th>Permission</th>
            </tr>
          </thead>
          <tbody>
          
            {/* admin management */}
            <tr>
                  <td><b>1</b></td>
                  <td><span className="tag tag-success">Admin management</span></td>
                  <td>
                    <div>
                    {
                      this.state.permission_admin == 0 ? 
                      (
                        <button type="button" 
                        onClick={() => this.addPermissionBlock(1)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Add permission</font>
                        </button>
                      )
                       :
                      (
                        <button type="button" 
                        onClick={() => this.addPermissionBlock(1)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Remove permission</font>
                        </button>
                      ) 
                    }
                    </div>
                  </td>
            </tr>
            {/* admin management */}


            {/* category management */}
            <tr>
                  <td><b>3</b></td>
                  <td><span className="tag tag-success">Category management</span></td>
                  <td>
                    <div>
                    {
                      this.state.permission_category == 0 ? 
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(3)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Add permission</font>
                        </button>
                      )
                       :
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(3)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Remove permission</font>
                        </button>
                      ) 
                    }
                    </div>
                  </td>
            </tr>
            {/* category management */}


            {/* site setting management */}
            <tr>
                  <td><b>9</b></td>
                  <td><span className="tag tag-success">Site setting management</span></td>
                  <td>
                    <div>
                    {
                      this.state.permission_setting == 0 ? 
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(9)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Add permission</font>
                        </button>
                      )
                       :
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(9)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Remove permission</font>
                        </button>
                      ) 
                    }
                    </div>
                  </td>
            </tr>
            {/* site setting management */}


            {/* contactus management */}
            <tr>
                  <td><b>11</b></td>
                  <td><span className="tag tag-success">Contactus message management</span></td>
                  <td>
                    <div>
                    {
                      this.state.permission_contactus == 0 ? 
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(11)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Add permission</font>
                        </button>
                      )
                       :
                      (
                        <button type="button" 
                        onClick={() => this.addPermission(11)}
                         className="btn btn-md bg-gradient-primary">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                            &nbsp;<font style={{color: 'white'}}>Remove permission</font>
                        </button>
                      ) 
                    }
                    </div>
                  </td>
            </tr>
            {/* contactus management */}

          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
</div>

     
      </div>
       </section>
      </div>
    );
  }
}
