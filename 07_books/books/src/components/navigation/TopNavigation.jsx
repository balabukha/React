import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatarUrl from 'gravatar-url';

import { logOut } from '../../actions';
import { allBooksSelector } from '../../Reducer/books';

function TopNavigation({ user, logOut, hasBooks }) {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/dashboard">
        Dashboard
      </Menu.Item>
      {hasBooks && (
        <Menu.Item as={Link} to="/books/new">
          Add new book
        </Menu.Item>
      )}

      <Menu.Menu position="right">
        <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => logOut()}>logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  };
}

export default connect(mapStateToProps, { logOut, allBooksSelector })(TopNavigation);
