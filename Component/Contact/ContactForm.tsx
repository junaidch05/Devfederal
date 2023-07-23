"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const notify = () => {
    toast.success('Your message has been sent. Thank you.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });



  };
  const [err, setErr] = useState();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("required"),
      last_name: Yup.string().required("required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: () => {

      sendRequest().then(()=>notify()).finally(()=>formik.resetForm())

    },
  });

  const sendRequest = async () => {
    
    const res = await axios
      .post("http://localhost/api/post", {
        first_name: formik.values.first_name,
        last_name:formik.values.last_name,
        email:formik.values.email,
        message:formik.values.message,
      })
      .catch((error) => {
        setErr(error.response.data.message) 
      })

     
  };

  return (
    <section className="form-holder">
      <div className="form-box">
        <h2>Develop your business with us</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstname">
            <h3>
              First Name <span>*</span>
            </h3>
          </label>
          <input
            type="text"
            name="first_name"
            id="firstname"
            placeholder="first name"
            className="input"
            autoComplete="on"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.first_name && formik.errors.first_name ?<h4 className='error'>{formik.errors.first_name}</h4>:null}
          <label htmlFor="lastname">
            <h3>
              Last Name <span>*</span>
            </h3>
          </label>
          <input
            type="text"
            name="last_name"
            id="lastname"
            placeholder="last name"
            className="input"
            autoComplete="on"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.last_name && formik.errors.last_name ?<h4 className='error'>{formik.errors.last_name}</h4>:null}

          <label htmlFor="email">
            <h3>
              Email <span>*</span>
            </h3>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="input"
            autoComplete="on"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email ?<h4 className='error'>{formik.errors.email}</h4>:null}
          <label htmlFor="msg">
            <h3>
              message <span>*</span>
            </h3>
          </label>
          <textarea
            name="message"
            id="msg"
            placeholder="write your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
           {formik.touched.message && formik.errors.message ?<h4 className='error'>{formik.errors.message}</h4>:null}
           {err?<h4 className='error'>{err}</h4>:null}
          <input type="submit" value="Submit" className="btn submit" />
         
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}
