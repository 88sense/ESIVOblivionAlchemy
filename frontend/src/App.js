import React, { Component } from 'react';
import { ingredientIndex } from './util';
import { effectIndex } from './util';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import IngredientList from './components/IngredientList';
import EffectList from './components/EffectList';

// import './App.css';

class App extends Component {

  state = {
    ingredients: [],
    effects: [],
    effectCodex: {
      '00000000': {
        name: '',
        relatedIngredients: []
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
        effectsResults.effects.forEach(effect => {
          effectCodex[effect._id] = { name: effect.effectName, relatedIngredients: [] }
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
            // ingredientsResults.ingredients.forEach(ingredient => {

            // })
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
    // let effectList = this.state.effects;
    // effectList.splice(indexOfIngredient, 1);
    this.setState(state => ({ ingredients: this.state.ingredients.splice(indexOfIngredient, 1) }));
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
    let effectList = this.state.effects;
    effectList.splice(indexOfEffect, 1);
    this.setState({
      effects: effectList
    });
  };


  render() {

    return (
      <div className="container-fluid">
        <header>
          <Navbar />
        </header>

        <section>
          <div>
            {/* Filters */}
            <SearchFilters
              effects={this.state.effects}
              addToEffects={this.addToEffects}
              addToIngredients={this.addToIngredients}
            />
          </div>

          <div className="bg-dark py-4">
            {/* Filtered Results */}
            <IngredientList
              ingredientList={this.state.ingredients}
              effects={this.state.effects}
              effectCodex={this.state.effectCodex}
              updateIngredients={this.updateIngredients}
              deleteFromIngredients={this.deleteFromIngredients}

            />
            <EffectList
              effectList={this.state.effects}
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