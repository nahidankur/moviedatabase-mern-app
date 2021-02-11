import React from 'react'
import axios from 'axios'

class AddMovie extends React.Component{
    constructor(props){
        super(props)
        this.onChangeMovieName = this.onChangeMovieName.bind(this)
        this.onChangeBudget = this.onChangeBudget.bind(this)
        this.onChangeGenre = this.onChangeGenre.bind(this)
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this)

        this.state = {
            moviename : '',
            releasedate: '',
            genre : '',
            budget : ''
        }



    }

    onChangeMovieName = (e)=>{
        this.setState({
            moviename : e.target.value
        })
    }
    onChangeReleaseDate = (e)=>{
        this.setState({
            releasedate : e.target.value
        })
    }

    onChangeGenre = (e)=>{
        this.setState({
            genre : e.target.value
        })
    }

    onChangeBudget = (e)=>{
        this.setState({
            budget : e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()

        const movie =  {
            moviename : this.state.moviename,
            releasedate : this.state.releasedate,
            genre: this.state.genre,
            budget: this.state.budget
        }

        console.log(movie)

        axios.post('http://localhost:5000/api/add', movie)
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
        window.location = '/'
    }



    render(){
        return(
         
    <form onSubmit={this.onSubmit} className="needs-validation">
    <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Movie name</label>
       <input
       onChange={this.onChangeMovieName} value={this.state.onChangeMovieName}
        type="text" className="form-control" id="validationTooltip01" placeholder="First name" required/>
    
     </div>
    
    </div>
    <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Release date</label>
       <input 
       onChange={this.onChangeReleaseDate} value={this.state.onChangeReleaseDate}
       type="text" className="form-control" id="validationTooltip01"  required/>
    
     </div>
    
    </div> <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Genre</label>
       <input
        onChange={this.onChangeGenre} value={this.state.onChangeGenre}
        required id="validationTooltip01" type="text" className="form-control">
    </input>
    
     </div>
    
    </div> <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Budget</label>
       <input
       onChange={this.onChangeBudget} value={this.state.onChangeBudget}
       type="text" className="form-control" id="validationTooltip01"  required/>
    
     </div>
    
    </div>
    <button value='Add MovieDatabase' className="btn btn-secondary" type="submit">Submit</button>
    </form>
      
        )
    }
}

export default AddMovie