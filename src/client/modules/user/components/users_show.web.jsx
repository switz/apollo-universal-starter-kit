// Web only component
// React
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ListGroup, ListGroupItem } from 'reactstrap';

import PageLayout from '../../../app/page_layout';

function renderUsers(users) {
  return users.map(({ id, username, email, isAdmin }) => {
    return (
      <ListGroupItem className="justify-content-between" key={id}>
        <span>{username}</span>
        <span>{email}</span>
        <span>{isAdmin.toString()}</span>
      </ListGroupItem>
    );
  });
}

const UsersShow = ({ loading, users }) => {

  const renderMetaData = () => (
    <Helmet
      title="User"
      meta={[{
        name: 'description',
        content: 'User page'
      }]}/>
  );

  if (loading) {
    return (
      <PageLayout>
        {renderMetaData()}
        <div className="text-center">
          Loading...
        </div>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData()}
        <h2>Users</h2>
        <h1/>
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            <span>Username:</span>
            <span>Email:</span>
            <span>Is Admin:</span>
          </ListGroupItem>
          {renderUsers(users)}
        </ListGroup>
      </PageLayout>
    );
  }
};

UsersShow.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
};

export default UsersShow;