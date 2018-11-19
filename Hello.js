import React from 'react';
import Button from '@material-ui/core/Button';

function hi() {
        return (
            <Button variant="contained" color="primary" onClick={hiOnClick}>
                hello
            </Button>
        )
}

function hiOnClick(){
    console.log("hi");
}
export default hi;