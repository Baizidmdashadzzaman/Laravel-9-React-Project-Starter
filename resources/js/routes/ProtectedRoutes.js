import React ,{ useState , useEffect ,Component } from 'react';
import {Route, Switch ,useHistory } from 'react-router-dom';
import {Layout} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/Authenticate/actions';
import routes from './routes';
import {NavLink} from 'react-router-dom';
const {Header, Content} = Layout;
import axios from 'axios';
import swal from 'sweetalert2';

import ScrollToTop from "../components/scrollToTop";
import Checkauth from '../components/Checkauth';
import MobileMenuControl from '../components/MobileMenuControl';
import ChangePassword from '../components/ChangePassword';

import Dashboard from '../components/Dashboard';

import Setting from '../components/Setting/Setting';

import UsersList from '../components/Users/UsersList';
import UsersAdd from '../components/Users/UsersAdd';
import UsersEdit from '../components/Users/UsersEdit';
import UsersPermission from '../components/Users/UsersPermission';

import CategoryList from '../components/Category/CategoryList';
import CategoryAdd from '../components/Category/CategoryAdd';
import CategoryEdit from '../components/Category/CategoryEdit';

import CategorySearch from '../components/Category/CategorySearch';

import ContactusList from '../components/Contactus/ContactusList';
import ContactusAdd from '../components/Contactus/ContactusAdd';
import ContactusEdit from '../components/Contactus/ContactusEdit';

