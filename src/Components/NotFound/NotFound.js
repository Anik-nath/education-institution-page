import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height : "100vh"}} className="bg-dark text-white py-5">
            <h1 className="display-1 bolder">OOPs!</h1>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link to="/home">
                <Button variant="info">Back To School</Button>
            </Link>
        </div>
    );
};

export default NotFound;