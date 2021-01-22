import React from "react";
import {FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Checkbox} from "@material-ui/core";
import {useForm, Form} from "../../components/useForm";
import * as articleService from "../../services/articleService";


const initialFieldValues = {
    id: 0,
    title: '',
    text: '',
    author: '',
    category: '',
    date: new Date(),
    isPermanent: false
}

function ArticleForm() {

    const {
        values,
        setValues,
        handleInputChange,
        handleCheckChange
    } = useForm(initialFieldValues);

    const catOptions = articleService.getCategoryCollection();


    return (
        <Form>
            <Grid container>
                <Grid item xs={9}>
                    <TextField
                        variant="outlined"
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        multiline={true}
                        rows={10}
                        name="text"
                        variant="outlined"
                        label="Text"
                        value={values.text}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Author"
                        name="author"
                        value={values.author}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={3}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        variant="outlined"
                        name="category"
                        label="Category"
                        value={values.category}
                        onChange={handleInputChange}
                    >
                        <MenuItem value={0}>General</MenuItem>
                        {
                            catOptions.map(
                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                            )
                        }
                    </Select>

                    <FormControl>
                        <FormControlLabel
                            control={<Checkbox
                                name="isPermanent"
                                color="primary"
                                checked={values.isPermanent}
                                onChange={handleCheckChange}
                            />}
                            label="Permanent Article"/>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    );
}

export default ArticleForm;