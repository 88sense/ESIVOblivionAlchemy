import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="btn btn-outline-secondary mx-2 active" type="button">Ingredients</button>
                        <button className="btn btn-outline-secondary mx-2" type="button">Effects</button>
                    </div>
                </div>
                <div className="h1 navbar-brand mb-0" id="siteTitle">Alchemy ESIV Oblivion</div>


                {/* Change links into buttons with active */}
            </nav>
        )
    }
}

export default Navbar