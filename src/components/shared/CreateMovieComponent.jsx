import React, { Component } from 'react';
import MovieAPIservice from '../../services/MovieAPIservice';

class CreateMovieComponent extends Component {
    constructor(props){
        super(props)
        this.state={
                title:'',
                category: '',
                director: '',
                poster: '',
                release: '',
                description: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeDirectorHandler = this.changeDirectorHandler.bind(this);
        this.changePosterHandler = this.changePosterHandler.bind(this);
        this.changeReleaseHandler = this.changeReleaseHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
    }

    saveMovie = (e) =>{
        e.preventDefault();
        let movie = {name: this.state.title,
            category: this.state.category,
            director: this.state.director,
            poster: this.state.poster, 
            release: this.state.release,
            description: this.state.description
        };
        console.log('movie => ' + JSON.stringify(movie));
        MovieAPIservice.createMovie(movie).then(res =>{
            //this.props.history.push('/api/movies');
            window.alert("Successfully added Movie!");
            window.location.href = "/api/movies";

        });
    }

    changeTitleHandler=(event)=>{
        this.setState({title: event.target.value});
    }
    changeCategoryHandler=(event)=>{
        this.setState({category: event.target.value});
    }
    changeDirectorHandler=(event)=>{
        this.setState({director: event.target.value});
    }
    changePosterHandler=(event)=>{
        this.setState({poster: event.target.value});
    }
    changeReleaseHandler=(event)=>{
        this.setState({release: event.target.value});
    }
    changeDescriptionHandler=(event)=>{
        this.setState({description: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Movie</h3>
                            <div className='card-body'>
                                <form action="">
                                    <label > Title</label>
                                    <input placeholder='Movie Name' name='title' className='form-control'
                                    value={this.state.title} onChange={this.changeTitleHandler} />
                                    
                                    <label > Category</label>
                                    <input placeholder='Movie Category' name='category' className='form-control'
                                    value={this.state.category} onChange={this.changeCategoryHandler} />

                                    <label > Director </label>
                                    <input placeholder='Movie Director' name='director' className='form-control'
                                    value={this.state.director} onChange={this.changeDirectorHandler} />

                                    <label > Poster</label>
                                    <input placeholder='Image Link' name='poster' className='form-control'
                                    value={this.state.poster} onChange={this.changePosterHandler} />

                                    <label >Release</label>
                                    <input type="date" placeholder='Date of Publication' name='release' className='form-control'
                                    value={this.state.release} onChange={this.changeReleaseHandler} />

                                    <label >Description</label>
                                    <input type="textfield" placeholder='Movie Description' name='description' className='form-control'
                                    value={this.state.description} onChange={this.changeDescriptionHandler} />

                                    <button className='btn btn-success' style={{backgroundColor: 'green'}} onClick={this.saveMovie}>Save</button>
                                    {/* <button className='btn btn-success' onClick={this.cancel.bind(this)} style={{backgroundColor: 'pink', marginLeft:"10px"}}>Cancel</button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateMovieComponent;