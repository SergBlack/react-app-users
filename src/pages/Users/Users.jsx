import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import './Users.scss';
import { fetchUsers, setSelectedPage } from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import Pagination from '../../components/Pagination/Pagination';
import AddUserButton from '../../components/AddUserButton/AddUserButton';

const Users = ({ users, currentPage, totalPages, setSelectedPage }) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  const pageChange = (page) => {
    if (currentPage === page) return;
    setSelectedPage(page);
  };

  const getPagesList = (totalNumOfPages) => R.range(1, totalNumOfPages + 1);

  return (
    <div>
      <div className="usersCards_container">
        {
          R.map(
            user => (
              <UserCard user={user} key={user.id} />
            ),
            users,
          )
        }
      </div>
      <AddUserButton onClick={() => console.log('click')}/>
      <Pagination
        page={currentPage}
        pagesList={getPagesList(totalPages)}
        onPageChange={pageChange}
      />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  setSelectedPage: PropTypes.func,
};

Users.defaultProps = {
  currentPage: 1,
};

const mapStateToProps = state => ({
  users: state.usersStore.users,
  currentPage: state.usersStore.currentPage,
  totalPages: state.usersStore.totalPages,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: dispatch(fetchUsers()),
  setSelectedPage: (page) => dispatch(setSelectedPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
