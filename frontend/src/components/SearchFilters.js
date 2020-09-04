import React, { Component } from 'react';
import IngredientCreate from './IngredientCreate';
import EffectCreate from './EffectCreate';
import EffectSelectors from './EffectSelectors'

class SearchFilters extends Component {
    state = {
        showEffectCreate: false,
        showIngredientCreate: false,
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
                            <div className="btn-group m-2">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create Effect
                                </button>
                            </div>
                            <div className="btn-group m-2">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create Ingredient
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-warning d-flex flex-row justify-content-end align-items-start">
                        {/* Create Effect form  */}
                        <EffectCreate addToEffects={this.addToEffects} />

                        {/* Create Ingredient form  */}
                        <IngredientCreate addToIngredients={this.addToIngredients} />
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