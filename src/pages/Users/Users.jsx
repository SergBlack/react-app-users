import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Users.scss';
import { fetchUsers } from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';

const Users = ({ users }) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="usersCards_container">
      {
        users.map(user => (
          <UserCard user={user} key={user.id} />
        ))
      }
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  users: state.usersStore.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
