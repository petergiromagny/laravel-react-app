import React from 'react';
import ReactDOM from 'react-dom';

function Home(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <div className="btn-group w-100" role="group" aria-label="...">
                    <button className='btn btn-primary'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
