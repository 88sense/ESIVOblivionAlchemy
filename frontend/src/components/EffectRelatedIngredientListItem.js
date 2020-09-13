import React, { Component } from 'react';

class EffectRelatedIngredientListItem extends Component {

    render() {

        return (
            <li className="list-group-item d-flex flex-row justify-content-between">
                <div>{this.props.relatedIngredient}</div>
                <div>{this.props.relatedIngredientCount}</div>
            </li>
        )
    }

}

export default EffectRelatedIngredientListItem