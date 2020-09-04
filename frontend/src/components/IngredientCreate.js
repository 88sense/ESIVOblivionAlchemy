import React, { Component } from 'react';
import { createIngredient } from '../util'

class IngredientCreate extends Component {
    state = {
        newIngredient: {
            ingredientName: '',
            effect01: '',
            effect02: '',
            effect03: '',
            effect04: '',
            count: ''
        },
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
            effect01: this.state.newIngredient.effect01,
            effect02: this.state.newIngredient.effect02,
            effect03: this.state.newIngredient.effect03,
            effect04: this.state.newIngredient.effect04,
            count: this.state.newIngredient.count
        };
        createIngredient(newIngredient)
            .then(newIngredient => {
                console.log(newIngredient);
                this.props.addToIngredients(newIngredient);
                this.setState({
                    newIngredient: {
                        ingredientName: '',
                        effect01: '',
                        effect02: '',
                        effect03: '',
                        effect04: '',
                        count: ''
                    }
                });
                this.props.toggleIngredientCreate();
            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submitIngredient} className="text-white m-2">
                    <div className="form-group">
                        <label htmlFor="ingredientName">Ingredient Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ingredientName"
                            name="ingredientName"
                            placeholder="New Ingredient Name"
                            onChange={this.handleChange}
                            value={this.state.newIngredient.ingredientName}
                        />
                    </div>
                    <div className="row">

                        <div className="col">
                            <label htmlFor="effect01">Effect 01</label>
                            <select className="form-control" id="effect01">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="effect03">Effect 03</label>
                            <select className="form-control" id="effect03">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="effect02">Effect 02</label>
                            <select className="form-control" id="effect02">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="effect04">Effect 04</label>
                            <select className="form-control" id="effect04">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>
                    <button type="submit" className="btn btn-success">Create</button>
                    <button type="button" className="btn btn-danger ml-2" onClick={this.props.toggleIngredientCreate}>Cancel</button>

                </form>
            </div>

        )
    }

}

export default IngredientCreate