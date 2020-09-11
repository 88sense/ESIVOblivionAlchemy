import React, { Component } from 'react';
import IngredientEdit from './IngredientEdit';

class Ingredient extends Component {
    state = {
        showIngredientEdit: false,
    }

    toggleIngredientEdit = () => {
        this.setState(state => ({ showIngredientEdit: !state.showIngredientEdit }))
    }

    render() {
        let effectCodex = this.props.effectCodex;
        let ingredientEffectName01 = '';
        let ingredientEffectName02 = '';
        let ingredientEffectName03 = '';
        let ingredientEffectName04 = '';
        if (this.props.ingredient.effect01) {
            let effect01 = this.props.ingredient.effect01.toString();
            ingredientEffectName01 = effectCodex[effect01].name;
        }
        if (this.props.ingredient.effect02) {
            let effect02 = this.props.ingredient.effect02.toString();
            ingredientEffectName02 = effectCodex[effect02].name;
        }
        if (this.props.ingredient.effect03) {
            let effect03 = this.props.ingredient.effect03.toString();
            ingredientEffectName03 = effectCodex[effect03].name;
        }
        if (this.props.ingredient.effect04) {
            let effect04 = this.props.ingredient.effect04.toString();
            ingredientEffectName04 = effectCodex[effect04].name;
        }


        return (
            <div className="col mb-4">
                <div className="card h-100 bg-info">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className="card-title font-weight-bolder">
                            {this.props.ingredient.ingredientName}
                            <span className="badge badge-primary ml-3">{this.props.ingredient.count}</span>
                        </div>

                        {this.state.showIngredientEdit
                            ?
                            <div>
                                <button type="button"
                                    className="btn btn-secondary btn-sm mr-1"
                                    onClick={this.toggleIngredientEdit}
                                >
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>

                            </div>
                            :
                            <div>
                                <button className="btn btn-secondary btn-sm mr-1" type="button"
                                    onClick={this.toggleIngredientEdit}
                                >
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                </button>

                            </div>
                        }
                    </div>

                    {this.state.showIngredientEdit
                        ?
                        <div className="card card-body p-1">
                            <IngredientEdit
                                ingredient={this.props.ingredient}
                                index={this.props.index}
                                effects={this.props.effects}
                                updateIngredients={this.props.updateIngredients}
                                deleteFromIngredients={this.props.deleteFromIngredients}
                                toggleIngredientEdit={this.toggleIngredientEdit}
                            />
                        </div>
                        :
                        <div className="card card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{ingredientEffectName01}</li>
                                <li className="list-group-item">{ingredientEffectName02}</li>
                                <li className="list-group-item">{ingredientEffectName03}</li>
                                <li className="list-group-item">{ingredientEffectName04}</li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        )
    }

}

export default Ingredient