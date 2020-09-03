import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {useStyles} from "../../../styles";
import IconButton from "@material-ui/core/IconButton";

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Typography
                    align='center'
                    className={classes.topMenuTitle}
                    variant="h6">
                    Клиентам
                </Typography>

                <ListItem  button key='Индивидуальная и семейная консультация'>
                    <NavLink to='/consultation' className={classes.topMenuLink}>
                    <ListItemText  className={classes.topMenuText} primary='Индивидуальная и семейная консультация'/>
                   </NavLink>
                </ListItem>

                <ListItem button key='Бизнес-консультация'>
                    <NavLink to='/buisness' className={classes.topMenuLink}>
                    <ListItemText primary='	Бизнес-консультация'/>
                    </NavLink>
                </ListItem>

                <ListItem button key='Системные расстановки по методу Берта Хелленгера'>
                    <NavLink to='/hellinger' className={classes.topMenuLink}>
                    <ListItemText primary='Системные расстановки по методу Берта Хелленгера'/>
                    </NavLink>
                </ListItem>

                <ListItem button key='Терапевтическая группа "Ключ"'>
                    <NavLink to='/keys' className={classes.topMenuLink}>
                    <ListItemText primary='Терапевтическая группа "Ключ"'/>
                    </NavLink>
                </ListItem>


            </List>
            <Divider/>
            <List>
                <Typography align='center' className={classes.topMenuTitle} variant="h6"> Специалистам</Typography>

                <ListItem button key='Базовый курс по системной семейной терапии'>
                     <ListItemText primary='Базовый курс по системной семейной терапии'/>
                </ListItem>
                <ListItem button key='Второй курс по системной семейной терапии'>
                    <ListItemText primary='Второй курс по системной семейной терапии'/>
                </ListItem>
                <ListItem button key='Системная сексуальная терапия'>
                    <ListItemText primary='Системная сексуальная терапия'/>
                </ListItem>
                <ListItem button key='Обучающая программа "Системные семейные и структурные расстановки"'>
                    <ListItemText primary='Обучающая программа "Системные семейные и структурные расстановки"'/>
                </ListItem>
                <ListItem button key='Обучающая программа "Психодрама на столе"'>
                    <ListItemText primary='Обучающая программа "Психодрама на столе"'/>
                </ListItem>
                <ListItem button key='Обучающая программа "Плейбек-театр"'>
                    <ListItemText primary='Обучающая программа "Плейбек-театр"'/>
                </ListItem>
                <ListItem button key='Программа по телесно-ориентированной психотерапии'>
                    <ListItemText primary='Программа по телесно-ориентированной психотерапии'/>
                </ListItem>
                <ListItem button key='Программа "Архетипы Таро: Путь Героя по старшим арканам"'>
                    <ListItemText primary='Программа "Архетипы Таро: Путь Героя по старшим арканам"'/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>

                <React.Fragment key={'left'}>
                    <IconButton onClick={toggleDrawer('left', true)}>
                    <MenuIcon/>
                    </IconButton>
                    <SwipeableDrawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {list('left')}
                    </SwipeableDrawer>
                </React.Fragment>
        </div>
    );
}
