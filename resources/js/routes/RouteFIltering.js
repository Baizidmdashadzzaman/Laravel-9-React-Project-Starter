import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

export default function RouteFIltering(props) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let routename = pathname;
    let check = routename.includes("admin");
    if(check == true){
        props.setRouteCurState(1);
    }
  }, [pathname]);

  return null;
}