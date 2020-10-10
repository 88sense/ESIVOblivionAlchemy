import React, { Component } from 'react';
import Effect from './Effect';
import SearchFilters from './SearchFilters';
import ResultsListHeader from './ResultsListHeader';

class EffectList extends Component {

    render() {
        const textSearch = this.props.textSearch;
        let searchResultsCount = this.props.effects.length;

        const effectComponents = this.props.effects.map((effect, index) => {
            // Text search filter
            if (this.props.effectCodex[effect._id].name.toLowerCase().indexOf(textSearch) === -1) {
                searchResultsCount--;
                return null;
            }

            return <Effect
                key={effect._id}
                index={index}
                effectId={effect._id}
                effect={this.props.effectCodex[effect._id]}
                updateEffects={this.props.updateEffects}
                deleteFromEffects={this.props.deleteFromEffects}
                updateIngredients={this.props.updateIngredients}
            />
        })

        return (
            <div  className="resultsContainer">
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
                    listModel={"Effects"}
                    listLength={this.props.effects.length}
                    activeCount={this.props.activeEffectCount}
                    searchResultsCount={searchResultsCount}
                />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 my-2 mx-0 resultsList">
                    {effectComponents}
                </div>
            </div>
        )
    }
}

export default EffectList