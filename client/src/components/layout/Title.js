import React from 'react';

const Title = ({ title }) => {
  const { text, subTitle, icon } = title;
  return (
    <div className='row page-title align-items-center justify-content-center'>
      <div className='col'>
        <h1 className='text-light my-3'>{text}</h1>
        <p className='lead'>
          <i className={icon} />
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Title;
