import { ErrorMessage, Field } from "formik";
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function EmployeeFeedbackForm() {
  const initialValues = {
    fullname: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string()
    .min(3,"Name must be 3 characters")
    .required("Full Name is required"),
    email: Yup.string()
    .email("Invalid email ")
    .required("Email is required"),
    department: Yup.string()
    .required("Department is required"),
    rating: Yup.number()
    .max(5, "Rating must be at most 5")
    .required("Rating is required"),
    feedback: Yup.string()
    .required("Feedback is required"),
  });

  



   
  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted Successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Employee Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Full Name: </label>
            <Field type="text" name="fullname" />
            <ErrorMessage name="fullname" component="div" className="error" />
          </div>

          <div>
            <label>Email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Department: </label>
            <Field as="select" name="department">
              <option value="">Select</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="CS">CS</option>
              <option values="AIDS">AIDS</option>
            </Field>
            <ErrorMessage name="department" component="div" className="error" />
          </div>

          <div>
            <label>Rating: </label>
            <Field type="number" name="rating"/>
            <ErrorMessage name="rating" component="div" className="error" />
          </div>

          <div>
           <label>Feedback: </label>
           <Field type="text" name="feedback"/>
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EmployeeFeedbackForm;