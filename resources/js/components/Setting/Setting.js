import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import { useParams } from "react-router-dom";
import queryString from 'query-string';
import { useLocation } from "react-router-dom";
import {BrowserRouter} from 'react-router';

import {Helmet} from "react-helmet";
const TITLE = 'Larareact : Site Setting';

export default class Setting extends Component {

constructor(props) {
    
    super(props);
    
    this.state = {
        site_name: "",
        site_email: "",
        site_sms_api: "",
        site_phone: "",
        site_logo_first: "",
        site_logo_second: "",
        site_favicon: "",
        site_logo_first_show: "",
        site_logo_second_show: "",
        site_favicon_show: "",
        meta_keyword: "",
        meta_description: "",
        site_address: "",
        site_description: "",
        site_map: "",
        site_faq: "",

        site_url: "",
        site_privacyandpolicy: "",
        site_aboutus_banner: "",
        site_aboutus_banner_show: "",
        site_faq_banner: "",
        site_faq_banner_show: "",
        site_privacyandpolicy_banner: "",
        site_privacyandpolicy_banner_show: "",
        site_app_android_link: "",
        site_app_ios_link: "",
        site_app_window_link: "",

        site_fb_link: "",
        site_twitter_link: "",
        site_linkdin_link: "",
        site_youtube_link: "",

        bkash_number: "",
        bkash_image: "",
        bkash_image_show: "",

        id:"",
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
        processing: 0,
        
    };
    
}

handleChangesite_name = (e) => { this.setState({ site_name: e.target.value }) }
handleChangesite_email = (e) => {
  this.setState({
    site_email: e.target.value
  })
}
handleChangesite_sms_api = (e) => {
  this.setState({
    site_sms_api: e.target.value
  })
}
handleChangesite_phone = (e) => {
  this.setState({
    site_phone: e.target.value
  })
}

handleChangesite_logo_first = (e) => {
    this.setState({
      site_logo_first: e.target.files[0]
    })
}
handleChangesite_logo_second = (e) => {
  this.setState({
    site_logo_second: e.target.files[0]
  })
}
handleChangesite_favicon = (e) => {
  this.setState({
    site_favicon: e.target.files[0]
  })
}

handleChangemeta_keyword = (e) => {
  this.setState({
    meta_keyword: e.target.value
  })
}
handleChangemeta_description = (e) => {
  this.setState({
    meta_description: e.target.value
  })
}
handleChangesite_address = (e) => {
  this.setState({
    site_address: e.target.value
  })
}
handleChangesite_description = (e) => {
  this.setState({
    site_description: e.target.value
  })
}
handleChangesite_map = (e) => {
  this.setState({
    site_map: e.target.value
  })
}
handleChangesite_faq = (e) => {
  this.setState({
    site_faq: e.target.value
  })
}

site_url = (e) => { this.setState({ site_url: e.target.value }) }
site_privacyandpolicy = (e) => { this.setState({ site_privacyandpolicy: e.target.value }) }
site_aboutus_banner = (e) => { this.setState({ site_aboutus_banner: e.target.files[0] }) }
site_faq_banner = (e) => { this.setState({ site_faq_banner: e.target.files[0] }) }
site_privacyandpolicy_banner = (e) => { this.setState({ site_privacyandpolicy_banner: e.target.files[0] }) }
site_app_android_link = (e) => { this.setState({ site_app_android_link: e.target.value }) }
site_app_ios_link = (e) => { this.setState({ site_app_ios_link: e.target.value }) }
site_app_window_link = (e) => { this.setState({ site_app_window_link: e.target.value }) }

site_fb_link = (e) => { this.setState({ site_fb_link: e.target.value }) }
site_twitter_link = (e) => { this.setState({ site_twitter_link: e.target.value }) }
site_linkdin_link = (e) => { this.setState({ site_linkdin_link: e.target.value }) }
site_youtube_link = (e) => { this.setState({ site_youtube_link: e.target.value }) }

bkash_number = (e) => { this.setState({ bkash_number: e.target.value }) }
bkash_image = (e) => { this.setState({ bkash_image: e.target.files[0] }) }

componentDidMount() {
    this.props.checkPermission(9);
    axios
    .get('/api/setting')
    .then((response) => {
      this.setState({

        site_name: response.data.allData.site_name,
        site_email: response.data.allData.site_email,
        site_sms_api: response.data.allData.site_sms_api,
        site_phone: response.data.allData.site_phone,
        site_logo_first_show: response.data.allData.site_logo_first,
        site_logo_second_show: response.data.allData.site_logo_second,
        site_favicon_show: response.data.allData.site_favicon,
        meta_keyword: response.data.allData.meta_keyword,
        meta_description: response.data.allData.meta_description,
        site_address: response.data.allData.site_address,
        site_description: response.data.allData.site_description,
        site_map: response.data.allData.site_map,
        site_faq: response.data.allData.site_faq,
        site_url: response.data.allData.site_url,
        site_privacyandpolicy: response.data.allData.site_privacyandpolicy,
        site_aboutus_banner_show: response.data.allData.site_aboutus_banner,
        site_faq_banner_show: response.data.allData.site_faq_banner,
        site_privacyandpolicy_banner_show: response.data.allData.site_privacyandpolicy_banner,
        site_app_android_link: response.data.allData.site_app_android_link,
        site_app_ios_link: response.data.allData.site_app_ios_link,
        site_app_window_link: response.data.allData.site_app_window_link,

        site_fb_link: response.data.allData.site_fb_link,
        site_twitter_link: response.data.allData.site_twitter_link,
        site_linkdin_link: response.data.allData.site_linkdin_link,
        site_youtube_link: response.data.allData.site_youtube_link,

        bkash_number: response.data.allData.bkash_number,
        bkash_image: "",
        bkash_image_show: response.data.allData.bkash_image,
        
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
    data.append('site_name', this.state.site_name)
    data.append('site_email', this.state.site_email)
    data.append('site_sms_api', this.state.site_sms_api)
    data.append('site_phone', this.state.site_phone)
    data.append('site_logo_first', this.state.site_logo_first)
    data.append('site_logo_second', this.state.site_logo_second)
    data.append('site_favicon', this.state.site_favicon)
    data.append('meta_keyword', this.state.meta_keyword)
    data.append('meta_description', this.state.meta_description)
    data.append('site_address', this.state.site_address)
    data.append('site_description', this.state.site_description)
    data.append('site_map', this.state.site_map)
    data.append('site_faq', this.state.site_faq)

    data.append('site_url', this.state.site_url)
    data.append('site_privacyandpolicy', this.state.site_privacyandpolicy)
    data.append('site_aboutus_banner', this.state.site_aboutus_banner)
    data.append('site_faq_banner', this.state.site_faq_banner)
    data.append('site_privacyandpolicy_banner', this.state.site_privacyandpolicy_banner)
    data.append('site_app_android_link', this.state.site_app_android_link)
    data.append('site_app_ios_link', this.state.site_app_ios_link)
    data.append('site_app_window_link', this.state.site_app_window_link)

    data.append('site_fb_link', this.state.site_fb_link)
    data.append('site_twitter_link', this.state.site_twitter_link)
    data.append('site_linkdin_link', this.state.site_linkdin_link)
    data.append('site_youtube_link', this.state.site_youtube_link)

    data.append('bkash_number', this.state.bkash_number)
    data.append('bkash_image', this.state.bkash_image)

    axios.post("/api/setting-update", data)
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
              site_name: response.data.data.site_name,
              site_email: response.data.data.site_email,
              site_sms_api: response.data.data.site_sms_api,
              site_phone: response.data.data.site_phone,
              site_logo_first_show: response.data.data.site_logo_first,
              site_logo_second_show: response.data.data.site_logo_second,
              site_favicon_show: response.data.data.site_favicon,
              site_logo_first: "",
              site_logo_second: "",
              site_favicon: "",
              meta_keyword: response.data.data.meta_keyword,
              meta_description: response.data.data.meta_description,
              site_address: response.data.data.site_address,
              site_description: response.data.data.site_description,
              site_map: response.data.data.site_map,
              site_faq: response.data.data.site_faq,

              site_url: response.data.data.site_url,
              site_privacyandpolicy: response.data.data.site_privacyandpolicy,
              site_privacyandpolicy_banner: "",
              site_aboutus_banner: "",
              site_faq_banner: "",
              site_privacyandpolicy_banner_show: response.data.data.site_privacyandpolicy_banner,
              site_aboutus_banner_show: response.data.data.site_aboutus_banner,
              site_faq_banner_show: response.data.data.site_faq_banner,
              site_app_android_link: response.data.data.site_app_android_link,
              site_app_ios_link: response.data.data.site_app_ios_link,
              site_app_window_link: response.data.data.site_app_window_link,

              site_fb_link: response.data.data.site_fb_link,
              site_twitter_link: response.data.data.site_twitter_link,
              site_linkdin_link: response.data.data.site_linkdin_link,
              site_youtube_link: response.data.data.site_youtube_link,

              bkash_number: response.data.data.bkash_number,
              bkash_image: "",
              bkash_image_show: response.data.data.bkash_image,

              responseMsg: "",
              processing: 0
            });
        }, 1000);

        //document.querySelector("#dataForm").reset();
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
            <h1 className="m-0">System setting</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">System</li>
              <li className="breadcrumb-item active">Setting</li>
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
      <h3 className="card-title"><font color="white" >System setting update</font></h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form onSubmit={this.submitHandler} encType="multipart/form-data" id="dataForm">
      <div className="card-body">

        <div className="form-group">
          <label htmlFor="site_name">Site name</label>
          <input type="text" className="form-control" 
          value={this.state.site_name} onChange={this.handleChangesite_name} id="site_name" 
          placeholder="Enter site name" />
        </div>

        <div className="form-group">
          <label htmlFor="site_email">Site email</label>
          <input type="text" className="form-control" 
          value={this.state.site_email} onChange={this.handleChangesite_email} id="site_email" 
          placeholder="Enter site email" />
        </div>

        <div className="form-group">
          <label htmlFor="site_sms_api">Sms api</label>
          <input type="text" className="form-control" 
          value={this.state.site_sms_api} onChange={this.handleChangesite_sms_api} id="site_sms_api" 
          placeholder="Enter sms api" />
        </div>

        <div className="form-group">
          <label htmlFor="site_phone">Phone number</label>
          <input type="text" className="form-control" 
          value={this.state.site_phone} onChange={this.handleChangesite_phone} id="site_phone" 
          placeholder="Enter site name" />
        </div>

        <div className="form-group">
          <label htmlFor="site_logo_first">Site logo frontend</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_logo_first_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_logo_first" 
          onChange={this.handleChangesite_logo_first}  className="form-control" 
          id="site_logo_first" placeholder="Enter site logo" />
        </div>

        <div className="form-group">
          <label htmlFor="site_logo_second">Site logo backend</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_logo_second_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_logo_second" 
          onChange={this.handleChangesite_logo_second}  className="form-control" 
          id="site_logo_second" placeholder="Enter site logo backend" />
        </div>

        <div className="form-group">
          <label htmlFor="site_favicon">Site favicon</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_favicon_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_favicon" 
          onChange={this.handleChangesite_favicon}  className="form-control" 
          id="site_favicon" placeholder="Enter site favicon" />
        </div>

        <div className="form-group">
          <label htmlFor="meta_keyword">Meta keyword</label>
          <textarea type="text" className="form-control" 
          value={this.state.meta_keyword} onChange={this.handleChangemeta_keyword} id="meta_keyword" 
          placeholder="Enter meta keyword" />
        </div>

        <div className="form-group">
          <label htmlFor="meta_description">Meta description</label>
          <textarea type="text" className="form-control" 
          value={this.state.meta_description} onChange={this.handleChangemeta_description} id="meta_description" 
          placeholder="Enter meta description" />
        </div>

        <div className="form-group">
          <label htmlFor="site_address">Site address</label>
          <input type="text" className="form-control" 
          value={this.state.site_address} onChange={this.handleChangesite_address} id="site_address" 
          placeholder="Enter site address" />
        </div>

        <div className="form-group">
          <label htmlFor="site_description">Site description</label>
          <textarea type="text" className="form-control" 
          value={this.state.site_description} onChange={this.handleChangesite_description} id="site_description" 
          placeholder="Enter site description" />
        </div>

        <div className="form-group">
          <label htmlFor="site_map">Site map</label>
          <textarea type="text" className="form-control" 
          value={this.state.site_map} onChange={this.handleChangesite_map} id="site_map" 
          placeholder="Enter site map" />
        </div>

        <div className="form-group">
          <label htmlFor="site_faq">Site faq</label>
          <textarea type="text" className="form-control" 
          value={this.state.site_faq} onChange={this.handleChangesite_faq} id="site_faq" 
          placeholder="Enter site faq" />
        </div>

        <div className="form-group">
          <label htmlFor="site_url">Site url</label>
          <input type="text" className="form-control" 
          value={this.state.site_url} onChange={this.site_url} id="site_url" 
          placeholder="Enter site url" />
        </div>

        <div className="form-group">
          <label htmlFor="site_privacyandpolicy">Site privacy and policy</label>
          <textarea type="text" className="form-control" 
          value={this.state.site_privacyandpolicy} onChange={this.site_privacyandpolicy} id="site_privacyandpolicy" 
          placeholder="Enter site privacy and policy" />
        </div>

        <div className="form-group">
          <label htmlFor="site_favicon">Site about us page banner</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_aboutus_banner_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_aboutus_banner" 
          onChange={this.site_aboutus_banner}  className="form-control" 
          id="site_aboutus_banner" placeholder="Enter site about us page banner" />
        </div>

        <div className="form-group">
          <label htmlFor="site_favicon">Site faq page banner</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_faq_banner_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_faq_banner" 
          onChange={this.site_faq_banner}  className="form-control" 
          id="site_faq_banner" placeholder="Enter site faq page banner" />
        </div>

        <div className="form-group">
          <label htmlFor="site_privacyandpolicy_banner">Site privacy policy banner</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.site_privacyandpolicy_banner_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="site_privacyandpolicy_banner" 
          onChange={this.site_privacyandpolicy_banner}  className="form-control" 
          id="site_privacyandpolicy_banner" placeholder="Enter site privacy policy banner" />
        </div>

        <div className="form-group">
          <label htmlFor="site_app_android_link">Android app link</label>
          <input type="text" className="form-control" 
          value={this.state.site_app_android_link} onChange={this.site_app_android_link} id="site_app_android_link" 
          placeholder="Enter andoird app link" />
        </div>
        <div className="form-group">
          <label htmlFor="site_app_ios_link">IOS app link</label>
          <input type="text" className="form-control" 
          value={this.state.site_app_ios_link} onChange={this.site_app_ios_link} id="site_app_ios_link" 
          placeholder="Enter ios app link" />
        </div>
        <div className="form-group">
          <label htmlFor="site_app_window_link">Window app link</label>
          <input type="text" className="form-control" 
          value={this.state.site_app_window_link} onChange={this.site_app_window_link} id="site_app_window_link" 
          placeholder="Enter window app link" />
        </div>

        <div className="form-group">
          <label htmlFor="site_fb_link">Facebook link</label>
          <input type="text" className="form-control" 
          value={this.state.site_fb_link} onChange={this.site_fb_link} id="site_fb_link" 
          placeholder="Enter facebook link" />
        </div>
        <div className="form-group">
          <label htmlFor="site_twitter_link">Twitter link</label>
          <input type="text" className="form-control" 
          value={this.state.site_twitter_link} onChange={this.site_twitter_link} id="site_twitter_link" 
          placeholder="Enter twitter link" />
        </div>
        <div className="form-group">
          <label htmlFor="site_linkdin_link">Linkdin link</label>
          <input type="text" className="form-control" 
          value={this.state.site_linkdin_link} onChange={this.site_linkdin_link} id="site_linkdin_link" 
          placeholder="Enter linkdin link" />
        </div>
        <div className="form-group">
          <label htmlFor="site_youtube_link">Youtube link</label>
          <input type="text" className="form-control" 
          value={this.state.site_youtube_link} onChange={this.site_youtube_link} id="site_youtube_link" 
          placeholder="Enter youtube link" />
        </div>

        <div className="form-group">
          <label htmlFor="bkash_number">Bkash number</label>
          <input type="text" className="form-control" 
          value={this.state.bkash_number} onChange={this.bkash_number} id="bkash_number" 
          placeholder="Enter bkash number" />
        </div>

        <div className="form-group">
          <label htmlFor="bkash_image">Bkash banner</label>
          <center>
            <br/>
             <img src={ "/settingfolder/" + this.state.bkash_image_show } 
              className="img-fluid img-bordered" width="200px"/>
             <br/>
             <br/>
          </center>
          <input type="file" name="bkash_image" 
          onChange={this.bkash_image}  className="form-control" 
          id="bkash_image" placeholder="Enter site bkash banner" />
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
