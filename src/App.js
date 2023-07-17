import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Card from './Components/Cards/Card';
import MovieList from './Components/MovieList/MovieList';
import MovieDetail from './Pages/MovieDetails/MovieDetail';
function App() {
  return (
    <div className="App">
      
     <Router>
       <Header/> 
       <Routes>
        <Route index element={<Home/>}></Route>
        <Route path = "movie/:id" element = {<MovieDetail/>}></Route>
        <Route path = "movies/:type" element = {<MovieList/>}></Route>
        <Route path = "*" element = {<h1>Error page</h1>}></Route>

       </Routes>
     </Router>
     
    </div>
  ); 
}

export default App;
