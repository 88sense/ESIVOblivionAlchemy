import React, { Component } from 'react';
import Effect from './Effect';

class EffectList extends Component {

    render() {
        const searchText = this.props.searchText;
        const effectsIndex = Object.keys(this.props.effectCodex)
        const effectComponents = effectsIndex.map((effectKey, index) => {
            // Text search filter
            if (this.props.effectCodex[effectKey].name.toLowerCase().indexOf(searchText) === -1) {
                return null;
            }

            return <Effect
                key={effectKey}
                index={index}
                effectId={effectKey}
                effect={this.props.effectCodex[effectKey]}
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