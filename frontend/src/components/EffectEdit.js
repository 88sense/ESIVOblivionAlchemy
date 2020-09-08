import React, { Component } from 'react';
import { updateEffect } from '../util'
import { deleteEffect } from '../util'

class EffectEdit extends Component {
    state = {
        modifyEffect: {
            effectName: ''
        },
        dbError: false,
        dbErrorMessage: '',
        effectDeleted: false,
        deletedEffect: '',
        error: ''
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const modifyEffect = { ...this.state.modifyEffect }
        modifyEffect[inputName] = inputValue
        this.setState({ modifyEffect: modifyEffect })
    }

    handleonFocus = (event) => {
        this.setState({
            modifyEffect: {
                effectName: this.props.effect.effectName
            }
        })
    }

    submitEffect = (event) => {
        event.preventDefault();
        const modifyEffect = {
            effectName: this.state.modifyEffect.effectName,
        };
        console.log(modifyEffect)
        updateEffect(this.props.effect._id, modifyEffect)
            .then(updatedEffect => {
                console.log(updatedEffect);
                if (updatedEffect.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: updatedEffect.errors.effectName.message
                    });
                } else {
                    this.props.updateEffects(updatedEffect.effect);
                    this.setState({
                        modifyEffect: {
                            effectName: '',
                        }
                    });
                    this.props.toggleEffectEdit();
                }
            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    purgeEffect = (event) => {
        event.preventDefault();
        deleteEffect(this.props.effect._id)
            .then(deletedEffect => {
                console.log(deletedEffect)
                if (deletedEffect.errors) {
                    console.log("errors detected")
                    this.setState({
                        // dbError: true,
                        dbErrorMessage: deletedEffect.errors
                    });
                } else {
                    this.setState({
                        effectDeleted: true,
                        deletedEffect: deletedEffect.effect
                    });
                    setTimeout(this.props.deleteFromEffects, 1500, this.props.index)
                }
            })
            .catch((err) => {
                this.setState({ error: err })
            })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submitEffect} className="m-2">
                    {this.state.effectDeleted
                        ? <div className="text-danger">{this.state.deletedEffect.effectName} has been deleted</div>
                        :
                        <div className="form-group">
                            <label htmlFor="effectName">Effect Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id={"editEffectName" + this.props.index}
                                name="effectName"
                                placeholder={this.props.effect.effectName}
                                // onFocus={this.handleonFocus}
                                onChange={this.handleChange}
                                value={this.state.modifyEffect.effectName}
                                required
                            />
                            {/* Database Error Message*/}
                            {this.state.dbError
                                ? <div className="text-danger">{this.state.dbErrorMessage}</div>
                                : null
                            }
                            <div className="dropdown-divider"></div>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-danger ml-2" onClick={this.purgeEffect}>Delete</button>
                        </div>

                    }


                </form>
            </div>

        )
    }

}

export default EffectEdit