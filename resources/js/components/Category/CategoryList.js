import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Category list';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        image: "",
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        alldata: [],
        searchDataInfo:{
          search:"",
        }
        
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.searchData = this.searchData.bind(this);
  }
  componentDidMount() {
    this.props.checkPermission(3);
    this.getData();
  }

  handleDelete(id) {
    
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios.get('/api/category-edit/' + id)
        .then((response) => {
            
            
              axios.get('/api/category-delete/' + id)
              .then((response) => {
                  this.setState({
                    alldata: response.data.allData,
                  });
                  swal.fire(
                     'Success',
                     'Data deleted sucessfully.',
                     'success'
                  )
                  console.log('Expense removed deleted!')
              }).catch((error) => {
                  console.log(error)
              })
            
        }).catch((error) => {
            console.log(error)
        })


      }
    })



  }
  /*
  searchData = (e) => 
  {
    this.setState({
      searchDataInfo:{
         search:e.target.value
      }
    });

    this.searchProduct(e);
  }
  */

  searchData = (e) =>  {
    const data = new FormData() 
    data.append('search', e.target.value)
    axios.post("/api/category-search", data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            alldata: response.data.allData,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  getData = () => {
    axios
      .get("/api/category-list")
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            alldata: response.data.allData,
          });
          console.log(response.data);
        }
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
            <h1 className="m-0">Category management</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Category</li>
              <li className="breadcrumb-item active">List</li>
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
        <h3 className="card-title">All category list</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: 150}}>
            <input type="text" name="table_search" onKeyUp={this.searchData} 
            className="form-control float-right" placeholder="Search category" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
          <br/>
          <NavLink to="/admin/category/add" className="btn btn-block bg-gradient-primary" style={{float: 'right'}}>
          <i class="fa fa-plus-square" aria-hidden="true"></i> <font style={{color: 'white'}}> Add category</font>
          </NavLink>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.alldata.length > 0 ? (
            this.state.alldata.map((singledata) => (
               <tr key={singledata.id} >
                  <td>{singledata.id}</td>
                  <td><img src={ "/categoryimages/" + singledata.category_logo } 
                  className="img-fluid img-bordered" width="100px"/></td>
                  <td>{singledata.category_name}</td>
                  <td><span className="tag tag-success"><b>{singledata.category_code}</b></span></td>
                  <td>
                    <div>
                       <NavLink to={"/admin/category/edit/" + singledata.id} className="btn btn-md bg-gradient-primary">
                       <i class="fa fa-toggle-on" aria-hidden="true"></i>
                       &nbsp;<font style={{color: 'white'}}>Edit</font>
                       </NavLink>&nbsp;&nbsp; 
                       <button type="button" onClick={() => this.handleDelete(singledata.id)} 
                       className="btn btn-md bg-gradient-primary">
                       <i class="fa fa-trash" aria-hidden="true"></i>
                           &nbsp;<font style={{color: 'white'}}>Delete</font>
                       </button>
                    </div>
                  </td>
               </tr>

                        ))
                    ) : (
                        <h6 className="text-danger text-center">No Data Found </h6>
                    )
          }
            
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
