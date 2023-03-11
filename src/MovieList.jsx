import { Movie } from "./Movie";
import { Addmovie } from "./Addmovie";
import { IconButton } from "@mui/material";
import { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList({}) {

  // const deleteMovie = async (id) => {};
  
  const [movieList, setMovieList] = useState([]);    // map only work for an object!..

  const getMovies = () => {
    fetch("https://63d75fb7afbba6b7c93beb15.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(),[])

  const deleteMovie = (id) => {
    console.log("Deleting Movie", id)
    fetch(`https://63d75fb7afbba6b7c93beb15.mockapi.io/movies/${id}`, {method: "DELETE"})
      .then(()=>getMovies());
  }
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
            key={mv.id} 
            movie={mv} 
            id={mv.id}
            deleteButton={
              <IconButton 
                sx={{ marginLeft:"auto" }}
                color="error"
                onClick={() => {deleteMovie(mv.id)}}>
                <DeleteIcon />
              </IconButton>}
          
          // editButton = {
          // <IconButton
          //     sx={{ marginLeft:"auto" }}
          //     >
          //         <EditIcon/>
          //     </IconButton>
          // }
          />
        ))}
      </div>
    </div>
  );
}
