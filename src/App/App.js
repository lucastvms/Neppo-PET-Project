import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "../components/Header";
import logoNeppo from "../images/logo-neppo.png"
import Articles from "../pages/Articles/Articles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        },
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundImage: `url(${logoNeppo})`,
                    backgroundPosition:'center bottom',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat'
                },
            },
        },
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
})


const useStyles = makeStyles({
    appMain: {
        paddingLeft: '240px',
        width: '100%'
    }
})

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <SideMenu />
            <div className={classes.appMain}>
                <Header />

                <Articles />
            </div>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;