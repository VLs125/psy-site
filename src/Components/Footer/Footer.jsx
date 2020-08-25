import React from 'react';

import {BottomNavigation} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../../styles";

const FooterContent = () =>{
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const classes = useStyles();
    return(<footer>

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
        <Typography variant = 'subtitle1' component='p' className={classes.footerTitle} color='textSecondary'  align='center' gutterBottom>
            website building for Vladivostok Psy Association
        </Typography>
    </footer>
    )}
    export default FooterContent
