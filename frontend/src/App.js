import React, { Component } from 'react';
import SiteLayout from './components/SiteLayout';
import { ingredientIndex } from './util';
import { effectIndex } from './util';

class App extends Component {
  state = {
    ingredients: [],
    effects: [],
    effectCodex: {
      '00000000': {
        ingredientCount: 0,
        name: '',
        relatedIngredients: {}
      }
    },
    activeEffectCount: 0,
    showEffectList: true,
    showEffectCreate: false,
    activeIngredientCount: 0,
    showIngredientList: false,
    showIngredientCreate: false,
    textSearch: '',
    selectedEffects: {
      filterEffect01: '',
      filterEffect02: '',
      filterEffect03: '',
      filterEffect04: '',
    },
    showFilters: true,
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    effectIndex()
      .then(effectsResults => {
        console.log(effectsResults);
        let effects = this.sortByName(effectsResults.effects);
        ingredientIndex()
          .then(ingredientsResults => {
            console.log(ingredientsResults);
            let ingredients = this.sortByName(ingredientsResults.ingredients);
            this.updateEffectCodex(effects, ingredients)
            this.setState({
              ingredients: ingredients,
              effects: effects,
            })
          })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.message })
      })
  };

  // Database Functions
  // __________________________________________________
  addToEffects = (newEffect) => {
    let effectCodex = this.state.effectCodex;
    effectCodex[newEffect._id] = { name: newEffect.name, relatedIngredients: {} }
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

  // Site Data Functions
  // __________________________________________________
  updateEffectCodex = (effects, ingredients) => {
    let effectCodex = {};
    let activeEffectCount = 0;
    let activeIngredientCount = 0;

    effects.forEach(effect => {
      effectCodex[effect._id] = {
        name: effect.name,
        ingredientCount: 0,
        relatedIngredients: {}
      }
    })

    ingredients.forEach(ingredient => {
      if (ingredient.count > 0) { activeIngredientCount++ }
      if (effectCodex[ingredient.effect01]) {
        effectCodex[ingredient.effect01].relatedIngredients[ingredient.name] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect02]) {
        effectCodex[ingredient.effect02].relatedIngredients[ingredient.name] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect03]) {
        effectCodex[ingredient.effect03].relatedIngredients[ingredient.name] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect04]) {
        effectCodex[ingredient.effect04].relatedIngredients[ingredient.name] =
          ingredient.count;
      }
    })

    let effectKeys = Object.keys(effectCodex);
    effectKeys.forEach(effectId => {
      let ingredientCounter = 0;
      // If related ingredients are found, add to activeEffectCount, calculate number of active ingredients
      if (Object.keys(effectCodex[effectId].relatedIngredients).length) {
        activeEffectCount++
        let ingredientTotalsArray = Object.values(effectCodex[effectId].relatedIngredients)
        ingredientCounter = ingredientTotalsArray.reduce(function (accumulator, currentValue) {
          // If ingredient count is greater than 0 add 1 to ingredient total
          return accumulator + (currentValue ? 1 : 0)
        }, 0)
        effectCodex[effectId].ingredientCount = ingredientCounter;
      }
    })
    this.setState({
      effectCodex: effectCodex,
      activeIngredientCount: activeIngredientCount,
      activeEffectCount: activeEffectCount
    })
  }

  // Display Functions (Toggles)
  // __________________________________________________
  toggleEffectList = () => {
    this.setState({
      showIngredientList: false,
      showEffectList: true
    })
  };

  toggleEffectCreate = () => {
    this.setState(state => ({ showEffectCreate: !state.showEffectCreate }))
  };

  toggleIngredientList = () => {
    this.setState({
      showIngredientList: true,
      showEffectList: false
    })
  };

  toggleIngredientCreate = () => {
    this.setState(state => ({ showIngredientCreate: !state.showIngredientCreate }))
  };

  toggleFilters = () => {
    this.setState(state => ({ showFilters: !state.showFilters }))
  };

  // Search Filter Functions
  // __________________________________________________
  sortResultsByName = () => {
    let ingredients = this.state.ingredients;
    this.sortByName(ingredients);
    let effects = this.state.effects;
    this.sortByName(effects);
    this.setState({
      effects: effects,
      ingredients: ingredients
    });
  };

  sortByName = (itemList) => {
    itemList.sort((a, b) => {
      if (a.name.toLowerCase() <
        b.name.toLowerCase()
      ) {
        return -1;
      } else {
        return 1;
      }
    })
    return itemList;
  };

  sortResultsByCount = () => {
    let ingredients = this.state.ingredients;
    this.sortIngredientsByCount(ingredients);
    let effects = this.state.effects;
    this.sortEffectsByCount(effects);
    this.setState({
      effects: effects,
      ingredients: ingredients
    });
  };

  sortIngredientsByCount = (ingredients) => {
    ingredients.sort((a, b) => {
      if (a.count > b.count
      ) {
        return -1;
      } else {
        return 1;
      }
    })
    return ingredients;
  };

  sortEffectsByCount = (effects) => {
    let effectCodex = this.state.effectCodex;
    effects.sort((a, b) => {
      if (effectCodex[a._id].ingredientCount > effectCodex[b._id].ingredientCount
      ) {
        return -1;
      } else {
        return 1;
      }
    });
    return effects;
  }

  handleTextSearch = (event) => {
    this.setState({ textSearch: event.target.value })
  };

  handleEffectSelect = (event) => {
    const selectedEffects = { ...this.state.selectedEffects }
    const inputName = event.target.name
    const inputValue = event.target.value
    selectedEffects[inputName] = inputValue
    if (!selectedEffects.filterEffect01) {
      selectedEffects.filterEffect02 = ""
      selectedEffects.filterEffect03 = ""
      selectedEffects.filterEffect04 = ""
    }
    if (!selectedEffects.filterEffect02) {
      selectedEffects.filterEffect03 = ""
      selectedEffects.filterEffect04 = ""
    }
    if (!selectedEffects.filterEffect03) {
      selectedEffects.filterEffect04 = ""
    }
    this.setState({ selectedEffects: selectedEffects })
  }

  render() {

    return (
      <SiteLayout
        effects={this.state.effects}
        activeEffectCount={this.state.activeEffectCount}
        addToEffects={this.addToEffects}
        updateEffects={this.updateEffects}
        deleteFromEffects={this.deleteFromEffects}
        showEffectList={this.state.showEffectList}
        toggleEffectList={this.toggleEffectList}
        showEffectCreate={this.state.showEffectCreate}
        toggleEffectCreate={this.toggleEffectCreate}

        ingredients={this.state.ingredients}
        activeIngredientCount={this.state.activeIngredientCount}
        addToIngredients={this.addToIngredients}
        updateIngredients={this.updateIngredients}
        deleteFromIngredients={this.deleteFromIngredients}
        showIngredientList={this.state.showIngredientList}
        toggleIngredientList={this.toggleIngredientList}
        showIngredientCreate={this.state.showIngredientCreate}
        toggleIngredientCreate={this.toggleIngredientCreate}

        effectCodex={this.state.effectCodex}
        updateEffectCodex={this.updateEffectCodex}

        textSearch={this.state.textSearch}
        handleTextSearch={this.handleTextSearch}
        selectedEffects={this.state.selectedEffects}
        handleEffectSelect={this.handleEffectSelect}
        sortResultsByName={this.sortResultsByName}
        sortResultsByCount={this.sortResultsByCount}
        showFilters={this.state.showFilters}
        toggleFilters={this.toggleFilters}

      />
    )
  }
}

export default App;