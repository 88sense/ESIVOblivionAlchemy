import React, { Component } from 'react';
import IngredientCreate from './IngredientCreate';
import EffectCreate from './EffectCreate';
import EffectFilters from './EffectFilters'

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
                <div className="bg-success py-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex-grow-1 form-group row m-3">
                            <label htmlFor="textSearch" className="col-form-label">Search</label>
                            <div className="col-sm-6">
                                <input type="search" className="form-control" id="textSearch" placeholder="Enter keywords" />

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

            </div >
        )
    }

}

export default SearchFilters