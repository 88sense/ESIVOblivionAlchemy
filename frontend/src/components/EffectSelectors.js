import React, { Component } from 'react';

class EffectSelectors extends Component {
  
    render() {

        return (
            <div>
                <form className="row">
                    <div className="col">
                        <label htmlFor="effectSelector01">Filter Effect 01</label>
                        <select className="form-control" id="effectSelector01">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="effectSelector02">Filter Effect 02</label>
                        <select className="form-control" id="effectSelector02">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="effectSelector03">Filter Effect 03</label>
                        <select className="form-control" id="effectSelector03">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="effectSelector04">Filter Effect 04</label>
                        <select className="form-control" id="effectSelector04">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>


                </form>
            </div>

        )
    }

}

export default EffectSelectors