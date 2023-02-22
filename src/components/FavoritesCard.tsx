import React, { Component } from 'react'

interface FavoriteMovies{
    title: string
    type: string
    year: number
    genre: []
    sinopsis: string
    img: string
}

export class FavoritesCard extends Component<FavoriteMovies> {
  render() {
    const { title, type, year, genre, sinopsis, img } = this.props
    return (
        <div className="card card-side bg-base-100 shadow-xl h-96 mb-10 justify-center p-0">
        <figure className='w-5/6'><img className='h-full' src={img} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl">{title}</h2>
            <p className="text-slate-400 text-md">{type}</p>
            <p className="text-slate-400 text-md">{genre}</p>
            <p className="text-slate-400 text-xl">Year : {year}</p>
            <p className='text-slate-600 text-xl'>{sinopsis}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
            </div>
        </div>
        </div>
    )
  }
}

export default FavoritesCard