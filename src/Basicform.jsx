import { FormatLineSpacing } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
          .string()
          .required()
          .min(12, "Need a bigger email"),
  password: yup
          .string()
          .required()
          .min(8, "Need a bigger password")
          .max(12, "8 to 12 characters only")
})

export function Basicform() {
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: formValidationSchema,
    onSubmit: (values) => console.log("Form Values", values)
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        type="email"
        placeholder="email" 
        />
        {errors.email && touched.email ? errors.email: null}
      <input
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="password" 
        />
        {errors.password && touched.password ? errors.password: null}
      <button type="submit">Submit</button>
      <br />
      {/* Values
      <pre>{JSON.stringify(formik.values)}</pre>
      Error
      <pre>{JSON.stringify(formik.errors)}</pre>
      Touched
      <pre>{JSON.stringify(formik.touched)}</pre> */}
    </form>
  );
}
