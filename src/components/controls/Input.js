import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, rows, error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            rows={rows}
            multiline={true}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}