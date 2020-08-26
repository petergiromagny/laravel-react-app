import React from 'react';
import SinglePost from './SinglePost';

function Home() {
    return (
        <div className="container vh-100 pt-5">
            <div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h4 className='mb-4'>Home Component</h4>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">New Post</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary w-100">Create</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <SinglePost />
            </div>
        </div>
    );
}

export default Home;

