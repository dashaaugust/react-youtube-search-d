import React, {Component} from 'react';
import YTSearch from "youtube-api-search";
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import JSONP from 'jsonp';
import '../index.css';

const API_KEY = 'AIzaSyAFA0xH2zGX1-wz0ai7IrA6xrPpF6CN5Cw';

const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            term: ''
        };
    }

    onHandelSearch = () => {
        const {term} = this.state;
        YTSearch({key: API_KEY, term: term}, (data) => {
            console.log(data);
            this.props.setVideos(data, () => {
                this.props.history.push('/index/list');
            });
        });
    };

    onUpdateInput = (term) => {
        const self = this;
        this.setState({
            term: term
        }, function () {
            self.performSearch();
        })
    };

    performSearch() {
        const
            self = this,
            url = googleAutoSuggestURL + this.state.term;

        if (this.state.inputValue !== '') {
            JSONP(url, function (error, data) {
                let searchResults, retrievedSearchTerms;
                if (error) return error;
                searchResults = data[1];
                retrievedSearchTerms = searchResults.map(function (result) {
                    return result[0];
                });
                self.setState({
                    dataSource: retrievedSearchTerms
                });
            });
        }
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-input">
                    <AutoComplete
                        hintText="Please, enter video title"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.onUpdateInput}
                    />
                </div>
                <div className="searchbar-button">
                    <RaisedButton
                        label="Search"
                        labelPosition="after"
                        primary={true}
                        icon={<ActionSearch/>}
                        onClick={this.onHandelSearch}
                        disabled={this.state.term === ''}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
