import { Fragment } from 'react';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className='bg-black text-white'>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
