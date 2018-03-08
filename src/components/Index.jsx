import React, {Component} from 'react';
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import {Route} from "react-router-dom";
import FontIcon from 'material-ui/FontIcon';
import {white, blue100} from 'material-ui/styles/colors';
import {Link} from "react-router-dom";
import '../index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            isSearchQuery: false
        }
    }

    setVideos = (videos, cb) => {
        this.setState({
            videos: videos,
            isSearchQuery: true
        }, () => {
            cb();
        });
    };

    selectVideoHandler = (selectedVideo) => {
        this.setState({selectedVideo}, () => {
            this.props.history.push('/index/watch');
        });
    };

    render() {
        return (
            <div className="index-container">
                <div className="index-title-wrap">
                    <p className="index-title">
                        <Link to="/index" className="index-title-link">
                            <FontIcon className="material-icons material-header-search-icon" color={white}
                                      hoverColor={blue100} style={{fontSize: 24, top: 6}}>search</FontIcon>
                            The YouTube Search by Dasha
                        </Link>
                    </p>
                </div>
                <div>
                    <SearchBar {...this.props} setVideos={this.setVideos}/>
                </div>
                <Route exact path='/index/list' render={() => (
                    <VideoList {...this.props} videos={this.state.videos}
                               onVideoSelect={this.selectVideoHandler}
                               isSearchQuery={this.state.isSearchQuery}
                    />
                )}/>
                <Route exact path='/index/watch' render={() => (
                    <VideoDetail {...this.props} video={this.state.selectedVideo}/>
                )}/>

            </div>
        );
    }
}

export default Index;