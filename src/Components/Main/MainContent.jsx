import React from 'react';

import {CardContent, CardMedia, Container, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {useStyles} from "../../styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const MainPage = ()=>{

    const classes = useStyles();
    return(
        <main>
            <Paper
                className={classes.mainFeaturesPost}
                style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                <Container fixed>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant='h3'
                                    color='inherit'
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
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card classname={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image='https://source.unsplash.com/random'
                                    title='image title'/>
                                <CardContent classname={classes.cardContent}>
                                    <Typography variant='h5' gutterBottom>
                                        Some posts
                                    </Typography>
                                    <Typography>
                                        Some posts Some posts Some posts Some posts
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                    <LayerIcon/>
                                    <PlayCircleFilledIcon/>
                                </CardActions>


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

export default MainPage
