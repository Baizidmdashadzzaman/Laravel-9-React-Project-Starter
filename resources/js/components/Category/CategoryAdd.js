import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Category add';

export default class CategoryAdd extends Component {

constructor(props) {
    super(props);

    this.state = {
        category_name: "",
        category_logo: "",
        category_bannner: "",
        category_description: "",
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
  this.props.checkPermission(3);
}

handleChangeCategoryName = (e) => {
  this.setState({
    category_name: e.target.value
  })
}
handleChangeCategoryLogo = (e) => {
    this.setState({
      category_logo: e.target.files[0]
    })
}
handleChangeCategoryBanner = (e) => {
  this.setState({
    category_bannner: e.target.files[0]
  })
}
handleChangeCategoryDescription = (e) => {
  this.setState({
    category_description: e.target.value
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
    data.append('category_name', this.state.category_name)
    data.append('category_logo', this.state.category_logo)
    data.append('category_bannner', this.state.category_bannner)
    data.append('category_description', this.state.category_description)
    data.append('status', this.state.status)
    axios.post("/api/category-store", data)
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
              category_name: "",
              category_logo: "",
              category_bannner: "",
              category_description: "",
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
            <h1 className="m-0">Category management</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Category</li>
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
      <h3 className="card-title"><font color="white" >Add new category</font></h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

        <div className="form-group">
          <label htmlFor="category_name">Category name</label>
          <input type="text" className="form-control" onChange={this.handleChangeCategoryName} id="category_name" placeholder="Enter category name" required />
        </div>


        <div className="form-group">
          <label htmlFor="category_logo">Category logo</label>
          <input type="file" name="category_logo" onChange={this.handleChangeCategoryLogo}  className="form-control" id="category_logo" placeholder="Enter category logo" required />
        </div>

        <div className="form-group">
          <label htmlFor="category_bannner">Category banner</label>
          <input type="file" name="category_bannner" onChange={this.handleChangeCategoryBanner}  className="form-control" id="category_bannner" placeholder="Enter category banner" required />
        </div>

        
        <div className="form-group">
          <label htmlFor="category_description">Category description</label>
          <textarea type="text" className="form-control" id="category_description" onChange={this.handleChangeCategoryDescription} placeholder="Enter category description" required />
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
