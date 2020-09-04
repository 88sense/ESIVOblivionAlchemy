import React, { Component } from 'react';
import Effect from './Effect';

class EffectList extends Component {

    render() {

        const effectList = this.props.effectList;
        const effectComponents = effectList.map((effect, index) => {
            return <Effect
                key={effect._id}
                index={index}
                effect={effect}
            />
        })

        return (
            <div className="row row-cols-1 row-cols-md-4 m-3">
                {effectComponents}
            </div>
        )
    }
}

export default EffectList