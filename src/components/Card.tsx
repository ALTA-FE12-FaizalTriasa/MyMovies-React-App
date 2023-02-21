import React, { Component } from 'react'
import { Modal } from './Modal'

interface Movie{
    id:any
    title:string
    type:string
    year:number
    sinopsis:string
    img:string
    genre:[]
}

type ModalState = {
    isOpen: boolean
    isModal: boolean
}

export class Card extends Component<Movie, ModalState> {
    state = {
        isOpen: false,
        isModal: false
    }
    showModal = () => {
        this.setState({ isOpen: true });
    };
    
    closeModal = () => {
        this.setState({ isOpen: false });
    };


    render() {
        const {isOpen, isModal} = this.state 
        const {id, title, type, year, sinopsis, genre, img} = this.props
    return (
            <div id={id} className="card bg-base-100 shadow-xl w-1/4 p-0">
                <figure className="h-4/5"><img className="h-full w-full rounded" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-3xl">{title}</h1>
                    <p className="text-slate-400 text-md">{type}</p>
                    <p className="text-slate-400 text-xl">Year : {year}</p>
                    <Modal id="detail"
                        handleOpen={isModal}
                        handleClose={() => this.setState({isModal: false})}>
                            <div className="h-96">
                                <p className="text-slate-400 text-md">genre : {genre}</p>
                                <p className="text-slate-600 text-md">Sinopsis : {sinopsis}</p>
                            </div>
                    </Modal>
                <div className="card-actions justify-center mt-10 w-full">
                    <button className="btn w-full bg-green-400 border-0 hover:bg-green-600" onClick={() => this.setState({ isModal:true })}>See Detail!</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Card