import './App.css';
import React, { Component } from 'react';
import { ingredientIndex } from './util';
import { effectIndex } from './util';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import IngredientList from './components/IngredientList';
import EffectList from './components/EffectList';



class App extends Component {

  state = {
    ingredients: [],
    effects: [],
    effectCodex: {
      '00000000': {
        name: '',
        relatedIngredients: {}
      }
    }
  };

  componentDidMount() {
    this.fetchData()
  };

  fetchData = () => {
    let effectCodex = {};
    effectIndex()
      .then(effectsResults => {
        console.log(effectsResults)
        effectsResults.effects.sort((a, b) => {
          if (a.effectName.toLowerCase() <
            b.effectName.toLowerCase()
          ) {
            return -1;
          } else {
            return 1;
          }
        })
        ingredientIndex()
          .then(ingredientsResults => {
            console.log(ingredientsResults)
            ingredientsResults.ingredients.sort((a, b) => {
              if (a.ingredientName.toLowerCase() <
                b.ingredientName.toLowerCase()
              ) {
                return -1;
              } else {
                return 1;
              }
            })
            effectsResults.effects.forEach(effect => {
              effectCodex[effect._id] = { name: effect.effectName, relatedIngredients: {} }
            })
            ingredientsResults.ingredients.forEach(ingredient => {
              if (effectCodex[ingredient.effect01]) {
                effectCodex[ingredient.effect01].relatedIngredients[ingredient.ingredientName] =
                  (effectCodex[ingredient.effect01].relatedIngredients[ingredient.ingredientName] + 1) || 1;
              }
              if (effectCodex[ingredient.effect02]) {
                effectCodex[ingredient.effect02].relatedIngredients[ingredient.ingredientName] =
                  (effectCodex[ingredient.effect02].relatedIngredients[ingredient.ingredientName] + 1) || 1;
              }
              if (effectCodex[ingredient.effect03]) {
                effectCodex[ingredient.effect03].relatedIngredients[ingredient.ingredientName] =
                  (effectCodex[ingredient.effect03].relatedIngredients[ingredient.ingredientName] + 1) || 1;
              }
              if (effectCodex[ingredient.effect04]) {
                effectCodex[ingredient.effect04].relatedIngredients[ingredient.ingredientName] =
                  (effectCodex[ingredient.effect04].relatedIngredients[ingredient.ingredientName] + 1) || 1;
              }
            })
            this.setState({
              ingredients: ingredientsResults.ingredients,
              effects: effectsResults.effects,
              effectCodex: effectCodex

            })
          })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.message })
      })
  };

  addToIngredients = (newIngredient) => {
    this.setState({
      ingredients: [newIngredient, ...this.state.ingredients]
    });
  };

  updateIngredients = (updatedIngredient) => {
    this.setState({
      ingredients: this.state.ingredients.map(ingredient => (
        ingredient._id === updatedIngredient._id ? { ...ingredient, ...updatedIngredient } : ingredient
      ))
    });
  };

  deleteFromIngredients = (indexOfIngredient) => {
    let ingredients = this.state.ingredients;
    ingredients.splice(indexOfIngredient, 1);
    this.setState({ ingredients: ingredients })
    // this.setState(state => ({ ingredients: this.state.ingredients.splice(indexOfIngredient, 1) }));
  };

  addToEffects = (newEffect) => {
    this.setState({
      effects: [newEffect, ...this.state.effects]
    });
  };

  updateEffects = (updatedEffect) => {
    this.setState({
      effects: this.state.effects.map(effect => (
        effect._id === updatedEffect._id ? { ...effect, ...updatedEffect } : effect
      ))
    });
  };

  deleteFromEffects = (indexOfEffect) => {
    let effects = this.state.effects;
    effects.splice(indexOfEffect, 1);
    this.setState({ effects: effects });
  };


  render() {

    return (
      <div className="container-fluid">
        <header>
          <Navbar />
        </header>

        <section>
          <div className="bg-light pt-4 pb-2">
            {/* Filters */}
            <SearchFilters
              effects={this.state.effects}
              addToEffects={this.addToEffects}
              addToIngredients={this.addToIngredients}
            />
          </div>

          <div className="overflow-auto py-4" id="resultList">
            {/* Filtered Results */}
            <IngredientList
              ingredients={this.state.ingredients}
              effects={this.state.effects}
              effectCodex={this.state.effectCodex}
              updateIngredients={this.updateIngredients}
              deleteFromIngredients={this.deleteFromIngredients}

            />
            <EffectList
              effects={this.state.effects}
              effectCodex={this.state.effectCodex}
              updateEffects={this.updateEffects}
              deleteFromEffects={this.deleteFromEffects}
            />

          </div>
        </section>
      </div>

    );
  }
}

export default App;