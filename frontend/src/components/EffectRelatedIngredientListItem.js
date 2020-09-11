import React, { Component } from 'react';

class EffectRelatedIngredientListItem extends Component {

    render() {

        return (
        <li className="list-group-item">{this.props.relatedIngredient} {this.props.relatedIngredientCount}</li>
        )
    }

}

export default EffectRelatedIngredientListItem