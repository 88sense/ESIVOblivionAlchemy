import React, { Component } from 'react';
import EffectFilters from './EffectFilters'

class SearchFilters extends Component {
    state = {
        sortByName: true,
        sortByCount: false
    };

    toggleSortByName = () => {
        this.props.sortResultsByName();
        this.setState({
            sortByName: true,
            sortByCount: false
        });
    };
    toggleSortByCount = () => {
        this.props.sortResultsByCount();
        this.setState({
            sortByName: false,
            sortByCount: true
        });
    }

    render() {

        return (
            <div>
                <div className="m-3 mb-4 d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <label htmlFor="textSearch" className="sr-only">Search</label>
                        <div className="input-group border border-secondary rounded">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    </svg>
                                </div>
                            </div>
                            <input type="search"
                                className="form-control"
                                id="textSearch"
                                placeholder="Enter Search..."
                                onChange={this.props.handleTextSearch}
                            />
                        </div>
                    </div>

                    <div className="ml-0 mt-4 pt-2 ml-md-5 mt-md-0 pt-md-0">
                        <label htmlFor="sortButtons" className="sr-only">Sort</label>
                        <div className="btn-group" role="group" id="sortButtons">
                            <button type="button"
                                className={this.state.sortByName
                                    ? "btn btn-success"
                                    : "btn btn-secondary"
                                }
                                onClick={this.toggleSortByName}
                            >
                                <span>Sort by Name</span>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-sort-alpha-down ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z" />
                                    <path fillRule="evenodd" d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z" />
                                </svg>
                            </button>

                            <button type="button"
                                className={this.state.sortByCount
                                    ? "btn btn-success"
                                    : "btn btn-secondary"
                                }
                                onClick={this.toggleSortByCount}
                            >
                                <span>Sort by Count</span>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-sort-numeric-down-alt ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z" />
                                    <path fillRule="evenodd" d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M9.598 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008zM12.438 14V8.668H11.39l-1.262.906v.969l1.21-.86h.052V14h1.046z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {this.props.showIngredientList
                    ?
                    <div className="m-3">
                        <EffectFilters
                            effects={this.props.effects}
                            handleChange={this.props.handleChange}
                            selectedEffects={this.props.selectedEffects}
                        />
                    </div>
                    : null
                }

            </div >
        )
    }
}

export default SearchFilters