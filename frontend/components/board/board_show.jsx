import React from 'react';
import { connect } from 'react-redux';

class BoardShow extends React.Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);