import React, { Component } from 'react';
import Effect from './Effect';

class EffectList extends Component {

    render() {

        return (
            <div className="row row-cols-1 row-cols-md-4 m-3">
                <Effect />
                <Effect />
                <Effect />
                <Effect />
                <Effect />
                <Effect />
            </div>
        )
    }
}

export default EffectList