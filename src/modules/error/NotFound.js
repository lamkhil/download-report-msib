import React from 'react';
import { NavLink } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="container vh-100">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="error-template text-center">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div className="error-details py-4">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-actions">
                        <NavLink to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                            Take Me Home
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;