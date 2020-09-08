import React, { Component } from 'react';
import EffectSelectOption from './EffectSelectOption';


class EffectSelectControl extends Component {

    render() {

        const effects = this.props.effects;
        const effectSelectOptionComponents = effects.map((effect, index) => {
            return <EffectSelectOption
                key={effect._id}
                index={index}
                effect={effect}
            />
        })

        return (
            <div className="col">
                <label htmlFor={this.props.selectId}>{this.props.label}</label>
                <select
                    className="form-control"
                    id={this.props.selectId}
                    name={this.props.selectId}
                    onChange={this.props.handleChange}
                    value={this.props.value}
                >
                    <option value="">Select an Effect</option>
                    {effectSelectOptionComponents}
                </select>
            </div>
        )
    }

}

export default EffectSelectControl