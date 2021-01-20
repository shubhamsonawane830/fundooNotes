import React, { useState }  from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import keep from '../../Assets/keep.png';
import './Dashboard.css';
import AddNotes from '../AddNotes/AddNotes.jsx';
import DisplayNote from '../DisplayNotes/DisplayNote.jsx';
import NoteService from '../../Services/noteService';
import Note from '../Notes/Note';
import { valHooks } from 'jquery';

const service = new NoteService();

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: '0',
    // height: '80px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      display: 'flex',
    }),
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'white',
    color: 'black',
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // menuButton: {
  //   marginRight: 36,
  // },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: '-1',
    backgroundColor:'white',
    color: '#5f6368',
    height: '100vh'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    border: 'none',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    border: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // flexGrow:'1',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white,0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      marginLeft: theme.spacing(3),
      width: '52%'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    height: '46px',
    backgroundColor: '#f1f3f4',
    border: '1px solid transparent',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchHide: {
    display: 'none',
    [theme.breakpoints.down('xs')]:{
      marginLeft: theme.spacing(1),
      display:'block'
    },

  },
  searchIcon: {
    padding: theme.spacing(0,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
   inputRoot:{
     color: 'inherit',
     font: 'normal 16px Google Sans,Roboto, RobotoDraft, Helvetica, Arial, sans-serif '
   },
   inputInput:{
     padding: theme.spacing(1,1,1,0),
     paddingLeft: `calc(1em+ ${theme.spacing(4)}px)`,
     transition: theme.transitions.create('width'),
     width:'100%',
     [theme.breakpoints.up('md')]: {
       width: '20ch',
     },
   },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'white',
    minHeight: 'calc(100vh)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    width: '40px',
    height: '40px',
    marginRight: '8px',
  },
  listItems: {
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    fontSize: '.875rem',
    fontWeight:'500',
    lineHeight:'1.25rem',
    paddingleft: '24px',
    color: '#202124',
    borderRadius: '0 25px 25px 0',
  
  '&:focus':{
    backgroundColor: '#feefc3',
    borderRadius: '0 25px 25px 0'
  },
},
}));


export default function Dashboard() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handlerDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [display,setDisplayNote] = useState([]);
  const getAllNotes=()=>{
    service.getNote(localStorage.getItem("userToken"))
    .then((data)=>{
      let arrayData= data.data.data.data;
      console.log(data);
     setDisplayNote(arrayData);      
    })
    .catch((error)=>{
      console.log(error);
    });
    }

  return (

<div className={classes.root}>
       <CssBaseline />
       <AppBar
        position="fixed"
        className={classes.appBar}
        // style={{backgroundColor: "white", color: "black",display: 'flex', flexDirection: 'row'}}
      //     , {
      //     [classes.appBarShift]: open,
      //   })}
      >
        <Toolbar className={classes.toolBar}>
          {/* <div className={classes.toolBar}> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawer}
            edge="start"
            // className={clsx(classes.menuButton, {
            //   [classes.hide]: open,
            // })}
          >
            <MenuIcon />
          </IconButton>
          {/* <div className="logo"> */}
            <img src="/assets/keep_2020q4_48dp.png" alt=" " width="45" height="45" />
          {/* </div> */}
          <Typography className={classes.title} variant="h6" noWrap>
            FundooNotes
          </Typography>
          <IconButton className={classes.searchHide}>
            <SearchIcon />
            </IconButton>
            <div className="searchStyle">
            <SearchIcon />
            <InputBase placeholder="Search..." /></div>
          {/* <div className={classes.Search}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
            placeholder="Search.."
            classes={{
              root: classes.inputRoot,
              input:classes.inputInput,
            }}
            inputProps={{ 'arial-label' : 'search'  }}
            /> */}
          {/* </div>
          </div> */}
          <div>
            <Avatar alt="Shubham Sonawane" src="" />
          </div>
          {/* </div> */}
        </Toolbar>
          </AppBar>
          <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <div className={classes.toolbar}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </div>
        {/* <Divider /> */}
        <List>
          <ListItem className={classes.ListItem} button>
          <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Notes" />
          </ListItem>
          <ListItem className={classes.ListItem} button>
            <ListItemIcon><NotificationsNoneRoundedIcon /></ListItemIcon>
            <ListItemText primary="Reminders" />
          </ListItem>
          <ListItem className={classes.ListItem} button>
            <ListItemIcon><EditOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Edit Labels" />
          </ListItem>
          <ListItem className={classes.ListItem} button>
            <ListItemIcon><ArchiveOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem className={classes.ListItem} button>
            <ListItemIcon><DeleteOutlineOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
          </List>
          </Drawer>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} /> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography> */}
                <AddNotes />
        {/* <AddNotes passNote={addNote} /> */}
        <DisplayNote />
        {/* {addItem.map((val, index) => {
          return (
          <DisplayNote
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            />
           );
        })} */}
      </main>  
           </div>
          
                      );


}









































  
