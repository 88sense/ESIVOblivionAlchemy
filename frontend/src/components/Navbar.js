import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md d-flex justify-content-sm-end navbar-dark bg-dark px-4">

                <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="navbar-brand py-2" href="#">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-hexagon-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 4.577L8 1v14l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                    </svg>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <div className="btn-group mt-3 mb-2 my-md-0 mx-0 mr-md-2" role="group">
                                <button type="button"
                                    className="btn btn-dark btn-outline-secondary border-right-0 py-2 px-3 text-white"
                                    onClick={this.props.toggleEffectList}
                                >
                                    Effects
                                    <span className="sr-only">Effect Count</span>
                                    <span className="badge badge-secondary ml-3 p-2 ">{this.props.effectsTotal}</span>
                                </button>

                                <button type="button"
                                    className="btn btn-sm btn-dark btn-outline-secondary p-2 text-success"
                                    onClick={this.props.toggleEffectCreate}
                                >
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </button>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="btn-group mb-2 my-md-0 mx-0 mr-md-2" role="group">
                                <button type="button"
                                    className="btn btn-dark btn-outline-secondary border-right-0 py-2 px-3 text-white "
                                    onClick={this.props.toggleIngredientList}
                                >
                                    Ingredients
                                    <span className="sr-only">Ingredient Count</span>
                                    <span className="badge badge-secondary ml-3 p-2">{this.props.ingredientsTotal}</span>
                                </button>

                                <button type="button"
                                    className="btn btn-sm btn-dark btn-outline-secondary p-2 text-success"
                                    onClick={this.props.toggleIngredientCreate}
                                >
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </button>
                            </div>
                        </li>

                        <li className="nav-item align-self-md-center">
                            {/* Display disable buttons when create forms are showing */}
                            <button type="button"
                                className={this.props.showFilters
                                    ? "btn btn-outline-light px-3 py-2"
                                    : "btn btn-secondary px-3 py-2"}
                                onClick={this.props.toggleFilters}
                            >
                                Show Filters
                                </button>
                        </li>
                    </ul>
                </div>

                <div className="h1 navbar-brand mb-0" id="siteTitle">ESIV Oblivion Alchemy</div>

            </nav>
        )
    }
}

export default Navbar