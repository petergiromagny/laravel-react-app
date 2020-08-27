import React, {Component} from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            body: '',
            posts: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll(){
        axios.get('/api')
            .then((res) => {
                this.setState({
                    posts: res.data
                })
            })
    }

    getOne(e, post){
        this.setState({
            id: test.id,
            title: test.title,
            body: test.body
        })
    }

    delete(e, id){
        axios.delete('/api/${id}')
            .then((res) => {
                this.getAll();
            })
    }

    submit(event){
        event.preventDefault();
        if(this.state.id === 0){
            axios.post('/api', {
                title: this.state.title,
                body: this.state.body
            })
                .then((res) => {
                    this.getAll();
                })
        } else {
            axios.put('/api/${id}', {
                title: this.state.title,
                body: this.state.body
            })
                .then((res) => {
                    this.getAll();
                })
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div className="container vh-100 pt-5">

                <div className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e) => this.submit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="titleInput">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            id="titleInput"
                                            placeholder="Post title"
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bodyInput">Body</label>
                                        <textarea
                                            name="body"
                                            className="form-control"
                                            id="bodyInput"
                                            value={this.state.body}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className='mb-4'>Posts</h4>
                            { this.state.posts.map(post =>
                                <div className="card" key={post.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <div className="btn-group w-100" role="group" aria-label="...">
                                            <button onClick={(e) => this.getOne(e, post)} className='btn btn-primary'>Edit</button>
                                            <button onClick={(e) => this.delete(e, post)} className='btn btn-danger'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

