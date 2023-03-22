import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js"

// export function Addmovie() {

//     const [name, setName] = useState();
//     const [poster, setPoster] = useState();
//     const [rating, setRating] = useState();
//     const [summary, setSummary] = useState();
//     const [trailer, setTrailer] = useState();

//     const navigate = useNavigate();

//     const addMovie = async () => {
//         const newMovie = {
//             name: name,
//             poster: poster,
//             summary: summary, 
//             rating: rating,
//             trailer: trailer
//         };
        
//         await fetch(`${API}/movies`, {
//             method: "POST",
//             body: JSON.stringify(newMovie),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         navigate("/movies")
//     };

//     return (
//     <div className="add-movie-form">
//         <TextField
//             onChange={(event) => setName(event.target.value)}
//             label="Name"
//             variant="outlined"
//                 />
//         <TextField
//             onChange={(event) => setPoster(event.target.value)}
//             label="Poster"
//             variant="outlined"
//                 />
//         <TextField
//             onChange={(event) => setRating(event.target.value)}
//             label="Rating"
//             variant="outlined"
//                 />
//         <TextField
//             onChange={(event) => setSummary(event.target.value)}
//             label="Summary"
//             variant="outlined"
//                 />
//         <TextField
//             onChange={(event) => setTrailer(event.target.value)}
//             label="Trailer"
//             variant="outlined"
//                 />

//         <Button variant="contained" onClick={addMovie}>
//             Add Movie
//         </Button>
//     </div>
//     );
// }

const formValidationSchema = yup.object({
    name: yup
            .string()
            .required(),
    poster: yup
            .string()
            .required()
            .min(4).url(),
    rating: yup
            .number()
            .required()
            .min(0)
            .max(10),
    summary: yup
            .string()
            .required()
            .min(20),
    trailer: yup
            .string()
            .required()
            .min(4)
            .url(),
  })

export function Addmovie() {

    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: { 
            name: '', 
            poster: '',
            rating: '',
            summary: '',
            trailer: '' },
        validationSchema: formValidationSchema,
        onSubmit: (newMov) => {
            let newMovie = []
            newMovie.push(newMov)
            addMovie(newMovie)
        }
      });

    const navigate = useNavigate();

    const addMovie = async (newMovie) => {
    
        await fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate("/movies")
    };

    return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
        <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Name"
            variant="outlined"
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name: null}
            />
        {/* {errors.name && touched.name ? errors.name: null} */}

        <TextField
            name="poster"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster}
            label="Poster"
            variant="outlined"
            error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster: null}
            />
        {/* {errors.poster && touched.poster ? errors.poster: null} */}
        <TextField
            name="rating"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rating}
            label="Rating"
            variant="outlined"
            error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating: null}
            />
        {/* {errors.rating && touched.rating ? errors.rating: null} */}
        <TextField
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.summary}
            label="Summary"
            variant="outlined"
            error={errors.summary && touched.summary}
            helperText={errors.summary && touched.summary ? errors.summary: null}
            />
        {/* {errors.summary && touched.summary ? errors.summary: null} */}
        <TextField
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
            label="Trailer"
            variant="outlined"
            error={errors.trailer && touched.trailer}
            helperText={errors.trailer && touched.trailer ? errors.trailer: null}
            />
        {/* {errors.trailer && touched.trailer ? errors.trailer: null} */}

        <Button type="submit" variant="contained">
            Add Movie
        </Button>
    </form>
    );
}