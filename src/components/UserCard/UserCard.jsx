import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';
import defaultAvatar from '../../assets/defaultAvatar.png';

const UserCard = ({ user: { avatar, first_name } }) => {
  return (
    <div className="user_card">
      <div className="user_card-avatarContainer">
        <img
          className="user_card-avatar"
          src={avatar ? avatar : defaultAvatar}
          alt="avatar"
        />
      </div>
      <div className="user_card-first_name">
        {first_name}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
