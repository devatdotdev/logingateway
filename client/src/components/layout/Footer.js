import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const year = new Date().getFullYear();

const Footer = () => (
  <Fragment>
    <div class='bg-dark-overlay pt-4'>
      <div class='container-fluid text-center text-md-left'>
        <div class='row'>
          <div class='col-md-6 mt-md-0 mt-3'>
            <h5 class='text-uppercase'>Don't Miss Out</h5>
            <p>
              <Link to='/register'>Register</Link> today for full access.
            </p>
          </div>

          <hr class='clearfix w-100 d-md-none pb-3' />

          <div class='col-md-3 mb-md-0 mb-3'>
            <h5 class='text-uppercase'>Social</h5>
            <ul class='list-unstyled'>
              <li>
                <a href='https://github.com/devatdotdev'>Github</a>
              </li>
              <li>
                <a href='mailto:dev@dotdev.dev'>Email</a>
              </li>
              <li>
                <a href='https://facebook.com/DotDev.dev'>Facebook</a>
              </li>
            </ul>
          </div>

          <div class='col-md-3 mb-md-0 mb-3'>
            <h5 class='text-uppercase'>Members</h5>
            <ul class='list-unstyled'>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/profiles'>Members</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='text-center py-3'>
        {`\u00A9 ${year} Copyright:`}
        <a href='https://www.dotdev.dev'> dotdev.dev</a>
      </div>
    </div>
  </Fragment>
);

export default Footer;
