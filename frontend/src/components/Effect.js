import React, { Component } from 'react';

class Effect extends Component {

    render() {

        return (
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div class="card-title font-weight-bolder">
                            Effect Name
                        <span class="badge badge-primary ml-3">14</span>
                        </div>
                        <button class="btn btn-secondary btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </button>
                    </div>

                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Effect