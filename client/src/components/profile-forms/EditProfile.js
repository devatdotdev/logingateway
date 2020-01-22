import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Title from '../layout/Title';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile, profile]);

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
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <div className='d-flex flex-column'>
        <Title title={{ text: 'Edit Your Profile' }} />
        <div className='row page-body'>
          <div className='nav nav-tabs nav-pills col-3 text-left flex-column'>
            <a
              class='nav-item nav-link active'
              href='#nav-profile'
              data-toggle='tab'>
              Profile
            </a>
            <a class='nav-item nav-link' href='#nav-account' data-toggle='tab'>
              Account
            </a>
          </div>
          <div className='tab-content col-9'>
            <div class='tab-pane fade show active' id='nav-profile'>
              <form className='text-left' onSubmit={e => onSubmit(e)}>
                <div className='row'>
                  <div className='col-md-6'>
                    <h3>About Yourself</h3>
                    <div className='form-group'>
                      <select
                        className='form-control'
                        name='status'
                        value={status}
                        onChange={e => onChange(e)}>
                        <option>* Select Professional Status</option>
                        <option value='Developer'>Developer</option>
                        <option value='Other'>Other</option>
                      </select>
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
                    <h3>Social Links</h3>
                    <div className='form-group d-flex'>
                      <label for='twitter'>
                        <i className='fab fa-twitter fa-2x' />
                      </label>
                      <input
                        type='text'
                        className='form-control'
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
                        type='text'
                        className='form-control'
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
                        type='text'
                        className='form-control'
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
            </div>
            <div class='tab-pane fade' id='nav-account'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
