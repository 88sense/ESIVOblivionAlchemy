import React, { Component } from 'react';

class EffectSelectors extends Component {
  
    render() {

        return (
            <div className="border border-warning">
                <form className="d-flex flex-row justify-content-between  m-3">
                    <div className="form-group">
                        <label htmlFor="effectSelector01">Effect 01</label>
                        <select className="form-control" id="effectSelector01">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="effectSelector02">Effect 02</label>
                        <select className="form-control" id="effectSelector02">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="effectSelector03">Effect 03</label>
                        <select className="form-control" id="effectSelector03">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="effectSelector04">Effect 04</label>
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