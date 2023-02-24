import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './page/home';
import Detail from './page/detail';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail' element={<Detail/>} />
            <Route path='/detail/:id' element={<Detail/>} />
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App


// interface State{
//   id:number
//   isDark: boolean
//   isOpen: boolean
//   isClose: boolean
//   isModal: boolean
//   data: [],
//   mainData: [],
//   movies:[],
//   count:number
// }
// class App extends Component<State> {
//   state ={
//     id: 0,
//     isDark: false, 
//     isOpen: false,
//     isModal: false,
//     data: [],
//     mainData: [],
//     movies:[],
//     count: 1
//   }
  // getNowPlayingMovies() {
  //   axios.get(`
  //   https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=1`)
  //   .then((response) => {
  //     console.log("data : ", response.data )
  //     response.data.results.map((item:any) => {
  //       console.log(item.id)
  //     })
  //     this.setState({ data : response.data.results })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

//   getPageNowPlayingMovies(page:number) {
//     axios.get(`
//     https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=${page}`)
//     .then((response) => {
//       console.log("data : ", response.data )
//       response.data.results.map((item:any) => {
//         console.log(item.title)
//       })
//       this.setState({ movies : response.data.results })
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }

//   nextPage = () => {
//     this.setState( {count: this.state.count + 1} )
//     this.getPageNowPlayingMovies(this.state.count)
//   }
//   prevPage = () => {
//     this.setState( {count: this.state.count - 1} ) 
//     this.getPageNowPlayingMovies(this.state.count)
//   }

//   async getDetailMovies(id: any) {
//     axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}&language=en-US&page=1/id=${id}`)
//     .then((response) => {
//       console.log("data : ", response.data.results.slice())
//       response.data.results.slice((item: any) => {
//         console.log(item)
//       })
//       this.setState({ mainData : response.data.results.slice()})
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }


//   showmodal = () => {
//     this.setState({ isOpen: true})
//   }
//   closeModal = () =>{
//     this.setState({ isOpen: false})
//   }

//   componentDidMount(): void {
//     this.getPageNowPlayingMovies(1)
//   }
  
//   render() {
//     const {isDark, isOpen, data, isModal, mainData, count, movies} = this.state
//     return (
//       <div className={`w-screen ${isDark ? `bg-neutral-800` : `bg-slate-100`}` }>
//         <Navbar 
//         handleOn={() => this.setState({ isDark:true })}
//         handleOf={() => this.setState({ isDark:false })}
//         />
//         <div className="mx-36 container justify-center w-5/6">
//                   <Modal
//                   id={mainData[0]}
//                   handleOpen={isOpen}
//                   handleClose={this.closeModal}
//                   >
//                     <h1>halo</h1>
//                   </Modal>

//         <div className="mt-20">
//             <div className="btn h-10 w-20"onClick={(this.prevPage)}>prev</div>
//             <div>Page : {count}</div>
//             <div className="btn h-10 w-20"onClick={(this.nextPage)}>next</div>

//             <h2 className='mb-10 font-semibold text-5xl'>Now Playing!!!</h2>
//             <div className="grid grid-cols-5 justify-center w-auto">
//               {
//                 movies.map((item: any, index:any) =>{
//                   return (
//                         <Card 
//                         key={index}
//                         id={item.id}
//                         title={item.original_title}
//                         year={item.release_date}
//                         overview={item.overview}
//                         img={item.poster_path}
//                         handleDetail={() => this.getDetailMovies(item.id)}
//                         />
//                   )
//                 })
//               }
//           </div>
//         </div>
//           <div className="mt-10">
//           </div>
//           <div className="mt-10">
//               <h2 className='ml-32 mb-10 font-semibold text-5xl'>Your favorite</h2>
//                 <div className='mx-60'>
//                   <div className="flex flex-col justify-center w-full">
//                     {
//                       Movie.map((item:any) => {
//                         return (
//                           <FavoritesCard
//                           key={item.id}
//                           title={item.title}
//                           type={item.type}
//                           year={item.rilis}
//                           genre={item.genre}
//                           sinopsis={item.sinopsis}
//                           img={item.img}
//                           />
//                         )
//                       })
//                     }
//                   </div>
//                 </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// // }

// export default App
