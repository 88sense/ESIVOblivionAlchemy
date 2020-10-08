import React, { Component } from 'react';
import EffectEdit from './EffectEdit';
import EffectRelatedIngredientList from './EffectRelatedIngredientList'

class Effect extends Component {
    state = {
        showEffectEdit: false,
    }

    toggleEffectEdit = () => {
        this.setState(state => ({ showEffectEdit: !state.showEffectEdit }))
    }

    render() {
        // Calculate sum of Ingredients related to Effect from values in relatedIngredients object
        let ingredientTotal = 0;
        let ingredientTotalsArray = [];
        if (this.props.effectCodex[this.props.effect._id]) {
            ingredientTotalsArray = Object.values(this.props.effectCodex[this.props.effect._id].relatedIngredients)
        }
        if (ingredientTotalsArray.length) {
            let initialValue = 0
            ingredientTotal = ingredientTotalsArray.reduce(function (accumulator, currentValue) {
                // If ingredient count is greater than 0 add 1 to ingredient total
                return accumulator + (currentValue ? 1 : 0)
            }, initialValue)
        }
        let headerColor = "effectHeader";
        if (ingredientTotal === 0) { headerColor = "zeroCount"}

        return (
            <div className="col my-4">
                <div className="card h-100 border-0 bg-transparent">
                    <div className={"card-header pl-3 pr-1 py-0 text-truncate effectHeader cardHeaderFont " + headerColor}>
                        <span className="badge badge-dark p-3 mb-3">{ingredientTotal}</span>

                        <div className="h5 card-title font-weight-bolder mr-2 mb-3 text-right">
                            {this.props.effect.effectName}
                        </div>

                        <div className="d-flex justify-content-end">

                            {this.state.showEffectEdit
                                ?
                                <div>
                                    <button type="button"
                                        className="btn btn-secondary btn-sm mr-1"
                                        onClick={this.toggleEffectEdit}
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
                                        onClick={this.toggleEffectEdit}
                                    >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="btn btn-secondary btn-sm"
                                        data-toggle="collapse"
                                        data-target={"#relatedIngredientsList" + this.props.index}
                                        aria-expanded="false"
                                        aria-controls={"relatedIngredientsList" + this.props.index}
                                    >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </button>
                                </div>
                            }

                        </div>

                    </div>
                    <div className="card card-body border-0 bg-transparent p-0">
                        {this.state.showEffectEdit
                            ?
                            <EffectEdit
                                effect={this.props.effect}
                                index={this.props.index}
                                updateEffects={this.props.updateEffects}
                                deleteFromEffects={this.props.deleteFromEffects}
                                toggleEffectEdit={this.toggleEffectEdit}
                            />
                            : null
                        }

                        <div className="collapse" id={"relatedIngredientsList" + this.props.index}>
                            < EffectRelatedIngredientList
                                effectCodex={this.props.effectCodex}
                                effect={this.props.effect}
                                updateIngredients={this.props.updateIngredients}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Effect