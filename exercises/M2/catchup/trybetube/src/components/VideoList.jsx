import React from 'react';
import videos from '../data';
import { connect } from 'react-redux';
import action from '../redux/action';
import { Link } from 'react-router-dom';

class VideoList extends React.Component {
  render() {
    return (
        videos.map((video, index) => (
          <Link to={`/video/${index}`} onClick={ () => this.props.dispatchVideo(video) }>
            <img src={ video.imagem } alt={ video.titulo } width="100%" className="flex" />
            <h3>{video.titulo}</h3>
          </Link>
        ))
    );
  }
}

const dispatchToProp = (dispatch) => ({
  dispatchVideo: (video) => dispatch(action(video))
})

export default connect(null, dispatchToProp)(VideoList)
