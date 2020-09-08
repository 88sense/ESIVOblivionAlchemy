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

  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
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
            this.setState({
              ingredients: ingredientsResults.ingredients,
              effects: effectsResults.effects,
            })
          })
      })

      .catch(err => {
        console.log(err)
        this.setState({ error: err.message })
      })
  }

  addToIngredients = (newIngredient) => {
    this.setState({
      ingredients: [newIngredient, ...this.state.ingredients]
    });
  }

  addToEffects = (newEffect) => {
    this.setState({
      effects: [newEffect, ...this.state.effects]
    });
  }

  updateEffects = (updatedEffect) => {
    this.setState({
      effects: this.state.effects.map(effect => (
        effect._id === updatedEffect._id ? { ...effect, ...updatedEffect } : effect
      ))
    });
  }

  deleteFromEffects = (effectIndex) => {
    let effectList = this.state.effects;
    effectList.splice(effectIndex, 1);
    this.setState({
      effects: effectList
    });
  }


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
              addToIngredients={this.addToIngredients}
              addToEffects={this.addToEffects}
            />
          </div>

          <div className="bg-dark py-4">
            {/* Filtered Results */}
            {/* <IngredientList ingredientList={this.state.ingredients} /> */}
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