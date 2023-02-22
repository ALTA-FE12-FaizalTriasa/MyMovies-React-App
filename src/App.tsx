import React, { Component } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { Card } from './components/Card'
import { Modal } from './components/Modal'
import Movie from "../src/dummy/Movie.json"
import { FavoritesCard } from "./components/FavoritesCard";
import axios from 'axios';


interface State{
  id:number
  isDark: boolean
  isOpen: boolean
  isClose: boolean
  isModal: boolean
  data: [],
  mainData: []
}
class App extends Component<State> {
  state ={
    id: 0,
    isDark: false, 
    isOpen: false,
    isModal: false,
    data: [],
    mainData: []
  }
  getNowPlayingMovies() {
    axios.get(`
    https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=1`)
    .then((response) => {
      console.log("data : ", response.data )
      response.data.results.map((item:any) => {
        console.log(item.id)
      })
      this.setState({ data : response.data.results })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async getDetailMovies(id: any) {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&${id}`)
    .then((response) => {
      console.log("data : ", response.data.results.slice())
      response.data.results.slice((item: any) => {
        console.log(item)
      })
      this.setState({ mainData : response.data.results.slice()})
    })
    .catch((error) => {
      console.log(error)
    })
  }


  showmodal = () => {
    this.setState({ isOpen: true})
  }
  closeModal = () =>{
    this.setState({ isOpen: false})
  }

  componentDidMount(): void {
    this.getNowPlayingMovies()
  }
  
  render() {
    const {isDark, isOpen, data, isModal, mainData} = this.state
    return (
      <div className={`w-screen ${isDark ? `bg-neutral-800` : `bg-slate-100`}` }>
        <Navbar 
        handleOn={() => this.setState({ isDark:true })}
        handleOf={() => this.setState({ isDark:false })}
        />
        <div className="mx-36 container justify-center w-5/6">
                  <Modal
                  id={mainData[0]}
                  handleOpen={isOpen}
                  handleClose={this.closeModal}
                  >
                    <h1>halo</h1>
                  </Modal>

        <div className="mt-20">
            <h2 className='mb-10 font-semibold text-5xl'>Now Playing!!!</h2>
            <div className="grid grid-cols-5 justify-center w-auto">
              {
                data.map((item: any, index:any) =>{
                  return (
                        <Card 
                        key={index}
                        id={item.id}
                        title={item.original_title}
                        year={item.release_date}
                        overview={item.overview}
                        img={item.poster_path}
                        handleDetail={() => this.getDetailMovies(item.id)}
                        />
                  )
                })
              }
          </div>
        </div>
          <div className="mt-10">
          </div>
          <div className="mt-10">
              <h2 className='ml-32 mb-10 font-semibold text-5xl'>Your favorite</h2>
                <div className='mx-60'>
                  <div className="flex flex-col justify-center w-full">
                    {
                      Movie.map((item:any) => {
                        return (
                          <FavoritesCard
                          key={item.id}
                          title={item.title}
                          type={item.type}
                          year={item.rilis}
                          genre={item.genre}
                          sinopsis={item.sinopsis}
                          img={item.img}
                          />
                        )
                      })
                    }
                  </div>
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