function ProtectedRoutes() {

  
  let history = useHistory();
  const {name, logOutLoader} = useSelector(state => state.authenticateReducer)

  const appname = "Larareact"

  const dispatch = useDispatch();

  let onLogout = () => {
    dispatch({
      type: actions.LOGOUT,
    });
  };

  let checkPermission = (e) => {
    axios
      .get("/api/auth/user")
      .then((response) => {
        if(response.data.data.primeuser == 1){ }
        else
        { const goto = "/admin/dashboard";
          if(e == 1) { if(response.data.data.permission_admin == 1) { } else{ swal.fire( 'Warning', 'Sorry you dont have permission to access this module.', 'warning' ); history.push(goto); } }
          if(e == 3) { if(response.data.data.permission_category == 1) { } else{ swal.fire( 'Warning', 'Sorry you dont have permission to access this module.', 'warning' ); history.push(goto); } }
          if(e == 9) { if(response.data.data.permission_setting == 1) { } else{ swal.fire( 'Warning', 'Sorry you dont have permission to access this module.', 'warning' ); history.push(goto); } }
          if(e == 11) { if(response.data.data.permission_contactus == 1) { } else{ swal.fire( 'Warning', 'Sorry you dont have permission to access this module.', 'warning' ); history.push(goto); } }
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  let moduleNotAvailable = (e) => {
    swal.fire(
      'Warning',
       'Module not available rigth now.It will be added soon.',
      'warning'
    )
  }
  
  let searchDataLayout = (e) =>  {
    if(e.target.value.length > 0) { const goto = "/admin/category/search/" + e.target.value; history.push(goto); }
    else { const goto = "/admin/dashboard"; history.push(goto); }
  };

  let goHomepage = (e) => { const goto = "/admin/dashboard"; history.push(goto); }
  
  const [menustate, setmenuState] = useState(0);
  
  let clickMenu = (e) => { if(menustate == 0) { setmenuState(1); } else { setmenuState(0); } }

  let controlMobileMenu = (e) => { document.getElementById("menuButton").click(); setmenuState(0); }
   
  let openChangepassModal = React.createRef();
  let clickModal = () => { 
     openChangepassModal.current.openModal();
   }

  const [projectname, setProjectName] = useState("Loading ...");
  const [projectlogo, setProjectLogo] = useState("Logo");

  useEffect(() => {
    axios
    .get('/api/setting')
    .then((response) => {
      setProjectName(response.data.allData.site_name);
      setProjectLogo(response.data.allData.site_logo_second);
    })
    .catch((error) => {
      console.error(error);
    });
    
    return () => {
        
    }
   }, [])


  return (

<div className="wrapper">
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
 
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" id="menuButton" onClick={clickMenu}
       data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
    </li>
    <li class="nav-item">
      <a href="javascript:void(0)" onClick={goHomepage} class="nav-link d-block d-sm-none ">
       <b>{projectname}</b>
      </a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
       <NavLink to="/admin/dashboard" className="nav-link" >Home</NavLink>
      
    </li>
    <li className="nav-item d-none d-sm-inline-block">    
      <a href="javascript:void(0)" loading={logOutLoader} onClick={onLogout} className="nav-link">Logout</a>
    </li>
  </ul>

  
  <ul className="navbar-nav ml-auto">
   
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search"></i>
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" 
            type="search" name="table_search" onKeyUp={searchDataLayout} placeholder="Search songs" aria-label="Search songs" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>


    <li className="nav-item dropdown">
      <a className="nav-link" href="javascript:void(0)" onClick={clickModal} >
        <i className="fa fa-user-circle"></i>
      </a>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link" href="javascript:void(0)" onClick={moduleNotAvailable} >
        <i className="far fa-comments"></i>
        <span className="badge badge-primary navbar-badge">0</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" className="dropdown-item">
          
          <div className="media">
            <img src="/resource/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Brad Diesel
                <span className="float-right text-sm text-primary"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">Call me whenever you can...</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          
          <div className="media">
            <img src="/resource/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                John Pierce
                <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">I got your message bro</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          
          <div className="media">
            <img src="/resource/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Nora Silvester
                <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">The subject goes here</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    
    <li className="nav-item dropdown">
      <a className="nav-link" href="javascript:void(0)" onClick={moduleNotAvailable} >
        <i className="far fa-bell"></i>
        <span className="badge badge-primary navbar-badge">0</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">15 Notifications</span>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-envelope mr-2"></i> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-users mr-2"></i> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-file mr-2"></i> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    
  </ul>
</nav>

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  
  <NavLink to="/admin/dashboard" className="brand-link">
    <img src={ "/settingfolder/" + projectlogo } alt={projectname} className="brand-image img-circle elevation-3" />
    <span className="brand-text font-weight-light"><b>{ projectname }</b></span>
  </NavLink>

  <div className="sidebar scrCustom">
   
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/resource/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Welcome , <b>{name}</b></a>
      </div>
    </div>

    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search"
         name="table_search" onKeyUp={searchDataLayout} placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    <nav className="mt-2"  >
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        
        <li className="nav-header">Dashboard</li>
        <li className="nav-item">
          <NavLink to="/admin/dashboard" className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Dashboard
              
            </p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/setting" className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Setting
              
            </p>
          </NavLink>
        </li>

        <li className="nav-header">Systemuser</li>
        <li className="nav-item">
          <NavLink to="/admin/systemuser" className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Admins
              
            </p>
          </NavLink>
        </li>
        

        <li className="nav-header">Crud example</li>
        <li className="nav-item">
          <NavLink to="/admin/category" className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Category 
            </p>
          </NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/admin/contactus" className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Contactus
            </p>
          </NavLink>
        </li>
        
        <li className="nav-header">Others</li>
        
        <li className="nav-item">
          <a href="javascript:void(0)" loading={logOutLoader} onClick={onLogout} className="nav-link ">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Logout 
            </p>
          </a>
        </li>
        <li className="nav-item">
          <br/>
        </li>

      </ul>
    </nav>
    
  </div>
  
</aside>

<div className="content-wrapper "  >

<ChangePassword ref={openChangepassModal} />


<Content >
        <ScrollToTop />
        <Checkauth />
        <MobileMenuControl menustate={menustate} controlMobileMenu={controlMobileMenu} />
        <Switch>
          
          <Route path="/admin/dashboard" 
            render={(props) => 
               <Dashboard 
                  pagename="Dashboard"
                  appname={projectname} 
                  {...props} moduleNotAvailable={moduleNotAvailable} 
                />
            } 
          exact /> 

          <Route path="/admin/setting" 
            render={(props) => 
               <Setting 
                  pagename="System setting"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 

          <Route path="/admin/systemuser" 
            render={(props) => 
               <UsersList 
                  pagename="Systemuser management"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 

          <Route path="/admin/systemuser/add" 
            render={(props) => 
               <UsersAdd 
                  pagename="Systemuser add"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 

          <Route path="/admin/systemuser/edit/:id" 
            render={(props) => 
               <UsersEdit 
                  pagename="Systemuser edit"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />
          
          <Route path="/admin/systemuser/addpermission/:id" 
            render={(props) => 
               <UsersPermission 
                  pagename="Systemuser permission"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />

          <Route path="/admin/category" 
            render={(props) => 
               <CategoryList 
                  pagename="Category management"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />  

          <Route path="/admin/category/add"
            render={(props) => 
               <CategoryAdd 
                  pagename="Category add"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 

          <Route path="/admin/category/edit/:id" 
            render={(props) => 
               <CategoryEdit 
                  pagename="Category edit"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 


          <Route path="/admin/category/search/:id" 
            render={(props) => 
               <CategorySearch 
                  pagename="Category Search"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />   

         <Route path="/admin/contactus" 
            render={(props) => 
               <ContactusList 
                  pagename="Contactus management"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />  

          <Route path="/admin/contactus/add"
            render={(props) => 
               <ContactusAdd
                  pagename="Contactus add"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact /> 

          <Route path="/admin/contactus/edit/:id" 
            render={(props) => 
               <ContactusEdit 
                  pagename="Contactus edit"
                  appname={projectname} 
                  {...props} checkPermission={checkPermission} 
                />
            } 
          exact />    


          
        </Switch>
</Content>



</div>

<footer className="main-footer">
  <strong>Copyright &copy; 2021-{new Date().getFullYear()} 
  <a href="https://baizidmdashadzzaman-next.vercel.app/" target="_blank" > {projectname}</a>. </strong>
  All rights reserved.
  <br className='d-block d-sm-none'/>
  
  <div className="float-right d-none d-sm-inline-block">
    <a href='https://baizidmdashadzzaman-next.vercel.app/' target="_blank" >
      <b>Developed by</b> ASADZAMAN
    </a>
  </div>
  <div className="float-left d-block d-sm-none">
    <a href='https://baizidmdashadzzaman-next.vercel.app/' target="_blank" >
      <b>Developed by</b> ASADZAMAN
    </a>
  </div>

</footer>


</div>


  );
}
export default ProtectedRoutes;
