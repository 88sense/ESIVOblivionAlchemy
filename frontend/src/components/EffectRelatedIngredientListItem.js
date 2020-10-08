import React, { Component } from 'react';
import { updateIngredientByName } from '../util'

class EffectRelatedIngredientListItem extends Component {

    decreaseCount = () => {
        if (this.props.relatedIngredientCount > 0) {
            let subtractCount = { "count": this.props.relatedIngredientCount - 1 }
            updateIngredientByName(this.props.relatedIngredient, subtractCount)
            .then(updatedIngredient => {
                console.log(updatedIngredient)
                if (updatedIngredient.errors) {
                    console.log("errors detected")
                } else {
                    this.props.updateIngredients(updatedIngredient.ingredient);
                }
            })

        }
    }

    render() {

        return (
            <li className={"list-group-item px-2 py-0 d-flex flex-row align-items-center " + (this.props.relatedIngredientCount ? "": "zeroCount")}>
                <div className="flex-grow-1">{this.props.relatedIngredient}</div>
                <div className="ml-3">{this.props.relatedIngredientCount}</div>
                <div className="ml-3">
                    {/* Decrease Ingredient Count */}
                    <button type="button" className="btn btn-sm m-0 p-0 pb-1 text-danger"
                        onClick={this.decreaseCount}
                    >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                        </svg>
                    </button>
                </div>
            </li>
        )
    }

}

export default EffectRelatedIngredientListItem