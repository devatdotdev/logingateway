import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='display-1 text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
