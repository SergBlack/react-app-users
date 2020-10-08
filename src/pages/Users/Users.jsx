import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import './Users.scss';
import {
  fetchUsers as fetchUsersAction,
  fetchUser as fetchUserAction,
  setSelectedPage as setSelectedPageAction,
  addUser as addUserAction,
} from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import Pagination from '../../components/Pagination/Pagination';
import AddUserButton from '../../components/AddUserButton/AddUserButton';
import Modal from '../../components/Modal/Modal';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';

const Users = ({
  users,
  currentUser,
  currentPage,
  totalPages,
  fetchUsers,
  fetchUser,
  setSelectedPage,
  addUser,
}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const pageChange = (page) => {
    if (currentPage === page) return;
    setSelectedPage(page);
  };

  const getPagesList = (totalNumOfPages) => R.range(1, totalNumOfPages + 1);

  const addNewUser = (name, job) => {
    addUser(name, job);
  };

  const onUserCardClick = (id) => {
    setIsOpenModal(true);
    fetchUser(id);
  };

  const onModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <div className="modal_container">
        <Modal
          isOpen={isOpenModal}
          onClose={onModalClose}
          onDelete={() => {}}
          onSave={() => {}}
        >
          <UserProfileCard user={currentUser}/>
        </Modal>
      </div>
      <div className="usersCards_container">
        {
          R.map(
            user => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => onUserCardClick(user.id)}
              />
            ),
            users,
          )
        }
      </div>
      <AddUserButton
        onClick={() => addNewUser('Artur', 'king')}
      />
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
  currentUser: PropTypes.object,
  fetchUsers: PropTypes.func,
  fetchUser: PropTypes.func,
  setSelectedPage: PropTypes.func,
  addUser: PropTypes.func,
};

Users.defaultProps = {
  currentPage: 1,
};

const mapStateToProps = state => ({
  users: state.usersStore.users,
  currentPage: state.usersStore.currentPage,
  totalPages: state.usersStore.totalPages,
  currentUser: state.usersStore.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersAction()),
  fetchUser: (id) => dispatch(fetchUserAction(id)),
  setSelectedPage: (page) => dispatch(setSelectedPageAction(page)),
  addUser: (name, job) => dispatch(addUserAction(name, job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
