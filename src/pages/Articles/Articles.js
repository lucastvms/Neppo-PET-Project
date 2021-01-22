import React from "react";
import ArticleForm from "./ArticleForm";
import FaceIcon from "@material-ui/icons/Face";
import PageHeader from "../../components/PageHeader";
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    }
}))

function Articles() {
    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Article Editor"
                subTitle="Form to edit article with validation"
                icon={<FaceIcon fontSize="large"/>}
            />
            <Paper className={classes.pageContent}>
                <ArticleForm />
            </Paper>
        </>
    );
}

export default Articles;