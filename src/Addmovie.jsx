import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Addmovie() {

    const [name, setName] = useState();
    const [poster, setPoster] = useState();
    const [rating, setRating] = useState();
    const [summary, setSummary] = useState();
    const [trailer, setTrailer] = useState();

    const navigate = useNavigate();

    const addMovie = async () => {
        const newMovie = {
            name: name,
            poster: poster,
            summary: summary, 
            rating: rating,
            trailer: trailer
        };
        
        await fetch("https://63d75fb7afbba6b7c93beb15.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate("/movies")
    };

    return (
    <div className="add-movie-form">
        <TextField
            onChange={(event) => setName(event.target.value)}
            label="Name"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setPoster(event.target.value)}
            label="Poster"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setRating(event.target.value)}
            label="Rating"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setSummary(event.target.value)}
            label="Summary"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setTrailer(event.target.value)}
            label="Trailer"
            variant="outlined"
                />

        <Button variant="contained" onClick={addMovie}>
            Add Movie
        </Button>
    </div>
    );
}