import React from 'react';
import PropTypes from 'prop-types';
import './UserProfileCard.scss';
import defaultAvatar from '../../assets/defaultAvatar.png';

const UserProfileCard = ({ user: { email, first_name, last_name, avatar } }) => {
  return (
    <div className="user_ProfileCard">
      <div className="user_ProfileCard-avatarContainer">
        <img
          className="user_ProfileCard-avatar"
          src={avatar ? avatar : defaultAvatar}
          alt="avatar"
        />
      </div>
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
