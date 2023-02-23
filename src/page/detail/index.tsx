import React, { Component } from 'react'
import { withRouter } from '../../withRouter'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import FavoritesCard from '../../components/FavoritesCard'

interface DetailProps{
  location:any
  navigate:any
}
interface DetailState{
  data: any
}

const IMG_URL = "https://image.tmdb.org/t/p/w500"
export class Detail extends Component<DetailState> {
  
  state = {
    data: []
  }

  async getDetailMovie(){
    axios.get(`
    https://api.themoviedb.org/3/movie/640146?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US`)
    .then((response) => {
        console.log("data : ", response.data)
        this.setState({data: response.data})
        })
        .catch((error) => {
        console.log(error)
        })
    }

  componentDidMount(): void {
    this.getDetailMovie()
  }
  
  
  // toHomePage(){
  //   this.props.navigate("/")
  // }
  render() {
    // const {location} = this.props
    const {data} = this.state
    return (
      <div className="w-screen h-screen bg-slate-100">
          <Navbar/>
          <div className="container mt-10 mx-40 bg-white content-center shadow-md rounded-lg">
            <div className="card card-side bg-base-100 shadow-xl p-0">
              <figure className='w-3/6'><img src={IMG_URL + data.poster_path} alt="Movie"/></figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-4xl">{data.title}</h2>
                <div className="font-md text-l text-neutral-500">
                  {data.release_date} . {data.runtime} Minutes
                </div>
                <div className="font-bold italic text-xl text-neutral-500">
                  {data.tagline}
                </div>
                <div className="font-bold text-2xl text-neutral-500">
                  Overview
                </div>
                <div className="font-md text-xl text-neutral-500">
                  {data.overview}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">SEE TRAILER !!!</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Detail)