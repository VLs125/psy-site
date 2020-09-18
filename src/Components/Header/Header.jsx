import React from 'react';
import {AppBar, Box, Container, IconButton, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";
import HeaderMenu from "./TopMenu/HeaderMenu";
import {NavLink} from "react-router-dom";


const Header = () => {







    const classes = useStyles();
    return (
        <AppBar color='white' position='fixed'>
            <Container fixed>
                <div className={classes.overlay}/>
                <Toolbar>
                    <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                        <HeaderMenu/>
                    </IconButton>
                    <NavLink to ='/'  className={classes.topMenuLink}>
                    <img className={classes.logo} src="https://i.ibb.co/PMySjcG/dvssp-Logo.png" alt='logo'/>
                    </NavLink>
                    <Typography className={classes.title} variant='h6'>Дальневосточная ассоциация
                        системных семейных психологов</Typography>
                    <Box mr={3}>
                        <NavLink to ='/login'  className={classes.topMenuLink}>
                        <Button  variant='outlined' color='inherit'>
                            Log in
                        </Button>
                        </NavLink>

                    </Box>
                    <NavLink to ='/registration'  className={classes.topMenuLink}>
                        <Button mr={3} variant='contained'
                                className={classes.topMenuButtonContained}>
                            Sign up


                        </Button>
                    </NavLink>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
