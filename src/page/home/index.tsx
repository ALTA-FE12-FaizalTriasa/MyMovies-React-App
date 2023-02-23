import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from '../../withRouter'
import {Navbar} from '../../components/Navbar'
import {Card} from '../../components/Card'


interface HomeProps{
    navigate:any
}
interface HomeState{
    id: number
    isDark: boolean
    isOpen: boolean
    isClose: boolean
    data: []
    mainData: []
    countPage: number
}

export class Home extends Component<HomeProps, HomeState> {
    
    state = {
        id: 0,
        isDark: false,
        isOpen: false,
        data: [],
        maindata: [],
        countPage: 1
    }

    async getNowPlayingMovie(id:any){
        axios.get(`
        https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=${id}`)
        .then((responese) => {
            responese.data.results.map((item:any) => {
                console.log(item.id)
            })
            this.setState({data: responese.data.results })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    componentDidMount(): void {
        this.getNowPlayingMovie(1)
    }
    nextPage = () => {
        this.setState( {countPage: this.state.countPage + 1} )
        this.getNowPlayingMovie(this.state.countPage)
    }
    prevPage = () => {
        this.setState( {countPage: this.state.countPage - 1} ) 
        this.getNowPlayingMovie(this.state.countPage)
    }
    handleToPageDetail(){
        this.props.navigate('/detail')
    }
    

    render() {
        const {navigate} = this.props
        const {isDark,isOpen, data, maindata, countPage} = this.state
        return (
            <div className={`w-screen ${isDark ? 'bg-neutral-800' : `bg-slate-100`}`}>
                <Navbar 
                    handleOn={() => this.setState({ isDark: true })}
                    handleOf={() => this.setState({ isDark: false })}
                />
                <div className="container mx-36 justify-center w-5/6">
                    <div className="mt-10 mb-10">
                        <div className="mb-10 font-semibold text-5xl text-neutral-800">
                            NOW PLAYING!!!
                        </div>
                        <div className="flex flex-row space-x-10">
                            <div>
                            <div className="btn h-10 w-40 border-0 bg-slate-400"onClick={(this.prevPage)}>prev</div>
                                <div className='mb-5 mt-5 mx-12'>Page : {countPage}</div>
                                <div className="btn h-10 w-40 border-0 bg-slate-400"onClick={(this.nextPage)}>next</div>
                            </div>
                                <button  onClick={() => this.handleToPageDetail()}></button>
                            <div className="col-span-2 border-1 w-full h-full rounded-lg shadow-md h-96 bg-white grid grid-cols-4 content-center">
                                {
                                    data.map((item:any,index:number) => {
                                        return(
                                            <Card 
                                                key={index}
                                                id={item.id}
                                                title={item.original_title}
                                                year={item.release_date}
                                                overview={item.overview}
                                                img={item.poster_path}
                                                handleDetail={() => this.handleToPageDetail()}
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

export default withRouter(Home)