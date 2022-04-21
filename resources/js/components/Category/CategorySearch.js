import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert2';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : CategorySearch';

export default class CategorySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        alldata: [],
        searchDataInfo:{
          search:"",
        },
        countmusic: 0
        
    };
    this.searchData = this.searchData.bind(this);
  }
  componentDidMount() {
    this.props.checkPermission(6);
    this.getData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
       let param = nextProps.location.pathname;
       var paramdata = param.replace('/admin/category/search/','');
       this.getData(paramdata);
    }
  }



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


  getData = (data) => {
    axios
    .post('/api/category-search', data)
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
            <h1 className="m-0">Category search : {this.state.alldata.length}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Category</li>
              <li className="breadcrumb-item active">Search</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <section className="content">
      <div className="container-fluid">
        

<div className="row">
{
            this.state.alldata.length > 0 ? (
            this.state.alldata.map((singledata) => (
                
  <div className="col-md-3">   
    <div className="card card-widget widget-user shadow">    
      <div className="widget-user-header bg-primary">
        <h3 className="widget-user-username" >
            <font color="white">{singledata.category_name}</font>
        </h3>
        <h5 className="widget-user-desc">
            <font color="white">Category</font>
        </h5>
      </div>
      <div className="widget-user-image">
        <img className="img-circle elevation-2" src={ "/categoryimages/" + singledata.category_logo }
         alt={singledata.category_name} />
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="description-block">
                <NavLink to={"/admin/category/edit/" + singledata.id} className="btn btn-block bg-gradient-primary">
                    <i class="fa fa-toggle-on" aria-hidden="true"></i>
                    &nbsp;<font style={{color: 'white'}}>Edit</font>
                </NavLink>
            </div>          
          </div>
        </div>
      </div>
    </div>
  </div>
        ))
        ) : (

      <div className="col-12">
        <div className="callout callout-primary">
          <h5><i className="fas fa-info" /> Sorry:</h5>
          No category found . Please enter again to search song .
        </div>
      </div>


        )
}

</div>
        
      </div>
       </section>
      </div>
    );
  }
}
