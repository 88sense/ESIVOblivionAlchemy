import React, { Component } from 'react';

class EffectSelectOption extends Component {

    render() {

        return (
            <option
                value={this.props.effect._id}
                disabled={this.props.disabled}
            >
                {this.props.effect.name}
            </option>

        )
    }

}

export default EffectSelectOption