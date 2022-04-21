import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert2';
import {Helmet} from "react-helmet";

const TITLE = 'Dashboard';


export default class Dashboard extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
        admincount: 0,
        categorycount: 0,
        contactuscount:0,
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        images: [],
        searchDataInfo:{
          search:"",
        }
        
    };


  }
  componentDidMount() {
      axios
     .get('/api/dashboard')
     .then((response) => {
       this.setState({
 
        admincount: response.data.admincount,
        categorycount: response.data.categorycount,
        contactuscount:response.data.contactuscount,

       });
     })
     .catch((error) => {
       console.error(error);
     });
    
     
  };


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
            <h1 className="m-0">{this.props.pagename}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">{this.props.pagename}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <section className="content">
      <div className="container-fluid">
        
        <div className="row">

          <div className="col-lg-3 col-12">
            
            <div className="small-box bg-primary">
              <div className="inner">
                <h3><font color="white">{ this.state.admincount }</font></h3>
  
                <p>Systemusers</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <NavLink to="/admin/systemuser" className="small-box-footer">
                View all systemusers <i className="fas fa-arrow-circle-right"></i>
              </NavLink>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            
            <div className="small-box bg-primary">
              <div className="inner">
                <h3><font color="white">{ this.state.categorycount }</font></h3>
  
                <p>Categories</p>
              </div>
              <div className="icon">
                <i className="fa fa-clone "></i>
              </div>
              <NavLink to="/admin/category" className="small-box-footer">
                View all category <i className="fas fa-arrow-circle-right"></i>
              </NavLink>
            </div>
          </div>


          <div className="col-lg-3 col-12">
            
            <div className="small-box bg-primary">
              <div className="inner">
                <h3><font color="white">{ this.state.contactuscount }</font></h3>
  
                <p>Contactus</p>
              </div>
              <div className="icon">
                <i className="fa fa-envelope "></i>
              </div>
              <NavLink to="/admin/contactus" className="small-box-footer">
                View all message <i className="fas fa-arrow-circle-right"></i>
              </NavLink>
            </div>
          </div>



          
        </div>
        
        
        
      </div>
       </section>
      </div>

    );
  }
}
