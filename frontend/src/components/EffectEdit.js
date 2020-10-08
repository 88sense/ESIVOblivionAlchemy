import React, { Component } from 'react';
import { updateEffect } from '../util'
import { deleteEffect } from '../util'

class EffectEdit extends Component {
    state = {
        modifyEffect: {
            name: ''
        },
        dbError: false,
        dbErrorMessage: '',
        effectDeleted: false,
        deletedEffect: '',
        error: ''
    }

    
    componentDidMount() {
        this.setState({
            modifyEffect: {
                name: this.props.effect.name,
            }
        });
    };

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const modifyEffect = { ...this.state.modifyEffect }
        modifyEffect[inputName] = inputValue
        this.setState({ modifyEffect: modifyEffect })
    }

    submitEffect = (event) => {
        event.preventDefault();
        const modifyEffect = {
            name: this.state.modifyEffect.name,
        };
        updateEffect(this.props.effectId, modifyEffect)
            .then(updatedEffect => {
                console.log(updatedEffect);
                if (updatedEffect.errors) {
                    console.log("errors detected")
                    this.setState({
                        dbError: true,
                        dbErrorMessage: updatedEffect.errors.name.message
                    });
                } else {
                    this.props.updateEffects(updatedEffect.effect);
                    this.setState({
                        modifyEffect: {
                            name: '',
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
        deleteEffect(this.props.effectId)
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
            <div className="bg-dark text-white p-3">
                <form onSubmit={this.submitEffect}>
                    {this.state.effectDeleted
                        ? <div className="text-danger">{this.state.deletedEffect.name} has been deleted</div>
                        :
                        <div className="form-group">
                            <label htmlFor={"editEffectName" + this.props.index}>Effect Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id={"editEffectName" + this.props.index}
                                name="name"
                                placeholder={this.props.effect.name}
                                onChange={this.handleChange}
                                value={this.state.modifyEffect.name}
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