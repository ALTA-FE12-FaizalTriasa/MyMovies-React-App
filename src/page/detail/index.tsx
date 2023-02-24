import React, { Component } from 'react'
import { withRouter } from '../../withRouter'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import FavoritesCard from '../../components/FavoritesCard'

interface DetailProps{
  location:any
  navigate:any
  params:any
}
interface DetailState{
  isDark:boolean
  data: any
}

const IMG_URL = "https://image.tmdb.org/t/p/w500"
export class Detail extends Component<DetailProps, DetailState> {
  
  state = {
    data: [],
    isDark: false
  }

  async getDetailMovie(id:any){
    axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US`)
    .then((response) => {
        console.log("data : ", response.data)
        this.setState({data: response.data})
        })
        .catch((error) => {
        console.log(error)
        })
    }
  

  componentDidMount(): void {
      const idDetail = this.props.params.id
      console.log("id : ", this.props.params.id)
      this.getDetailMovie(idDetail)
  }
  
  
  toHomePage(){
    this.props.navigate("/")
  }

  render() {
    const {data, isDark} = this.state
    return (
      <div className={`w-screen h-screen ${isDark ? `bg-neutral-800` : `bg-slate-100`}`}>
          <Navbar 
          handleOn={() => this.setState({ isDark: true })}
          handleOf={() => this.setState({ isDark: false })}
          />
          <img className='w-screen h-4/6' src={IMG_URL + data.backdrop_path} alt="" />
          <div className="w-screen h-4/6 bg-slate-800 fixed top-10 mt-8 opacity-80">
              <div className="container mx-auto mt-10 h-5/6 opacity-100">
                <div className="flex flex-cols-3 mt-20">
                  <div className="bg-black w-96 rounded-xl">
                    <img className='rounded-xl shadow-xl ' src={IMG_URL + data.poster_path} alt="" srcset="" />
                  </div>
                  <div className=" ml-5 col-span-2 h- w-full text-neutral-50">
                    <div className="title mx-5 mt-2 font-bold text-4xl">
                          {data.original_title}
                    </div>
                    <div className="date mx-5 text-xl font-semibold">
                          {data.release_date} | {data.runtime} Minutes
                    </div>
                    <div className="date mt-2 mx-5 text-xl font-semibold">
                          Score {data.vote_average} from {data.vote_count} vote
                    </div>
                    <div className="date mt-5 mx-5 text-2xl italic font-bold">
                          {data.tagline}
                    </div>
                    <div className="date mt-1 mx-5 text-2xl font-bold">
                          Overview
                    </div>
                    <div className="date mx-5 text-xl">
                          {data.overview}
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>    
    )
  }
}

export default withRouter(Detail)