import React, { Component } from 'react';
import EffectSelectControl from './EffectSelectControl'

class EffectFilters extends Component {

    render() {

        return (
            <div>
                <form className="row">

                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 01"
                        selectId="filterEffect01"
                        handleChange={this.props.handleChange}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 02"
                        selectId="filterEffect02"
                        handleChange={this.props.handleChange}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 03"
                        selectId="filterEffect03"
                        handleChange={this.props.handleChange}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 04"
                        selectId="filterEffect04"
                        handleChange={this.props.handleChange}
                    />


                </form>
            </div>

        )
    }

}

export default EffectFilters