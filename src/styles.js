import {makeStyles} from "@material-ui/core/styles";



export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    list: {
        width: 250,
    },
    topMenuListItem:{
        boxShadow: "9px 7px 17px 23px rgba(79,158,227,1)",
    },
    topMenuText:{

    },



    topMenuLink:{
        textDecoration:'none',
        '&:active': {
            textDecoration:'none'
        },
        '&:visited': {
            textDecoration:'none'
        },
        '&:link': {
            textDecoration:'none'
        },
    },
    topMenuButtonContained:{
        background:"#4F9EE3",
        '&:hover': {
            backgroundColor: "#5F9FD3",
        },
    },
    fullList: {
        width: 'auto',
    },
    topMenuTitle:{
        marginLeft:10
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    mainContentTitle:{
      color:'black'
    },
    title: {
        flexGrow: 1,
        marginLeft:theme.spacing(2)
    },
    logo:{
      width:80,
      height:80,
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.black,
        marginBottom: theme.spacing(4),
        height:'300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

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
        objectFit:'cover',
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    footerTitle:{
        marginTop:theme.spacing(1)
    },
    footerContent:{
        position:'fixed',
        width:'100%',
        bottom:0,
        marginTop:theme.spacing(12)
    }
}))
