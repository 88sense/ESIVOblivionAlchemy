import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {

    render() {

        const searchText = this.props.searchText;
        const ingredients = this.props.ingredients;
        const ingredientComponents = ingredients.map((ingredient, index) => {
            // Text search filter
            if (ingredient.ingredientName.toLowerCase().indexOf(searchText) === -1) {
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