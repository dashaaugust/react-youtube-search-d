import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../index.css';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: props.video
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            video: props.video
        })
    }

    render() {
        const {video} = this.state;

        if (!video) return <p>{''}</p>;

        const videoId = video.id.videoId;
        const url = 'https://www.youtube.com/embed/' + videoId;

        return (
            <div className="video-detail-container">
                <Link to="/index/list" className="video-detail-link">&#8810; Back to list</Link>
                <div className="video-detail">
                    <div className="video-detail-img-wrap">
                        <iframe className="video-detail-img" frameBorder="0"
                                width="650" height="390"
                                src={url}
                                title={videoId}>
                            Ваш браузер не поддерживает плавающие фреймы!
                        </iframe>
                    </div>
                    <div>
                        <h3 className="video-detail-title">{video.snippet.title}</h3>
                        <div className="video-detail-description">{video.snippet.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;

