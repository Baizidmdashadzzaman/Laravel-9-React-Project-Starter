import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Change password';

export default class ChangePassword extends Component {

constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        old_password: "",
        new_password: "",
        confirm_password: "",
        id: "",
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        processing: 0,
    };
}

openModal()
{
    axios
    .get("/api/auth/user")
    .then((response) => {
        this.setState({
            name: response.data.data.name,
            email: response.data.data.email,
            id:response.data.data.id,
          });
          $('#passwordChangeModal').modal('show')
    })
    .catch((error) => {
      console.error(error);
    });
    
}


old_password = (e) => { this.setState({ old_password: e.target.value }) }
new_password = (e) => { this.setState({ new_password: e.target.value }) }
confirm_password = (e) => { this.setState({ confirm_password: e.target.value }) }

submitPasswordHandler = (e) => {
    e.preventDefault();
    this.setState({ processing: 1 });
    
    const data = new FormData() 
    data.append('old_password', this.state.old_password)
    data.append('new_password', this.state.new_password)
    data.append('confirm_password', this.state.confirm_password)
    data.append('id', this.state.id)
    axios.post("/api/systemuser-changepassword", data)
    .then((response) => {
      if (response.data.status === 1) {
        this.setState({
            responseMsg: {
            status: response.data.status,
            message: response.data.message,
            },
        });
        setTimeout(() => {
            this.setState({
              old_password: "",
              new_password: "",
              confirm_password: "",
              responseMsg: "",
              processing: 0
            });
        }, 2000);
        $('#passwordChangeModal').modal('hide')
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
      
<>
        
{/* Password modal */}
<div class="modal fade" id="passwordChangeModal" tabindex="-1" role="dialog" 
aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <form onSubmit={this.submitPasswordHandler} encType="multipart/form-data" id="dataFormPassword">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary ">
        <h5 class="modal-title text-white" id="exampleModalLongTitle">Change your password ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
              <font color="white">&times;</font></span>
        </button>
      </div>
      <div class="modal-body">

        <div className="form-group">
          <label htmlFor="song_name">Name</label>
          <input type="text" className="form-control" 
          id="name" 
          placeholder="Enter song name" value={this.state.name} readOnly />
        </div>
        
        <div className="form-group">
          <label htmlFor="song_name">Email</label>
          <input type="text" className="form-control" 
          id="email" 
          placeholder="Enter song name" value={this.state.email} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="old_password">Old password</label>
          <input type="password" className="form-control" 
          onChange={this.old_password} id="old_password" 
          placeholder="Enter old password" value={this.state.old_password} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="new_password">New password</label>
          <input type="password" className="form-control" 
          onChange={this.new_password} id="new_password" 
          placeholder="Enter old password" value={this.state.new_password} required />
        </div>
    
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm password</label>
          <input type="password" className="form-control" 
          onChange={this.confirm_password} id="new_password" 
          placeholder="Enter old password" value={this.state.confirm_password} required />
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">
            <i class="fa fa-times-circle" aria-hidden="true"></i> Close
        </button>
        <button type="submit" class="btn btn-primary">
            <i class="fa fa-check-circle" aria-hidden="true"></i> 
            { this.state.processing == 0 ? ( ' Change' ) : ( ' Please wait ...' ) }
        </button>
      </div>
    </div>
  </div>
  </form>
</div>
{/* Password modal */}
        
</>

        
    );
  }
}
