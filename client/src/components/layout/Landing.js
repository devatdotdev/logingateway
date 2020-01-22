import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 class='text-light'>Login Gateway</h1>
      <div className='buttons'>
        <Link to='/register' className='btn btn-light btn-lg rounded-pill'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-dark btn-lg rounded-pill'>
          Login
        </Link>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
