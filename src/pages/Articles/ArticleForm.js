import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as articleService from "../../services/articleService";


const initialFValues = {
    id: 0,
    title: '',
    text: '',
    categoryId: '',
    expirationDate: new Date(),
    isPermanent: true,
}

export default function ArticleForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        if ('text' in fieldValues)
            temp.text = fieldValues.text ? "" : "This field is required."
        if ('categoryId' in fieldValues)
            temp.category = fieldValues.categoryId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={9}>
                    <Controls.Input
                        name="title"
                        label="Title"
                        value={values.title}
                        rows={1}
                        onChange={handleInputChange}
                        error={errors.title}
                    />
                    <Controls.Input
                        name="text"
                        label="Text"
                        value={values.text}
                        rows={10}
                        onChange={handleInputChange}
                        error={errors.text}
                    />

                </Grid>
                <Grid item xs={3}>
                    <Controls.Select
                        name="categoryId"
                        label="Category"
                        value={values.categoryId}
                        onChange={handleInputChange}
                        options={articleService.getCategoryCollection()}
                        error={errors.categoryId}
                    />
                    <Controls.DatePicker
                        name="expirationDate"
                        label="Expiration Date"
                        value={values.expirationDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Article"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}