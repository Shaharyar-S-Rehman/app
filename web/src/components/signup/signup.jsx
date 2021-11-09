import { useState, useEffect, useRef } from "react"
import axios from 'axios';

import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { baseUrl } from "./../../core"
import {useHistory} from "react-router-dom"

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 8 characters length')
        .max(10, 'No more then 10')
        .required('Password is required'),
    address: yup
        .string('Enter your Address')
        .required('Address is required'),
    number: yup
        .string('Enter your number')
        .min(11, 'Number should be of minimum 11 characters length')
        .max(15, 'No more then 10')
        .required('Number is required'),
});

function Signup() {
    let history = useHistory();
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
            number: '',
        },
        onSubmit: function (values) {
            axios.post(`${baseUrl}/api/v1/signup`, {
                name: values.name,
                email: values.email,
                password: values.password,
                address: values.address,
                number: values.number,
            })
                .then((res) => {
                    console.log("res: ", res.data);
                })
                history.push("/login")
        }
    });

    return (
        <div style={{ margin: "0 20% 0 20%" }}>
            <h1 style={{ textAlign: "center", color: "black", textDecoration: "underline", textDecorationColor: "brown" }}>SignUp</h1>

            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>

                    <TextField
                        color="primary"
                        id="standard-basic"
                        label="Full Name"
                        variant="standard"

                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}

                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        color="primary"
                        id="standard-basic"
                        label="Email"
                        variant="standard"

                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}

                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        color="primary"
                        id="filled-basic"
                        label="Password"
                        variant="standard"
                        type="password"

                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}

                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        color="primary"
                        id="filled-basic"
                        label="Address"
                        variant="standard"
                        type="address"

                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}

                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    /><TextField
                        color="primary"
                        id="filled-basic"
                        label="Number"
                        variant="standard"
                        type="number"

                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}

                        error={formik.touched.number && Boolean(formik.errors.number)}
                        helperText={formik.touched.number && formik.errors.number}
                    />
                    <br />
                    <Button style={{ width: "20%", margin: 'auto' }} variant="contained" color="primary" type="submit">Signup</Button>
                </Stack>

            </form>

        </div>
    );
}
export default Signup;