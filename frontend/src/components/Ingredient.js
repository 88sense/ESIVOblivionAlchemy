import React, { Component } from 'react';

class Ingredient extends Component {

    render() {
        let effectCodex = this.props.effectCodex;
        let ingredientEffectName01 = '';
        let ingredientEffectName02 = '';
        let ingredientEffectName03 = '';
        let ingredientEffectName04 = '';
        if (this.props.ingredient.effect01) {
            let effect01 = this.props.ingredient.effect01.toString();
            ingredientEffectName01 = effectCodex[effect01].name;
        }
        if (this.props.ingredient.effect02) {
            let effect02 = this.props.ingredient.effect02.toString();
            ingredientEffectName02 = effectCodex[effect02].name;
        }
        if (this.props.ingredient.effect03) {
            let effect03 = this.props.ingredient.effect03.toString();
            ingredientEffectName03 = effectCodex[effect03].name;
        }
        if (this.props.ingredient.effect04) {
            let effect04 = this.props.ingredient.effect04.toString();
            ingredientEffectName04 = effectCodex[effect04].name;
        }



        return (
            <div className="col mb-4">
                <div className="card h-100 bg-info">
                    <div className="card-header">
                        <div className="card-title font-weight-bolder">
                            {this.props.ingredient.ingredientName}
                        </div>
                    </div>

                    <div className="card card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{ingredientEffectName01}</li>
                            <li className="list-group-item">{ingredientEffectName02}</li>
                            <li className="list-group-item">{ingredientEffectName03}</li>
                            <li className="list-group-item">{ingredientEffectName04}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Ingredient