import React, {Component} from 'react';
import VideosListItem from './videoListItem';
import '../index.css';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: props.videos
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            videos: props.videos
        })
    }

    render() {
        const {videos} = this.state;

        if (videos.length === 0) return <p className="error">{this.props.isSearchQuery ? 'Your search returned no results, please try again' : ''}</p>;

        return (
            <div>
                {videos ? videos.map((video) => {
                return (<VideosListItem {...this.props} onVideoSelect={this.props.onVideoSelect} video={video} key={video.etag}/>)}) : null}
            </div>
        );
    }
}

export default VideoList;
