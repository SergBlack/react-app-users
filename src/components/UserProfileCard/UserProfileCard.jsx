import React from 'react';
import PropTypes from 'prop-types';
import './UserProfileCard.scss';
import Avatar from '../Avatar/Avatar';

const UserProfileCard = ({ user: { email, first_name, last_name, avatar } }) => {
  return (
    <div className="user_ProfileCard">
      <Avatar avatar={avatar} type="squared"/>
      <div className="user_ProfileCard-attrs">
        <input
          className="user_ProfileCard-firstName"
          value={first_name}
        />
        <input
          className="user_ProfileCard-lastName"
          value={last_name}
        />
        <input
          className="user_ProfileCard-email"
          value={email}
        />
      </div>
    </div>
  );
};

UserProfileCard.propTypes = {
  user: PropTypes.object,
};

export default UserProfileCard;
