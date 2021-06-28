import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: "",
      author_id: this.props.currentUser
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(PinShow);