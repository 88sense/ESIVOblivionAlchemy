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
    },
    showIngredientList: true,
    showEffectList: false,
    searchText: ''
  };

  componentDidMount() {
    this.fetchData()
  };

  fetchData = () => {
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

            this.updateEffectCodex(effectsResults.effects, ingredientsResults.ingredients)
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
  };

  updateEffectCodex = (effects, ingredients) => {
    let effectCodex = {};
    effects.forEach(effect => {
      effectCodex[effect._id] = { name: effect.effectName, relatedIngredients: {} }
    })
    ingredients.forEach(ingredient => {
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
    this.setState({ effectCodex: effectCodex })
  }

  addToIngredients = (newIngredient) => {
    this.setState({
      ingredients: [newIngredient, ...this.state.ingredients]
    });
    this.updateEffectCodex(this.state.effects, this.state.ingredients);
  };

  updateIngredients = (updatedIngredient) => {
    this.setState({
      ingredients: this.state.ingredients.map(ingredient => (
        ingredient._id === updatedIngredient._id ? { ...ingredient, ...updatedIngredient } : ingredient
      ))
    });
    this.updateEffectCodex(this.state.effects, this.state.ingredients);
  };

  deleteFromIngredients = (indexOfIngredient) => {
    let ingredients = this.state.ingredients;
    ingredients.splice(indexOfIngredient, 1);
    this.setState({ ingredients: ingredients })
    // this.setState(state => ({ ingredients: this.state.ingredients.splice(indexOfIngredient, 1) }));
    this.updateEffectCodex(this.state.effects, this.state.ingredients);
  };

  addToEffects = (newEffect) => {
    let effectCodex = this.state.effectCodex;
    effectCodex[newEffect._id] = { name: newEffect.effectName, relatedIngredients: {} }
    this.setState({
      effects: [newEffect, ...this.state.effects],
      effectCodex: effectCodex
    });
  };

  updateEffects = (updatedEffect) => {
    this.setState({
      effects: this.state.effects.map(effect => (
        effect._id === updatedEffect._id ? { ...effect, ...updatedEffect } : effect
      ))
    });
    this.updateEffectCodex(this.state.effects, this.state.ingredients);
  };

  deleteFromEffects = (indexOfEffect) => {
    let effects = this.state.effects;
    effects.splice(indexOfEffect, 1);
    this.setState({ effects: effects });
    this.updateEffectCodex(this.state.effects, this.state.ingredients);

  };

  toggleIngredientList = () => {
    this.setState(state => ({
      showIngredientList: true,
      showEffectList: false
    }))
  }

  toggleEffectList = () => {
    this.setState(state => ({
      showIngredientList: false,
      showEffectList: true
    }))
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value })
}


  render() {

    return (
      <div className="container-fluid">
        <header>
          <Navbar
            toggleIngredientList={this.toggleIngredientList}
            toggleEffectList={this.toggleEffectList}
          />
        </header>

        <section>
          {/* Filters */}

          <div className="bg-light pt-4 pb-2">
            <SearchFilters
              effects={this.state.effects}
              addToEffects={this.addToEffects}
              addToIngredients={this.addToIngredients}
              handleSearchText={this.handleSearchText}
            />
          </div>

          {/* Filtered Results */}
          <div className="overflow-auto py-4" id="resultList">

            {/* Show List of Ingredients? */}
            {this.state.showIngredientList
              ?
              <IngredientList
                ingredients={this.state.ingredients}
                effects={this.state.effects}
                effectCodex={this.state.effectCodex}
                updateIngredients={this.updateIngredients}
                deleteFromIngredients={this.deleteFromIngredients}
                searchText={this.state.searchText}
              />
              : null
            }

            {/* Show List of Effects? */}
            {this.state.showEffectList
              ?
              <EffectList
                effects={this.state.effects}
                effectCodex={this.state.effectCodex}
                updateEffects={this.updateEffects}
                deleteFromEffects={this.deleteFromEffects}
                searchText={this.state.searchText}
              />
              : null
            }

{/* Photo credit */}
            {/* <span className="text-light">Photo by <a href="https://unsplash.com/@mbriney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Matt Briney</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
          </div>
        </section>
      </div>

    );
  }
}

export default App;