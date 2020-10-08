import './App.css';
import React, { Component } from 'react';
import { ingredientIndex } from './util';
import { effectIndex } from './util';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import IngredientList from './components/IngredientList';
import EffectList from './components/EffectList';
import IngredientCreate from './components/IngredientCreate';
import EffectCreate from './components/EffectCreate';

class App extends Component {

  state = {
    ingredients: [],
    activeIngredientCount: 0,
    activeEffectCount: 0,
    effects: [],
    effectCodex: {
      '00000000': {
        name: '',
        relatedIngredients: {}
      }
    },
    showEffectList: true,
    showIngredientList: false,
    searchText: '',
    selectedEffects: {
      filterEffect01: '',
      filterEffect02: '',
      filterEffect03: '',
      filterEffect04: '',
    },
    showEffectCreate: false,
    showIngredientCreate: false,
    showFilters: true
  };


  toggleEffectCreate = () => {
    this.setState(state => ({ showEffectCreate: !state.showEffectCreate }))
  };
  toggleIngredientCreate = () => {
    this.setState(state => ({ showIngredientCreate: !state.showIngredientCreate }))
  };

  toggleFilters = () => {
    this.setState(state => ({ showFilters: !state.showFilters }))
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
            let ingredients = this.sortByName(ingredientsResults.ingredients)
            console.log(ingredients)
            this.updateEffectCodex(effectsResults.effects, ingredientsResults.ingredients)
            this.setState({
              ingredients: ingredients,
              effects: effectsResults.effects,
            })
          })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.message })
      })
  };

  sortByName = (itemList) => {
    itemList.sort((a, b) => {
      if (a.ingredientName.toLowerCase() <
        b.ingredientName.toLowerCase()
      ) {
        return -1;
      } else {
        return 1;
      }
    })
    return itemList
  }

  sortIngredientsByCount = (itemList) => {
    itemList.sort((a, b) => {
      if (a.count < b.count
      ) {
        return -1;
      } else {
        return 1;
      }
    })
    return itemList
  }

  updateEffectCodex = (effects, ingredients) => {
    let effectCodex = {};
    let activeEffectCount = 0;
    let activeIngredientCount = 0;

    effects.forEach(effect => {
      effectCodex[effect._id] = {
        name: effect.effectName,
        ingredientCount: 0,
        relatedIngredients: {}
      }
    })
    ingredients.forEach(ingredient => {
      if (ingredient.count > 0) { activeIngredientCount++ }
      if (effectCodex[ingredient.effect01]) {
        effectCodex[ingredient.effect01].relatedIngredients[ingredient.ingredientName] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect02]) {
        effectCodex[ingredient.effect02].relatedIngredients[ingredient.ingredientName] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect03]) {
        effectCodex[ingredient.effect03].relatedIngredients[ingredient.ingredientName] =
          ingredient.count;
      }
      if (effectCodex[ingredient.effect04]) {
        effectCodex[ingredient.effect04].relatedIngredients[ingredient.ingredientName] =
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
    console.log(activeEffectCount)
    this.setState({
      effectCodex: effectCodex,
      activeIngredientCount: activeIngredientCount,
      activeEffectCount: activeEffectCount
    })
    console.log(effectCodex);
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
      <div className="container-fluid p-0 m-0" id="alchemy">
        <header id="headerNavSearchFilter">
          {/* Navigation Bar */}
          <Navbar
            toggleIngredientList={this.toggleIngredientList}
            activeIngredientCount={this.state.activeIngredientCount}
            toggleEffectList={this.toggleEffectList}
            activeEffectCount={this.state.activeEffectCount}
            showEffectCreate={this.state.showEffectCreate}
            showFilters={this.state.showFilters}
            toggleFilters={this.toggleFilters}
            toggleEffectCreate={this.toggleEffectCreate}
            toggleIngredientCreate={this.toggleIngredientCreate}
          />

          {/* Create forms  */}
          <div>
            {/* Create Effect form  */}
            {this.state.showEffectCreate
              ? <EffectCreate
                addToEffects={this.props.addToEffects}
                toggleEffectCreate={this.toggleEffectCreate} />
              : null
            }

            {/* Create Ingredient form  */}
            {this.state.showIngredientCreate
              ? <IngredientCreate
                effects={this.state.effects}
                addToIngredients={this.props.addToIngredients}
                toggleIngredientCreate={this.toggleIngredientCreate} />
              : null
            }
          </div>

          {/* Text Search and Effect Filters */}
          {this.state.showFilters
            ?
            <div className="bg-light pt-4 pb-2 px-4">
              <SearchFilters
                effects={this.state.effects}
                addToEffects={this.addToEffects}
                addToIngredients={this.addToIngredients}
                handleSearchText={this.handleSearchText}
                handleChange={this.handleEffectSelect}
                selectedEffects={this.state.selectedEffects}
              />
            </div>
            : null
          }
        </header>

        {/* Filtered Results */}
        <section id="resultList" className="mt-5">
          <div>
            {/* Show List of Effects? */}
            {this.state.showEffectList
              ?
              <EffectList
                effects={this.state.effects}
                effectCodex={this.state.effectCodex}
                updateEffects={this.updateEffects}
                deleteFromEffects={this.deleteFromEffects}
                searchText={this.state.searchText}
                updateIngredients={this.updateIngredients}
              />
              : null
            }

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
                selectedEffects={this.state.selectedEffects}
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