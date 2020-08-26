import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h4 className='mb-4'>Posts</h4>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">TITLE</h5>
                        <p className="card-text">BODY</p>
                        <div className="btn-group w-100" role="group" aria-label="...">
                            <button className='btn btn-primary'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
