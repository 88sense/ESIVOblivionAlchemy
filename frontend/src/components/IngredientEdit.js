import React, { Component } from 'react';
import { updateIngredient } from '../util'
import { deleteIngredient } from '../util'
import EffectSelectControl from './EffectSelectControl'

class IngredientEdit extends Component {
    state = {
        modifyIngredient: {
            ingredientName: '',
            updateEffect01: '',
            updateEffect02: '',
            updateEffect03: '',
            updateEffect04: '',
            count: ''
        },
        dbError: false,
        dbErrorMessage: '',
        ingredientDeleted: false,
        deletedIngredient: '',
        error: '',
    }

    componentDidMount() {

        if (!this.props.ingredient.effect01) {console.log("effect 1 is null")}
        this.setState({
            modifyIngredient: {
                ingredientName: this.props.ingredient.ingredientName,
                updateEffect01: (!this.props.ingredient.effect01 ? '' : this.props.ingredient.effect01),
                updateEffect02: (!this.props.ingredient.effect02 ? '' : this.props.ingredient.effect02),
                updateEffect03: (!this.props.ingredient.effect03 ? '' : this.props.ingredient.effect03),
                updateEffect04: (!this.props.ingredient.effect04 ? '' : this.props.ingredient.effect04)
                // count: ''
            }
        });      };

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const modifyIngredient = { ...this.state.modifyIngredient }
        modifyIngredient[inputName] = inputValue
        this.setState({ modifyIngredient: modifyIngredient })
    }


    submitIngredient = (event) => {
        event.preventDefault();
        const modifyIngredient = {
            ingredientName: this.state.modifyIngredient.ingredientName,
            effect01: (!this.state.modifyIngredient.updateEffect01) ? null : this.state.modifyIngredient.updateEffect01,
            effect02: (!this.state.modifyIngredient.updateEffect02) ? null : this.state.modifyIngredient.updateEffect02,
            effect03: (!this.state.modifyIngredient.updateEffect03) ? null : this.state.modifyIngredient.updateEffect03,
            effect04: (!this.state.modifyIngredient.updateEffect04) ? null : this.state.modifyIngredient.updateEffect04,
            // count: this.state.modifyIngredient.count
        };
        console.log(modifyIngredient)
        updateIngredient(this.props.ingredient._id, modifyIngredient)
            .then(updatedIngredient => {
                console.log(updatedIngredient);
                if (updatedIngredient.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: updatedIngredient.errors.ingredientName.message
                    });
                } else {
                    this.props.updateIngredients(updatedIngredient.ingredient);
                    // this.setState({
                    //     modifyIngredient: {
                    //         ingredientName: '',
                    //         updateEffect01: '',
                    //         updateEffect02: '',
                    //         updateEffect03: '',
                    //         updateEffect04: '',
                    //     }
                    // });
                    this.props.toggleIngredientEdit();
                }

            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    purgeIngredient = (event) => {
        event.preventDefault();
        deleteIngredient(this.props.ingredient._id)
            .then(deletedIngredient => {
                console.log(deletedIngredient)
                if (deletedIngredient.errors) {
                    console.log("errors detected")
                    this.setState({
                        // dbError: true,
                        dbErrorMessage: deletedIngredient.errors
                    });
                } else {
                    this.setState({
                        ingredientDeleted: true,
                        deletedIngredient: deletedIngredient.ingredient
                    });
                    setTimeout(this.props.deleteFromIngredients, 1500, this.props.index)
                }
            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }


    render() {

        return (
            <div className="bg-dark p-2">
                <form onSubmit={this.submitIngredient} className="text-white m-2">
                    {this.state.ingredientDeleted
                        ? <div className="text-danger">{this.state.deletedIngredient.ingredientName} has been deleted</div>
                        :
                        <div>
                            <div className="form-group">
                                <label htmlFor="ingredientName">Ingredient Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editIngredientName"
                                    name="ingredientName"
                                    placeholder={this.props.ingredient.ingredientName}
                                    onChange={this.handleChange}
                                    value={this.state.modifyIngredient.ingredientName}
                                    required
                                />
                                {/* Database Error Message */}
                                {this.state.dbError
                                    ? <div className="text-danger">{this.state.dbErrorMessage}</div>
                                    : null
                                }
                            </div>

                            <div className="row my-2">
                                <EffectSelectControl
                                    effects={this.props.effects}
                                    label="Update Effect 01"
                                    selectId="updateEffect01"
                                    handleChange={this.handleChange}
                                    value={this.state.modifyIngredient.updateEffect01}
                                />
                            </div>
                            <div className="row my-2">
                                <EffectSelectControl
                                    effects={this.props.effects}
                                    label="Update Effect 02"
                                    selectId="updateEffect02"
                                    handleChange={this.handleChange}
                                    value={this.state.modifyIngredient.updateEffect02}
                                />
                            </div>

                            <div className="row my-2">
                                <EffectSelectControl
                                    effects={this.props.effects}
                                    label="Update Effect 03"
                                    selectId="updateEffect03"
                                    handleChange={this.handleChange}
                                    value={this.state.modifyIngredient.updateEffect03}
                                />
                            </div>
                            <div className="row my-2">
                                <EffectSelectControl
                                    effects={this.props.effects}
                                    label="Update Effect 04"
                                    selectId="updateEffect04"
                                    handleChange={this.handleChange}
                                    value={this.state.modifyIngredient.updateEffect04}

                                />
                            </div>

                            <div className="dropdown-divider"></div>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-danger ml-2" onClick={this.purgeIngredient}>Delete</button>
                        </div>
                    }

                </form>
            </div>

        )
    }

}

export default IngredientEdit