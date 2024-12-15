import React from 'react';
import '../../components/NavHome';
import NavHome from '../../components/NavHome';

export const metadata = {
  title: 'Speech Pro',
  desc: 'AI based web app to improve spoken English',
};

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <NavHome />
        {children}
      </body>
    </html>
  );
}
