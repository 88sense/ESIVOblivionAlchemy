import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {

    validateEffect = (effectId, ingredient) => {
        if (this.props.selectedEffects[effectId]) {
            console.log("select is not empty")
            if (!this.props.effectCodex[effectId].relatedIngredients[ingredient.ingredientName]) {
                console.log(`ingredent ${ingredient.ingredientName} not found`)
                return true
            }
            else {
                console.log("return false")
                return false
            }

        }
    }

    render() {

        const searchText = this.props.searchText;
        const selectedEffects = Object.values(this.props.selectedEffects)
        const effectCodex = this.props.effectCodex
        const ingredients = this.props.ingredients;

        const ingredientComponents = ingredients.map((ingredient, index) => {
            // Text search filter
            if (ingredient.ingredientName.toLowerCase().indexOf(searchText) === -1) {
                return null;
            }

            // Effect search filter
            const filteredEffects = selectedEffects.map((effectId) => {
                if (effectId) {
                    if (!effectCodex[effectId].relatedIngredients[ingredient.ingredientName]) {
                        return true;
                    } else { return false }
                } else { return false }
            })
            if (filteredEffects.includes(true)) {
                return null;
            }

            return <Ingredient
                key={ingredient._id}
                index={index}
                ingredient={ingredient}
                effects={this.props.effects}
                effectCodex={this.props.effectCodex}
                updateIngredients={this.props.updateIngredients}
                deleteFromIngredients={this.props.deleteFromIngredients}

            />
        })

        return (
            <div className="row row-cols-1 row-cols-md-5 m-3">
                {ingredientComponents}
            </div>
        )
    }
}

export default IngredientList