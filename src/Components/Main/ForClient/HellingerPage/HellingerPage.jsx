import React from 'react';

import { Container, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {useStyles} from "../../../../styles";



const HellingerPage = ()=>{

    const classes = useStyles();
    return(
        <main>
            <Paper
                className={classes.mainFeaturesPost}
                style={{backgroundImage: `url(https://st.depositphotos.com/1385248/4723/i/950/depositphotos_47234695-stock-photo-chinese-painting-of-flowers-plum.jpg)`}}>
                <Container fixed>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant='h3'
                                    color='black'
                                    gutterBottom>
                                    Some text
                                </Typography>

                                <Typography
                                    variant='h5'
                                    color='inherit'
                                    paragraph>

                                    sometext2safaasf
                                    asfasfsafasfasfaf
                                    asfasfasfhafhasf
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth='md'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Some text
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph gutterBottom>
                        Material-UI стремится обеспечить прочную основу для создания динамических интерфейсов. Для
                        простоты, ** мы предоставляем решение для стилизации, используемое в компонентах Material-UI
                        ** в виде пакета @ material-ui /styles. Вы можете пользоваться им, но вы не обязаны
                        задействовать именно его, поскольку Material-UI также совместим со всеми другими основными
                        решениями для стилизации.
                    </Typography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>Start now</Button>

                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>Learn more</Button>
                            </Grid>
                        </Grid>

                    </div>

                </Container>

            </div>

        </main>

    )
}

export default HellingerPage
