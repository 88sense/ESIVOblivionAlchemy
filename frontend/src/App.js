import React, { Component } from 'react';
import { ingredientIndex } from './util';
import { effectIndex } from './util';

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

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Alchemy</h1>
        </header>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <section>
          {/* Filters */}
        </section>

        <section>
          {/* Filtered Results */}
        </section>

        <footer>
          Copyright Info
    </footer>
      </div>
    );
  }
}


export default App;
