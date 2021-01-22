import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root, & .MuiSelect-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function useForm(initialFieldValues) {

    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = (e) => {
        const {name, values} = e.target;
        setValues({
            ...values,
            [name]: values
        });
    }

    const handleCheckChange = (e) => {
        const {name, checked} = e.target;
        setValues({
            ...values,
            [name]: checked
        });
    }

    return {
        values,
        setValues,
        handleInputChange,
        handleCheckChange
    }
}

export function Form(props) {

    const classes = useStyles();
    return (
        <form className = {classes.root} autoComplete="off">
            {props.children}
        </form>
    );
}

