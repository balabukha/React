import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatarUrl from "gravatar-url";

import { logOut } from "../../actions";

function TopNavigation({ user, logOut }) {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/dashboard">
        Dashboard
      </Menu.Item>

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
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(TopNavigation);
