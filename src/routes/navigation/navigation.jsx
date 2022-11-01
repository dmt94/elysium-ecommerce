import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
import './navigation.scss';

const Navigation = () => {
  return (
    <Fragment >
      < Navbar />
      < Outlet />
      < Footer />
    </Fragment>
  )
}

export default Navigation;