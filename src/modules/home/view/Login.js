import React, { useState } from 'react';
import axios from "axios";

function Login(props) {

    const [pesan, setPesan] = useState("");
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        axios.post(`https://api.kampusmerdeka.kemdikbud.go.id/user/auth/login/mbkm`, {
            "email": event.target.email.value,
            "password": event.target.password.value
        })
            .then(res => {
                if (res.data.data != null) {
                    props.setToken(res.data.data.access_token);
                    props.setID(event.target.id.value);
                }
            }).catch(error => {
                if (error.response) {

                    setPesan(error.response.data.error.message);

                }
            })
    };

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid"
                            alt="Phone image"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example133">
                                    ID Kegiatan
                                </label>
                                <input
                                    type="text"
                                    id="form1Example133"
                                    className="form-control form-control-lg"
                                    name='id'
                                    required={true}
                                />
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example13">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="form1Example13"
                                    className="form-control form-control-lg"
                                    name='email'
                                    required={true}
                                />
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form1Example23">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="form1Example23"
                                    className="form-control form-control-lg"
                                    name='password'
                                    required={true}
                                />
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Sign in
                            </button>
                        </form>
                        <br></br>
                        <p className="fw-2 text-danger">
                            {pesan}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;