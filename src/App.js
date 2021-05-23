import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { moviedata } from "./data";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movielist/MovieList";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieCardDetails from "./components/MovieCardDetails/MovieCardDetails";
import MovieCard from "./components/moviecard/MovieCard";
import Footer from "./components/Footer/Footer";






    
  

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App">
      <Router>
    
      <>  
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} />
    <Route path="/" exact render={() =>   <MovieList
      
      movielist={movielist.filter((movie) =>
        movie.title.trim().toLowerCase().includes(title.trim().toLowerCase()) && movie.rate>=rate
      )}
    />}
    />
      <AddMovie handleAdd = {handleAdd} /> 
  
    
    
    <Route
            path="/MovieCardDetails/:id"
            render={(props) => <MovieCardDetails {...props} movieList={movielist} exact/>}
          />
    
 
    </>
    <Route
    path="/"
    
    />
  </Router>
  

  
  <Footer/>
    </div>
    
    
  
  );
}

export default App;
