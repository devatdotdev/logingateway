import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    user: { name }
  }
}) => (
  <div className='col-md-6 profile-about'>
    {bio && (
      <div className='mx-3 text-left'>
        <h2 className='text-primary text-justify'>Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </div>
    )}
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
