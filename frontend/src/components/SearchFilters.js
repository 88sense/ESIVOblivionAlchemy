import React, { Component } from 'react';
import IngredientCreate from './IngredientCreate';
import EffectCreate from './EffectCreate';
import EffectSelectors from './EffectSelectors'

class SearchFilters extends Component {
    state = {
        showEffectCreate: false,
        showIngredientCreate: false,
    }

    toggleEffectCreate = () => {
        this.setState(state => ({ showEffectCreate: !state.showEffectCreate }))
    }
    toggleIngredientCreate = () => {
        this.setState(state => ({ showIngredientCreate: !state.showIngredientCreate }))
    }

    render() {

        return (
            <div>
                <div className="bg-primary">

                    <div className="border border-warning d-flex flex-row justify-content-between">
                        <div className="form-group m-3">
                            <label htmlFor="textSearch">Search</label>
                            <input type="search" className="form-control" id="textSearch" />
                        </div>

                        <div className="m-3">
                            {/* Disable buttons when create forms are showing */}
                            <div className="btn-group m-2">
                                <button type="button"
                                    className={this.state.showEffectCreate ? "btn btn-secondary disabled" : "btn btn-success"}
                                    onClick={this.toggleEffectCreate}
                                >
                                    Create Effect
                                </button>
                            </div>
                            <div className="btn-group m-2">
                                <button type="button"
                                    className={this.state.showIngredientCreate ? "btn btn-secondary disabled" : "btn btn-success"}
                                    onClick={this.toggleIngredientCreate}
                                >
                                    Create Ingredient
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-warning d-flex flex-row justify-content-end align-items-start">
                        {/* Create Effect form  */}
                        {this.state.showEffectCreate
                            ? <EffectCreate addToEffects={this.addToEffects} />
                            : null
                        }

                        {/* Create Ingredient form  */}
                        {this.state.showIngredientCreate
                            ? <IngredientCreate addToIngredients={this.addToIngredients} />
                            : null
                        }
                    </div>
                    <div>
                        <EffectSelectors />
                    </div>
                </div>






            </div >
        )
    }

}

export default SearchFilters