import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {

    render() {

        return (
            <div class="row row-cols-1 row-cols-md-3">
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
            </div>
        )
    }

}

export default IngredientList