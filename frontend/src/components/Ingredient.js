import React, { Component } from 'react';

class Ingredient extends Component {

    render() {

        return (
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="card-header">
                        Featured
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Effect 1</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Count</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Ingredient