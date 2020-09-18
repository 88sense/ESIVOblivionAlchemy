import React, { Component } from 'react';
import EffectSelectOption from './EffectSelectOption';


class EffectSelectControl extends Component {

    render() {

        const effects = this.props.effects;
        const filterEffect01 = this.props.selectedEffects.filterEffect01
        const filterEffect02 = this.props.selectedEffects.filterEffect02
        const filterEffect03 = this.props.selectedEffects.filterEffect03
        const filterEffect04 = this.props.selectedEffects.filterEffect04

        const effectSelectOptionComponents = effects.map((effect, index) => {
            if (effect._id === filterEffect01 || effect._id === filterEffect02 ||
                effect._id === filterEffect03 || effect._id === filterEffect04
            ) { return null }

            return <EffectSelectOption
                key={effect._id}
                index={index}
                effect={effect}
            />
        })


        return (
            <div className="col">
                <label htmlFor={this.props.selectId}
                    // If select is disabled, change style
                    className={(this.props.disabled) ? "text-light" : "text-dark"}
                >{this.props.label}</label>
                <select
                    disabled={this.props.disabled}
                    // If select is disabled, change style
                    className={(this.props.disabled) ? "form-control bg-light text-light border border-secondary" : "form-control bg-dark text-light"}
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