import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => {
    const handleClick = () => {
        console.log(props.text)
    };

    return (
        <Button onClick={handleClick} color={props.color} variant="contained">
            {props.text}
        </Button>
    )
}

export default ButtonComponent;
