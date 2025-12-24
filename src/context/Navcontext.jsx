import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = createContext();
export const Navbarcol = createContext();

const Navcontext = ({ children }) => {
  const [navopencol, setnavopencol] = useState('black');
  const [navopen, setnavopen] = useState(false);
 
  const loc=useLocation().pathname;
 useEffect(function(){
  if(loc == '/project'|| loc == '/agent'){
    setnavopencol('white')
  }
  else{
    setnavopencol('black')
  }
 },[loc])
  

  return (
    <Navbar.Provider value={[navopen, setnavopen]}>
      <Navbarcol.Provider value={[navopencol, setnavopencol]} >
        {children}
      </Navbarcol.Provider>
      
    </Navbar.Provider>
  );
};

export default Navcontext;
