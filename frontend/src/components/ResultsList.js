import React, { Component } from 'react';
import '../App.css';
import IngredientList from './IngredientList';
import EffectList from './EffectList';

class ResultsList extends Component {

    render() {

        return (
            <div>
                {/* Display List of Effects? */}
                {this.props.showEffectList
                    ?
                    <EffectList
                        effects={this.props.effects}
                        activeEffectCount={this.props.activeEffectCount}
                        updateEffects={this.props.updateEffects}
                        deleteFromEffects={this.props.deleteFromEffects}
                        updateIngredients={this.props.updateIngredients}
                        effectCodex={this.props.effectCodex}
                        textSearch={this.props.textSearch}
                        handleTextSearch={this.props.handleTextSearch}
                        selectedEffects={this.props.selectedEffects}
                        handleEffectSelect={this.props.handleEffectSelect}
                        sortResultsByName={this.props.sortResultsByName}
                        sortResultsByCount={this.props.sortResultsByCount}
                        showFilters={this.props.showFilters}
                    />
                    : null
                }

                {/* Display List of Ingredients? */}
                {this.props.showIngredientList
                    ?
                    <IngredientList
                        effects={this.props.effects}
                        ingredients={this.props.ingredients}
                        activeIngredientCount={this.props.activeIngredientCount}
                        updateIngredients={this.props.updateIngredients}
                        deleteFromIngredients={this.props.deleteFromIngredients}
                        effectCodex={this.props.effectCodex}
                        textSearch={this.props.textSearch}
                        handleTextSearch={this.props.handleTextSearch}
                        selectedEffects={this.props.selectedEffects}
                        handleEffectSelect={this.props.handleEffectSelect}
                        sortResultsByName={this.props.sortResultsByName}
                        sortResultsByCount={this.props.sortResultsByCount}
                        showFilters={this.props.showFilters}
                    />
                    : null
                }

                {/* Photo credit */}
                {/* <span className="text-light">Photo by <a href="https://unsplash.com/@mbriney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Matt Briney</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}

            </div>

        );
    };
}
export default ResultsList