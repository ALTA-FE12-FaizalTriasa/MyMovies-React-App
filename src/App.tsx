import React, { Component } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { Card } from './components/Card'
import { Modal } from './components/Modal'
import Movie from "../src/dummy/Movie.json"
import { FavoritesCard } from "./components/FavoritesCard";

interface State{
  isDark: boolean
  isOpen: boolean
}

class App extends Component<State> {
  state ={
    isDark: false, 
    isOpen: false
  }
  render() {
    const {isDark, isOpen} = this.state
    return (
      <div className={`w-screen ${isDark ? `bg-black` : `bg-slate-200`}` }>
        <Navbar 
        handleOn={() => this.setState({ isDark:true })}
        handleOf={() => this.setState({ isDark:false })}
        />
        <div className="mt-20">
            <h2 className='ml-32 mb-10 font-semibold text-5xl'>Now Playing!!!</h2>
            <div className="flex flex-row justify-center space-x-20 w-auto">
              {
                Movie.map((item: any) =>{
                  return(
                    <Card 
                    id={item.id}
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
          <div className="mt-10">
              <h2 className='ml-32 mb-10 font-semibold text-5xl'>Your favorite</h2>
                <div className='mx-60'>
                  <div className="flex flex-col justify-center w-full">
                    {
                      Movie.map((item:any) => {
                        return (
                          <FavoritesCard
                          id={item.id}
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
