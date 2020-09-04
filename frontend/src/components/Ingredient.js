import React, { Component } from 'react';

class Ingredient extends Component {

    render() {

        return (
            <div className="col mb-4">
                <div className="card h-100 bg-info">
                    <div className="card-header">
                        <div className="card-title font-weight-bolder">
                            {this.props.ingredient.ingredientName}
                        </div>
                    </div>

                    <div className="card card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Effect 1</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Count</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Ingredient