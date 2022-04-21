import {lazy, Suspense ,useState ,useEffect} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';

const LoginPage = lazy(() => import('../components/LoginPage'));
const Registration = lazy(() => import('../components/Register'));
const Home = lazy(() => import('../components/Home'));

export function AppRoutes({isAuthenticated}) {
  const [siteinfo, setsiteinfo] = useState("")
  let getSiteInformation = () => {
    fetch('/api/front-setting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
     })
    .then(response => response.json())
    .then(data => setsiteinfo(data.allData));
  }
  useEffect(() => {
    getSiteInformation();
  }, []);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/" isAuthenticated={false} exact>
            <Home/>
          </PublicRoute>
          <PublicRoute path="/admin/login" isAuthenticated={isAuthenticated} exact>
            <LoginPage/>
          </PublicRoute>
          <PublicRoute path="/admin/register" isAuthenticated={isAuthenticated} exact>
            <Registration/>
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}  >
            <ProtectedRoutes/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}
