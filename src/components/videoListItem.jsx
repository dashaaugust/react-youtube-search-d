import React, {Component} from 'react';
import '../index.css';

class VideoListItem extends Component {
    render() {
        const video = this.props.video;
        return (
            <div>
                <div className="video-item" onClick={() => this.props.onVideoSelect(video)}>
                    <div>
                        <img className="video-item-img"
                             src={video.snippet.thumbnails.default.url}
                             alt={video.snippet.title}/>
                    </div>
                    <div className="video-item-title">
                        {video.snippet.title}
                    </div>
                    <div className="video-item-description">
                        {video.snippet.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoListItem;
