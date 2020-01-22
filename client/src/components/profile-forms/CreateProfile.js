import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });
  const {
    company,
    website,
    location,
    status,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <div className='mb-3'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Let's get some information to make your
          profile stand out
        </p>
      </div>
      <form className='form text-left' onSubmit={e => onSubmit(e)}>
        <div className='row'>
          <div className='col-md-6'>
            <h1>About Yourself</h1>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='status'
                value={status}
                onChange={e => onChange(e)}></input>
              <small className='form-text'>
                Give us an idea of where you are at in your career
              </small>
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Company'
                name='company'
                value={company}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Could be your own company or one you work for
              </small>
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Website'
                name='website'
                value={website}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Could be your own or a company website
              </small>
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                City & state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                placeholder='A short bio of yourself'
                name='bio'
                value={bio}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Tell us a little about yourself
              </small>
            </div>
          </div>
          <div className='col-md-6 social-links'>
            <h1>Social Links</h1>
            <div className='form-group d-flex'>
              <label for='twitter'>
                <i className='fab fa-twitter fa-2x' />
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group d-flex'>
              <label for='facebook'>
                <i className='fab fa-facebook fa-2x' />
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group d-flex'>
              <label for='youtube'>
                <i className='fab fa-youtube fa-2x' />
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group d-flex'>
              <label for='linkedin'>
                <i className='fab fa-linkedin fa-2x' />
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group d-flex'>
              <label for='instagram'>
                <i className='fab fa-instagram fa-2x' />
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>

            <input type='submit' className='btn btn-primary my-1' />
            <Link className='btn btn-light my-1' to='/dashboard'>
              Go Back
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(Createprofile)
);
