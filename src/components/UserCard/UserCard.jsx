import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';

const UserCard = ({ user: { avatar, email, first_name, last_name} }) => {
  return (
    <div className="user_card">
      <div className="user_card-avatarContainer">
        <img className="user_card-avatar" src={avatar} alt="avatar"/>
      </div>
      <div className="user_card-attrsContainer">
        <div className="user_card-email">
          <span>Email: </span>{email}
        </div>
        <div className="user_card-first_name">
          <span>First name: </span>{first_name}
        </div>
        <div className="user_card-last_name">
          <span>Last Name: </span>{last_name}
        </div>
      </div>
    </div>
  )
};

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard;
