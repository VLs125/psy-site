import React from 'react';
import Axios from "axios";
import {useState} from "react";
import {AppBar, Box, Container, DialogContentText, IconButton, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";
import HeaderMenu from "./TopMenu/HeaderMenu";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {NavLink} from "react-router-dom";


const Header = () => {


    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:8080/login",
        }).then((res) => console.log(res));
        setOpen(false)
    };


    const [open, setOpen] = React.useState(false);
    const handleClickOpenLogin = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };


    const classes = useStyles();
    return (
        <AppBar color='white' position='fixed'>
            <Container fixed>
                <div className={classes.overlay}/>
                <Toolbar>
                    <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                        <HeaderMenu/>
                    </IconButton>

                    <img className={classes.logo} src="https://i.ibb.co/PMySjcG/dvssp-Logo.png" alt='logo'/>
                    <Typography className={classes.title} variant='h6'>Дальневосточная ассоциация
                        системных семейных психологов</Typography>
                    <Box mr={3}>
                        <NavLink to ='/login'  className={classes.topMenuLink}>
                        <Button onClick={handleClickOpenLogin} variant='outlined' color='inherit'>
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
