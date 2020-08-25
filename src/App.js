import React from 'react';
import './App.css';
import {
    Container,
    Toolbar,
    AppBar,
    IconButton,
    Box,
    Paper,
    CardMedia,
    CardContent,
    BottomNavigation
} from "@material-ui/core";
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'

    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)'
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)


    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    footerTitle:{
        marginTop:theme.spacing(4)
    }
}))
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <AppBar color='primary' position='fixed'>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Toolbar>
                        <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant='h6'>Ассоциация психологов</Typography>
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
            <footer>
                <Typography className={classes.footerTitle} color='textSecondary'  align='center' gutterBottom>
                    website building for Vladivostok Psy Association
                </Typography>
                <BottomNavigation value={value}
                                  onChange={handleChange}
                                  className={classes.root}>
                    <BottomNavigationAction
                        label='Recents'
                        value='recents'
                        icon={<RestoreIcon/>}/>

                    <BottomNavigationAction
                        label='Favorites'
                        value='favorites'
                        icon={<FavoriteIcon/>}/>


                    <BottomNavigationAction
                        label='Nearby'
                        value='nearby'
                        icon={<LocationOnIcon/>}/>

                </BottomNavigation>
            </footer>
        </>

    );
}

export default App;
