import React from 'react';

import {AppBar, Box, Container, IconButton, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";
import TopMenu from "./TopMenu/TopMenu";

const Top = ()=>{
    const classes = useStyles();
    return(
        <AppBar color='white' position='fixed'>
            <Container fixed>
                <div className={classes.overlay}/>
                <Toolbar>
                    <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                        <TopMenu/>
                    </IconButton>
                    <img className={classes.logo} src="https://i.ibb.co/PMySjcG/dvssp-Logo.png"/>
                    <Typography className={classes.title} variant='h6'>Дальневосточная ассоциация
                        системных семейных психологов</Typography>
                    <Box mr={3}>
                        <Button variant='outlined' color='inherit'>
                            Log in
                        </Button>
                    </Box>
                    <Button mr={3} variant='contained' color='secondary'>
                        Sign up
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Top
