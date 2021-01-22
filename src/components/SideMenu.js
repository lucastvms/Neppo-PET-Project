import React from "react";
import {withStyles} from "@material-ui/core";
import image from "../images/logo-neppo.png";
// import {makeStyles} from "@material-ui/core";

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '240px',
        height: '100%',
        backgroundColor: '#0F71B6',
    }
}


const SideMenu = (props) => {

    const {classes} = props;

    return (
        <div className={classes.sideMenu}>
        </div>
    );
}

export default withStyles(style)(SideMenu);
