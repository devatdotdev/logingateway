import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = ({ actionName, actionDescription }) => {
  return (
      <div className='col-sm col-md-5 m-3 card text-dark' style={style}>
        <div className='card-body'>
          <h5 className='card-title'>{actionName}</h5>
          <p className='card-text'>{actionDescription}</p>
          <div className="text-center">
            <Link to='/edit-profile' className='w-50 key__button'>Enter</Link>
          </div>
        </div>
      </div>
  );
};

const style = {
  width: '18rem'
}

export default DashboardAction;
