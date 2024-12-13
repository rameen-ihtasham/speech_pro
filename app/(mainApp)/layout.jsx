import React from 'react';
import "../../components/NavHome";
import NavHome from '../../components/NavHome';
export default function Layout({ children }) {
    return <html><body>
        <NavHome    />
        {children}
        </body></html>; 
  }