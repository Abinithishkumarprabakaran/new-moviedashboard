import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Addmovie({ movieList, setMovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            summary: summary, 
            rating: rating,
            trailer: trailer
        };
        console.log(newMovie)

        fetch("https://63d75fb7afbba6b7c93beb15.mockapi.io/movies", {
            method: "POST",
            BODY: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    // const formValidationSchema = yup.object({
    //     name: yup
    //             .string()
    //             .required(),
    //     poster: yup
    //             .string()
    //             .required()
    //             .min(4)
    //             .url(),
    //     rating: yup
    //             .number()
    //             .required()
    //             .min(0)
    //             .max(10),

    //     summary: yup
    //             .string()
    //             .required()
    //             .min(20),
    //     trailer: yup
    //             .string()
    //             .required()
    //             .min(4)
    //             .url()

    //   })

    // const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    //     initialValues: { 
    //         name:"",
    //         poster:"",
    //         rating:"",
    //         summary :"",
    //         trailer: ""},
    //     validationSchema: formValidationSchema,
    //     onSubmit: (values) => {
    //         console.log("Form Values", values)
    //     }
    //   });

    // return (
    //     <form onSubmit={handleSubmit} className="add-movie-form">
    //         <TextField
    //             name="name"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.name}
    //             id="outlined-basic"
    //             label="Name"
    //             variant="outlined"
    //              />
    //         {errors.name && touched.name ? errors.name: null}
    //         <TextField
    //             name="poster"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.poster}
    //             id="outlined-basic"
    //             label="Poster"
    //             variant="outlined"
    //              />
    //         {errors.poster && touched.poster ? errors.poster: null}
    //         <TextField
    //             name="rating"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.rating}
    //             id="outlined-basic"
    //             label="Rating"
    //             variant="outlined"
    //              />
    //         {errors.rating && touched.rating ? errors.rating: null}
    //         <TextField
    //             name="summary"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.summary}
    //             id="outlined-basic"
    //             label="Summary"
    //             variant="outlined"
    //              />
    //         {errors.summary && touched.summary ? errors.summary: null}
    //         <TextField
    //             name="trailer"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.trailer}
    //             id="outlined-basic"
    //             label="Trailer"
    //             variant="outlined"
    //              />
    //         {errors.trailer && touched.trailer ? errors.trailer: null}

    //         <Button variant="contained"
    //                 onClick={addMovie()}>
    //             Add Movie
    //         </Button>
    //     </form>
    // );


        return (
        <div className="add-movie-form">
            <TextField
                onChange={(event) => setName(event.target.value)}
                label="Name"
                variant="outlined"
                 />
            {errors.name && touched.name ? errors.name: null}
            <TextField
                onChange={(event) => setPoster(event.target.value)}
                label="Poster"
                variant="outlined"
                 />
            {errors.poster && touched.poster ? errors.poster: null}
            <TextField
                onChange={(event) => setRating(event.target.value)}
                label="Rating"
                variant="outlined"
                 />
            {errors.rating && touched.rating ? errors.rating: null}
            <TextField
                onChange={(event) => setSummary(event.target.value)}
                label="Summary"
                variant="outlined"
                 />
            {errors.summary && touched.summary ? errors.summary: null}
            <TextField
                onChange={(event) => setTrailer(event.target.value)}
                label="Trailer"
                variant="outlined"
                 />
            {errors.trailer && touched.trailer ? errors.trailer: null}

            <Button variant="contained" onClick={addMovie()}>
                Add Movie
            </Button>
        </div>
        );
}