import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions';

const Users = () => {

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      Users
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
