import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class BoardIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardIndex));