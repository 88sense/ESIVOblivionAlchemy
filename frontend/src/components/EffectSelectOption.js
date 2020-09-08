import React, { Component } from 'react';

class EffectSelectOption extends Component {

    render() {

        return (
            <option value={this.props.effect._id}>
                {this.props.effect.effectName}
            </option>

        )
    }

}

export default EffectSelectOption