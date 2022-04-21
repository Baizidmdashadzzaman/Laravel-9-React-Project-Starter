import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import {isMobile} from 'react-device-detect';

export default function Checkauth(props) {
  const { pathname } = useLocation();
  
  useEffect(() => {
      if (isMobile) {
        if(props.menustate == 1)
        {
          props.controlMobileMenu();
        } 
      }
      
  }, [pathname]);

  return null;
}