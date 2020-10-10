import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import ResultsList from './ResultsList';
import IngredientCreate from './IngredientCreate';
import EffectCreate from './EffectCreate';

class SiteLayout extends Component {

    render() {

        return (
            <div className="container-fluid" id="alchemy">

                <header className="navigationBar">

                    {/* Navigation Bar */}
                    <Navbar
                        activeEffectCount={this.props.activeEffectCount}
                        showEffectList={this.props.showEffectList}
                        toggleEffectList={this.props.toggleEffectList}
                        showEffectCreate={this.props.showEffectCreate}
                        toggleEffectCreate={this.props.toggleEffectCreate}
                        activeIngredientCount={this.props.activeIngredientCount}
                        showIngredientList={this.props.showIngredientList}
                        toggleIngredientList={this.props.toggleIngredientList}
                        showIngredientCreate={this.props.showIngredientCreate}
                        toggleIngredientCreate={this.props.toggleIngredientCreate}
                        showFilters={this.props.showFilters}
                        toggleFilters={this.props.toggleFilters}
                    />
                </header>

                <main className="mainContent">

                    {/* Create Forms */}
                    <section aria-label="Forms to Create New Items">
                        {/* Create Effect Form */}
                        {this.props.showEffectCreate
                            ? <EffectCreate
                                addToEffects={this.props.addToEffects}
                                toggleEffectCreate={this.props.toggleEffectCreate} />
                            : null
                        }

                        {/* Create Ingredient Form */}
                        {this.props.showIngredientCreate
                            ? <IngredientCreate
                                effects={this.props.effects}
                                addToIngredients={this.props.addToIngredients}
                                toggleIngredientCreate={this.props.toggleIngredientCreate} />
                            : null
                        }
                    </section>

                    {/* Filtered Results */}
                    <section aria-label="Item List">
                        <ResultsList
                            effects={this.props.effects}
                            activeEffectCount={this.props.activeEffectCount}
                            updateEffects={this.props.updateEffects}
                            deleteFromEffects={this.props.deleteFromEffects}
                            showEffectList={this.props.showEffectList}
                            ingredients={this.props.ingredients}
                            activeIngredientCount={this.props.activeIngredientCount}
                            updateIngredients={this.props.updateIngredients}
                            deleteFromIngredients={this.props.deleteFromIngredients}
                            showIngredientList={this.props.showIngredientList}
                            effectCodex={this.props.effectCodex}
                            textSearch={this.props.textSearch}
                            handleTextSearch={this.props.handleTextSearch}
                            selectedEffects={this.props.selectedEffects}
                            handleEffectSelect={this.props.handleEffectSelect}
                            sortResultsByName={this.props.sortResultsByName}
                            sortResultsByCount={this.props.sortResultsByCount}
                            showFilters={this.props.showFilters}
                            toggleFilters={this.props.toggleFilters}
                        />
                    </section>
                </main>
            </div>
        );
    }
}

export default SiteLayout