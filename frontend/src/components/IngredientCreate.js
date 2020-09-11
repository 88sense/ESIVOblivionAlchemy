import React, { Component } from 'react';
import { createIngredient } from '../util'
import EffectSelectControl from './EffectSelectControl'

class IngredientCreate extends Component {
    state = {
        newIngredient: {
            ingredientName: '',
            addEffect01: '',
            addEffect02: '',
            addEffect03: '',
            addEffect04: '',
            count: 1
        },
        dbError: false,
        dbErrorMessage: '',
        error: '',
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const newIngredient = { ...this.state.newIngredient }
        newIngredient[inputName] = inputValue
        this.setState({ newIngredient: newIngredient })
    }


    submitIngredient = (event) => {
        event.preventDefault();
        const newIngredient = {
            ingredientName: this.state.newIngredient.ingredientName,
            effect01: this.state.newIngredient.addEffect01 === '' ? null : this.state.newIngredient.addEffect01,
            effect02: this.state.newIngredient.addEffect02 === '' ? null : this.state.newIngredient.addEffect02,
            effect03: this.state.newIngredient.addEffect03 === '' ? null : this.state.newIngredient.addEffect03,
            effect04: this.state.newIngredient.addEffect04 === '' ? null : this.state.newIngredient.addEffect04,
            count: this.state.newIngredient.count
        };
        createIngredient(newIngredient)
            .then(newIngredient => {
                console.log(newIngredient);
                if (newIngredient.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: newIngredient.errors.ingredientName.message
                    });
                } else {
                    this.props.addToIngredients(newIngredient.ingredient);
                    this.setState({
                        newIngredient: {
                            ingredientName: '',
                            addEffect01: '',
                            addEffect02: '',
                            addEffect03: '',
                            addEffect04: '',
                            count: 1
                        }
                    });
                    this.props.toggleIngredientCreate();
                }

            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    render() {

        return (
            <div className="bg-dark m-3 p-2">
                <form onSubmit={this.submitIngredient} className="text-white m-2">

                    <div className="d-flex flex-row justify-content-between my-2">
                        <div className="flex-grow-1 mr-4">
                            <label htmlFor="ingredientName">Ingredient Name</label>
                            <input type="text"
                                className="form-control"
                                id="ingredientName"
                                name="ingredientName"
                                placeholder="New Ingredient Name"
                                onChange={this.handleChange}
                                value={this.state.newIngredient.ingredientName}
                                required
                            />
                            {/* Database Error Message */}
                            {this.state.dbError
                                ? <div className="text-danger">{this.state.dbErrorMessage}</div>
                                : null
                            }
                        </div>
                        <div>
                            <label htmlFor="count">Count</label>
                            <input type="number"
                                className="form-control"
                                id="count"
                                name="count"
                                min="0" max="100"
                                onChange={this.handleChange}
                                value={this.state.newIngredient.count}
                                required
                            />
                        </div>
                    </div>

                    <div className="row my-2">
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Add Effect 01"
                            selectId="addEffect01"
                            value={this.state.newIngredient.addEffect01}
                            handleChange={this.handleChange}
                        />
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Add Effect 02"
                            selectId="addEffect02"
                            value={this.state.newIngredient.addEffect02}
                            handleChange={this.handleChange}
                        />
                    </div>

                    <div className="row my-2">
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Add Effect 03"
                            selectId="addEffect03"
                            value={this.state.newIngredient.addEffect03}
                            handleChange={this.handleChange}
                        />
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Add Effect 04"
                            selectId="addEffect04"
                            value={this.state.newIngredient.addEffect04}
                            handleChange={this.handleChange}

                        />
                    </div>

                    <div className="dropdown-divider"></div>
                    <button type="submit" className="btn btn-success">Create</button>
                    <button type="button" className="btn btn-outline-light ml-2" onClick={this.props.toggleIngredientCreate}>Cancel</button>

                </form>
            </div>

        )
    }

}

export default IngredientCreate