import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Addmovie({ movieList, setMovieList }) {

    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");

    const formValidationSchema = yup.object({
        name: yup
                .string()
                .required(),
        poster: yup
                .string()
                .required()
                .min(4)
                .url(),
        rating: yup
                .number()
                .required()
                .min(0)
                .max(10),

        summary: yup
                .string()
                .required()
                .min(20),
        // trailer: yup
        //         .string()
        //         .required()
        //         .min(4)
        //         .url()

      })

    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: { 
            name:"",
            poster:"",
            rating:"",
            summary :"",},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("Form Values", values)
        }
      });

    //   const addMovie = async (newMovie) => {
    //     await fetch()
    //   }

    return (
        <div className="add-movie-form">
            <TextField
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                 />
            {errors.name && touched.name ? errors.name: null}
            <TextField
                name="poster"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.poster}
                id="outlined-basic"
                label="Poster"
                variant="outlined"
                 />
            {errors.poster && touched.poster ? errors.poster: null}
            <TextField
                name="rating"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
                id="outlined-basic"
                label="Rating"
                variant="outlined"
                 />
            {errors.rating && touched.rating ? errors.rating: null}
            <TextField
                name="summary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.summary}
                id="outlined-basic"
                label="Summary"
                variant="outlined"
                 />
            {errors.summary && touched.summary ? errors.summary: null}

            <Button
                variant="contained"
                >
                Add Movie
            </Button>
        </div>
    );
}


// onClick={() => {
//     const newMovie = {
//         name: name,
//         poster: poster,
//         rating: rating,
//         summary: summary
//     };

//     console.log(newMovie.name);
//     { newMovie.name && newMovie.poster && newMovie.rating && newMovie.summary ? setMovieList([...movieList, newMovie]) : setMovieList([...movieList]); }
// }}