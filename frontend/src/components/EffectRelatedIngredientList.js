import React, { Component } from 'react';
import EffectRelatedIngredientListItem from './EffectRelatedIngredientListItem'

class EffectRelatedIngredientList extends Component {

    render() {

        const relatedIngredients = Object.keys(this.props.effectCodex[this.props.effect._id].relatedIngredients)
        const relatedIngredientsComponents = relatedIngredients.map((ingredient, index) => {
            return <EffectRelatedIngredientListItem
                key={ingredient}
                index={index}
                relatedIngredient={ingredient}
                relatedIngredientCount={this.props.effectCodex[this.props.effect._id].relatedIngredients[ingredient]}
                updateIngredients={this.props.updateIngredients}
            />
        })

        return (
            <div className="card card-body">
                <ul className="list-group list-group-flush">
                    {relatedIngredientsComponents}
                </ul>
            </div>
        )
    }

}

export default EffectRelatedIngredientList