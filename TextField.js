import React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldComponent = (props) => {

    return (
        <TextField 
        id="standard-textarea"
          label={props.text}
          multiline
          margin="normal">
        </TextField>
    )
}

export default TextFieldComponent;
