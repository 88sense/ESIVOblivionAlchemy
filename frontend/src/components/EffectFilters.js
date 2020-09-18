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
                        selectedEffects=""
                        disabled={false}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 02"
                        selectId="filterEffect02"
                        handleChange={this.props.handleChange}
                        selectedEffects={this.props.selectedEffects}
                        // Disable select control if filter 1 is empty
                        disabled={(!this.props.selectedEffects.filterEffect01) ? true : false}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 03"
                        selectId="filterEffect03"
                        handleChange={this.props.handleChange}
                        selectedEffects={this.props.selectedEffects}
                        // Disable select control if filter 2 is empty
                        disabled={(!this.props.selectedEffects.filterEffect01 ||
                            !this.props.selectedEffects.filterEffect02
                        ) ? true : false}
                    />
                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 04"
                        selectId="filterEffect04"
                        handleChange={this.props.handleChange}
                        selectedEffects={this.props.selectedEffects}
                        // Disable select control if filter 3 is empty
                        disabled={(!this.props.selectedEffects.filterEffect03) ? true : false}
                    />


                </form>
            </div>

        )
    }

}

export default EffectFilters