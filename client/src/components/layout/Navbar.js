import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto pr-4'>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <Link to='/profiles' className='nav-link'>
            Members
          </Link>
        </div>
      </li>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <Link to='/dashboard' className='nav-link'>
            Dashboard
          </Link>
        </div>
      </li>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <a onClick={logout} href='#!' className='nav-link'>
            <i className='fas fa-sign-out-alt' /> Logout
          </a>
        </div>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-auto pr-4'>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <Link to='/profiles' className='nav-link'>
            Members
          </Link>
        </div>
      </li>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <Link to='/register' className='nav-link'>
            Register
          </Link>
        </div>
      </li>
      <li className='nav-item'>
        <div className='text-center d-flex align-items-center justify-content-center'>
          <Link to='/login' className='nav-link'>
            <i className='fas fa-sign-out-alt' /> Login
          </Link>
        </div>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-dark navbar-expand'>
      <Link to='/' className='navbar-brand'>
        <div className='logo'></div>Login Gateway
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
