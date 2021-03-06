import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class Logout extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    // Always reload app on logout for security reasons.
    location.href = '/';
  }

  render() {
    const {msg} = this.props;

    return (
      <div className="logout">
        <button onClick={this.logout}>{msg.button}</button>
      </div>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.auth.logout
}))(Logout);
