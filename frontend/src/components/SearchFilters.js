import React, { Component } from 'react';
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
            <div className="mt-5 mb-4">
                <div className="m-3">
                    <label htmlFor="textSearch" className="sr-only">Search</label>
                    <div className="input-group border border-secondary rounded">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </div>
                        </div>
                        <input type="search"
                            className="form-control"
                            id="textSearch"
                            placeholder="Enter Search..."
                            onChange={this.props.handleSearchText}
                        />
                    </div>
                </div>

                <div className="m-3">
                    <EffectFilters
                        effects={this.props.effects}
                        handleChange={this.props.handleChange}
                        selectedEffects={this.props.selectedEffects}
                    />
                </div>
            </div >
        )
    }

}

export default SearchFilters