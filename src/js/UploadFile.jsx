import Dropzone from 'react-dropzone';
import React, {Component} from 'react';
import {render} from 'react-dom';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      images: []
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  handleOnDrop(files) {
    this.setState({isUploading: true});

    Promise.all(files.map(file => console.log(file.name)))
    /*
    .then(images => {
        this.setState({
          isUploading: false,
          images: this.state.images.concat(images)
        });
      }).catch(e => console.log(e));
    */
  }

  render() {
    return(
      <Dropzone
        onDrop={this.handleOnDrop}
        accept="image/gif,image/jpeg,image/png,image/jpg" >
          <div>
            Drag and Drop files Here!
            <p>format: gif/png/jpeg/jpg</p>
          </div>
      </Dropzone>
    );
  }
}
