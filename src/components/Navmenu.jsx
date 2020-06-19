import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(() => ({
    title : {
        flexGrow : 1
    }
}));

function Navmenu({path}) {
    
    const isHome = () => {
        if(path === "/") {
            return true;
        }
        return false;
    }

    const Home = () => {
        return (
            <IconButton color="inherit" aria-label="Home">
                <HomeIcon/>
            </IconButton>
        );
    }

    const Back = () => {
        return (
            <IconButton component={Link} to="/" color="inherit" aria-label="Back">
                <ArrowBackIcon/>
            </IconButton>
        );
    }

    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>

                { isHome() ? <Home/> : <Back/> }

                <Typography variant="h6" className={classes.title}>Number Converter</Typography>

                <IconButton component={Link} to="developer-info" color="inherit" aria-label="Developer Info">
                    <InfoIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navmenu;