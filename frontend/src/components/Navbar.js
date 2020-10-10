import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md d-flex justify-content-sm-end navbar-dark bg-dark pr-2 pl-3">

                {/* Bootstrap Navbar Toggler */}
                <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Logo */}
                <div className="navbar-brand py-2" href="#">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-hexagon-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 4.577L8 1v14l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                    </svg>
                </div>

                {/* Navbar Collapse Menu */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {/* Effects Menu Options */}
                        <li className="nav-item">
                            <div className="btn-group mt-3 mb-2 mx-0 my-md-0 mr-md-2" role="group">

                                {/* EffectList toggle button*/}
                                <button type="button"
                                    className={"btn btn-outline-secondary border-right-0 py-2 px-3 text-white " +
                                        // add active class when EffectList is displayed
                                        (this.props.showEffectList ? "active" : "")}
                                    data-toggle="tooltip" data-placement="bottom" title="Show Effect List"
                                    onClick={this.props.toggleEffectList}
                                >
                                    Effects
                                    <span className="sr-only">Effect Count</span>
                                    <span className="badge ml-2 p-1 rounded-0 border-bottom">{this.props.activeEffectCount}</span>
                                </button>

                                {/* EffectCreate toggle button */}
                                <button type="button"
                                    className="btn btn-success p-2"
                                    onClick={this.props.toggleEffectCreate}
                                    data-toggle="tooltip" data-placement="bottom" title="Create New Effect"
                                >

                                    {/* When create form is displayed, show arrows collapse icon. When create form is not displayed, show plus icon */}
                                    {this.props.showEffectCreate
                                        ?
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrows-collapse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z" />
                                        </svg>
                                        :
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    }
                                </button>
                            </div>
                        </li>

                        {/* Ingredients Menu Options */}
                        <li className="nav-item">
                            <div className="btn-group mb-2 mx-0 my-md-0 mr-md-2" role="group">

                                {/* IngredientList toggle button*/}
                                <button type="button"
                                    className={"btn btn-outline-secondary border-right-0 py-2 px-3 text-white " +
                                        // add active class when IngredientList is displayed
                                        (this.props.showIngredientList ? "active" : "")}
                                    data-toggle="tooltip" data-placement="bottom" title="Show Ingredient List"
                                    onClick={this.props.toggleIngredientList}
                                >
                                    Ingredients
                                    <span className="sr-only">Ingredient Count</span>
                                    <span className="badge ml-2 p-1 rounded-0 border-bottom">{this.props.activeIngredientCount}</span>
                                </button>

                                {/* IngredientCreate toggle button */}
                                <button type="button"
                                    // className="btn btn-outline-secondary p-2 text-success"
                                    className="btn btn-success p-2"

                                    data-toggle="tooltip" data-placement="bottom" title="Create New Ingredient"
                                    onClick={this.props.toggleIngredientCreate}
                                >

                                    {/* When create form is displayed, show arrows collapse icon. When create form is not displayed, show plus icon */}
                                    {this.props.showIngredientCreate
                                        ?
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrows-collapse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z" />
                                        </svg>
                                        :
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    }
                                </button>
                            </div>
                        </li>

                        {/* SearchFilter toggle button*/}
                        <li className="nav-item align-self-md-center">
                            <button type="button"
                                className={"btn btn-light py-2 px-3 " +
                                    // add active class when SearchFilters is displayed
                                    (this.props.showFilters ? "active" : "")}
                                data-toggle="tooltip" data-placement="bottom" title="Toggle Search Filters"
                                onClick={this.props.toggleFilters}
                            >
                                {this.props.showFilters
                                    ? "Hide Filters"
                                    : "Show Filters"}
                            </button>
                        </li>
                    </ul>
                </div>
                {/* <div className="navbar-brand"> */}
                    <h1 className="h1 navbar-brand mb-0 mr-2 p-0 siteTitle montserrat">ESIV Oblivion Alchemy</h1>
                {/* </div> */}
            </nav>
        )
    }
}

export default Navbar