import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Contactus add';

export default class ContactusAdd extends Component {

constructor(props) {
    super(props);

    this.state = {
        contactus_name: "",
        contactus_email: "",
        contactus_phone: "",
        contactus_subject: "",
        contactus_message: "",
        notified: 0,
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        processing: 0,
    };
}

componentDidMount() {
  this.props.checkPermission(11);
}

contactus_name = (e) => { this.setState({ contactus_name: e.target.value }) }
contactus_email = (e) => { this.setState({ contactus_email: e.target.value }) }
contactus_phone = (e) => { this.setState({ contactus_phone: e.target.value }) }
contactus_subject = (e) => { this.setState({ contactus_subject: e.target.value }) }
contactus_message = (e) => { this.setState({ contactus_message: e.target.value }) }
notified = (e) => { this.setState({ notified: e.target.value }) }

submitHandler = (e) => {
    e.preventDefault();
    this.setState({ processing: 1 });
    
    const data = new FormData() 
    data.append('contactus_name', this.state.contactus_name)
    data.append('contactus_email', this.state.contactus_email)
    data.append('contactus_phone', this.state.contactus_phone)
    data.append('contactus_subject', this.state.contactus_subject)
    data.append('contactus_message', this.state.contactus_message)
    data.append('notified', this.state.notified)
    axios.post("/api/contactus-store", data)
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
                contactus_name: "",
                contactus_email: "",
                contactus_phone: "",
                contactus_subject: "",
                contactus_message: "",
                notified: 0,
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
            <h1 className="m-0">Contactus message management</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Contactus message</li>
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
      <h3 className="card-title"><font color="white" >Add new contactus message</font></h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

        <div className="form-group">
          <label htmlFor="contactus_name">Name</label>
          <input type="text" className="form-control" 
          onChange={this.contactus_name} id="contactus_name" placeholder="Enter name" required />
        </div>

        <div className="form-group">
          <label htmlFor="contactus_email">Email</label>
          <input type="email" className="form-control" 
          onChange={this.contactus_email} id="contactus_email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="contactus_phone">Phone</label>
          <input type="text" className="form-control" 
          onChange={this.contactus_phone} id="contactus_phone" placeholder="Enter phone"  />
        </div>

        <div className="form-group">
          <label htmlFor="contactus_subject">Subject</label>
          <input type="text" className="form-control" 
          onChange={this.contactus_subject} id="contactus_subject" placeholder="Enter subject"  />
        </div>

        <div className="form-group">
          <label htmlFor="contactus_message">Message</label>
          <textarea type="text" className="form-control" id="contactus_message" 
          onChange={this.contactus_message} placeholder="Enter message" required />
        </div>

        <div className="form-group">
          <label htmlFor="notified">Notified</label>
          <select className="form-control" onChange={this.notified} 
          id="notified" placeholder="Enter notified" required >
              <option value={1}>Yes</option>
              <option value={0} selected >No</option>
          </select>
        </div>
        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
        <i class="fa fa-spinner" aria-hidden="true"></i>
         { this.state.processing == 0 ? ( ' Submit' ) : ( ' Please wait ...' ) }
        </button>
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
