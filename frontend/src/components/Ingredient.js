import React, { Component } from 'react';
import { updateIngredient } from '../util'
import IngredientEdit from './IngredientEdit';

class Ingredient extends Component {
    state = {
        showIngredientEdit: false,
    }

    toggleIngredientEdit = () => {
        this.setState(state => ({ showIngredientEdit: !state.showIngredientEdit }))
    }

    submitIngredient = (modifyIngredient) => {
        updateIngredient(this.props.ingredient._id, modifyIngredient)
            .then(updatedIngredient => {
                console.log(updatedIngredient)
                if (updatedIngredient.errors) {
                    console.log("errors detected")
                } else {
                    this.props.updateIngredients(updatedIngredient.ingredient);
                }
            })
    }

    increaseCount = () => {
        if (this.props.ingredient.count > 0) {
            let addCount = { "count": this.props.ingredient.count + 1 }
            this.submitIngredient(addCount)
        }
    }

    decreaseCount = () => {
        if (this.props.ingredient.count > 0) {
            let subtractCount = { "count": this.props.ingredient.count - 1 }
            this.submitIngredient(subtractCount)
        }
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
            <div className="col my-4">
                <div className="card h-100 border-0 shadow-lg">
                    <div className="card-header pl-3 pt-3 pr-1 pb-0 ingredientHeaderBg">
                        <div className="h5 card-title font-weight-bolder">
                            {this.props.ingredient.ingredientName}
                            <span className="badge badge-dark ml-3">{this.props.ingredient.count}</span>
                        </div>
                        <div className="d-flex justify-content-end">


                            {this.state.showIngredientEdit
                                ?
                                <div>
                                    {/* Close Ingredient Edit Form */}
                                    <button type="button" className="btn btn-dark btn-sm"
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
                                    {/* Increase Ingredient Count */}
                                    <button type="button" className="btn btn-dark btn-sm mr-1 text-success"
                                        onClick={this.increaseCount}
                                    >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg>
                                    </button>

                                    {/* Decrease Ingredient Count */}
                                    <button type="button" className="btn btn-dark btn-sm mr-1 text-danger"
                                        onClick={this.decreaseCount}
                                    >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                                        </svg>
                                    </button>

                                    {/* Open Ingredient Edit Form */}
                                    <button type="button" className="btn btn-dark btn-sm text-primary"
                                        onClick={this.toggleIngredientEdit}
                                    >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>

                                </div>
                            }

                        </div>

                    </div>

                    {this.state.showIngredientEdit
                        ?
                        <div className="card card-body p-0 bg-dark ">
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
                        <div className="card card-body p-2">
                            <ul className="list-group list-group-flush bg-light">
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