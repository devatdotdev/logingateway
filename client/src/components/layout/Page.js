import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import Routes from '../routing/Routes';
import Alert from './Alert';
import Footer from './Footer';

const Page = () => (
  <Fragment>
    <Navbar />
    <section className='container-fluid'>
      <div className='full-size bg-digirain row align-items-center justify-content-center text-center overflow-auto text-light'>
        <div className='col-md-6 bg-dark-overlay'>
          <Alert />
          <Route component={Routes} />
          <Footer />
        </div>
      </div>
    </section>
  </Fragment>
);

export default Page;
