import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {

    render() {

        const ingredients = this.props.ingredients;
        const ingredientComponents = ingredients.map((ingredient, index) => {
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
            <div className="row row-cols-1 row-cols-md-3 m-3">
                {ingredientComponents}
            </div>
        )
    }
}

export default IngredientList