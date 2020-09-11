import React from 'react';

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


const Header = ()=>{

    const [open,setOpen] = React.useState(false);
    const handleClickOpen = ()=>{
        setOpen(true)
    };

    const handleClose = ()=>{
        setOpen(false)
    };

    const classes = useStyles();
    return(
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
                        <Button onClick={handleClickOpen} variant='outlined' color='inherit'>
                            Log in
                        </Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title"> Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Log in to see specialist
                                    </DialogContentText>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Adress"
                                    type="email"
                                    fullWidth/>

                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="Password"
                                        label="password"
                                        type="email"
                                        fullWidth/>


                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary" >Cancel</Button>
                                    <Button onClick={handleClose} color="primary" >Log in</Button>

                                </DialogActions>
                            </Dialog>


                    </Box>
                    <Button mr={3}  variant='contained' className={classes.topMenuButtonContained}>
                        Sign up
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
