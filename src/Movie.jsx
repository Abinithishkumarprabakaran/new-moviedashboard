import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deleteButton, editButton }) {

    const styles = {
        // Conditional Stylings
        color: movie.rating > 8.5 ? "green" : "crimson" // Ternary Operator
    };

    // Managed State | Independent | Accelerator
    const [show, setShow] = useState(true);

    // Derived state | Dependent | Speedometer
    const summaryStyles = {
        display: show ? "block" : "none"
    };

    const navigate = useNavigate();
    return (
        <div className="movie-container">
            <Card>
                <CardMedia className="movie-poster" image={movie.poster} title={movie.name}/>
                <CardContent>
                    <div className="movie-specs">
                        <h2 className="movie-name">
                            {movie.name}
                            <IconButton 
                                color="primary"
                                aria-label="Toggle Summary" 
                                onClick={() => setShow(!show)}> 
                                {show ? <ExpandLessIcon />:<ExpandMoreIcon />} 
                            </IconButton>
                            <IconButton
                                color="primary"
                                onClick={() => navigate(`/movies/${id}`)}
                                aria-label="Movie Details">
                                    <InfoIcon />
                            </IconButton>
                        </h2>
                        
                        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
                    </div>
                    {/* <button onClick={() => setShow(!show)}>Toggle Summary</button> */}


                    {/* Conditional Stylings - only style updated */}
                    {/* <p style={summaryStyles} className="movie-summary">{movie.summary}</p> */}

                    {/* Conditional Rendering - Removed from DOM */}
                    {show ? <p className="movie-summary">{movie.summary}</p> : null}
                </CardContent>

                {/* Render Props */}
                <CardActions>
                    <Counter /> {editButton} {deleteButton}
                </CardActions>
            </Card>
        </div>
    );
}
