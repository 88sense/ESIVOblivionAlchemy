import React, { Component } from 'react';
import Ingredient from './Ingredient';
import SearchFilters from './SearchFilters';
import ResultsListHeader from './ResultsListHeader';

class IngredientList extends Component {

    render() {

        const textSearch = this.props.textSearch;
        const selectedEffects = Object.values(this.props.selectedEffects);
        const ingredients = this.props.ingredients;
        let searchResultsCount = this.props.ingredients.length;
        const effectCodex = this.props.effectCodex

        const ingredientComponents = ingredients.map((ingredient, index) => {
            // Text search filter
            if (ingredient.name.toLowerCase().indexOf(textSearch) === -1) {
                searchResultsCount--;
                return null;
            }

            // Selected Effects search filter
            const filteredEffects = selectedEffects.map((effectId) => {
                if (effectId) {
                    if (!effectCodex[effectId].relatedIngredients[ingredient.name]) {
                        return true;
                    } else { return false }
                } else { return false }
            })
            if (filteredEffects.includes(true)) {
                searchResultsCount--;
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
            <div className="resultsContainer">

                {/* Display Text Search and Effect Filters? */}
                {this.props.showFilters
                    ?
                    <div className="shadow-lg bg-light py-3 px-0 px-md-2">
                        <SearchFilters
                            effects={this.props.effects}
                            handleTextSearch={this.props.handleTextSearch}
                            handleEffectSelect={this.props.handleEffectSelect}
                            showIngredientList={this.props.showIngredientList}
                            selectedEffects={this.props.selectedEffects}
                            sortResultsByName={this.props.sortResultsByName}
                            sortResultsByCount={this.props.sortResultsByCount}
                        />
                    </div>
                    : null
                }
                <ResultsListHeader
                    listModel={"Ingredients"}
                    listLength={this.props.ingredients.length}
                    activeCount={this.props.activeIngredientCount}
                    searchResultsCount={searchResultsCount}
                />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 my-2 mx-0 resultsList">
                    {ingredientComponents}
                </div>
            </div>
        )
    }
}

export default IngredientList