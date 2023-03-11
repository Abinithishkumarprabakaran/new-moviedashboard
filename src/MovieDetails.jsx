import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";

export function MovieDetails() {
	const {id} = useParams();

	// const movie = movieList[id]

	const [movie, setMovie] = useState([]);

    useEffect(() => {
      fetch(`https://63d75fb7afbba6b7c93beb15.mockapi.io/movies/${id}`)
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs));
    },[id])

	console.log(movie)

	const styles = {
		// Conditional Stylings
		color: movie.rating > 8.5 ? "green" : "crimson" // Ternary Operator
	};

  const navigate = useNavigate();

	return (
		<div>
			<iframe
					width="100%"
					height="650"
					src={movie.trailer}
					title="Tum Hi Ho | Aashiqui 2 | Full Video Song HD | Aditya Roy Kapur, Shraddha Kapoor | Music - Mithoon"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen></iframe>
			<div className="movie-details-container">
				<div className="movie-specs">
					<h2 className="movie-name">
						{movie.name}
					</h2>
					<p style={styles} className="movie-rating">⭐{movie.rating}</p>
				</div>
				<p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>Back</Button>
			</div>
		</div>
	);
}
