import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MovieList = (props)=>{


    return(
        <tr>
            <td>{props.movie.moviename}</td>
            <td>{props.movie.releasedate}</td>
            <td>{props.movie.genre}</td>
            <td>{props.movie.budget}</td>
            <td>
                <Link to={'/update/' +props.movie._id}>edit</Link> | <a href="#" onClick={() => {props.deleteMovie(props.movie._id)}} >delete</a>
            </td>
        </tr>
    )
}

class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.deleteMovie = this.deleteMovie.bind(this)

        this.state = { movies : [] }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api')
        .then(res=>{
            this.setState({ movies : res.data })
        }).catch(err=>console.error(err))
    }

    deleteMovie = (id)=>{
        axios.delete('http://localhost:5000/api/' + id)
        .then(res =>console.log(res.data)).catch(err=>console.log(err))

        this.setState({
            movies : this.state.movies.filter(e => e._id !== id)
        })

    }

 


    render(){
        return(
            <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">Movie Name</th>
        <th scope="col">Release Date</th>
        <th scope="col">Genre</th>
        <th scope="col">Budget</th>
      </tr>
    </thead>
    <tbody>
        {
            this.state.movies.map((movie)=>{
                return(
                    <MovieList deleteMovie={this.deleteMovie} movie = {movie} key={movie._id} />
                )
            })

        }


    </tbody>


            </table>
        )
    }
}

export default Dashboard