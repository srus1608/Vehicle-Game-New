import React, { createContext, useContext, useState } from 'react'

const ActivePageContext = createContext();

export const useActivePage = () => useContext(ActivePageContext);

const ActivePageProvider = ({children}) => {
  
  let pathname = window.location.pathname.substring(1);
  pathname = pathname === "" ? 'home' : pathname;

  const [activePage, setActivePage] = useState(pathname);
  const value = {activePage, setActivePage};

  return (
    <ActivePageContext.Provider value={value}>
        {children}
    </ActivePageContext.Provider>
  )
}

export default ActivePageProvider;