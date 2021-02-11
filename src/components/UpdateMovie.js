import React from 'react'
import axios from 'axios'

class UpdateMovie extends React.Component{
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

    componentDidMount(){
        axios.get('http://localhost:5000/api/' + this.props.match.params.id)
        .then(res=>{
            this.setState({
                moviename : res.data.moviename,
                releasedate : res.data.releasedate,
                genre : res.data.genre,
                budget : res.data.budget
            })
        }).catch(err=>console.log(err))
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

        axios.post('http://localhost:5000/api/update/'+ this.props.match.params.id, movie  )
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
        window.location = '/'
    }



    render(){
        return(
         
    <form onSubmit={this.onSubmit} className="needs-validation">
    <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Update Movie name </label>
       <input
       onChange={this.onChangeMovieName} value={this.state.onChangeMovieName}
        type="text" className="form-control" id="validationTooltip01" placeholder="First name" required/>
    
     </div>
    
    </div>
    <div className="form-row">
     <div className="col-md-4 mb-3">
       <label > Update Release date</label>
       <input 
       onChange={this.onChangeReleaseDate} value={this.state.onChangeReleaseDate}
       type="text" className="form-control" id="validationTooltip01"  required/>
    
     </div>
    
    </div> <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Update Genre</label>
       <input
        onChange={this.onChangeGenre} value={this.state.onChangeGenre}
        required className="form-control">
    </input>
    
     </div>
    
    </div> <div className="form-row">
     <div className="col-md-4 mb-3">
       <label >Update Budget</label>
       <input
       onChange={this.onChangeBudget} value={this.state.onChangeBudget}
       type="text" className="form-control" id="validationTooltip01"  required/>
    
     </div>
    
    </div>
    <button  className="btn btn-secondary" type="submit">Submit</button>
    </form>
      
        )
    }
}

export default UpdateMovie