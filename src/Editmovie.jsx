import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

export function Editmovie() {

  const {id} = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://63d75fb7afbba6b7c93beb15.mockapi.io/movies/${id}`, {method: "GET"})
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  },[id])

  return movie ? <EditMovieForm movie={movie} id={id} /> : <h2>Loading...</h2>;
}


function EditMovieForm({ movie, id }) {

  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: { 
        name: `${movie.name}`, 
        poster: `${movie.poster}`,
        rating: `${movie.rating}`,
        summary: `${movie.summary}`,
        trailer: `${movie.trailer}` },
    validationSchema: formValidationSchema,
    onSubmit: (editedMovie) => {
        // console.log("Form Values", editedMovie)
        updatedMovie(editedMovie)
    }
  });

const navigate = useNavigate();

const updatedMovie = async (editedMovie) => {

    await fetch(`https://63d75fb7afbba6b7c93beb15.mockapi.io/movies/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedMovie),
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

    <Button type="submit" variant="contained" color="success">
        Save
    </Button>
</form>
);
}