import './App.css';
import SideMenu from "../components/SideMenu";
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Header from "../components/Header";
import Articles from "../pages/Articles/Articles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126"
        },
        secondary: {
            main: "#f83245",
            light: "#f8324526"
        },
        background: {
            default: "#f4f5fd"
        },
        shape: {
            borderRadius: '10px'
        }
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple:false
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '240px',
        width: '100%',
    }
})

function App() {
    const classes = useStyles();

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <SideMenu/>
                <div className={classes.appMain}>
                    <Header/>

                    <Articles />
                </div>
                <CssBaseline/>
            </MuiThemeProvider>
        </>
    );
}

export default App;
