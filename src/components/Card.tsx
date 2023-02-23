import React, { Component } from 'react'
import { Modal } from './Modal'

interface Movie{
    id?: number
    title:string
    year:number
    overview:string
    img:string
    handleDetail?: React.MouseEventHandler
    
}

type ModalState = {
    isModal: boolean
}
const IMG_URL = "https://image.tmdb.org/t/p/w500"
export class Card extends Component<Movie, ModalState> {
    state = {
        isModal: false
    }
    render() {
        const { isModal} = this.state 
        const { title, year, overview, img, handleDetail} = this.props
    return (
            <div className="card ml-6 bg-base-100 shadow-xl w-56 p-0 mt-5 mb-5">
                <figure className="h-26"><img className="h-full w-full rounded" src={IMG_URL + img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="h-20">
                    <h1 className="card-title text-md font-bold">{title}</h1>
                    </div>
                    <p className="text-slate-400 text-sm">{year}</p>
                <div className="card-actions justify-center mt-10 w-full">
                    <button className="btn w-full bg-green-400 border-0 hover:bg-green-600" onClick={handleDetail}>See Detail!</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Card