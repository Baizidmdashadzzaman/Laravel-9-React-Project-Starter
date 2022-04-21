import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Category edit';

export default class CategoryEdit extends Component {

constructor(props) {
    super(props);

    this.state = {
        category_name: "",
        category_code:"",
        category_logo: "",
        category_bannner: "",
        category_logo_show: "",
        category_bannner_show: "",
        category_description: "",
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

componentDidMount() {
  
  this.props.checkPermission(3);
  axios
  .get('/api/category-edit/' + this.props.match.params.id)
  .then((response) => {
    this.setState({
      category_name: response.data.singledata.category_name,
      category_code: response.data.singledata.category_code,
      category_logo_show: response.data.singledata.category_logo,
      category_bannner_show: response.data.singledata.category_bannner,
      category_description: response.data.singledata.category_description,
      status: response.data.singledata.status,
      id:this.props.match.params.id
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
    data.append('category_name', this.state.category_name)
    data.append('category_logo', this.state.category_logo)
    data.append('category_bannner', this.state.category_bannner)
    data.append('category_description', this.state.category_description)
    data.append('status', this.state.status)
    data.append('id', this.state.id)
    axios.post("/api/category-update", data)
    .then((response) => {
      if (response.data.status === 1) {
        this.setState({
            responseMsg: {
            status: response.data.status,
            message: response.data.message,
            },
        });
        this.setState({ processing: 0 });

        this.props.history.push("/admin/category", { state: 'sample data'}); 
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
            <h1 className="m-0">Category management</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Category</li>
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
      <h3 className="card-title"><font color="white" >Edit category</font></h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

        <div className="form-group">
          <label htmlFor="category_name">Category name</label>
          <input type="text" className="form-control" onChange={this.handleChangeCategoryName} value={this.state.category_name}
          id="category_name" placeholder="Enter category name" required />
        </div>

        <div className="form-group">
          <label htmlFor="category_code">Category Code</label>
          <input type="text" className="form-control" value={this.state.category_code}
          id="category_code" placeholder="Enter category code" required readOnly />
        </div>


        <div className="form-group">
          <label htmlFor="category_logo">Category logo</label>
          <center>
            <br/>
            <img src={ "/categoryimages/" + this.state.category_logo_show }
             className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
           <input type="file" name="category_logo" onChange={this.handleChangeCategoryLogo} 
            className="form-control" id="category_logo" placeholder="Enter category logo"  />
        </div>

        <div className="form-group">
          <label htmlFor="category_bannner">Category banner</label>
          <center>
            <br/>
             <img src={ "/categoryimages/" + this.state.category_bannner_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          
          <input type="file" name="category_bannner" onChange={this.handleChangeCategoryBanner} 
           className="form-control" id="category_bannner" placeholder="Enter category banner"  />
        </div>

        
        <div className="form-group">
          <label htmlFor="category_description">Category description</label>
          <textarea type="text" className="form-control" value={this.state.category_description}  
          id="category_description" onChange={this.handleChangeCategoryDescription} 
          placeholder="Enter category description" required />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" value={this.state.status} onChange={this.handleChangeStatus} 
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
