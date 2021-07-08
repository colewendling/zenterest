import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id:'',
      pin_id: '',
      author_id: this.props.currentUser
    }
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
    .then(action => {
      this.props.fetchBoard(action.pin.board_id)
      this.props.fetchUser(action.pin.author_id)
    })
  }

  componentDidUpdate() {
    if (!this.props.pin) {
      this.props.fetchPin(this.props.match.params.pinId)
      .then(action => {
        this.props.fetchBoard
      })
    }
  }

  render() {
    const { pin, boards } = this.props;
    return (
      <div>
        <button onClick={() => this.props.history.goback()}></button>
      </div>
    )
  }
}

export default PinShow;