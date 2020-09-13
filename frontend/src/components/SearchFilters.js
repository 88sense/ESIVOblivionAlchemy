import React, { Component } from 'react';
import IngredientCreate from './IngredientCreate';
import EffectCreate from './EffectCreate';
import EffectFilters from './EffectFilters'

class SearchFilters extends Component {
    state = {
        showEffectCreate: false,
        showIngredientCreate: false,
    };

    toggleEffectCreate = () => {
        this.setState(state => ({ showEffectCreate: !state.showEffectCreate }))
    };
    toggleIngredientCreate = () => {
        this.setState(state => ({ showIngredientCreate: !state.showIngredientCreate }))
    };

    render() {

        return (
            <div>
                <div className="d-flex flex-row justify-content-between pb-1">
                    <div className="flex-grow-1 form-group m-3">
                        <label htmlFor="textSearch" className="col-form-label" hidden>Search</label>
                        <div className="col-sm-8">
                            <input type="search"
                                className="form-control border border-dark"
                                id="textSearch"
                                placeholder="Enter Search..."
                                onChange={this.props.handleSearchText}
                            />

                        </div>
                    </div>

                    <div className="m-3">
                        <div className="btn-group ml-2">
                            {/* Display disable buttons when create forms are showing */}
                            <button type="button"
                                className={this.state.showEffectCreate ? "btn btn-secondary disabled" : "btn btn-outline-dark"}
                                onClick={this.toggleEffectCreate}
                            >
                                Create Effect
                                </button>
                        </div>
                        <div className="btn-group ml-2">
                            {/* Display disable buttons when create forms are showing */}
                            <button type="button"
                                className={this.state.showIngredientCreate ? "btn btn-secondary disabled" : "btn btn-outline-dark"}
                                onClick={this.toggleIngredientCreate}
                            >
                                Create Ingredient
                                </button>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Create Effect form  */}
                    {this.state.showEffectCreate
                        ? <EffectCreate
                            addToEffects={this.props.addToEffects}
                            toggleEffectCreate={this.toggleEffectCreate} />
                        : null
                    }

                    {/* Create Ingredient form  */}
                    {this.state.showIngredientCreate
                        ? <IngredientCreate
                            effects={this.props.effects}
                            addToIngredients={this.props.addToIngredients}
                            toggleIngredientCreate={this.toggleIngredientCreate} />
                        : null
                    }
                </div>

                <div className="m-3">
                    <EffectFilters
                        effects={this.props.effects}
                    />
                </div>
            </div>
        )
    }

}

export default SearchFilters