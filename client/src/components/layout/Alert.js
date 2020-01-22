import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fade, Alert } from 'react-bootstrap';

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Fade in={true}>
      <Alert
        key={alert.id}
        variant={alert.alertType}
        className='rounded-pill my-1 w-50 mx-auto alert font-weight-bold'>
        {alert.msg}
      </Alert>
    </Fade>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);
