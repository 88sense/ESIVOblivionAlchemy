import React, { Component } from 'react';
import EffectRelatedIngredientListItem from './EffectRelatedIngredientListItem'

class EffectRelatedIngredientList extends Component {

    render() {

        const relatedIngredients = Object.keys(this.props.effect.relatedIngredients)
        const relatedIngredientsComponents = relatedIngredients.map((ingredient, index) => {
            return <EffectRelatedIngredientListItem
                key={ingredient}
                index={index}
                relatedIngredient={ingredient}
                relatedIngredientCount={this.props.effect.relatedIngredients[ingredient]}
                updateIngredients={this.props.updateIngredients}
            />
        })

        return (
            <div className="bg-white px-2 py-3">
                <ul className="list-group list-group-flush">
                    {relatedIngredientsComponents}
                </ul>
            </div>
        )
    }

}

export default EffectRelatedIngredientList