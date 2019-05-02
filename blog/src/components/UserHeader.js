import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { users } = this.props;
    if (!users) {
      return null;
    }
    return <div className="header">{users.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { users: user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
