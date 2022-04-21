import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import actions from '../redux/Authenticate/actions';
import axios from 'axios';
import swal from 'sweetalert2';

export default function Checkauth() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(axios.rootURL + '/sanctum/csrf-cookie').catch(() => {
      dispatch({
        type: actions.LOGOUT,
      });
      swal.fire(
        'Warning',
        'Something went wrong, Contact admin <br> ErrorCode: csrf.',
        'warning'
      )
    })
    axios.interceptors.request.use(
     config => {
          return config
      },
     error => {
          return Promise.reject(error)
      }
     )
     axios.interceptors.response.use(
     response => {
        return response
     },
     error => {
      if (error.response.status === 401) {
        dispatch({
          type: actions.LOGOUT,
        });
        swal.fire(
          'Warning',
          'Please logging again to continue.',
          'warning'
        )
     }
     return Promise.reject(error)
     }
   )
  }, [pathname]);

  return null;
}