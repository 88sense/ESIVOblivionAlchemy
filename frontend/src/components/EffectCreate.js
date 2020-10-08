import React, { Component } from 'react';
import { createEffect } from '../util'

class EffectCreate extends Component {
    state = {
        newEffect: {
            name: ''
        },
        dbError: false,
        dbErrorMessage: '',
        error: ''
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const newEffect = { ...this.state.newEffect }
        newEffect[inputName] = inputValue
        this.setState({ newEffect: newEffect })
    }

    submitEffect = (event) => {
        event.preventDefault();
        const newEffect = {
            name: this.state.newEffect.name,
        };
        createEffect(newEffect)
            .then(newEffect => {
                console.log(newEffect);
                if (newEffect.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: newEffect.errors.name.message
                    });
                } else {
                    this.props.addToEffects(newEffect.effect);
                    this.setState({
                        newEffect: {
                            name: '',
                        }
                    });
                    this.props.toggleEffectCreate();
                }
            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    render() {

        return (
            <div className="bg-dark m-3 p-2">
                <form onSubmit={this.submitEffect} className="text-white m-2">
                    <div className="form-group">
                        <label htmlFor="createEffectName">Effect Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="createEffectName"
                            name="name"
                            placeholder="New Effect Name"
                            onChange={this.handleChange}
                            value={this.state.newEffect.name}
                            required
                        />
                        {/* Database Error Message*/}
                        {this.state.dbError
                            ? <div className="text-danger">{this.state.dbErrorMessage}</div>
                            : null
                        }
                        <div className="dropdown-divider"></div>
                        <button type="submit" className="btn btn-success">Create</button>
                        <button type="button" className="btn btn-outline-light ml-2" onClick={this.props.toggleEffectCreate}>Cancel</button>
                    </div>
                </form>
            </div>

        )
    }

}

export default EffectCreate