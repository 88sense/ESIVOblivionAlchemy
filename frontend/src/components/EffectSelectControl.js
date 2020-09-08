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
                <label htmlFor="effectSelector01">{this.props.label}</label>
                <select className="form-control" id={this.props.selectId}>
                    <option value="default">Select an Effect</option>
                    {effectSelectOptionComponents}
                </select>
            </div>
        )
    }

}

export default EffectSelectControl