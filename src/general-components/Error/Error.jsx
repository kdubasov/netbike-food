import React from 'react';
import {Alert} from "react-bootstrap";

const Error = ({error}) => {
    return (
        <Alert
            style={{margin:"1em 0 -1em",width:"100%",textAlign:"center"}}
            variant={'danger'}
        >
            {error}
        </Alert>
    );
};

export default Error;