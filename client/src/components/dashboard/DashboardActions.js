import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardAction from './DashboardAction';

const DashboardActions = ({
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      <h3>Available Actions</h3>
      <div class='row'>
        {profile !== null ? (
          <DashboardAction
            actionName='Edit Profile'
            actionDescription='Manage your personal info, security settings, and contact preferences.'
          />
        ) : (
          <DashboardAction
            actionName='Create Profile'
            actionDescription='Tell us all about you!'
          />
        )}
        <DashboardAction
          actionName='Create Profile'
          actionDescription='Tell us all about you!'
        />
        <DashboardAction
          actionName='Create Profile'
          actionDescription='Tell us all about you!'
        />
        <DashboardAction
          actionName='Create Profile'
          actionDescription='Tell us all about you!'
        />
      </div>
    </>
  );
};

DashboardActions.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  DashboardActions
);
