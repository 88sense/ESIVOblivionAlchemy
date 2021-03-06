import React, { Component } from 'react';
import EffectSelectControl from './EffectSelectControl'

class EffectFilters extends Component {

    render() {

        return (
            <div className="pt-2">
                <form className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">

                    <EffectSelectControl
                        effects={this.props.effects}
                        label="Filter Effect 01"
                        selectId="filterEffect01"
                        handleChange={this.props.handleEffectSelect}
                        selectedEffects=""
                        disabled={false}
                    />
                    {(this.props.selectedEffects.filterEffect01)
                        ?
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Filter Effect 02"
                            labelColor={(!this.props.selectedEffects.filterEffect01) ? "text-light" : "text-dark"}
                            selectId="filterEffect02"
                            handleChange={this.props.handleEffectSelect}
                            selectedEffects={this.props.selectedEffects}
                            // Disable select control if filter 1 is empty
                            disabled={(!this.props.selectedEffects.filterEffect01) ? true : false}
                        />
                        : null}
                    {(this.props.selectedEffects.filterEffect02)
                        ?
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Filter Effect 03"
                            labelColor={(!this.props.selectedEffects.filterEffect02) ? "text-light" : "text-dark"}
                            selectId="filterEffect03"
                            handleChange={this.props.handleEffectSelect}
                            selectedEffects={this.props.selectedEffects}
                            // Disable select control if filter 2 is empty
                            disabled={(!this.props.selectedEffects.filterEffect02) ? true : false}
                        />
                        : null}
                    {(this.props.selectedEffects.filterEffect03)
                        ?
                        <EffectSelectControl
                            effects={this.props.effects}
                            label="Filter Effect 04"
                            labelColor={(!this.props.selectedEffects.filterEffect03) ? "text-light" : "text-dark"}
                            selectId="filterEffect04"
                            handleChange={this.props.handleEffectSelect}
                            selectedEffects={this.props.selectedEffects}
                            // Disable select control if filter 3 is empty
                            disabled={(!this.props.selectedEffects.filterEffect03) ? true : false}
                        />
                        : null}

                </form>
            </div>

        )
    }

}

export default EffectFilters