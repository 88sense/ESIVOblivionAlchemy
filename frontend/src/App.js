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
      .then(ingredients => {
        console.log(ingredients)
        effectIndex()
          .then(effects => {
            console.log(effects)
          })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.message })
      })
  }

  addToIngredients = (newIngredient) => {
    this.setState({
      ingredients: [
        newIngredient, ...this.state.ingredients
      ]
    });
  }
  addToEffects = (newEffect) => {
    this.setState({
      effects: [
        newEffect, ...this.state.effects
      ]
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
            <IngredientList ingredientList={this.state.ingredients} />
            <EffectList effectList={this.state.effects} />

          </div>
        </section>
      </div>

    );
  }
}

export default App;