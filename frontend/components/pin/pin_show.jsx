import React from 'react';


class PinShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: 'url',
      author_id: 1,
      board_id: 1,
      imageFile: null,
      imageUrl: null
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }


  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }


  handleFile(e) {
    // this.setState({ imageFile: e.target.files[0] });
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[url]', this.state.url);
    formData.append('pin[author_id]', this.state.author_id);
    formData.append('pin[board_id]', this.state.board_id);
    formData.append('pin[image]', this.state.imageFile);

    this.props.createPin(formData)
      .then((action) => {
        this.props.history.push(`/users/${action.pin.author_id}/pins/${action.pin.id}`);
        this.props.closeModal();
      })
  }


  render() {

    return (


      <div className="show-modal-container">

        <h1 className='show-text'>Pin Show</h1>

      </div>
    );
  }
}


export default PinShow;