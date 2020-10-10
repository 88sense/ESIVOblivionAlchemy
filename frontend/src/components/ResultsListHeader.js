import React, { Component } from 'react';
import '../App.css';

class ResultsListHeader extends Component {

    render() {

        return (
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-baseline pt-3 pb-2 px-2 c7a589">

                {/* List Model */}
                <h2 className="d-flex flex-row align-items-baseline mb-0 ml-3 mr-2 resultsListHeader montserrat">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-basket-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                    </svg>
                    <span>{this.props.listModel}</span>
                </h2>

                {/* List Length */}
                <div className="mt-2 mb-0 ml-5 mr-2 mt-md-0 ml-md-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <span className="border-bottom border-dark pr-1">Cataloged {this.props.listModel}</span>
                    <span className="badge badge-dark border-bottom border-dark rounded-0 pt-2 px-2">{this.props.listLength}</span>
                </div>

                {/* List Active Items - Items associated with another model */}
                <div className="mt-2 mb-0 ml-5 mr-2 mt-md-0 ml-md-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <span className="border-bottom border-dark pr-1">Active {this.props.listModel}</span>
                    <span className="badge badge-dark border-bottom border-dark rounded-0 pt-2 px-2">{this.props.activeCount}</span>
                </div>

                {/* Number of filtered results */}
                <div className="mt-2 mb-0 ml-5 mr-2 mt-md-0 ml-md-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <span className="border-bottom border-dark pr-1">Search Results</span>
                    <span className="badge badge-dark border-bottom border-dark rounded-0 pt-2 px-2">{this.props.searchResultsCount}</span>
                </div>
            </div>

        );
    };
}
export default ResultsListHeader