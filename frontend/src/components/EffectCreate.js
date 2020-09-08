import React, { Component } from 'react';
import { createEffect } from '../util'

class EffectCreate extends Component {
    state = {
        newEffect: {
            effectName: ''
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
            effectName: this.state.newEffect.effectName,
        };
        createEffect(newEffect)
            .then(newEffect => {
                console.log(newEffect);
                if (newEffect.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: newEffect.errors.effectName.message
                    });
                } else {
                    this.props.addToEffects(newEffect.effect);
                    this.setState({
                        newEffect: {
                            effectName: '',
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
            <div>
                <form onSubmit={this.submitEffect} className="text-white m-2">
                    <div className="form-group">
                        <label htmlFor="effectName">Effect Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="effectName"
                            name="effectName"
                            placeholder="New Effect Name"
                            onChange={this.handleChange}
                            value={this.state.newEffect.effectName}
                            required
                        />
                        {/* Database Validation Error */}
                        {this.state.dbError
                        ? <div className="text-danger">{this.state.dbErrorMessage}</div>
                        : null
                        }
                        <div className="dropdown-divider"></div>
                        <button type="submit" className="btn btn-success">Create</button>
                        <button type="button" className="btn btn-danger ml-2" onClick={this.props.toggleEffectCreate}>Cancel</button>
                    </div>
                </form>
            </div>

        )
    }

}

export default EffectCreate