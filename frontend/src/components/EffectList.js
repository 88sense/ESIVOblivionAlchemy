import React, { Component } from 'react';
import Effect from './Effect';

class EffectList extends Component {

    render() {

        const searchText = this.props.searchText;
        const effects = this.props.effects;
        const effectComponents = effects.map((effect, index) => {
            // Text search filter
            if (effect.effectName.toLowerCase().indexOf(searchText) === -1) {
                return null;
            }

            return <Effect
                key={effect._id}
                index={index}
                effect={effect}
                effectCodex={this.props.effectCodex}
                updateEffects={this.props.updateEffects}
                deleteFromEffects={this.props.deleteFromEffects}
                updateIngredients={this.props.updateIngredients}
            />
        })

        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-3 mx-3">
                {effectComponents}
            </div>
        )
    }
}

export default EffectList